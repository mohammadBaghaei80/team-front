<template>
  <div class="wrapper">
    <div class="content-wrapper">
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>پروفایل</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-left">
                <li class="breadcrumb-item"><a href="#">خانه</a></li>
                <li class="breadcrumb-item active">پروفایل کاربری</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <div class="card card-primary card-outline">
                <div class="card-body box-profile">
                  <div class="text-center">
                    <img
                      class="profile-user-img img-fluid img-circle"
                      src="@/assets/img/149071.png"
                      alt="User profile picture"
                    />
                  </div>
                  <h3 class="profile-username text-center">محمدحسین بقائی</h3>
                  <p class="text-muted text-center">برنامه نویس وب</p>
                  <ul class="list-group list-group-unbordered mb-3">
                    <li class="list-group-item">
                      <b>دنبال شونده</b> <a class="float-right">1,322</a>
                    </li>
                    <li class="list-group-item">
                      <b>دنبال کننده</b> <a class="float-right">543</a>
                    </li>
                    <li class="list-group-item">
                      <b>دوستان</b> <a class="float-right">13,287</a>
                    </li>
                  </ul>
                  <a href="#" class="btn btn-primary btn-block">
                    <b>دنبال کردن</b>
                  </a>
                </div>
              </div>
              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">درباره من</h3>
                </div>
                <div class="card-body">
                  <strong><i class="fa fa-book mr-1"></i> تحصیلات</strong>
                  <p class="text-muted">فوق دیپلم نرم افزار کامپیوتر</p>
                  <hr />
                  <strong><i class="fa fa-map-marker mr-1"></i> موقعیت</strong>
                  <p class="text-muted">ایران، مشهد</p>
                  <hr />
                  <strong> <i class="fa fa-pencil mr-1"></i> مهارت‌ها </strong>
                  <p class="text-muted">
                    <span class="badge badge-danger">Front</span>
                    <span class="badge badge-info">Javascript</span>
                    <span class="badge badge-primary">Node.js</span>
                  </p>
                  <hr />
                  <strong>
                    <i class="fa fa-file-text-o mr-1"></i> یادداشت
                  </strong>
                  <p class="text-muted">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-9">
              <div class="card">
                <div class="card-header p-2">
                  <ul class="nav nav-pills">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        href="#activity"
                        data-toggle="tab"
                      >
                        فعالیت‌ها
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#timeline" data-toggle="tab">
                        تایم لاین
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#settings" data-toggle="tab">
                        تنظیمات
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="card-body">
                  <div class="tab-content">
                    <div class="active tab-pane" id="activity">
                      <div class="post">
                        <div class="user-block">
                          <img
                            class="img-circle img-bordered-sm"
                            src="@/assets/img/user1-128x128.jpg"
                            alt="user image"
                          />
                          <span class="username">
                            <a href="#">محمدحسین بقائی</a>
                            <a href="#" class="float-left btn-tool">
                              <i class="fa fa-times"></i>
                            </a>
                          </span>
                          <span class="description"
                            >ارسال شده در 25 آذر 1401</span
                          >
                        </div>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                          برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                          با هدف بهبود ابزارهای کاربردی می باشد.
                        </p>
                        <p>
                          <a href="#" class="link-black text-sm mr-2">
                            <i class="fa fa-share mr-1"></i> اشتراک گذاری
                          </a>
                          <a href="#" class="link-black text-sm">
                            <i class="fa fa-thumbs-o-up mr-1"></i> لایک
                          </a>
                          <span class="float-left">
                            <a href="#" class="link-black text-sm">
                              <i class="fa fa-comments-o mr-1"></i> نظر (5)
                            </a>
                          </span>
                        </p>
                        <input
                          class="form-control form-control-sm"
                          type="text"
                          placeholder="نظر خود را وارد کنید"
                        />
                      </div>
                      <div class="post clearfix">
                        <div class="user-block">
                          <img
                            class="img-circle img-bordered-sm"
                            src="@/assets/img/user7-128x128.jpg"
                            alt="User Image"
                          />
                          <span class="username">
                            <a href="#">نینا الکس</a>
                            <a href="#" class="float-left btn-tool"
                              ><i class="fa fa-times"></i
                            ></a>
                          </span>
                          <span class="description">ارسال شده - 3 روز پیش</span>
                        </div>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                          برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                          با هدف بهبود ابزارهای کاربردی می باشد.
                        </p>

                        <form class="form-horizontal">
                          <div class="input-group input-group-sm mb-0">
                            <input
                              class="form-control form-control-sm"
                              placeholder="نظر خود را تایپ کنید"
                            />
                            <div class="input-group-append">
                              <button type="submit" class="btn btn-danger">
                                ارسال
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="post">
                        <div class="user-block">
                          <img
                            class="img-circle img-bordered-sm"
                            src="@/assets/img/user6-128x128.jpg"
                            alt="User Image"
                          />
                          <span class="username">
                            <a href="#">محمد محمدی</a>
                            <a href="#" class="float-left btn-tool">
                              <i class="fa fa-times"></i>
                            </a>
                          </span>
                          <span class="description">ارسال شده - 5 روز پیش</span>
                        </div>
                        <div class="row mb-3">
                          <div class="col-sm-6">
                            <img
                              class="img-fluid"
                              src="@/assets/img/photo1.png"
                              alt="Photo"
                            />
                          </div>
                          <div class="col-sm-6">
                            <div class="row">
                              <div class="col-sm-6">
                                <img
                                  class="img-fluid mb-3"
                                  src="@/assets/img/photo2.png"
                                  alt="Photo"
                                />
                                <img
                                  class="img-fluid"
                                  src="@/assets/img/photo3.jpg"
                                  alt="Photo"
                                />
                              </div>
                              <div class="col-sm-6">
                                <img
                                  class="img-fluid mb-3"
                                  src="@/assets/img/photo4.jpg"
                                  alt="Photo"
                                />
                                <img
                                  class="img-fluid"
                                  src="@/assets/img/photo1.png"
                                  alt="Photo"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <p>
                          <a href="#" class="link-black text-sm mr-2">
                            <i class="fa fa-share mr-1"></i> اشتراک گذاری
                          </a>
                          <a href="#" class="link-black text-sm">
                            <i class="fa fa-thumbs-o-up mr-1"></i> لایک
                          </a>
                          <span class="float-left">
                            <a href="#" class="link-black text-sm">
                              <i class="fa fa-comments-o mr-1"></i> نظر (5)
                            </a>
                          </span>
                        </p>

                        <input
                          class="form-control form-control-sm"
                          type="text"
                          placeholder="نظر خود را تایپ کنید"
                        />
                      </div>
                    </div>
                    <div class="tab-pane" id="timeline">
                      <ul class="timeline timeline-inverse">
                        <li class="time-label">
                          <span class="bg-danger"> 10 Feb. 2014 </span>
                        </li>
                        <li>
                          <i class="fa fa-envelope bg-primary"></i>

                          <div class="timeline-item">
                            <span class="time">
                              <i class="fa fa-clock-o"></i> 12:05
                            </span>
                            <h3 class="timeline-header">
                              <a href="#">Support Team</a> sent you an email
                            </h3>
                            <div class="timeline-body">
                              Etsy doostang zoodles disqus groupon greplin oooj
                              voxy zoodles, weebly ning heekya handango imeem
                              plugg dopplr jibjab, movity jajah plickers sifteo
                              edmodo ifttt zimbra. Babblely odeo kaboodle quora
                              plaxo ideeli hulu weebly balihoo...
                            </div>
                            <div class="timeline-footer">
                              <a href="#" class="btn btn-primary btn-sm">
                                Read more
                              </a>
                              <a href="#" class="btn btn-danger btn-sm">
                                Delete
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <i class="fa fa-user bg-info"></i>

                          <div class="timeline-item">
                            <span class="time">
                              <i class="fa fa-clock-o"></i> 5 mins ago
                            </span>

                            <h3 class="timeline-header no-border">
                              <a href="#">Sarah Young</a> accepted your friend
                              request
                            </h3>
                          </div>
                        </li>
                        <li>
                          <i class="fa fa-comments bg-warning"></i>

                          <div class="timeline-item">
                            <span class="time">
                              <i class="fa fa-clock-o"></i> 27 mins ago
                            </span>
                            <h3 class="timeline-header">
                              <a href="#">Jay White</a> commented on your post
                            </h3>
                            <div class="timeline-body">
                              Take me to your leader! Switzerland is small and
                              neutral! We are more like Germany, ambitious and
                              misunderstood!
                            </div>
                            <div class="timeline-footer">
                              <a
                                href="#"
                                class="btn btn-warning btn-flat btn-sm"
                              >
                                View comment
                              </a>
                            </div>
                          </div>
                        </li>
                        <li class="time-label">
                          <span class="bg-success"> 3 Jan. 2014 </span>
                        </li>
                        <li>
                          <i class="fa fa-camera bg-purple"></i>
                          <div class="timeline-item">
                            <span class="time">
                              <i class="fa fa-clock-o"></i> 2 days ago
                            </span>
                            <h3 class="timeline-header">
                              <a href="#">Mina Lee</a> uploaded new photos
                            </h3>
                            <div class="timeline-body">
                              <img
                                src="http://placehold.it/150x100"
                                alt="..."
                                class="margin"
                              />
                              <img
                                src="http://placehold.it/150x100"
                                alt="..."
                                class="margin"
                              />
                              <img
                                src="http://placehold.it/150x100"
                                alt="..."
                                class="margin"
                              />
                              <img
                                src="http://placehold.it/150x100"
                                alt="..."
                                class="margin"
                              />
                            </div>
                          </div>
                        </li>
                        <li>
                          <i class="fa fa-clock-o bg-gray"></i>
                        </li>
                      </ul>
                    </div>
                    <div class="tab-pane" id="settings">
                      <form class="form-horizontal">
                        <div class="form-group">
                          <label for="inputName" class="col-sm-2 control-label">
                            نام
                          </label>
                          <div class="col-sm-10">
                            <input
                              type="email"
                              class="form-control"
                              id="inputName"
                              placeholder="نام"
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="inputEmail" class="col-sm-2 control-label"
                            >ایمیل
                          </label>

                          <div class="col-sm-10">
                            <input
                              type="email"
                              class="form-control"
                              id="inputEmail"
                              placeholder="ایمیل"
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <label
                            for="inputName2"
                            class="col-sm-2 control-label"
                          >
                            Name
                          </label>

                          <div class="col-sm-10">
                            <input
                              type="text"
                              class="form-control"
                              id="inputName2"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <label
                            for="inputExperience"
                            class="col-sm-2 control-label"
                          >
                            Experience
                          </label>
                          <div class="col-sm-10">
                            <textarea
                              class="form-control"
                              id="inputExperience"
                              placeholder="Experience"
                            ></textarea>
                          </div>
                        </div>
                        <div class="form-group">
                          <label
                            for="inputSkills"
                            class="col-sm-2 control-label"
                          >
                            Skills
                          </label>

                          <div class="col-sm-10">
                            <input
                              type="text"
                              class="form-control"
                              id="inputSkills"
                              placeholder="Skills"
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="col-sm-offset-2 col-sm-10">
                            <div class="checkbox">
                              <label>
                                <input type="checkbox" /> I agree to the
                                <a href="#">terms and conditions</a>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-danger">
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
