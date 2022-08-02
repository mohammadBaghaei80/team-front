<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="login-box">
    <div class="login-logo">
      <RouterLink to="/dashboard"><b>ورود به سایت</b></RouterLink>
    </div>
    <!-- /.login-logo -->
    <div class="card">
      <div class="card-body login-card-body">
        <p class="login-box-msg">فرم زیر را تکمیل کنید و ورود بزنید</p>

        <form>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="نام کاربری"
              v-model="objLogin.username"
            />
            <div class="input-group-append">
              <span class="fa fa-envelope input-group-text"></span>
            </div>
          </div>
          <div class="input-group mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="رمز عبور"
              v-model="objLogin.password"
            />
            <div class="input-group-append">
              <span class="fa fa-lock input-group-text"></span>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <div class="checkbox icheck">
                <label> <input type="checkbox" /> یاد آوری من </label>
              </div>
            </div>
            <!-- /.col -->
            <div class="col-4">
              <button
                class="btn btn-primary btn-block btn-flat"
                @click="onSubmit($event)"
              >
                ورود
              </button>
            </div>
            <!-- /.col -->
          </div>
        </form>
        <p class="mb-1">
          <a href="#">رمز عبورم را فراموش کرده ام.</a>
        </p>
        <p class="mb-0">
          <RouterLink to="/register" class="text-center">ثبت نام</RouterLink>
        </p>
      </div>
      <!-- /.login-card-body -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data: () => ({
    objLogin: {
      username: null,
      password: null,
    },
  }),
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (this.objLogin.username != null && this.objLogin.password != null) {
        this.login();
      } else {
        alert("لطفا فیلد ها زیر را پر کنید");
      }
    },
    async login() {
      try {
        const obj = Object.assign({}, this.objLogin);
        axios
          .post("http://192.168.88.110:5000/auth/login", obj) // IPv4
          .then((response) => {
            console.log(response);
            this.tokenSetter(response.data.result);
            this.$router.push("/dashboard");
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (e) {
        console.error(e);
        return false;
      }
    },
    tokenSetter(token) {
      localStorage.setItem("token", token);
    },
  },
};
</script>

<style lang="scss" scoped></style>
