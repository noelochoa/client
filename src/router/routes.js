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
    children: [{ path: "", component: () => import("pages/profile/Index.vue") }]
  },

  // LOGIN & REGISTER ROUTE
  {
    path: "/account",
    component: () => import("layouts/AccountLayout.vue"),
    children: [{ path: "", component: () => import("pages/account/Index.vue") }]
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
