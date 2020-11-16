<template>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <b-overlay
        :show="show"
        no-wrap
      >
      </b-overlay>
      <div class="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
        <div class="row w-100">
          <div class="col-lg-4 mx-auto">
            <div class="auto-form-wrapper">
              <form action="#">
                <div class="form-group">
                  <label class="label">Username</label>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      v-model="username"
                    >
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="mdi mdi-check-circle-outline"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="label">Password</label>
                  <div class="input-group">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="*********"
                      v-model="password"
                    >
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="mdi mdi-check-circle-outline"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="button"
                    class="btn btn-primary submit-btn btn-block"
                    @click="checkLogin"
                    value="Login"
                  />
                </div>

                <div class="form-group">

                </div>
                <div class="text-block text-center my-3">
                  <span class="text-small font-weight-semibold">Not a member ?</span>
                  <a
                    href="register.html"
                    class="text-black text-small"
                  >Create new account</a>
                </div>
              </form>
            </div>
            <ul class="auth-footer">
              <li>
                <a href="#">Conditions</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
            </ul>
            <p class="footer-text text-center">copyright © 2020 Bootstrapdash. All rights reserved.</p>
            <p class="footer-text text-center text-center"><a
                href="https://www.bootstrapdash.com/bootstrap-admin-template/"
                target="_blank"
              > Free Bootstrap template </a> from BootstrapDash templates</p>
          </div>
        </div>
      </div>
      <!-- content-wrapper ends -->
    </div>
    <!-- page-body-wrapper ends -->

  </div>
</template>

<script>
import cookies from 'cookies'

export default {
  layout: 'login',
  data () {
    return {
      username: '',
      password: '',
      show: false
    }
  },


  created () {
    if (this.$cookies.get('login') && this.$route.fullPath == "/login/") {
      this.$router.push('/')
    }
  },
  methods: {

    async checkLogin () {
      this.show = true;
      if (this.username.length == 0 || this.username.length == 0) {
        this.$bvToast.toast(`Vui lòng không để trống tên đăng nhập và tài khoản`, {
          title: `Có Lỗi Xảy Ra`,
          toaster: 'b-toaster-top-center',
          solid: true,
          variant: 'danger',
          autoHideDelay: 1000,
        })
        this.show = false;
        return;
      }
      let a = await this.$strapi.$accounts.count({
        username: this.username,
        password: this.password
      })

      if (a > 0) {
        //login true

        let info = await this.$strapi.$accounts.find({
          username: this.username
        })

        //set cookies here
        this.$cookies.set('login', true)
        this.$cookies.set('info', info[0])
        //save info to store
        this.$store.commit('authStore/setInfo', info[0])
        this.$router.push('/')
      } else {
        //login false
        this.show = false;
        this.username = '';
        this.$bvToast.toast(`Vui lòng kiểm tra tên đăng nhập và tài khoản`, {
          title: `Có Lỗi Xảy Ra`,
          toaster: 'b-toaster-top-center',
          solid: true,
          variant: 'danger',
          autoHideDelay: 1000,
        })
      }
    }
  }
}
</script>

<style>
</style>