<template>
    <nav>
        <MobileNavigationComponent :activeNavButton="'LogIn'"></MobileNavigationComponent>
        <DesktopNavigationVue class="scrolled" :activeNavButton="'login'"></DesktopNavigationVue>
    </nav>
    <section class="flex justify-center" style="height: calc(100vh - 60px)">
        <section class="hidden md:w-[50%] md:block">
            <img class="w-[100%] h-[100%]" style="object-fit: cover" :src="defaults.systemImages+'/Join-platform.jpg'">
        </section>
        <section class="md:w-[50%] h:100% sm:w-[100%] flex flex-col align-middle justify-center">
            <header>
                <h1 class="pt-[13px]" style="color: var(--t-purple)">Log In</h1>
            </header>
            <div class="content-area">
                <div class="container p-[50px]">
                    <form class="card-shadowed pt-[30px] mb-[50px] w-[100%] "
                          @submit.prevent="form.post(route('login'))">
                        <div class="form-content ">
                            <section>
                                <div class="input-group">
                                    <label for="">Email</label>
                                    <input type="email" v-model="form.email">
                                </div>

                                <div class="input-group">
                                    <label for="">Password</label>
                                    <input type="password" v-model="form.password">
                                </div>
                            </section>
                            <span v-if="errors" class="error span-3 py-[10px] text-red-500">{{
                                    errors.email
                                }}</span>
                        </div>
                        <div class="button-section p-[20px] flex items-center justify-center">
                            <button class="purple" style="padding: 10px 20px" type="submit" :disabled="form.processing">
                                Log In
                            </button>
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
    props: ['errors'],
    setup() {
        const defaults = DEFAULTS()

        return {
            defaults
        }
    },
    data() {
        return {
            form: useForm({
                email: null,
                password: null
            }),
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../sassLoader";
h1{
    text-align: center;
    font-size:1.8em
}
</style>
