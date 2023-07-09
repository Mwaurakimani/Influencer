<script setup>


</script>

<template>
    <teleport to="body">
        <MobileDashboardLayout :activePage="'Account'"></MobileDashboardLayout>
    </teleport>
    <MobileDashboardHeader :title="'Account'"/>
    <DesktopDashboardLayout>
        <div class="button-action-button w-[100%] h-[45px] mb-[10px] flex justify-end">
            <button v-if="displayMode == 'ViewMode'" class="purple mx-[10px]" style="padding: 5px 20px"
                    @click="changeViewMode('EditMode')">Edit
            </button>
            <button v-else class="purple mx-[10px]" style="padding: 5px 20px" @click="changeViewMode('ViewMode')">View
            </button>
            <button v-if="displayMode == 'EditMode'" class="button purple  mx-[10px]" @click.prevent="updateUser">Save
            </button>
            <button v-if="displayMode == 'EditMode'" class="button purple  mx-[10px]"
                    @click.prevent="changeViewMode('ViewMode')">Cancel
            </button>
        </div>
        <div v-if="displayMode == 'ViewMode'"
             class="items-holder w-[100%] flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-stretch gap-[20px]">
            <div class="card-shadowed w-[100%] lg:w-[300px] mx-auto user-image flex items-center flex-col gap-[10px]">
                <div class="image-holder w-[150px] h-[150px] overflow-hidden mb-[10px]">
                    <img v-if="user.influencer.image_path != null" :src="'/storage/'+user.influencer.image_path">
                    <img v-else :src="defaults.systemImages+'/default-avatar.jpg'">
                </div>
                <div class="user-name">
                    <p>Username</p>
                </div>
                <div class="rating-item">
                    <div class="h-[25px] flex items-center justify-center" style="width: fit-content">
                        <div class="star-icon w-[100%] h-[100%] p-[3px]">
                            <img style="max-width: 20px;max-height: 20px" :src="defaults.systemIcons+'/icons8-star-100.png'">
                        </div>
                        <p class="pt-[3px]">4.5</p>
                    </div>
                </div>
                <div class="status-holder">
                    <p class="p3 mb-[5px] " style="text-align: center;color: var(--light-green)">Available</p>
                </div>
            </div>
            <div class="card-shadowed w-[100%] lg:w-[300px] mx-auto info-card">
                <h6 class="mb-[10px]">About</h6>
                <ul class="flex flex-wrap">
                    <li class="w-[50%]">
                        <label>First Name</label>
                        <p>{{ user.first_name }}</p>
                    </li>
                    <li class="w-[50%]">
                        <label>Last Name</label>
                        <p>{{ user.last_name }}</p>
                    </li>
                    <li class="w-[100%]">
                        <label>Phone</label>
                        <p>{{ user.phone }}</p>
                    </li>
                    <li class="w-[100%]">
                        <label>Email</label>
                        <p>{{ user.email }}</p>
                    </li>
                    <!--                    <li class="w-[100%]">-->
                    <!--                        <label>Age</label>-->
                    <!--                        <p>Peter</p>-->
                    <!--                    </li>-->
                </ul>
            </div>
            <div class="card-shadowed w-[100%] mx-auto bio-holder">
                <h6 class="mb-[10px]">Bio</h6>
                <p class="p3">{{ user.influencer.bio }}</p>
            </div>
            <InfluencerAccountsVerified v-if="user.influencer.social_accounts.length > 0"
                                        :socialAccounts.camel="user.influencer.social_accounts"
                                        class="w-[100%] md:max-w-[500px] mt-[10px] mb-[100px] social accounts-display"/>
        </div>
        <div v-else class="flex flex-auto flex-wrap justify-between">
            <div
                class="image-upload-container flex flex-col p-[20px] mx-[auto] my-[20px] bg-white card-shadowed h-[414px] w-[95%] md:w-[250px]">
                <div class="image-holder flex h-[250px] items-center justify-center">
                    <div class="image-wrapper w-[160px] p-[3px] h-[250px]">
                        <img v-if="user.influencer.image_path != null" :src="'/storage/'+user.influencer.image_path">
                        <img v-else :src="defaults.systemImages+'/default-avatar.jpg'">
                    </div>
                </div>
                <div class="image-changer pt-[10px] flex items-center justify-center">
                    <div class="input-group pt-[10px] flex items-center justify-center">
                        <label for="ProfilePicture" class="p3">{{
                                influencerForm.profile_picture ? 'Image captured' : 'Upload Image'
                            }}</label>
                        <input id="ProfilePicture" type="file"
                               @input="influencerForm.profile_picture = $event.target.files[0]">
                    </div>
                </div>
            </div>
            <div class="mx-[auto] mb-[20px] container] bg-white" style="max-width: 700px">
                <form class="card-shadowed pt-[20px] pb-[20px] w-[100%] " action="" @submit.prevent="submit">
                    <div class="form-content">
                        <section>
                            <div class="input-group">
                                <label for="">First Name</label>
                                <input type="text" v-model="influencerForm.first_name">
                                <!--                            <span v-if="errors.errors && errors.errors.first_name"-->
                                <!--                                  class="error span-3 py-[10px] text-red-500">{{ errors.errors.first_name[0] }}</span>-->
                            </div>
                            <div class="input-group">
                                <label for="">Last Name</label>
                                <input type="text" v-model="influencerForm.last_name">
                                <!--                            <span v-if="errors.errors && errors.errors.last_name" class="error span-3 py-[10px] text-red-500">{{ errors.errors.last_name[0] }}</span>-->
                            </div>
                            <div class="input-group">
                                <label for="">Email</label>
                                <input type="email" v-model="influencerForm.email">
                                <!--                            <span v-if="errors.errors && errors.errors.email" class="error span-3 py-[10px] text-red-500">{{ errors.errors.email[0] }}</span>-->
                            </div>
                            <div class="input-group">
                                <label for="">Phone</label>
                                <input type="tel" v-model="influencerForm.phone">
                                <!--                            <span v-if="errors.errors && errors.errors.phone" class="error span-3 py-[10px] text-red-500">{{ errors.errors.phone[0] }}</span>-->
                            </div>
                        </section>
                    </div>
                </form>
            </div>
            <div class="mx-[auto] mb-[20px] container] bg-white" style="width: 400px;height: 100%">
                <form class="card-shadowed pt-[20px] pb-[20px]  w-[100%] " action="" @submit.prevent="submit">
                    <div class="form-content">
                        <section>
                            <div class="input-group">
                                <label for="">Bio</label>
                                <textarea class="w-[100%] h-[150px]" v-model="influencerForm.bio">
                            </textarea>
                            </div>
                        </section>
                    </div>
                </form>
            </div>
            <div class=" w-[100%] mx-[auto] mb-[20px] bg-white p-[20px] container">
                <MobileInfleuncerModifySocialAccountsComponent v-on:removeAccount="removeAccount"
                                                               :supportedPlatforms="influencerForm" :edit="true"
                                                               class="w-[100%]"/>
            </div>
            <section class="card-shadowed w-[100%] md:w-[40%] h-[100%] mb-[60px] bg-white">
                <h5 class="p-[20px]">Password</h5>
                <form class=" p-[20px] w-[90%] mx-[auto] flex gap-[10px] flex-wrap" action=""
                      @submit.prevent="validatePassword()" style="height: 400px !important;">
                    <div class="input-group w-[100%]">
                        <label>Current Password</label>
                        <input type="password" v-model="userPassword.currentPassword">
                        <span style="color: red">{{ this.$attrs.errors.currentPassword }}</span>

                    </div>
                    <div class="input-group w-[100%] mb-[20px]">
                        <label>New Password</label>
                        <input type="password" v-model="userPassword.newPassword">
                    </div>
                    <div class="input-group w-[100%] mb-[20px]">
                        <label>Confirm New Password</label>
                        <input type="password" v-model="userPassword.confirmPassword">
                        <span style="color: red">{{ userPassword.confirmPasswordError }}</span>
                        <span style="color: red">{{ this.$attrs.errors.confirmPasswordError }}</span>
                    </div>
                    <div class="form-action flex w-[100%] align-middle justify-between">
                        <button class="px-[20px] py-[10px] purple" type="submit">Update Password</button>
                        <button class="px-[20px] py-[10px] purple" type="reset">Reset Form</button>
                    </div>
                </form>
            </section>
        </div>
    </DesktopDashboardLayout>
</template>

<script>
import InfluencerAccountsVerified from '../../Components/Shared/InfluencerAccountsVerified.vue'
import MobileInfleuncerModifySocialAccountsComponent
    from '@Components/MobilOnlyComponents/MobileInfleuncerModifySocialAccountsComponent.vue'
import {useForm} from "@inertiajs/vue3";
import route from "ziggy-js/src/js";
import authenticate from "../Shared/authenticate.js";
import {authStore} from "@stores/AuthStore.js";
import {DEFAULTS} from "@stores/DEFAULTS.js";

export default {
    setup() {
        const auth = authStore();

        const defaults = DEFAULTS()

        return {
            defaults,
            auth
        }
    },
    provide: {
        activeTab: 'Account',
        pageName: 'Account'
    },
    props: ['user'],
    components: {
        InfluencerAccountsVerified,
        MobileInfleuncerModifySocialAccountsComponent
    },
    inject: ['currentUser'],
    data() {
        return {
            authenticated: false,
            displayMode: "ViewMode",
            influencerForm: useForm({
                'profile_picture': null,
                'first_name': this.user && this.user.first_name ? this.user.first_name : '',
                'last_name': this.user && this.user.last_name ? this.user.last_name : '',
                'email': this.user && this.user.email ? this.user.email : '',
                'phone': this.user && this.user.phone ? this.user.phone : '',
                'bio': this.user && this.user.influencer.bio ? this.user.influencer.bio : '',
                'social_account': {
                    facebook: this.user && this.user.influencer && this.user.influencer.social_accounts ? this.extractUserSocialMedia(this.user.influencer.social_accounts, 'facebook') : '',
                    twitter: this.user && this.user.influencer && this.user.influencer.social_accounts ? this.extractUserSocialMedia(this.user.influencer.social_accounts, 'twitter') : '',
                    instagram: this.user && this.user.influencer && this.user.influencer.social_accounts ? this.extractUserSocialMedia(this.user.influencer.social_accounts, 'instagram') : '',
                    tiktok: this.user && this.user.influencer && this.user.influencer.social_accounts ? this.extractUserSocialMedia(this.user.influencer.social_accounts, 'tiktok') : '',
                },
            }),
            userPassword: useForm({
                currentPassword: null,
                currentPasswordError: this.$attrs.errors.currentPassword ? this.$attrs.errors.currentPassword : null,
                newPassword: null,
                confirmPassword: null,
                confirmPasswordError: null
            }),
            userForm: useForm({
                user: this.user,
                influencer: this.user.influencer,
                social_accounts: [
                    {
                        name: "Facebook",
                        username: "",
                        followers: 0,
                        engagementScore: null,
                        status: false,
                    },
                    {
                        name: "Twitter",
                        username: null,
                        followers: 0,
                        engagementScore: null,
                        status: false,
                    },
                    {
                        name: "Instagram",
                        username: null,
                        followers: 0,
                        engagementScore: null,
                        status: false,
                    }
                ]
            })

        }
    },
    methods: {
        changeViewMode(payload) {
            if (payload === 'EditMode') {
                this.displayMode = "EditMode"
            } else {
                this.displayMode = "ViewMode"
            }
        },
        extractUserSocialMedia(payload, platform) {
            let username = null;
            let influencerClass = null;

            payload.forEach(function (item) {
                if (item.platform.name == platform) {
                    username = item.username;
                    influencerClass = item.influencer_class.name
                }
            });

            return {
                username: username,
                influencerClass: influencerClass
            };
        },
        updateUser() {
            axios.post(route('updateInfluencer'), {
                formData: this.influencerForm.profile_picture,
                user: this.influencerForm
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((resp) => {
                alert("Account was updated")
                window.location.href = window.location.href
            }).catch((err) => {
                alert("Error occurred while updating Account")
            })
        },
        validatePassword() {
            if (this.userPassword.confirmPassword != this.userPassword.newPassword) {
                this.userPassword.confirmPasswordError = "Password entered does not match"
            } else {
                this.userPassword.post(route('updateUserPassword', [this.user.id]))
            }
        },
        removeAccount(payload) {
            axios.post(route('removeAccount', [this.user.id, payload])).then(response => {
                alert("Account Removed")
                window.location.href = window.location.href
            }).catch(error => {
                alert("Failed to remove")
            })
        }
    },
    mounted() {
        if (this.currentUser == null || this.currentUser == 'undefined') {
            window.location.href = window.location.href
        }

        authenticate();
    }
}
</script>

<style lang="scss" scoped>
@import "../_sassLoader.scss";

.topActionBar {
    padding: 10px;
    margin-bottom: 10px;

    button {
        margin: 0px 10px;
    }
}

.image-upload-container {
    margin: auto auto 20px;

    .image-holder {

        .image-wrapper {

            img {
                height: 100%;
                object-fit: cover;
            }
        }
    }

    .image-changer {

        .input-group {

            label {
                border-radius: 8px !important;
                display: block;
                text-align: center;
                padding: 5px 10px;
                background-color: white;
                border: 1px solid var(--purple);

                &:active {
                    background-color: var(--purple);
                    color: white;
                }
            }

            #ProfilePicture {
                visibility: hidden;
            }
        }
    }
}

.items-holder {
    & > div {
        background-color: white;
        padding: 20px;
    }

    .user-image {
        .image-holder {
            border-radius: 50%;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        p {
            font-weight: bolder;
        }
    }

    .info-card {
        li {
            margin-bottom: 10px;

            label {
                color: grey;
                font-size: 0.8em;
            }

            p {
                font-size: 1.1em;
                color: #5d5d5d;
            }
        }
    }

    .bio-holder {
        p {
            color: grey;
        }
    }
}

form {
    .input-group {
        label {
            width: 100%;
            margin-bottom: 10px;
        }

        input {
            border-radius: 5px !important;
            width: 100%;
        }
    }
}

.bio-holder {
    min-width: 300px;
}

@include s-screens {
    .bio-holder {
        width: 100%;
    }
}

@include lg-screens {
    .bio-holder {
        width: 300px;
    }
}
</style>
