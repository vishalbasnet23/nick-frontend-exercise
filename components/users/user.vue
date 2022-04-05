<template>
  <div class="users__grid_user">
    <figure class="user__image">
      <img src="https://picsum.photos/150/200" alt="" />
      <div class="user__overlay">
        <a
          class="user__overlay_icon"
          href="mailto:me@me.com?subject=We are hiring!&body=. We'd like to propose you an offer."
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
          <h2 class="user__overlay_descname">Leanne Graham</h2>
          <h3 class="user__overlay_desccity">Gwenborough</h3>
        </div>
      </div>
    </figure>
  </div>
</template>
<script>
export default {
  name: 'userBox',
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
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        width: 24px;
        height: 24px;
        position: absolute;
        top: 0.6rem;
        right: 0.6rem;
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
