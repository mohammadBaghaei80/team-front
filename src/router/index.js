import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      name: "index",
      components: {
        default: () => import("../views/Index.vue"),
        Header: () => import("../components/dashboard/Header.vue"),
        Sidebar: () => import("../components/dashboard/Sidebar.vue"),
      },
    },
    {
      path: "/dashboard/profile",
      name: "profile",
      components: {
        default: () => import("../views/dashboard/profile/profile.vue"),
        Header: () => import("../components/dashboard/Header.vue"),
        Sidebar: () => import("../components/dashboard/Sidebar.vue"),
      },
    },
    {
      path: "/dashboard/games",
      name: "Games",
      components: {
        default: () => import("../views/dashboard/forms/Games.vue"),
        Header: () => import("../components/dashboard/Header.vue"),
        Sidebar: () => import("../components/dashboard/Sidebar.vue"),
      },
    },
    {
      path: "/dashboard/standing",
      name: "Standing",
      components: {
        default: () => import("../views/dashboard/forms/Standing.vue"),
        Header: () => import("../components/dashboard/Header.vue"),
        Sidebar: () => import("../components/dashboard/Sidebar.vue"),
      },
    },
    {
      path: "/dashboard/players",
      name: "Players",
      components: {
        default: () => import("../views/dashboard/forms/Players.vue"),
        Header: () => import("../components/dashboard/Header.vue"),
        Sidebar: () => import("../components/dashboard/Sidebar.vue"),
      },
    },
    {
      path: "/dashboard/games/new",
      name: "NewGames",
      components: {
        default: () => import("../views/dashboard/forms/new/Games.vue"),
        Header: () => import("../components/dashboard/Header.vue"),
        Sidebar: () => import("../components/dashboard/Sidebar.vue"),
      },
    },
    {
      path: "/dashboard/standing/new",
      name: "NewStanding",
      components: {
        default: () => import("../views/dashboard/forms/new/Standing.vue"),
        Header: () => import("../components/dashboard/Header.vue"),
        Sidebar: () => import("../components/dashboard/Sidebar.vue"),
      },
    },
    {
      path: "/dashboard/players/new",
      name: "NewPlayers",
      components: {
        default: () => import("../views/dashboard/forms/new/Players.vue"),
        Header: () => import("../components/dashboard/Header.vue"),
        Sidebar: () => import("../components/dashboard/Sidebar.vue"),
      },
    },
    {
      path: "/register",
      name: "Register",
      components: {
        default: () => import("../views/auth/Register.vue"),
      },
    },
    {
      path: "/login",
      name: "Login",
      components: {
        default: () => import("../views/auth/Login.vue"),
      },
    },
  ],
});

export default router;
