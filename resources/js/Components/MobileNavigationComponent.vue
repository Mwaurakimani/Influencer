<script setup >
import {Link} from "@inertiajs/vue3";

defineProps(['activeNavButton'])

function toggle_dropdown() {

    let height = $('.dropdown-mobile-menu').css('height')

    console.log();

    if (height == '0px') {
        $('.dropdown-mobile-menu').css({
            height: '320px'
        })
    } else {
        $('.dropdown-mobile-menu').css({
            height: '0px'
        })
    }


}
window.addEventListener('resize', function (event) {
    if (document.body.clientWidth > 980) {
        $('.dropdown-mobile-menu').css({
            height: '0px'
        })
    }
}, true);
</script>

<template>
    <div class="mobile-nav" style="background-color: orange;">
        <div class="logo-display">
            <h1 style="font-size:1.3em;line-height:60px;color:white" class="w-[100%] h-[100%] text-center">Vumisha</h1>
        </div>
        <div class="menu-burger" @click="toggle_dropdown">
            <img src="/storage/icons8-menu-rounded-24.png" alt="">
        </div>
        <div class="dropdown-mobile-menu">
            <ul class="m-[15px]">
                <Link :href="route('home')" as="li" :class="[activeNavButton == 'Home' ?'active_button':'']">Home</Link>
                <Link :href="route('AllProjects')" as="li" :class="[activeNavButton == 'Projects' ?'active_button':'']">Projects</Link>
                <Link :href="route('AboutUs')" as="li" :class="[activeNavButton == 'AboutUs' ?'active_button':'']">About us</Link>
                <Link :href="route('ContactUs')" as="li" :class="[activeNavButton == 'ContactUs' ?'active_button':'']">Contact us</Link>
            </ul>
            <hr style="width: 90%;margin:auto">
            <ul style="display: flex; justify-content: space-between;" class="m-[15px]">
                <li>Log In</li>
                <Link :href="route('SignUpAs')" as="li" :class="[activeNavButton == 'SignUpAs' ? 'active_button' : '']">Join</Link>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
.mobile-nav {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .logo-display {
        width: 250px;
        height: 60px;

    }

    .menu-burger {
        width: 50px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .dropdown-mobile-menu {
        overflow: hidden;
        width: 100%;
        height: 0px;
        transition: all ease-in 250ms;
        background-color: white;
        box-shadow: 2px 0px 6px grey;

        ul {
            li {
                padding: 10px;
            }
        }
        .active_button{
            color:orange;
        }
    }
}



@media only screen and (min-width: 980px) {
    .mobile-nav {
        display: none;
    }
}
</style>