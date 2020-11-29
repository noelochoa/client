const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "products", component: () => import("pages/gallery/Index.vue") },
      {
        path: "products/:category",
        component: () => import("pages/gallery/Index.vue")
      },
      {
        path: "buy/:seoname",
        component: () => import("pages/product/Index.vue")
      }
    ]
  },

  // PROFILE ROUTE
  {
    path: "/profile",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/profile/Index.vue") },
      { path: "verify", component: () => import("pages/profile/Verify.vue") },
      {
        path: "verifySMS",
        component: () => import("pages/profile/VerifySMS.vue")
      },
      { path: "edit", component: () => import("pages/profile/Edit.vue") }
    ]
  },

  // LOGIN & REGISTER ROUTE
  {
    path: "/account",
    component: () => import("layouts/AccountLayout.vue"),
    children: [
      { path: "", component: () => import("pages/account/Index.vue") },
      { path: "reset", component: () => import("pages/account/ResetPW.vue") },
      {
        path: "resetpw",
        component: () => import("pages/account/ChangePW.vue")
      }
    ]
  },

  // ERROR 500
  {
    path: "/error500",
    component: () => import("pages/Error500.vue")
  },

  // ERROR 404
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
