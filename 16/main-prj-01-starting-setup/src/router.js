import { createRouter, createWebHistory } from "vue-router";
import CoachesList from "@/pages/coatches/list/CoachesList.vue";
import CoachDetails from "@/pages/coatches/details/CoachDetails.vue";
import RequestsList from "@/pages/requests/RequestsList.vue";
import ContactForm from "@/pages/coatches/details/ContactForm.vue";
import RegistrationComponent from "@/pages/registration/RegistrationComponent.vue";
import UserAuth from "@/pages/auth/UserAuth.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id', component: CoachDetails, props: true, name: 'coach-details', children: [
                { path: 'contact', component: ContactForm, props: true, name: 'coach-contact-form' },
            ]
        },
        { path: '/requests', component: RequestsList },
        { path: '/registration', component: RegistrationComponent },
        { path: '/auth', component: UserAuth},
        { path: '/:notFound(.*)', redirect: '/coaches' }
    ]
})

export default router;
