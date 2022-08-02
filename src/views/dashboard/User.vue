<template>
  <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
      <div class="flex-row" v-for="(item, index) in usersInfo" :key="index">
        <div class="flex-item">
          <p class="text-title">نام کاربری :</p>
          <p class="text-normal">
            {{ item.username }}
          </p>
        </div>
        <div class="flex-item">
          <p class="text-title">نقش کاربر :</p>
          <p class="text-normal">
            {{ item.role }}
          </p>
        </div>
        <div class="flex-item">
          <p class="text-title">تاریخ ساخت :</p>
          <p class="text-normal">
            {{ item.createdAt }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.flex-row {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: linear-gradient(48deg, #f6f6f6, #ffffff, #ffffff, #f6f6f6);
  box-shadow: 0 0 10px #00000033;
  border-radius: 10px;
  margin: 0.75rem;
  flex-direction: column !important;
  border: 1px solid #0000001f;
}

.flex-item {
  flex: 1 1 0;
  width: 100%;
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
}
.text-title {
  font-size: 18px;
  font-weight: bold;
  color: #000;
}
.text-normal {
  color: rgb(37, 37, 37);
  font-size: 16px;
  font-weight: normal;
}
</style>

<script>
import axios from "axios";

export default {
  name: "Profile",
  data: () => ({
    usersInfo: [],
  }),
  methods: {},
  async created() {
    await axios
      .get("auth/users")
      .then((res) => {
        this.usersInfo = res.data.result;
        console.log(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
