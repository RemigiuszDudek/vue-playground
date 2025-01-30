import { createRouter, createWebHistory } from "vue-router";
import CoachesList from "@/pages/coatches/list/CoachesList.vue";
import CoachDetails from "@/pages/coatches/details/CoachDetails.vue";
import RequestsList from "@/pages/requests/RequestsList.vue";
import ContactForm from "@/pages/requests/ContactForm.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        { path: '/coaches/:id', component: CoachDetails, props: true, name: 'coach-details' },
        { path: '/coaches/:id/contact', component: ContactForm, props: true, name: 'coach-contact-form' },
        { path: '/requests', component: RequestsList }
    ]
})

export default router;
