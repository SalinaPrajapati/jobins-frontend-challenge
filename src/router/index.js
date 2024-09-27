import { createRouter, createWebHistory } from "vue-router";
import DashboardItem from "@/views/dashboard/DashboardItem.vue";
import ManagementItem from "@/views/management/ManagementItem.vue";
import BrandView from "@/views/brands/BrandView.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: DashboardItem,
  },
  {
    path: "/management",
    name: "management",
    component: ManagementItem,
  },
  {
    path: "/brands",
    name: "brands",
    component: BrandView,
  },
  {
    path: "/add-product",
    name: "products-add-product",
    component: () => import("@/views/products/add-product.vue"),
  },
  {
    path: "/product-list",
    name: "products-product-list",
    component: () => import("@/views/products/product-list.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
