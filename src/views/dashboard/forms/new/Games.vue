<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6"></div>
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
                <h3 class="card-title">بازی ها و نتایج</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">نام تیم</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder=""
                      v-model="newGames.teamOne"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">نام تیم دوم</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder=""
                      v-model="newGames.teamTwo"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">نام لیگ</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                      v-model="newGames.leagueName"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">نام ورزشگاه</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                      v-model="newGames.stadium"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">تاریخ بازی</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                      v-model="newGames.date"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">ساعت بازی</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                      v-model="newGames.time"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">نتیجه</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                      v-model="newGames.result"
                    />
                  </div>

                  <div class="form-group">
                    <label for="exampleInputFile">ارسال لوگو تیم باشگاه</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          id="exampleInputFile"
                          @change="fileSetter($event, 'team')"
                        />
                        <label class="custom-file-label" for="exampleInputFile"
                          >انتخاب فایل</label
                        >
                      </div>
                      <div class="input-group-append">
                        <span class="input-group-text" id="">Upload</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputFile">
                      ارسال لوگو تیم باشگاه حریف
                    </label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          id="exampleInputFile"
                          @change="fileSetter($event, 'harif')"
                        />
                        <label class="custom-file-label" for="exampleInputFile"
                          >انتخاب فایل</label
                        >
                      </div>
                      <div class="input-group-append">
                        <span class="input-group-text" id="">Upload</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-check"></div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button class="btn btn-primary" @click="onSubmit($event)">
                    ارسال
                  </button>
                </div>
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
import { _ImageSetter } from "@/composable/image.js";
export default {
  name: "AddGames",
  data: () => ({
    newGames: {
      teamOne: null,
      teamTwo: null,
      result: null,
      leagueName: null,
      stadium: null,
      date: null,
      time: null,
      avatarTeamOne: null,
      avatarTeamTwo: null,
    },
    imageFileTeam: null,
    imageFileHarif: null,
  }),
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      try {
        if (this.checkObj(this.newGames)) {
          await this.setImage();
          const newGamesObj = Object.assign({}, this.newGames);
          await axios
            .post("game", newGamesObj)
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
    async setImage() {
      const formData = new FormData();
      const formData2 = new FormData();
      formData.append("file", this.imageFileTeam, this.imageFileTeam.name);
      formData2.append("file", this.imageFileHarif, this.imageFileHarif.name);
      await _ImageSetter(formData, this.imageSetter, 1);
      await _ImageSetter(formData2, this.imageSetter, 2);
    },
    imageSetter(params, number = null) {
      // callback for setting image in backend
      if (number == 1) {
        this.newGames.avatarTeamOne = params;
      } else if (number == 2) {
        this.newGames.avatarTeamTwo = params;
      }
    },
    fileSetter(event, type) {
      if (type == "harif") {
        this.imageFileHarif = event.target.files[0];
      } else if (type == "team") {
        this.imageFileTeam = event.target.files[0];
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
