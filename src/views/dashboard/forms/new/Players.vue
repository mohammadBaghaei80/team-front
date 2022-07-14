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
                <h3 class="card-title">بازیکنان</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">نام بازیکن</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder=""
                      v-model="newPlayer.name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">شماره بازیکن</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                      v-model="newPlayer.number"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">سن بازیکن</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                      v-model="newPlayer.age"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">پست بازیکن</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                      v-model="newPlayer.post"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">ملیت</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                      v-model="newPlayer.nationality"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">تعداد بازی</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                      v-model="newPlayer.gameCount"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">گل زده</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                      v-model="newPlayer.goal"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputFile">ارسال عکس بازیکن</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          id="exampleInputFile"
                          @change="fileSetter"
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
  name: "AddPlayer",
  data: () => ({
    newPlayer: {
      name: null,
      number: null,
      age: null,
      post: null,
      nationality: null,
      gameCount: null,
      goal: null,
      imageId: null,
    },
    imageFile: null,
  }),
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      try {
        if (this.checkObj(this.newPlayer)) {
          await this.setImage();
          const newPlayerObj = Object.assign({}, this.newPlayer);
          await axios
            .post("player", newPlayerObj)
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
      formData.append("file", this.imageFile, this.imageFile.name);
      await _ImageSetter(formData, this.imageSetter);
    },
    imageSetter(params) {
      // callback for setting image in backend
      this.newPlayer.imageId = params;
    },
    fileSetter(event) {
      this.imageFile = event.target.files[0];
    },
  },
};
</script>

<style lang="scss" scoped></style>
