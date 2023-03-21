<script setup>
import {Link, router, useForm} from '@inertiajs/vue3';
import MobileNavigationComponent from '../../Components/MobileNavigationComponent.vue'
import DesktopNavigationVue from '../../Components/DesktopNavigation.vue';
import AccountSummaryVue from './Components/AccountSummary.vue';
import EditAccountVue from './Components/EditAccount.vue';
import SocialMediaVue from './Components/SocialMedia.vue';
import {authStore} from "../../Store/AuthStore";
import {storeToRefs} from "pinia";
import {onBeforeMount, ref, useAttrs} from "vue";
import authenticate from "../Shared/authenticate";
import confirmAuthentication from "../Shared/confimAuthentication";

const props = defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    user:Object,
    marketer:Object,
    company:Object
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


const employerForm = useForm({
    'first_name' :props.user.first_name,
    'last_name' :props.user.last_name,
    'email' :props.user.email,
    'phone' :props.user.phone,
    'account_type' :props.marketer.type,
    'company_name' :props.company ? props.company.company_name : null
})



</script>

<template>
    <nav v-if="authenticated">
        <MobileNavigationComponent :activeNavButton="'Projects'"></MobileNavigationComponent>
        <DesktopNavigationVue :activeNavButton="'Projects'"></DesktopNavigationVue>
    </nav>
    <header v-if="authenticated">
        <div class="modile-header">
            <div class="container">
                <section>
                    <h1>Account</h1>
                </section>
            </div>
        </div>
    </header>
    <div v-if="authenticated" class="content-area">
        <div class="container">
            <AccountSummaryVue :user="props.user" class="mb-[40px]"></AccountSummaryVue>
            <EditAccountVue :user="employerForm" class="mb-[40px]"></EditAccountVue>
        </div>
    </div>
    <footer v-if="authenticated">

    </footer>
    <div v-else class="spinner-elem">
        <div class="spinner">

        </div>
    </div>

</template>

<style lang="scss" scoped>
* {
    font-size: 0.96em;
}

header {
    width: 100%;
    box-shadow: 0 0 6px rgb(182, 182, 182);
    margin-bottom: 20px;
    min-height: 80px;

    section {
        padding: 10px 10px;
        display: flex;
        justify-content: space-between;

        h1 {
            font-weight: 800;
            font-size: 1.3em;
        }

        .actions {
            button {
                border-radius: 3px;
                font-size: 0.9em;
                padding: 2px;
                border: 1px solid rgb(201, 201, 201);
                background-color: rgb(226, 226, 226);
                margin: 0px 5px;
            }
        }

        p {
            color: grey;
        }
    }
}

.container {
}

@media only screen and (min-width: 980px) {
    header {
        section {
            padding: 20px 10px;

            h1 {
                font-size: 2em;
            }
        }
    }
}

@media only screen and (min-width: 849px) {
}
</style>
