<template>
  <div :class="['users__page', modalState]">
    <Aside />
    <main :class="['users__main', modalState]">
      <h2 class="users__main_title">Users</h2>
      <div class="users__grid">
        <User
          v-for="user in users"
          :key="user.id"
          :user-data="user"
          @populateModal="handleOpenModal($event)"
        />
      </div>
      <UserModal
        :modal-data="modalData"
        :modal-state="modalState"
        @modalClose="modalState = 'close'"
      />
    </main>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import Aside from '~/components/common/aside'
import User from '~/components/users/user'
import UserModal from '~/components/users/modal'

export default {
  name: 'UserListing',
  components: {
    Aside,
    User,
    UserModal,
  },
  middleware: 'auth-guard',
  data() {
    return {
      modalData: {},
      modalState: 'close',
    }
  },
  computed: {
    ...mapState('users', {
      users: (state) => state.users,
    }),
  },
  beforeMount() {
    this.getUsers()
  },
  methods: {
    ...mapActions('users', {
      getUsers: 'getUsers',
    }),
    handleOpenModal(modalData) {
      this.modalData = modalData
      this.modalState = 'open'
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  color: var(--ini-heading-color);
  text-decoration: none;
}
// Users Main
.users__main {
  padding: 2rem;
  text-align: center;
  position: relative;

  .users__main_title {
    text-transform: uppercase;
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: right;
    font-weight: 600;
    display: inline-flex;
    border-bottom: 4px solid var(--ini-heading-color);
    padding-bottom: 0.4rem;
  }
  .users__grid {
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    gap: 2rem;
  }
  &.open {
    overflow: hidden;
    height: 100vh;
  }
}

/* 768px */
@media (min-width: 48rem) {
  .users__page {
    display: grid;
    height: 100vh;
    grid-template-columns: minmax(180px, 300px) 1fr;
  }
  .users__main {
    padding: 2rem;
    max-height: 100vh;
    overflow-y: auto;
    text-align: right;
    &.open {
      overflow: hidden;
      height: 100%;
    }
  }
}

/* 1200px */
@media (min-width: 75rem) {
  .users__main {
    .users__grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

/* ~ 1456px */
@media (min-width: 91rem) {
  .users__main {
    .users__grid {
      grid-template-columns: repeat(6, 1fr);
    }
  }
}
</style>
