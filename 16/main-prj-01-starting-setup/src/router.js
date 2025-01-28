import { createRouter, createWebHistory } from "vue-router";
import CoachesList from "@/components/coatches/list/CoachesList.vue";
import CoachDetails from "@/components/coatches/details/CoachDetails.vue";
import RequestsList from "@/components/requests/RequestsList.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        {
            path: '/coaches', component: CoachesList, children: [
                { path: ':id', component: CoachDetails }
            ]
        },
        { path: '/requests', component: RequestsList }
    ]
})

export default router;
