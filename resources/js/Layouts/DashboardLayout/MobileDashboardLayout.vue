<template>
    <div class="mobile-menu bg-white fixed bottom-0 w-[100%] md:hidden">
        <MobileDashboardNavigationComponent :activePage="activePage"></MobileDashboardNavigationComponent>
    </div>
</template>

<script>
import MobileDashboardNavigationComponent from './Components/MobileDashboardNavigationComponent.vue'

export default {
    name: "MobileInfluencerDashboardLayout",
    props:['activePage'],
    components:{
        MobileDashboardNavigationComponent
    }
}
</script>

<style lang="scss" scoped>
@import '../../Pages/sassLoader';
</style>
