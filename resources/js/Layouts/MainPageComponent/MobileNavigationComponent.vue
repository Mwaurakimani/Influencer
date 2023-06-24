<template>
    <div class="mobile-nav sm:flex md:hidden justify-between flex-wrap">
        <div class="w-[250px] h-[60px] justify-around flex p-[14px]">
            <img
                :src="defaults.systemIcons+'/hamburger.png'" alt="logo"
                @click="toggle_dropdown"
            >
            <img
                :src="defaults.systemImages+'/logos/colored/name-colored.svg'" alt="logo-name">
        </div>
        <div class="dropdown-mobile-menu w-[100%] bg-white">
            <ul class="m-[15px]">
                <Link :href="route('Home')" as="li" :class="[activeNavButton === 'Home' ?'active_button':'']">
                    Home
                </Link>
                <Link :href="route('Projects')" as="li" :class="[activeNavButton === 'Projects' ?'active_button':'']">
                    Projects
                </Link>
                <Link :href="route('AboutUs')" as="li" :class="[activeNavButton === 'AboutUs' ?'active_button':'']">
                    About us
                </Link>
                <Link :href="route('ContactUs')" as="li" :class="[activeNavButton === 'ContactUs' ?'active_button':'']">
                    Contact us
                </Link>
            </ul>
            <hr class="w-[90%] mx-[auto] ">
            <ul v-if="currentUser == null" class="m-[15px] flex justify-between">
                <Link :href="'/login'" as="li" :class="[activeNavButton === 'LogIn' ? 'active_button' : '']">
                    Log In
                </Link>
                <Link :href="route('SignUpAs')" as="li" :class="[activeNavButton === 'SignUpAs' ? 'active_button' : '']">
                    Join
                </Link>
            </ul>
            <ul v-else class="m-[15px] flex justify-between">
                <Link :href="'/Account'" as="li">Dashboard</Link>
                <li @click.prevent="logout">Log Out</li>
            </ul>
        </div>
    </div>
</template>


<script>
import {authStore} from "@stores/AuthStore.js";
import {DEFAULTS} from "@stores/DEFAULTS.js";

export default {
    setup() {
        const auth = authStore()
        const defaults = DEFAULTS()

        return {
            auth,
            defaults
        }
    },
    inject: ['currentUser'],
    props: ['activeNavButton'],
    methods: {
        toggle_dropdown() {
            let height = $('.dropdown-mobile-menu').css('height')

            if (height === '0px') {
                $('.dropdown-mobile-menu').css({
                    height: '320px'
                })
            } else {
                $('.dropdown-mobile-menu').css({
                    height: '0px'
                })
            }
        },
        logout() {
            axios.post('/logout').then(() => {
                window.location.href = '/login'
            })
        }
    },
    beforeMount() {
        //confirm authentication
        if (this.currentUser != null) {
            this.auth.authenticate()
        }
    },
    mounted() {
        //attach a re-size listenter
        window.addEventListener('resize', function (event) {
            if (document.body.clientWidth > 980) {
                $('.dropdown-mobile-menu').css({
                    height: '0px'
                })
            }
        }, true);
    }
}

</script>


<style lang="scss">
.mobile-nav {
    background-color: var(--light-grey);

    .dropdown-mobile-menu {
        overflow: hidden;
        height: 0px;
        transition: all ease-in 250ms;
        box-shadow: 2px 0px 6px var(--light-grey);

        ul {
            li {
                padding: 10px;
            }
        }

        .active_button {
            color: var(--t-pink);
        }
    }
}
</style>
