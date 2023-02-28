<script  setup>
import { Link } from '@inertiajs/vue3';
import MobileNavigationComponent from '../../Components/MobileNavigationComponent.vue'
import DesktopNavigationVue from '../../Components/DesktopNavigation.vue';
import AccountSummaryVue from './Components/AccountSummary.vue';
import EditAccountVue from './Components/EditAccount.vue';
import SocialMediaVue from './Components/SocialMedia.vue';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});

</script>

<template>
    <nav>
        <MobileNavigationComponent :activeNavButton="'Projects'"></MobileNavigationComponent>
        <DesktopNavigationVue :activeNavButton="'Projects'"></DesktopNavigationVue>
    </nav>
    <header>
        <div class="modile-header">
            <div class="container">
                <section>
                    <h1>Account</h1>
                </section>
            </div>
        </div>
    </header>
    <div class="content-area">
        <div class="container">
            <AccountSummaryVue class="mb-[40px]"></AccountSummaryVue>
            <SocialMediaVue class="mb-[40px]"></SocialMediaVue>
            <EditAccountVue class="mb-[40px]"></EditAccountVue>
        </div>
    </div>
    <footer>

    </footer>
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

@media only screen and (min-width: 849px) {}
</style>