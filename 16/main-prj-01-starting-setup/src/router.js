import { createRouter, createWebHistory } from "vue-router";
import CoachesList from "@/components/coatches/list/CoachesList.vue";
import CoachDetails from "@/components/coatches/details/CoachDetails.vue";
import RequestsList from "@/components/requests/RequestsList.vue";
import ContactForm from "@/components/requests/ContactForm.vue";

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
