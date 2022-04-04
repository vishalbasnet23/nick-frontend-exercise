<template>
  <div class="login">
    <div class="login__inner">
      <div class="login__header">
        <div class="login__title">
          <h1 class="login__heading">SIGN IN TO YOUR ACCOUNT</h1>
        </div>
      </div>
      <div class="login__content">
        <div class="login__form">
          <form action="javascript:;" class="form" @submit="submitUserData">
            <div class="form__group">
              <input
                v-model="email"
                class="form__input"
                type="text"
                name="email"
                required
              />
            </div>
            <div class="form__group">
              <input
                v-model="password"
                class="form__input"
                type="password"
                required
              />
            </div>
            <div class="form__group">
              <button class="form__btn" type="submit">
                <span class="form__btn-text">sign in</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'LoginPage',
  middleware({ store, redirect }) {
    if (store.state.user.userAuth) {
      redirect('/users')
    }
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    ...mapGetters('global', {
      loadingMessage: 'loadingMessage',
      errorMessage: 'errorMessage',
    }),
    ...mapGetters('user', {
      isAuthenticated: 'userAuthenticated',
    }),
  },
  created() {
    this.unwatchLoading = this.$store.watch(
      (state, getters) => getters['global/loadingState'],
      (newValue, oldValue) => {
        if (newValue) {
          this.$toast.success(this.loadingMessage, {
            duration: 1000,
            singleton: true,
          })
        }
      }
    )
    this.unwatchError = this.$store.watch(
      (state, getters) => getters['global/errorState'],
      (newValue, oldValue) => {
        if (newValue) {
          this.$toast.error(this.errorMessage, {
            duration: 2000,
            singleton: true,
          })
        }
      }
    )
  },
  beforeDestroy() {
    this.unwatchLoading()
    this.unwatchError()
  },
  methods: {
    ...mapActions('user', {
      handleLogin: 'handleLogin',
    }),
    submitUserData() {
      this.handleLogin({ email: this.email, password: this.password })
    },
  },
}
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
  & .login__inner {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    align-content: center;
    padding: 0 2rem;
    & .login__header {
      display: flex;
      width: 100%;
      & .login__title {
        display: flex;
        width: 100%;
        & h1 {
          &.login__heading {
            font-size: 1.8rem;
            font-weight: 100;
            color: $heading-color;
            text-align: center;
            margin: 5rem 0 2.5rem 0;
            width: 100%;
          }
        }
      }
    }
    & .login__content {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      & .login__form {
        display: flex;
        width: 100%;
        justify-content: center;
        & .form {
          display: flex;
          width: 100%;
          flex-wrap: wrap;
          & .form__group {
            position: relative;
            display: flex;
            width: 100%;
            margin-bottom: 1rem;
            &:last-of-type {
              margin-bottom: 0;
              flex-direction: column;
              justify-content: center;
            }
            & .form__input {
              display: flex;
              width: 100%;
              padding: $form-group-element-padding;
              border-radius: 0.25rem;
              background: $form-input-background;
              font-size: $input-font-size;
              letter-spacing: 0.125rem;
              color: $text-input-color;
              border-color: transparent;
              &:focus {
                outline: none;
              }
            }
            & .form__btn {
              position: relative;
              display: flex;
              width: 100%;
              justify-content: center;
              padding: $form-group-element-padding;
              cursor: pointer;
              border: 0.1rem solid $text-color;
              border-radius: 0.25rem;
              background: $button-color;
              box-shadow: none;
              outline: none;
              text-transform: uppercase;
              margin-top: 2rem;
              &:hover {
                color: $text-color-inverse;
                &::after {
                  width: 100%;
                }
                & .form__btn-text {
                  color: $text-color-inverse;
                }
              }
              & .form__btn-text {
                position: relative;
                z-index: 99;
                font-size: 1rem;
                letter-spacing: 0.25rem;
                color: $text-color;
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }
}

/* 768px */
@media (min-width: 48rem) {
  .login {
    width: 75%;
  }
}
/* 992px */
@media (min-width: 62rem) {
  .login {
    width: 50%;
  }
}
/* 1200px */
@media (min-width: 75rem) {
  .login {
    width: 33%;
    & .login__inner {
      max-width: 50rem;
      margin: 0 auto;
    }
  }
}
</style>
