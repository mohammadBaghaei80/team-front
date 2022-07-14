<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <RouterLink to="/dashboard" class="brand-link">
      <img
        src="@/assets/img/AdminLTELogo.png"
        alt="AdminLTE Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: 0.8"
      />
      <span class="brand-text font-weight-light">پنل مدیریت</span>
    </RouterLink>

    <div class="sidebar" style="direction: ltr">
      <div style="direction: rtl">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img
              src="@/assets/img/149071.png"
              class="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div class="info">
            <a href="#" class="d-block">محمدحسین بقائی</a>
          </div>
        </div>

        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <!-- menu-open -->
            <li
              v-for="(data, index) in sidebarData"
              :key="index"
              :class="[
                data.hasTree ? 'nav-item has-treeview' : 'nav-item',
                data.isTreeOpen ? 'menu-open' : '',
              ]"
            >
              <RouterLink
                v-if="data.route && !data.hasTree"
                :to="data.route"
                class="nav-link"
                :exact-active-class="'active'"
              >
                <i :class="data.iconClass"></i>
                <p>
                  {{ data.name }}
                </p>
              </RouterLink>
              <!-- active -->
              <a v-else class="nav-link" @click="accordionToggle(index)">
                <i :class="data.iconClass"></i>
                <p>
                  {{ data.name }}
                  <i v-if="data.hasTree" class="right fa fa-angle-left"></i>
                </p>
              </a>
              <ul
                class="nav nav-treeview"
                :class="data.isTreeOpen ? 'd-block' : 'd-none'"
              >
                <li class="nav-item" v-for="item in data.treeData">
                  <RouterLink
                    :to="item.route"
                    class="nav-link"
                    :exact-active-class="'active'"
                  >
                    <i :class="item.iconClass"></i>
                    <p>{{ item.name }}</p>
                  </RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "SidebarComponent",
  data: () => ({
    sidebarData: [
      {
        name: "داشبوردها",
        route: "/dashboard",
        iconClass: "nav-icon fa fa-dashboard",
        hasTree: false,
      },
      {
        name: "فرم‌ها",
        route: false,
        iconClass: "nav-icon fa fa-edit",
        hasTree: true,
        isTreeOpen: false,
        treeData: [
          {
            name: "بازیکنان",
            route: "/dashboard/players",
            iconClass: "fa fa-circle-o nav-icon",
          },
          {
            name: "بازی ها و نتایج",
            route: "/dashboard/games",
            iconClass: "fa fa-circle-o nav-icon",
          },
          {
            name: "جدول رده بندی",
            route: "/dashboard/standing",
            iconClass: "fa fa-circle-o nav-icon",
          },
        ],
      },
      {
        name: "پروفایل",
        route: "/dashboard/profile",
        iconClass: "fa fa-circle-o nav-icon",
        hasTree: false,
      },
      {
        name: "صفحه ورود",
        route: "/login",
        iconClass: "fa fa-circle-o nav-icon",
        hasTree: false,
      },
      {
        name: "صفحه عضویت",
        route: "/register",
        iconClass: "fa fa-circle-o nav-icon",
        hasTree: false,
      },
    ],
  }),
  methods: {
    accordionToggle(index) {
      this.sidebarData[index].isTreeOpen = !this.sidebarData[index].isTreeOpen;
    },
  },
};
</script>

<style lang="scss" scoped></style>
