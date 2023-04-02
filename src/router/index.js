import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

import Signup from "../views/SignupPage.vue";
import Login from "../views/LoginPage.vue";
import Home from "../views/HomePage.vue";


const routes = [
    {
        path: "/",
        component: Home
    },

    {
        path: "/signup",
        component: Signup,
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/contact",
        name: "contactbook",
        component: ContactBook,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/contacts/add",
        name: "contact.add",
        component: () => import("@/views/ContactForm.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;