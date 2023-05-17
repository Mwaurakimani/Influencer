<script setup>
import {counterStore} from '../../Store/stores';
import MobileNavigationComponent from '../../Components/MobileNavigationComponent.vue'
import DesktopNavigationVue from '../../Components/DesktopNavigation.vue';
import InfluencerCard from '../../Components/InfluencerCard.vue';
import ProjectCard from '../../Components/ProjectsCard.vue';
import {router} from "@inertiajs/vue3";
import {authStore} from "../../Store/AuthStore";
import {storeToRefs} from "pinia";
import {inject, provide} from "vue";
import MobileInfluencerDashboardLayout from "../../Layouts/MobileInfluencerDashboardLayout.vue";
import MobileDashboardHeader from '../../Components/MobilOnlyComponents/MobileDashboardHeader.vue';
import PaginationComponent from "../../Components/Shared/PaginationComponent.vue";
import MobileProjectDisplayCard from '../../Components/MobilOnlyComponents/MobileProjectDisplayCard.vue'
import {Link} from "@inertiajs/vue3";

provide('activeTab', 'All Projects')

const props = defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    projects: Object
});

const currentUser = inject('currentUser');
const auth = authStore()
if (currentUser != null) {
    auth.authenticate()
}
const {status, user} = storeToRefs(auth)

function createProject(){
    router.visit(route('createProject'))
}


</script>

<template>
    <teleport to="body">
        <MobileInfluencerDashboardLayout :activePage="'Projects'">
        </MobileInfluencerDashboardLayout>
    </teleport>
    <MobileDashboardHeader :title="'Projects'"/>
    <DesktopDashbooardLayout>
        <header v-if="props.projects && props.projects.length > 0" class="h-[60px] flex items-center justify-between px-[10px]">
            <p class="p3 text-grey-100 ">{{ props.projects.length }} projects found</p>
            <div class="icon-holder flex items-center justify-center flex-wrap ">
                <img class="w-[50px] h-[50px]" src="/storage/DESIGN/WORKSPACE/PLATFORM%20DESIGN/icons8-configuration-67.png"
                     alt="">
            </div>
        </header>
        <div v-else class="w-[90%] mx-[auto] h-[100px] flex" style="align-items: center;justify-content: center"  >
            <h5>No Projects Found..</h5>
        </div>
        <div class="content-area">
            <div v-if="props.projects && props.projects.length > 0" class="mobile-content-area">
                <div class="container flex flex-wrap mb-[30px]" style="justify-content: space-around;gap: 20px;overflow: auto" v-for="project in props.projects">
                    <MobileProjectDisplayCard class='w-[350px]' :project="project" :link="'ViewBidProject'"></MobileProjectDisplayCard>
                    <MobileProjectDisplayCard class='w-[350px]' :project="project" :link="'ViewBidProject'"></MobileProjectDisplayCard>
                    <MobileProjectDisplayCard class='w-[350px]' :project="project" :link="'ViewBidProject'"></MobileProjectDisplayCard>
                    <MobileProjectDisplayCard class='w-[350px]' :project="project" :link="'ViewBidProject'"></MobileProjectDisplayCard>
                    <MobileProjectDisplayCard class='w-[350px]' :project="project" :link="'ViewBidProject'"></MobileProjectDisplayCard>
                    <MobileProjectDisplayCard class='w-[350px]' :project="project" :link="'ViewBidProject'"></MobileProjectDisplayCard>
                </div>
                <div class="container flex justify-center items-center">
                    <pagination-component class="mb-[100px]"></pagination-component>
                </div>
            </div>
        </div>
    </DesktopDashbooardLayout>

    <header  v-if="props.projects && props.projects.length > 0" class="m-hide h-[60px] flex items-center justify-between px-[10px]">
        <p class="p3 text-grey-100 ">{{ props.projects.length }} projects found</p>
        <div class="icon-holder flex items-center justify-center flex-wrap ">
            <img class="w-[50px] h-[50px]" src="/storage/DESIGN/WORKSPACE/PLATFORM%20DESIGN/icons8-configuration-67.png"
                 alt="">
        </div>
    </header>
    <div  v-else class="m-hide w-[90%] mx-[auto] h-[100px] flex" style="align-items: center;justify-content: center"  >
        <h5>No Projects Found..</h5>
    </div>
    <div  class="m-hide content-area">
        <div v-if="props.projects && props.projects.length > 0" class="mobile-content-area">
            <div class="container mb-[30px] " v-for="project in props.projects">
                <MobileProjectDisplayCard :project="project" :link="'ViewBidProject'"></MobileProjectDisplayCard>
            </div>
            <div class="container flex justify-center items-center">
                <pagination-component class="mb-[100px]"></pagination-component>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@import "../sassLoader";

body{
    overflow: hidden !important;
}

header {
    .icon-holder{
        z-index: 500;
    }
}

</style>
