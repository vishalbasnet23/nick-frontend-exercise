<template>
  <aside class="sidebar sidebar__right">
    <div class="sidebar__brand">
      <a class="" href="https://nuxtjs.org">
        <svg
          width="60"
          height="40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.7203 29.704H41.1008C41.6211 29.7041 42.1322 29.5669 42.5828 29.3061C43.0334 29.0454 43.4075 28.6704 43.6675 28.2188C43.9275 27.7672 44.0643 27.2549 44.0641 26.7335C44.0639 26.2121 43.9266 25.6999 43.6662 25.2485L32.6655 6.15312C32.4055 5.70162 32.0315 5.32667 31.581 5.06598C31.1305 4.8053 30.6195 4.66805 30.0994 4.66805C29.5792 4.66805 29.0682 4.8053 28.6177 5.06598C28.1672 5.32667 27.7932 5.70162 27.5332 6.15312L24.7203 11.039L19.2208 1.48485C18.9606 1.03338 18.5864 0.658493 18.1358 0.397853C17.6852 0.137213 17.1741 0 16.6538 0C16.1336 0 15.6225 0.137213 15.1719 0.397853C14.7213 0.658493 14.3471 1.03338 14.0868 1.48485L0.397874 25.2485C0.137452 25.6999 0.000226653 26.2121 2.8053e-07 26.7335C-0.000226092 27.2549 0.136554 27.7672 0.396584 28.2188C0.656614 28.6704 1.03072 29.0454 1.48129 29.3061C1.93185 29.5669 2.44298 29.7041 2.96326 29.704H13.2456C17.3195 29.704 20.3239 27.9106 22.3912 24.4118L27.4102 15.7008L30.0986 11.039L38.1667 25.0422H27.4102L24.7203 29.704ZM13.0779 25.0374L5.9022 25.0358L16.6586 6.36589L22.0257 15.7008L18.4322 21.9401C17.0593 24.2103 15.4996 25.0374 13.0779 25.0374Z"
            fill="#00DC82"
          />
        </svg>
      </a>
    </div>
    <nav class="sidebar__nav">
      <a href="">Home</a>
      <a href="">Users</a>
      <a href="">Settings</a>
    </nav>
    <div class="sidebar__actions">
      <nav>
        <a class="" @click.prevent="handleLogOut">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>logout</title>
            <g fill="none">
              <path
                d="M15.24 22.27h-.13c-4.44 0-6.58-1.75-6.95-5.67-.04-.41.26-.78.68-.82.4-.04.78.27.82.68.29 3.14 1.77 4.31 5.46 4.31h.13c4.07 0 5.51-1.44 5.51-5.51V8.74c0-4.07-1.44-5.51-5.51-5.51h-.13c-3.71 0-5.19 1.19-5.46 4.39-.05.41-.4.72-.82.68a.751.751 0 0 1-.69-.81c.34-3.98 2.49-5.76 6.96-5.76h.13c4.91 0 7.01 2.1 7.01 7.01v6.52c0 4.91-2.1 7.01-7.01 7.01z"
                fill="#292D32"
              ></path>
              <path
                d="M15 12.75H3.62c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H15c.41 0 .75.34.75.75s-.34.75-.75.75z"
                fill="#292D32"
              ></path>
              <path
                d="M5.85 16.1c-.19 0-.38-.07-.53-.22l-3.35-3.35a.754.754 0 0 1 0-1.06l3.35-3.35c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L3.56 12l2.82 2.82c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22z"
                fill="#292D32"
              ></path>
            </g>
          </svg>
          Logout
        </a>
      </nav>
    </div>
  </aside>
  <!-- .sidebar -->
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'MenuAside',
  methods: {
    ...mapActions('user', {
      handleLogOut: 'handleLogOut',
    }),
  },
}
</script>
<style lang="scss" scoped>
// Aside
.sidebar {
  background: var(--ini-bg-gray);
  gap: 1rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .sidebar__nav {
    display: flex;
    text-transform: uppercase;
    gap: 1rem;
    text-align: center;
  }
  .sidebar__actions {
    nav a {
      display: flex;
      gap: 0.4rem;
      align-items: center;
    }
  }
  a {
    color: var(--ini-heading-color);
    text-decoration: none;
  }
}
/* 768px */
@media (min-width: 48rem) {
  .sidebar {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
    position: sticky;
    top: 0;
    gap: 1rem;
    justify-content: stretch;
    align-items: flex-start;
    .sidebar__nav {
      display: flex;
      flex-direction: column;
      text-transform: uppercase;
      gap: 1rem;
      text-align: center;
      a {
        padding: 0.7rem 0.4rem;
        border: 1px solid var(--ini-bor-gray);
        border-left: 0;
        border-right: 0;
      }
    }
    .sidebar__actions {
      nav a {
        display: flex;
        gap: 0.4rem;
        align-items: center;
      }
    }
  }
}
</style>
