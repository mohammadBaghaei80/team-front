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
    <!-- Header section -->
    <section class="content">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">جدول رده بندی</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <RouterLink to="/dashboard/standing/new">
                <button class="btn-primary">اضافه کردن نتایج</button>
              </RouterLink>
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>رتبه</th>
                    <th>نام تیم</th>
                    <th>برد</th>
                    <th>باخت</th>
                    <th>گل زده</th>
                    <th class="text-center">حذف</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="cells in tableBody">
                    <td>{{ cells.rank }}</td>
                    <td>{{ cells.teamName }}</td>
                    <td>{{ cells.win }}</td>
                    <td>{{ cells.lost }}</td>
                    <td>{{ cells.goal }}</td>
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
  name: "players",
  data: () => ({
    tableBody: [],
  }),
  methods: {
    async deleteSection(id) {
      try {
        await axios
          .delete("standing/" + id)
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
          .get("standing/all")
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
        .get("standing/all")
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
