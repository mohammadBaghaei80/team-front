<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1></h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-left">
              <li class="breadcrumb-item"><a href="#"></a></li>
              <li class="breadcrumb-item active"></li>
            </ol>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <!-- left column -->
          <div class="col-md-6">
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">جدول رده بندی</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">رتبه</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder=""
                      v-model="newStanding.rank"
                    />
                  </div>

                  <div class="form-group">
                    <label for="exampleInputPassword1">نام تیم</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                      v-model="newStanding.teamName"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">تفاضل گل</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                      v-model="newStanding.goalDifference"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">برد</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                      v-model="newStanding.win"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">مساوی</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                      v-model="newStanding.equal"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">باخت</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                      v-model="newStanding.lost"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">گل زده</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                      v-model="newStanding.goal"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">امتیاز</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                      v-model="newStanding.score"
                    />
                  </div>

                  <div class="form-check"></div>
                </div>
                <div class="card-footer">
                  <button class="btn btn-primary" @click="onSubmit($event)">
                    ثبت
                  </button>
                </div>
                <!-- /.card-body -->
              </form>
            </div>
            <!-- /.card -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddStanding",
  data: () => ({
    newStanding: {
      rank: null,
      teamName: null,
      goalDifference: null,
      win: null,
      equal: null,
      lost: null,
      goal: null,
      score: null,
    },
  }),
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      try {
        if (this.checkObj(this.newStanding)) {
          const newStandingObj = Object.assign({}, this.newStanding);
          await axios
            .post("standing", newStandingObj)
            .then((res) => {
              console.log(res);
              this.$router.back();
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
};
</script>

<style lang="scss" scoped></style>
