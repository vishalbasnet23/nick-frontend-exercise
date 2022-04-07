<template>
  <div v-if="modalData" :class="['modal', modalState]">
    <div class="modal__overlay"></div>
    <div class="modal__content">
      <figure class="modal__image">
        <img :src="modalData.image" alt="" />
      </figure>
      <div class="modal__desc">
        <ul class="modal__desc_list">
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <title>ic_person_24px</title>
                <g fill="#212121">
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  ></path>
                </g>
              </svg>
            </span>
            {{ modalData.name }}
          </li>
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <title>email-outline</title>
                <g fill="#212121">
                  <g data-name="Layer 2">
                    <path
                      d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z"
                      data-name="email"
                    ></path>
                  </g>
                </g>
              </svg>
            </span>
            <a :href="`mailto:${modalData.email}`">sincere@april.biz</a>
          </li>
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <title>phone-2</title>
                <g fill="#212121">
                  <path
                    fill="#212121"
                    d="M15.285,12.305l-2.578-2.594c-0.39-0.393-1.025-0.393-1.416-0.002L9,12L4,7l2.294-2.294 c0.39-0.39,0.391-1.023,0.001-1.414l-2.58-2.584C3.324,0.317,2.691,0.317,2.3,0.708L0.004,3.003L0,3c0,7.18,5.82,13,13,13 l2.283-2.283C15.673,13.327,15.674,12.696,15.285,12.305z"
                  ></path>
                </g>
              </svg>
            </span>
            <a :href="`tel:${modalData.phone}`">{{ modalData.phone }}</a>
          </li>
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <title>bx-home-alt</title>
                <g fill="#212121">
                  <path
                    d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59l7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"
                  ></path>
                </g>
              </svg>
            </span>
            <a href="" target="__blank" v-if="modalData.address"
              >{{ modalData.address.street }} {{ modalData.address.city }}</a
            >
          </li>
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <title>globe</title>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2"
                  fill="none"
                  stroke="#212121"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M2 12h20"></path>
                  <path
                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  ></path>
                </g>
              </svg>
            </span>
            <a href="" target="__blank">{{ modalData.website }}</a>
          </li>
        </ul>
      </div>
      <a href="#!" class="modal__content_close" @click="handleModalClose"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
        >
          <title>close</title>
          <g fill="#212121">
            <g data-name="Layer 2">
              <path
                d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
                data-name="close"
              ></path>
            </g>
          </g></svg
      ></a>
    </div>
  </div>
  <!-- .modal -->
</template>
<script>
export default {
  name: 'UserModal',
  props: ['modalData', 'modalState'],
  methods: {
    handleModalClose() {
      this.$emit('modalClose')
    },
  },
}
</script>
<style lang="scss" scoped>
.modal {
  display: none;
  transition: all 0.3s ease-in;
  .modal__content {
    transform: translateY(-10%);
  }
  a {
    color: var(--ini-heading-color);
    text-decoration: none;
  }
}
.modal.open {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh);
  text-align: left;
  .modal__overlay {
    background: rgba($color: #000000, $alpha: 0.5);
    width: 100%;
    height: calc(100vh);
  }
  .modal__content {
    position: absolute;
    top: 50%;
    left: 50%;
    background: var(--ini-white-color);
    display: flex;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    overflow: hidden;
    flex-direction: column;
    .modal__image {
      margin: 0;
      img {
        width: 100%;
        height: auto;
        max-height: 20vh;
        object-fit: cover;
      }
    }
    .modal__desc {
      padding: 2rem;
      display: flex;
      align-items: center;
      .modal__desc_list {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        li {
          display: flex;
          gap: 0.6rem;
          align-items: center;
          span {
            width: 32px;
            height: 32px;
            padding: 4px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid var(--ini-bor-dark);
          }
        }
      }
    }
    .modal__content_close {
      position: absolute;
      top: 0.6rem;
      right: 0.6rem;
    }
  }
}
/* 768px */
@media (min-width: 48rem) {
  .modal.open {
    width: calc(100vw - 300px);
    height: 100vh;
    .modal__overlay {
      width: calc(100vw - 300px);
      height: 100vh;
    }
    .modal__content {
      flex-direction: row;
      .modal__image {
        margin: 0;
        img {
          width: 200px;
          object-fit: unset;
          max-height: 100%;
        }
      }
    }
  }
}
</style>
