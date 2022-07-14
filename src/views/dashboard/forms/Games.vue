<script setup>
import axios from "axios";
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>جداول داده</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-left">
              <li class="breadcrumb-item"><a href="#">خانه</a></li>
              <li class="breadcrumb-item active">جداول داده</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section class="content">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">بازی ها و نتایج</h3>
            </div>
            <div class="card-body">
              <RouterLink to="/dashboard/games/new">
                <button class="btn-primary">اضافه کردن بازی</button>
              </RouterLink>
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>نام تیم</th>
                    <th>نام تیم دوم</th>
                    <th>نام لیگ</th>
                    <th>تاریخ بازی</th>
                    <th>ساعت بازی</th>
                    <th class="text-center">حذف</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- 
                    date: "a"
                    id: "3aee4989-31d6-40df-9eac-f9a29d83b06d"
                    leagueName: "a"
                    result: "null"
                    stadium: "a"
                    teamOne: "a"
                    teamTwo: "a"
                    time: "a"
                   -->
                  <tr v-for="cells in tableBody">
                    <td>{{ cells.teamOne }}</td>
                    <td>{{ cells.teamTwo }}</td>
                    <td>{{ cells.leagueName }}</td>
                    <td>{{ cells.date }}</td>
                    <td>{{ cells.time }}</td>
                    <td class="text-center">
                      <i
                        class="fa fa-trash red-icon"
                        @click="deleteSection(cells.id)"
                      ></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "games",
  data: () => ({
    tableBody: [],
  }),
  methods: {
    async deleteSection(id) {
      try {
        await axios
          .delete("game/" + id)
          .then((response) => {
            this.tableBody = response.data.result;
            console.log(response);
            this.$forceUpdate();
            this.reloadData();
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {}
    },
    async reloadData() {
      try {
        await axios
          .get("game/all")
          .then((response) => {
            this.tableBody = response.data.result;
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    try {
      await axios
        .get("game/all")
        .then((response) => {
          this.tableBody = response.data.result;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.red-icon {
  color: red;
  cursor: pointer;
}
</style>
