<script setup>
import axios from "axios";
import { RouterLink } from "vue-router";
</script>
<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
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
      <!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">بازیکنان</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <RouterLink to="/dashboard/players/new">
                <button class="btn-primary">اضافه کردن بازیکن</button>
              </RouterLink>
              <table id="example2" class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>نام بازیکن</th>
                    <th>سن</th>
                    <th>پست</th>
                    <th>ملیت</th>
                    <th>گل زده</th>
                    <th class="text-center">حذف</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="cells in tableBody">
                    <td>{{ cells.name }}</td>
                    <td>{{ cells.age }}</td>
                    <td>{{ cells.post }}</td>
                    <td>{{ cells.nationality }}</td>
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
    tableBody: [
    ],
  }),
  methods: {
    async deleteSection(id) {
      try {
        await axios
          .delete("player/" + id)
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
          .get("player/all")
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
        .get("player/all")
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
