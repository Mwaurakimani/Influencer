<template>
    <div class="desktop-nav hidden md:flex">
        <div v-if="static == true" class="logo-display" style="display: flex;place-items: center;padding-left: 20px">
            <img id="logoDisplay" class="w-[50px] h-[50px] mr-[20px] "
                 :src="defaults.systemImages+'/logos/white/icon-white.svg'">
            <img id="logoName" :src="defaults.systemImages+'/logos/white/name-white.svg'" alt="">
        </div>
        <div v-else class="logo-display" style="display: flex;place-items: center;padding-left: 20px">
            <img id="logoDisplay" class="w-[50px] h-[50px] mr-[10px] "
                 :src="defaults.systemImages+'/logos/colored/icon-colored.svg'">
            <img id="logoName" :src="defaults.systemImages+'/logos/colored/name-colored.svg'" alt="">
        </div>
        <div class="dropdown-desktop-menu h-[60px]">
            <ul class="m-[10px]">
                <Link :class="[activeNavButton == 'Home' ? 'active_button' : '']" :href="route('Home')" as="li">Home
                </Link>
                <Link :class="[activeNavButton == 'Projects' ? 'active_button' : '']" :href="route('Projects')"
                      as="li">
                    Projects
                </Link>
                <Link :class="[activeNavButton == 'AboutUs' ? 'active_button' : '']" :href="route('AboutUs')" as="li">
                    About us
                </Link>
                <Link :class="[activeNavButton == 'ContactUs' ? 'active_button' : '']" :href="route('ContactUs')"
                      as="li">
                    Contact us
                </Link>
            </ul>
            <ul v-if="logeIn == true" style="display: flex; justify-content: space-between;">
                <Link as="li" :href="route('Account')">Account</Link>
                <li>
                    <form method="post" action="/logout">
                        <button type="submit">Log Out</button>
                    </form>
                </li>
            </ul>
            <ul v-else class="ml-[80px]" style="display: flex; justify-content: space-between;">
                <Link :class="[activeNavButton == 'login' ? 'active_button' : '']" :href="route('login')" as="li">Log
                    In
                </Link>
                <Link :class="[activeNavButton == 'join' ? 'active_button' : '']" :href="route('SignUpAs')" as="li">
                    Join
                </Link>
            </ul>
        </div>
    </div>
</template>

<script>
import {DEFAULTS} from "@stores/DEFAULTS.js";
import {authStore} from "@stores/AuthStore";
import {router} from "@inertiajs/vue3";
import {storeToRefs} from "pinia";
import {ref} from "vue";

export default {
    setup() {
        const defaults = DEFAULTS()

        const auth = authStore()
        const {status, user} = storeToRefs(auth)

        const authenticated = ref(false);
        const logeIn = ref(false);

        return {
            auth,
            authenticated,
            status,
            user,
            logeIn,
            defaults
        }
    },
    inject: ['currentUser'],
    props: ['static', 'activeNavButton', 'static'],
    data() {
        return {
            window_is_scrolled: false,
            authUser: this.currentUser,
            logeIn: this.status
        }
    },
    watch: {
        window_is_scrolled(newData) {
            if (newData) {
                $('.desktop-nav').addClass('scrolled');
                $('#logoDisplay').attr('src', this.defaults.systemImages + '/logos/colored/icon-colored.svg')
                $('#logoName').attr('src', this.defaults.systemImages + '/logos/colored/name-colored.svg')
            } else {
                $('.desktop-nav').removeClass('scrolled');
                $('#logoDisplay').attr('src', this.defaults.systemImages + '/logos/colored/name-white.svg')
                $('#logoName').attr('src', this.defaults.systemImages + '/logos/white/name-white.svg')
            }
        }
    },
    methods: {
        scrollUpdate() {
            if (this.static) {
                let scroll = $(window).scrollTop();

                if (scroll >= 1) {
                    this.window_is_scrolled = true
                } else {
                    this.window_is_scrolled = false
                }
            }
        },
        logOut() {
            auth.unAuthenticate()
            router.post(route('logout'))
            router.visit('/')

        }
    },
    mounted() {
        this.scrollUpdate()

        window.addEventListener('scroll', this.scrollUpdate)

        let element = $('#user-icon');

        element.on({
            mouseenter: function () {
                let dropdown = element.find('.dropdown')

                dropdown.css({
                    display: 'block',
                    zIndex: 500,
                })

            },
            mouseleave: function () {

                let dropdown = element.find('.dropdown')

                dropdown.css({
                    display: 'none',
                    zIndex: -100,
                })
            }
        });
    }
}
</script>


<style lang="scss">

.scrolled {
    background-color: white;
    box-shadow: 0 0 8px #efefef;

    * {
        color: deeppink;

        li:hover {
            background-color: deeppink !important;
            color: white !important;
        }

        form:hover {
            background-color: deeppink !important;
            transition: all ease-in 100ms;

            button {
                transition: all ease-in 100ms;
                color: white !important;
            }
        }
    }

    .active_button {
        background-color: deeppink !important;
        color: white;
        border-radius: 8px !important;
    }

}

.unstick {
    margin-bottom: 60px;
}


.desktop-nav {
    justify-content: space-between;
    position: sticky;
    top: 0px;
    transition: all ease-in-out 200ms;

    .dropdown-desktop-menu {
        display: flex;
        color: white;

        ul {
            display: flex;
            align-items: center;

            li {
                cursor: pointer;
                transition: all ease 150ms;
                border-radius: 8px 8px 8px 8px;
                padding: 5px 10px;
                margin: 0px 10px;

                &:hover {
                    background-color: white;
                    color: deeppink;
                }
            }
        }
    }
}
</style>
