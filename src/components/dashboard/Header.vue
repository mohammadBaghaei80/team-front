<template>
  <nav
    class="main-header navbar navbar-expand bg-white navbar-light border-bottom"
  >
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a
          class="nav-link"
          data-widget="pushmenu"
          href="#"
          @click="collapseSidebar()"
          ><i class="fa fa-bars"></i
        ></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="index3.html" class="nav-link">خانه</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">تماس</a>
      </li>
    </ul>

    <!-- SEARCH FORM -->
    <form class="form-inline ml-3">
      <div class="input-group input-group-sm">
        <input
          class="form-control form-control-navbar"
          type="search"
          placeholder="جستجو"
          aria-label="Search"
        />
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </form>
  </nav>
</template>

<script>
export default {
  name: "HeaderComponent",
  data: () => ({}),
  methods: {
    collapseSidebar: () => {
      if (
        document
          .getElementsByTagName("body")[0]
          .className.includes("sidebar-collapse")
      ) {
        document
          .getElementsByTagName("body")[0]
          .classList.remove("sidebar-collapse");
      } else {
        document
          .getElementsByTagName("body")[0]
          .classList.add("sidebar-collapse");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
