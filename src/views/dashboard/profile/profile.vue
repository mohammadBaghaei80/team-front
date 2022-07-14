<template>
  <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
      <div class="col-md-3 border-right">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
          <img
            class="rounded-circle mt-5"
            width="150px"
            src="photo/149071.png"
          /><span class="font-weight-bold">حسین رضایی</span
          ><span class="text-black-50">hosseinrezaei@gmail.com</span
          ><span> </span>
        </div>
      </div>
      <div class="col-md-5 border-right">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="text-right">پروفایل</h4>
          </div>
          <div class="row mt-2">
            <div class="col-md-6">
              <label class="labels">نام</label
              ><input
                type="text"
                class="form-control input-field"
                placeholder="نام"
                v-model="Profile.firstName"
              />
            </div>
            <div class="col-md-6">
              <label class="labels">نام خانوادگی</label
              ><input
                type="text"
                class="form-control input-field"
                placeholder="نام خانوادگی"
                v-model="Profile.lastName"
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <label class="labels">شماره موبایل</label
              ><input
                type="text"
                class="form-control input-field"
                placeholder="شماره موبایل"
                v-model="Profile.mobile"
              />
            </div>

            <div class="col-md-12">
              <label class="labels">شهر</label
              ><input
                type="text"
                class="form-control input-field"
                placeholder="شهر"
                v-model="Profile.city"
              />
            </div>
            <div class="col-md-12">
              <label class="labels">ایمیل</label
              ><input
                type="text"
                class="form-control input-field"
                placeholder="ایمیل"
                v-model="Profile.email"
              />
            </div>
          </div>
          <div class="row mt-3"></div>
          <div class="mt-5 text-center">
            <button
              class="btn btn-primary profile-button"
              type="button"
              @click="onSubmit($event)"
            >
              ذخیره پروفایل
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Profile",

  data: () => ({
    isCompleted: false,
    Profile: {
      firstName: null,
      lastName: null,
      mobile: null,
      city: null,
      email: null,
      gender: "Man",
    },
  }),
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (this.isCompleted) {
        this.putProfile();
      } else {
        this.postProfile();
      }
    },
    async postProfile() {
      try {
        if (this.checkObj(this.Profile)) {
          const ProfileObj = Object.assign({}, this.Profile);
          await axios
            .post("auth/profile", ProfileObj)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          alert("فیلد های زیر را تکمیل کنید");
        }
      } catch (e) {
        console.error("Error: " + e.message);
      }
    },
    async putProfile() {
      try {
        if (this.checkObj(this.Profile)) {
          const ProfileObj = Object.assign({}, this.Profile);
          await axios
            .put("auth/profile", ProfileObj)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          alert("فیلد های زیر را تکمیل کنید");
        }
      } catch (e) {
        console.error("Error: " + e.message);
      }
    },
    checkObj(object) {
      const values = Object.values(object);
      for (let i = 0; i < values.length; i++) {
        if (values[i] == null || values[i] == "" || values[i] == undefined) {
          return false;
        } else {
          return true;
        }
      }
    },
  },
  async created() {
    await axios
      .get("auth/user")
      .then((res) => {
        this.isCompleted = true;
        this.Profile = {
          firstName: res.data.result.obj_userInfo.firstName,
          lastName: res.data.result.obj_userInfo.lastName,
          mobile: res.data.result.obj_userInfo.mobile,
          city: res.data.result.obj_userInfo.city,
          email: res.data.result.obj_userInfo.email,
          gender: "Man",
        };
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped></style>
