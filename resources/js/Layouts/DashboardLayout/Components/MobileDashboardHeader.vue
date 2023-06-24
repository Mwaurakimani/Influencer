<template>
    <div class="dashboard_header h-[60px] bg-pink-400 text-white flex items-center ">
        <div @click.prevent="backLink" v-if="backButton" class="back_button w-[30px] h-[30px] p-[1px] ">
            <img :src="defaults.systemIcons+'/icons8-left-arrow-100.png'" alt="">
        </div>
        <h4 class="ml-[15px]">{{ title }}</h4>
        <div class="menu-drop-down">
            <section class="h-[100%] flex justify-center items-center">
                <img class="w-[30px]" :src="defaults.systemIcons+'/icons8-menu-vertical-96.png'">
            </section>
            <section class="card-shadowed mobile-dropdown">
                <form method="post" action="/logout">
                    <button type="submit">Log Out</button>
                </form>
            </section>
        </div>
    </div>
</template>

<script>
import {router} from "@inertiajs/vue3";
import {DEFAULTS} from "@stores/DEFAULTS.js";

export default {
    setup() {

        const defaults = DEFAULTS()

        return {
            defaults
        }
    },
    props: ['title', 'backButton'],
    methods: {
        logOut() {
            axios.post('/logout')
            router.visit('/login')
        },
        backLink() {
            window.history.back();
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../Pages/sassLoader";

.dashboard_header {
    position: sticky;
    top: 0px;
    z-index: 1000;

    .menu-drop-down {
        margin-left: auto;
        width: 40px;
        height: 100%;

        .mobile-dropdown {
            display: none;
            z-index: 0;
            width: 200px;
            position: relative;
            top: 2px;
            left: -160px;
            background-color: white;

            form {
                padding: 10px;

                button {
                    width: 100% !important;
                    text-align: left;
                    color: grey;
                    padding: 3px 5px;
                    border-radius: 5px;

                    &:hover {
                        background-color: deeppink;
                        color: white;
                    }
                }
            }
        }

        &:hover {
            .mobile-dropdown {
                display: block;
                z-index: 1000;
            }
        }
    }
}


@include s-screens {
    .dashboard_header {
        display: none;
    }
}
</style>
