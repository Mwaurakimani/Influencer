<template>
    <nav>
        <MobileNavigationComponent :activeNavButton="'SignUpAs'"></MobileNavigationComponent>
        <DesktopNavigationVue class="scrolled" :activeNavButton="'join'"></DesktopNavigationVue>
    </nav>
    <section class="flex justify-center" style="height: calc(100vh - 60px)">
        <section class="hidden md:w-[50%] md:block">
            <img class="w-[100%] h-[100%]" style="object-fit: cover" :src="defaults.systemImages+'/Join-platform.jpg'">
        </section>
        <section class="md:w-[50%] h:100% sm:w-[100%] flex flex-col align-middle" style="overflow: auto">
            <header>
                <h4 class="pt-[13px]" style="color: var(--t-purple);text-align: center">Join The Influencer
                    Community</h4>
            </header>
            <div class="content-area">
                <!--account section-->
                <div v-if="activePanel === 'Account'" class="container mx-w-[800px]">
                    <p class="p3 p-[20px]  mb-[20px] text-center">Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Odit asperiores ea neque quae eaque possimus vel amet quisquam fugiat sequi repudiandae
                        ex, perferendis minus illum. Sit autem nesciunt totam deserunt!</p>
                    <form class="card-shadowed mb-[50px]" action="" @submit.prevent="submit">
                        <h6 class="p-[15px] mb-[20px]  text-center">Join The Influencer Community</h6>
                        <div class="form-content">
                            <section>
                                <article class="flex" >
                                    <div class="input-group">
                                        <label for="">First Name</label>
                                        <input
                                            type="text"
                                            v-model="influencerForm.first_name">

                                        <span
                                            v-if="errors.errors && errors.errors.first_name"
                                            class="error span-3 py-[10px] text-red-500">{{
                                                errors.errors.first_name[0]
                                            }}</span>
                                    </div>
                                    <div class="input-group">
                                        <label for="">Last Name</label>
                                        <input
                                            type="text"
                                            v-model="influencerForm.last_name">
                                        <span
                                            v-if="errors.errors && errors.errors.last_name"
                                            class="error span-3 py-[10px] text-red-500">{{
                                                errors.errors.last_name[0]
                                            }}</span>
                                    </div>
                                </article>
                                <article class="flex">
                                    <div class="input-group">
                                        <label for="">Gender</label>
                                        <select class="w-[100%]" v-model="influencerForm.gender" >
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                        <span
                                            v-if="errors.errors && errors.errors.gender"
                                            class="error span-3 py-[10px] text-red-500">{{
                                                errors.errors.gender[0]
                                            }}</span>
                                    </div>
                                    <div class="input-group">
                                        <label for="">Date of Birth</label>
                                        <input
                                            type="date"
                                            v-model="influencerForm.DOB">
                                        <span
                                            v-if="errors.errors && errors.errors.DOB"
                                            class="error span-3 py-[10px] text-red-500">{{
                                                errors.errors.DOB[0]
                                            }}</span>
                                    </div>
                                </article>
                                <div class="input-group">
                                    <label for="">Email</label>
                                    <input
                                        type="email"
                                        v-model="influencerForm.email">
                                    <span
                                        v-if="errors.errors && errors.errors.email"
                                        class="error span-3 py-[10px] text-red-500">{{ errors.errors.email[0] }}</span>
                                </div>
                                <div class="input-group">
                                    <label for="">Phone</label>
                                    <input
                                        type="tel"
                                        v-model="influencerForm.phone">
                                    <span
                                        v-if="errors.errors && errors.errors.phone"
                                        class="error span-3 py-[10px] text-red-500">{{ errors.errors.phone[0] }}</span>
                                </div>
                                <article class="flex" >
                                    <div class="input-group">
                                        <label for="">Password</label>
                                        <input
                                            type="password"
                                            v-model="influencerForm.password">
                                        <span
                                            v-if="errors.errors && errors.errors.password"
                                            class="error span-3 py-[10px] text-red-500">{{
                                                errors.errors.password[0]
                                            }}</span>
                                    </div>
                                    <div class="input-group">
                                        <label for="">Confirm Password</label>
                                        <input
                                            type="password"
                                            v-model="influencerForm.password_confirmation">
                                        <span
                                            v-if="errors.errors && errors.errors.password_confirmation"
                                            class="error span-3 py-[10px] text-red-500">{{
                                                errors.errors.password_confirmation [0]
                                            }}</span>
                                    </div>
                                </article>
                            </section>
                        </div>
                        <div class="button-section flex justify-end p-[20px]">
                            <button @click.prevent="moveTo('SocialAccounts')" class="purple" type="submit">Social
                                Accounts
                            </button>
                        </div>
                    </form>
                </div>

                <!--social accounts section-->
                <div v-if="activePanel === 'SocialAccounts'" class="container">
                    <p class="p3 p-[20px]  mb-[20px]" style="text-align: center">Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Odit asperiores ea neque quae eaque possimus vel amet quisquam fugiat sequi
                        repudiandae ex, perferendis minus illum. Sit autem nesciunt totam deserunt!</p>
                    <form class="card-shadowed mb-[50px] w-[100%] " action="" @submit.prevent="submit">
                        <h6 class="p-[15px] mb-[20px]  text-center">Add social accounts</h6>
                        <div class="form-content" style="max-width: 700px !important; margin: auto">
                            <MobileInfleuncerModifySocialAccountsComponent :supportedPlatforms="influencerForm"
                                                                           class="w-[100%]"/>
                        </div>
                        <div class="button-section flex justify-between p-[20px]">
                            <button @click.prevent="moveTo('Account')" class="purple" type="submit">Account</button>
                            <button @click.prevent="moveTo('Bio')" class="purple" type="submit">Bio</button>
                        </div>
                    </form>
                </div>

                <!--bio sections-->
                <div v-if="activePanel === 'Bio'" class="container">
                    <p class="p3 p-[20px]  mb-[20px]" style="text-align: center">Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Odit
                        asperiores ea neque quae eaque possimus vel amet quisquam fugiat sequi repudiandae ex,
                        perferendis minus
                        illum. Sit autem nesciunt totam deserunt!</p>
                    <form class="card-shadowed mb-[50px] w-[100%] " action="" @submit.prevent="submit">
                        <h6 class="p-[15px] mb-[20px]  text-center">Bio</h6>
                        <div class="form-content" style="max-width: 700px !important; margin: auto">
                    <textarea class="w-[100%] h-[200px]" @keyup="debounce(keyCount,300)" v-model="influencerForm.bio">

                    </textarea>
                            <span class="span-2 text-grey-200 ">Max 500 Characters</span>
                        </div>
                        <div class="button-section flex justify-between p-[20px]">
                            <button @click.prevent="moveTo('SocialAccounts')" class="purple" type="submit">Social
                                Accounts
                            </button>
                            <button @click.prevent="submit()" class="purple" type="submit">Finish</button>

                            <!--                    <button @click.prevent="moveTo('Categories')" class="purple" type="submit">Categories</button>-->
                        </div>
                    </form>
                </div>

                <!--finished section-->
                <div v-if="activePanel === 'Finish'" class="container">
                    <form class="card-shadowed mb-[50px] w-[100%] " action="" @submit.prevent="submit">
                        <h6 class="p-[15px] mb-[20px]  text-center">Welcome</h6>
                        <div class="form-content">
                            <p class="p3 p-[20px]  mb-[20px]" style="text-align: center">Lorem ipsum dolor sit amet
                                consectetur,
                                adipisicing elit. Odit
                                asperiores ea neque quae eaque possimus vel amet quisquam fugiat sequi repudiandae ex,
                                perferendis minus
                                illum. Sit autem nesciunt totam deserunt!</p>
                        </div>
                        <div class="button-section flex justify-between         p-[20px]">
                            <Link as="button" :href="'/login'" class="purple" type="submit">Log In</Link>
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
import {useForm} from '@inertiajs/vue3';
import {reactive} from "vue";
import {authStore} from "@stores/AuthStore";
import {storeToRefs} from "pinia";
import MobileInfleuncerModifySocialAccountsComponent
    from "../../Components/MobilOnlyComponents/MobileInfleuncerModifySocialAccountsComponent.vue";
import {DEFAULTS} from "@stores/DEFAULTS.js";

export default {
    setup() {
        const defaults = DEFAULTS()

        const auth = authStore()
        const {status, user} = storeToRefs(auth)

        const errors = reactive({
            status: false,
            errors: {}
        });

        return {
            errors,
            status,
            defaults
        }
    },
    inject: ['currentUser'],
    components: {
        MobileInfleuncerModifySocialAccountsComponent
    },
    data() {
        return {
            influencerForm: useForm({
                'first_name': null,
                'last_name': null,
                'email': null,
                'phone': null,
                'password': null,
                'password_confirmation': null,
                'bio': null,
                'gender': null,
                'DOB': null,
                'social_account': {
                    facebook: {
                        username: null,
                        influencerClass: null,
                    },
                    twitter: {
                        username: null,
                        influencerClass: null,
                    },
                    instagram: {
                        username: null,
                        influencerClass: null,
                    },
                    tiktok: {
                        username: null,
                        influencerClass: null,
                    }
                },
            }),
            activePanel: 'Account'
        }
    },
    methods: {
        moveTo(payload) {
            this.influencerForm.check = payload
            axios.post(route('createInfluencerValidate'), this.influencerForm)
                .then((resp) => {
                    if (resp.data.status) {
                        this.errors.errors = {}
                        this.errors.status = false;
                        this.activePanel = payload
                    }
                }).catch((err) => {
                console.log(err)
                if (err.response.status === 422) {
                    this.errors.errors = err.response.data.errors;
                    this.errors.status = true;
                } else {
                    this.errors.errors = {}
                    this.errors.status = false;
                }
            })
        },
        validate(payload) {
            console.log(payload)
        },
        submit() {
            this.influencerForm.post(route('createUser', ['Influencer']))
        },
        debounce(func, wait) {
            let timer;
            return function (...args) {
                if (timer) {
                    clearTimeout(timer); // clear any pre-existing timer
                }
                const context = this; // get the current context
                timer = setTimeout(() => {
                    fn.apply(context, args); // call the function if time expires
                }, wait);
            }
        },
        keyCount() {
            console.log("hi")
        },
    },
    mounted() {
        if (this.currentUser != null) {
            this.auth.authenticate()
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../sassLoader";


.form-content {
    div {
        ul {
            li {
                &:hover {
                    background-color: var(--t-pink);
                    color: white;
                }
            }
        }
    }
}

</style>
