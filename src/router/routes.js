const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "products", component: () => import("pages/gallery/Index.vue") },
      {
        path: "products/:seoname",
        component: () => import("pages/product/Index.vue")
      }
    ]
  },
  {
    path: "/account",
    component: () => import("layouts/AccountLayout.vue"),
    children: [{ path: "", component: () => import("pages/account/Index.vue") }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
