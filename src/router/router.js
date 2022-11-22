import LandingPage from "@/pages/LandingPage";
import { createRouter, createWebHistory } from "vue-router";
import AboutUs from "@/pages/AboutUs";
import PostIdPage from "@/pages/PostIdPage";
import PostPageComposition from "@/pages/PostPageComposition";
import ClientPage from "@/pages/ClientPage";


const routes = [
  {
    path: '/',
    component: LandingPage
  },
  {
    path: '/client',
    component: ClientPage
  },
  {
    path: '/about',
    component: AboutUs
  },
  {
    path: '/client/:id',
    component: PostIdPage
  },
  {
    path: '/composition',
    component: PostPageComposition
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router