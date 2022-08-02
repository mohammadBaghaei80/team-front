<script setup>
import axios from "axios";
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="register-box">
    <div class="register-logo">
      <b>ثبت نام در سایت</b>
    </div>

    <div class="card">
      <div class="card-body register-card-body">
        <p class="login-box-msg">ثبت نام کاربر جدید</p>
        <form>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="نام کاربری"
              v-model="objRegister.username"
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
              v-model="objRegister.password"
            />
            <div class="input-group-append">
              <span class="fa fa-lock input-group-text"></span>
            </div>
          </div>
          <div class="row">
            <div class="col-8"></div>
            <!-- /.col -->
            <div class="col-4">
              <button
                class="btn btn-primary btn-block btn-flat"
                @click="onsubmit($event)"
              >
                ثبت نام
              </button>
            </div>
            <!-- /.col -->
          </div>
        </form>
        <RouterLink to="/login" class="text-center"
          >من قبلا ثبت نام کرده ام</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data: () => ({
    objRegister: {
      username: null,
      password: null,
    },
  }),
  methods: {
    onsubmit(e) {
      e.preventDefault();
      if (
        this.objRegister.username != null &&
        this.objRegister.password != null
      ) {
        this.login();
      } else {
        alert("لطفا فیلد ها زیر را پر کنید");
      }
    },
    async login() {
      try {
        const obj = Object.assign({}, this.objRegister);
        axios
          .post("http://192.168.88.110:5000/auth/register", obj) // IPv4
          .then((response) => {
            console.log(response);
            this.$router.push("/login");
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (e) {
        console.error(e);
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
