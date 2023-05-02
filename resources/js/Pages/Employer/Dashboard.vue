<script  setup>
import {Link, router, useForm} from '@inertiajs/vue3';
import MobileNavigationComponent from '../../Components/MobileNavigationComponent.vue'
import DesktopNavigationVue from '../../Components/DesktopNavigation.vue';
import AccountSummaryVue from './Components/AccountSummary.vue';
import EditAccountVue from './Components/EditAccount.vue';
import SocialMediaVue from './Components/SocialMedia.vue';
import authenticate from "../Shared/authenticate";
import {onBeforeMount, ref} from "vue";
import {authStore} from "../../Store/AuthStore";
import confirmAuthentication from "../Shared/confimAuthentication";
import MobileInfluencerDashboardLayout from "../../Layouts/MobileInfluencerDashboardLayout.vue";
import ViewInfluencerMainInfoCard from '../../Components/Shared/ViewInfluencerMainInfoCard.vue';
import InfluencerAboutCard from "../../Components/Shared/InfluencerAboutCard.vue";
import InfluencerBioCard from "../../Components/Shared/InfluencerBioCard.vue";
import MobileDashboardHeader from '../../Components/MobilOnlyComponents/MobileDashboardHeader.vue';

const props = defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    user:Object
});

authenticate();

const auth = authStore();
const authenticated = ref(false);

onBeforeMount(async () => {
    const result = await confirmAuthentication(auth);
    authenticated.value = result;

    if (result == false){
        $('.spinner-elem').css({
            display:"flex"
        })
        router.visit('/login')
    }else {
        $('.spinner-elem').css({
            display:"none"
        })
    }
});

</script>

<template>
    <teleport to="body" >
        <MobileInfluencerDashboardLayout :activePage="'Home'" >
        </MobileInfluencerDashboardLayout>
    </teleport>
    <MobileDashboardHeader :title="'Dashboard'" />
</template>

<style lang="scss" scoped>
@import "../sassLoader";

.dashboard_header{
    position: sticky;
    top: 0px;
}
</style>
