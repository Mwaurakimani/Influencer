<script setup>
import { Link } from "@inertiajs/vue3";

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

</script>

<template>
    <div class="desktop-nav" style="background-color: orange;">
        <div class="logo-display">
            <h1 style="font-size:1.3em;line-height:60px;color:white" class="w-[100%] h-[100%] text-center">Vumisha</h1>
        </div>
        <div class="dropdown-desktop-menu">
            <ul class="m-[15px]">
                <Link :href="route('home')" as="li" :class="[activeNavButton == 'Home' ? 'active_button' : '']">Home</Link>
                <Link :href="route('AllProjects')" as="li" :class="[activeNavButton == 'Projects' ? 'active_button' : '']">
                Projects</Link>
                <Link :href="route('AboutUs')" as="li" :class="[activeNavButton == 'AboutUs' ? 'active_button' : '']">About us
                </Link>
                <Link :href="route('ContactUs')" as="li" :class="[activeNavButton == 'ContactUs' ? 'active_button' : '']">
                Contact us</Link>
            </ul>
            <ul style="display: flex; justify-content: space-between;" class="m-[15px] ml-[80px]">
                <li>Log In</li>
                <Link :href="route('SignUpAs')" as="li" :class="[activeNavButton == 'SignUpAs' ? 'active_button' : '']">Join</Link>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
.desktop-nav {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;

    .logo-display {
        width: 180px;
        height: 60px;

    }

    .menu-burger {
        width: 50px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .dropdown-desktop-menu {
        height: 60px;
        width: auto;
        display: flex;
        color: white;

        ul {
            display: flex;
            height: 100%;
            padding: 0px;
            margin: 0px;
            align-items: center;
            margin-left: 100px;

            li {
                height: 40px;
                line-height: 40px;
                cursor: pointer;
                transition: all ease 250ms;
                border-radius: 8px 8px 0px 0px;
                padding: 0px 10px;
                margin:0px 10px;
                
                &:hover {
                    background-color: white;
                    color: orange;
                    border-radius: 8px 8px 8px 8px;
                }
            }

            .active_button {
                border-bottom: 2px solid white;
            }
        }
    }
}

@media only screen and (max-width: 980px) {
    .desktop-nav {
        display: none;
    }

}</style>