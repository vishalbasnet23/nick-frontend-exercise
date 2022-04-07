<template>
  <div class="users__grid_user" @click="openModal(userData)">
    <figure class="user__image">
      <img :src="userData.image" sizes="sm:100px md:100px lg:100px" />
      <div class="user__overlay">
        <a
          class="user__overlay_icon"
          :href="`mailto:${userData.email}`"
          target="__blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>email-outline</title>
            <g fill="#fff">
              <g data-name="Layer 2">
                <path
                  d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z"
                  data-name="email"
                ></path>
              </g>
            </g>
          </svg>
        </a>
        <div class="user_overlay_desc">
          <h2 class="user__overlay_descname">{{ userData.name }}</h2>
          <h3 class="user__overlay_desccity">{{ userData.address.city }}</h3>
        </div>
      </div>
    </figure>
  </div>
</template>
<script>
export default {
  name: 'UserBox',
  props: ['userData'],
  methods: {
    openModal(userData) {
      this.$emit('populateModal', userData)
    },
  },
}
</script>
<style lang="scss" scoped>
.users__grid_user {
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  .user__image {
    max-width: 150px;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    img {
      width: 150px;
      height: 200px;
      object-fit: cover;
    }
    .user__overlay {
      opacity: 0;
      transition: all 0.3s ease-in;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba($color: #000000, $alpha: 0.5);
      border-radius: 4px;
      overflow: hidden;
      color: var(--ini-white-color);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.4rem;
      a {
        width: 24px;
        height: 24px;
        position: absolute;
        top: 0.6rem;
        right: 0.6rem;
      }
      .user__overlay_descname {
        font-weight: 600;
        font-size: calc(0.5rem + 0.9vw);
      }
      .user__overlay_desccity {
        margin-bottom: 0;
        font-size: calc(0.5rem + 0.9vw);
      }
    }
    &:hover {
      .user__overlay {
        opacity: 1;
      }
    }
  }
}
</style>
