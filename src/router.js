import {createRouter,createWebHistory} from "vue-router";
import Home from './components/Home.vue';
import Country from './components/Country.vue';
const routes = [
    {
        name:'Home',
        path:'/',
        component: Home,
    },
    {
        name:'Country',
        path:'/country/:code',
        component: Country,
    },

]

export const router = createRouter({
    history: createWebHistory(),
    routes
})