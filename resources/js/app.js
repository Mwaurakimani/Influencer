import './bootstrap';
import '../css/app.css';
import '../scss/index.scss'

import {createApp, h, useAttrs} from 'vue';
import {createInertiaApp} from '@inertiajs/vue3';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {ZiggyVue} from '../../vendor/tightenco/ziggy/dist/vue.m';
import {createPinia} from 'pinia';
import Modal from "./Components/Modal.vue";
import DesktopDashbooardLayout from "./Layouts/DashboardLayout/DesktopDashboardLayout.vue";
import { Link } from "@inertiajs/vue3"
import Footer from "./Components/Footer.vue";
import MobileNavigationComponent from './Layouts/MainPageComponent/MobileNavigationComponent.vue'
import DesktopNavigationVue from './Layouts/MainPageComponent/DesktopNavigation.vue';
import MobileDashboardLayout from "./Layouts/DashboardLayout/MobileDashboardLayout.vue";
import MobileDashboardHeader from "./Layouts/DashboardLayout/Components/MobileDashboardHeader.vue";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';
const piniaPlugin = createPinia();

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({el, App, props, plugin}) {
        let authUser = null

        if (props.initialPage.props.auth && props.initialPage.props.auth.user) {
            authUser = props.initialPage.props.auth.user;
        }


        return createApp({render: () => h(App, props)})
            .provide('currentUser',authUser)
            .use(plugin)
            .use(piniaPlugin)
            .use(ZiggyVue, Ziggy)
            .mixin({
                components:{
                    // dashboard layouts
                    MobileDashboardLayout,
                    DesktopDashbooardLayout,

                    //dashboard components
                    MobileDashboardHeader,



                    //main page layouts
                    MobileNavigationComponent,
                    DesktopNavigationVue,
                    Footer,

                    //global components
                    Link
                },
            })
            .mount(el)

    },
    progress: {
        color: '#4B5563',
    },
});
