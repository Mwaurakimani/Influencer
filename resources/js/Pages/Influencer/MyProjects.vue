<template>
    <teleport to="body">
        <MobileDashboardLayout :activePage="'Projects'"/>
    </teleport>
    <MobileDashboardHeader :title="'Projects'"/>
    <DesktopDashboardLayout>
        <DesktopFilterContainer/>

        <header v-if="projects && projects.length > 0"  class="hidden md:bock h-[60px] flex items-center justify-between px-[10px]">
            <p class="p3 text-grey-100 ">{{ projects.length }} projects found</p>
        </header>
        <header class="m-hide h-[60px] flex items-center justify-between px-[10px]">
            <p v-if="projects && projects.length > 0" class="p3 text-grey-100 ">{{ projects.length }}
                projects found</p>
            <div class="icon-holder flex items-center justify-center flex-wrap ml-[auto] ">
                <img class="w-[50px] h-[50px]" :src="defaults.systemIcons+'/icons8-configuration-67.png'"
                     alt="">
                <div @click.prevent="createProject">
                    <img @click.prevent="" class="w-[30px] h-[30px]"
                         :src="defaults.systemIcons+'/icons8-add-new-100.png'" alt="">
                </div>
            </div>
        </header>

        <div v-if="projects && projects.length > 0" class="content-area">
            <div class="mobile-content-area">
                <div class="container mb-[30px] " v-for="project in projects">
                    <MobileProjectDisplayCard
                        :project="project"
                        class="w-[100%] md:w-[49%] mb-4 lg:w-[30%] xl:w-[300px] 2xl:w-[350px]"
                        :link="'ViewBidProject'"/>
                </div>
<!--                <div class="container flex justify-center items-center">-->
<!--                    <pagination-component class="mb-[100px]"/>-->
<!--                </div>-->
            </div>
        </div>
        <div v-else class="w-[100%] mx-[auto] h-[100vh] flex" style="justify-content: center">
            <h5>No Projects Found..</h5>
        </div>
    </DesktopDashboardLayout>
</template>

<script>
import DesktopFilterContainer from "./Components/DesktopFilterContainer.vue";
import MobileDashboardHeader from '../../Layouts/DashboardLayout/Components/MobileDashboardHeader.vue';
import {authStore} from "@stores/AuthStore";
import PaginationComponent from "../../Components/Shared/PaginationComponent.vue";
import MobileProjectDisplayCard from '../../Components/MobilOnlyComponents/MobileProjectDisplayCard.vue'
import ProjectCard from '../../Components/ProjectsCard.vue';
import InfluencerCard from '../../Components/InfluencerCard.vue';
import {DEFAULTS} from "@stores/DEFAULTS.js";
import {storeToRefs} from "pinia";
import {router} from "@inertiajs/vue3";





export default {
    setup(){
        const defaults = DEFAULTS()

        const auth = authStore()

        const {status, user} = storeToRefs(auth)

        return {
            defaults,
            status,
            user,auth
        }
    },
    props:['projects'],
    inject:['currentUser'],
    provide:{
        activeTab:'All Projects',
        pageName:'All Projects'
    },
    components: {
        DesktopFilterContainer,
        MobileDashboardHeader,
        PaginationComponent,
        MobileProjectDisplayCard,
        ProjectCard,
        InfluencerCard
    },
    beforeMount() {
        if (this.currentUser != null) {
            this.auth.authenticate()
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../sassLoader";

header {
    .icon-holder {
        z-index: 500;
    }
}

@include s-screens {

}
</style>
