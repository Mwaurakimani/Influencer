<template>
    <div class="dashboard-container md:grid w-[100vw] h-[100vh] overflow-auto">
        <div
            class="side-section hidden md:block overflow-auto w-[100%] bg-white h-[100%]"
            style="box-shadow: 0 0 6px #c9c9c9;z-index: 1000">
            <div class="logo-section h-[100px] grid place-content-center mb-[20px]">
                <img class="w-[80px]" :src="defaults.systemImages+'/logos/colored/icon-colored.svg'">
            </div>
            <section>
                <h6>Account Management</h6>
                <ul>
                    <Link :href="route('Account')" as="li"  :class="[activeTab == 'Account'?'activeTab':'']" >Account</Link>
                </ul>
            </section>
            <hr>
            <section>
                <h6>Projects</h6>
                <ul>
                    <Link :href="route('MyProjects')" as="li"  :class="[activeTab == 'All Projects'?'activeTab':'']" >Projects</Link>
                </ul>
            </section>
            <hr>
            <section>
                <ul>
                    <Link :href="route('Finance')" as="li"  :class="[activeTab == 'Finance'?'activeTab':'']" >Finance</Link>
                </ul>
            </section>
            <hr>
        </div>
        <div class="system-content overflow-auto">
            <div class="desktop-navigation hidden md:flex top-0 w-[99%] mx-[auto] justify-between pr-[20px] h-[50px] bg-white">
                <div class="search-bar-display w-[300px] h-[100%] grid pl-[20px] place-content-center">
                    <input class="w-[100%]" type="search" placeholder="Search...">
                </div>
                <div class="action-display flex justify-end items-center flex-nowrap">
                    <div class=" mx-[20px] account-display flex items-center">
                        <div v-if="currentUser.infuencer? true : false" class="user-icon overflow-hidden w-[45px] h-[45px]">
                            <img class="w-[100%] h-[100%]" src="/storage/user.jpg">
                        </div>
                        <p>{{ currentUser.first_name}} {{ currentUser.last_name }}</p>
                    </div>
                    <form  method="post" action="/logout">
                        <button type="submit" >Log Out</button>
                    </form>
                    <div class="mx-[10px]">
                        <Link as="button" :href="route('Home')">Home</Link>
                    </div>
                </div>
            </div>
            <div class=" p-[10px] content-holder">
                <h3 class="hidden md:block md:mb-[20px]">{{ pageName }}</h3>
                <slot>

                </slot>
            </div>
        </div>
    </div>
</template>

<script>
import {router} from "@inertiajs/vue3";
import {DEFAULTS} from "@stores/DEFAULTS.js";

export default {
    setup(){
      const defaults = DEFAULTS()

      return {
          defaults
      }
    },
    name: "DesktopDashboardLayout",
    inject:['currentUser','activeTab','pageName'],
    methods:{
        logOut(){
            router.post('/logout')
        }
    },
    beforeMount() {
        if (this.currentUser == null || this.currentUser == 'undefined') {
            window.location.href = window.location.href
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../Pages/sassLoader";

.dashboard-container{
    grid-template-columns: 250px 1fr;
    grid-template-areas:
        "side system";

    .side-section{
        background-color: #f3f3f3;
        grid-area: side;

        .activeTab{
            background-color: deeppink;
            color: white;
            border-radius: 8px 0px 0px 8px;
            padding-left: 10px;

        }

        section{
            margin-bottom: 20px;
            h6{
                margin-left: 10px;
                margin-bottom: 10px;
                color: #484848;
            }
            ul{
                padding-left: 20px;
                color: grey;
                li{
                    padding: 5px;
                    cursor: pointer;
                    font-size: 0.9em;
                    margin: 10px 0px;
                    border-radius: 8px 0px 0px 8px;
                    &:hover{
                        background-color: violet;
                        color: white;
                    }
                }
            }
        }

        hr{
            width: 90%;
            display: block;
            margin: auto;
            background-color: darkgrey;
            margin-bottom: 20px;
        }
    }
    .system-content{
        background-color: #efefef;
        grid-area: system;

        .desktop-navigation{
            position: sticky;
            z-index: 2000 !important;
            box-shadow: 0 0  6px lightgrey;

            .action-display{

                .account-display{
                    .user-icon{
                        border-radius: 50%;
                        margin: 0 20px;
                        img{
                            object-fit: cover;
                        }
                    }
                }
            }

            button{
                border: 1px solid var(--t-purple);
                padding: 5px 20px !important;
                border-radius: 6px;
                color: var(--t-purple);
                font-size: 0.8em;
                &:hover{
                    background-color: var(--t-purple);
                    color: white;
                }
            }

        }
    }
}
</style>
