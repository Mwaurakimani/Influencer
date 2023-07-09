<template>
    <nav>
        <MobileNavigationComponent :activeNavButton="'SignUpAs'"></MobileNavigationComponent>
        <DesktopNavigationVue class="scrolled" :activeNavButton="'join'"></DesktopNavigationVue>
    </nav>
    <section class="flex justify-center" style="height: calc(100vh - 60px);overflow: auto">
        <section class="hidden md:w-[50%] md:block">
            <img class="w-[100%] h-[100%]" style="object-fit: cover" :src="defaults.systemImages+'/Join-platform.jpg'">
        </section>
        <section class="md:w-[50%] h:100% sm:w-[100%] flex flex-col align-middle">
            <header>
                <h4 class="pt-[10px] text-center" style="color: var(--t-purple)">Join The Marketers Community</h4>
            </header>
            <div class="content-area">
                <div v-if="activePanel === 'Account'" class="container" style="max-width: 800px">
                    <p class="p3 p-[20px]  mb-[20px]" style="text-align: center">Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Odit
                        asperiores ea neque quae eaque possimus vel amet quisquam fugiat sequi repudiandae ex,
                        perferendis minus
                        illum. Sit autem nesciunt totam deserunt!</p>
                    <form class="card-shadowed mb-[50px] w-[100%] bg-white " action="" @submit.prevent="submit">
                        <h6 class="p-[15px] mb-[20px]  text-center">Join The Influencer Community</h6>
                        <div class="form-content">
                            <section>
                                <article class="flex gap-[10px]" >
                                    <div class="input-group">
                                        <label for="">First Name</label>
                                        <input type="text" v-model="employerForm.first_name" required>
                                        <span class="error span-3 py-[10px] text-red-500">{{
                                                $attrs.errors.first_name
                                            }}</span>
                                    </div>
                                    <div class="input-group">
                                        <label for="">Last Name</label>
                                        <input type="text" v-model="employerForm.last_name" required>
                                        <span class="error span-3 py-[10px] text-red-500">{{
                                                $attrs.errors.last_name
                                            }}</span>
                                    </div>
                                </article>
                                <div class="input-group">
                                    <label for="">Email</label>
                                    <input type="email" v-model="employerForm.email" required>
                                    <span class="error span-3 py-[10px] text-red-500">{{ $attrs.errors.email }}</span>
                                </div>
                                <div class="input-group">
                                    <label for="">Phone</label>
                                    <input type="tel" v-model="employerForm.phone" required>
                                    <span class="error span-3 py-[10px] text-red-500">{{ $attrs.errors.phone }}</span>
                                </div>
                                <div class="input-group">
                                    <label for="">Password</label>
                                    <input type="password" v-model="employerForm.password" required>
                                    <span class="error span-3 py-[10px] text-red-500">{{
                                            $attrs.errors.password
                                        }}</span>
                                </div>
                                <div class="input-group">
                                    <label for="">Confirm Password</label>
                                    <input type="password" v-model="employerForm.confirm_password" required>
                                    <span
                                        class="error span-3 py-[10px] text-red-500">{{
                                            $attrs.errors.confirm_password
                                        }}</span>
                                </div>
                            </section>
                        </div>
                        <div class="button-section flex justify-end p-[20px]">
                            <button @click.prevent="createEmployer" class="purple">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </section>
    <footer>

    </footer>
</template>

<script>
import {useForm} from "@inertiajs/vue3";
import {DEFAULTS} from "@stores/DEFAULTS.js";

export default {
    setup() {
        const defaults = DEFAULTS()

        return {
            defaults
        }
    },

    data() {
        return {
            employerForm: useForm({
                'first_name': null,
                'last_name': null,
                'email': null,
                'phone': null,
                'password': null,
                'account_type': 'single',
                'confirm_password': null,
                'brand_name': null
            }),
            activePanel: 'Account'
        }
    },
    methods: {
        createEmployer() {
            this.employerForm.post(route('createUser', ['Marketer']))
        },
        moveTo(payload) {
            this.activePanel.value = payload
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../sassLoader";
section{
    section:nth-of-type(2){
        overflow:auto;
    }
}
</style>
