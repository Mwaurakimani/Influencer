<template>
    <div class="mobile-menu">
        <a href="/" class="icon-holder">
            <img v-if="activePage == 'Home'" :src="defaults.systemIcons+'/MobileMenu/icons8-home-page-96.png'">
            <img v-else :src="defaults.systemIcons+'/MobileMenu/icons8-home-page-96-grey.png'">
        </a>
        <Link :href="route('Account')" class="icon-holder">
            <img v-if="activePage == 'Account'" :src="defaults.systemIcons+'/MobileMenu/icons8-user-100.png'">
            <img v-else :src="defaults.systemIcons+'/MobileMenu/icons8-user-100-grey.png'">
        </Link>
        <Link :href="route('MyProjects')" class="icon-holder">
            <img v-if="activePage == 'Projects'" :src="defaults.systemIcons+'/MobileMenu/icons8-test-passed-100.png'">
            <img v-else :src="defaults.systemIcons+'/MobileMenu/icons8-project-100-grey.png'">
        </Link>
        <Link :href="route('Notifications')" class="icon-holder">
            <img v-if="activePage == 'Notifications'" :src="defaults.systemIcons+'/MobileMenu/icons8-alarm-100.png'">
            <img v-else :src="defaults.systemIcons+'/MobileMenu/icons8-alarm-100-grey.png'">
        </Link>
        <Link :href="route('Finance')" class="icon-holder">
            <img v-if="activePage == 'Finance'" :src="defaults.systemIcons+'/MobileMenu/icons8-coins-96.png'">
            <img v-else :src="defaults.systemIcons+'/MobileMenu/icons8-coins-96-grey.png'">
        </Link>
    </div>
</template>

<script>
import {DEFAULTS} from "@stores/DEFAULTS.js";

export default {
    setup(){
        const defaults = DEFAULTS()
      return {
          defaults
      }
    },
    props:['activePage']
}
</script>


<style lang="scss" scoped>
@import '../../../Pages/sassLoader';

.mobile-menu{
    height: 60px;
    width: 100%;
    display: flex;
    box-shadow: 0px -3px 4px #eeeeee;
    justify-content: space-around;

    .icon-holder{
        padding: 10px;

        img{
            max-width: 100%;
            max-height: 100%;
        }
    }
}

@include s-screens {

}
</style>
