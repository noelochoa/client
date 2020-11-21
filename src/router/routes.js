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
  {
    path: "/account",
    component: () => import("layouts/AccountLayout.vue"),
    children: [{ path: "", component: () => import("pages/account/Index.vue") }]
  },

  {
    path: "/error500",
    component: () => import("pages/Error500.vue")
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
