<script setup>
import {router, useForm} from '@inertiajs/vue3';
import authenticate from "../Shared/authenticate";
import {inject, onBeforeMount, provide, ref} from "vue";
import {authStore} from "../../Store/AuthStore";
import MobileInfluencerDashboardLayout from "../../Layouts/MobileInfluencerDashboardLayout.vue";
import ViewInfluencerMainInfoCard from '../../Components/Shared/ViewInfluencerMainInfoCard.vue';
import InfluencerAboutCard from "../../Components/Shared/InfluencerAboutCard.vue";
import InfluencerBioCard from "../../Components/Shared/InfluencerBioCard.vue";
import MobileDashboardHeader from '../../Components/MobilOnlyComponents/MobileDashboardHeader.vue';
import InfluencerAccountsVerified from '../../Components/Shared/InfluencerAccountsVerified.vue'
import MobileInfleuncerModifySocialAccountsComponent
    from '@Components/MobilOnlyComponents/MobileInfleuncerModifySocialAccountsComponent.vue'



const props = defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    user: Object
});

authenticate();

const auth = authStore();
const authenticated = ref(false);
const currentUser = inject('currentUser');
provide('activeTab', 'Account')

if (currentUser == null || currentUser == 'undefined') {
    window.location.href = window.location.href
}

const userForm = useForm({
    user: props.user,
    influencer: props.user.influencer,
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

</script>

<template>
    <teleport to="body">
        <MobileInfluencerDashboardLayout :activePage="'Account'"></MobileInfluencerDashboardLayout>
    </teleport>
    <MobileDashboardHeader :title="'Account'"/>
    <DesktopDashbooardLayout>
        <div class="button-action-button">
            <button v-if="displayMode == 'ViewMode'" class="purple mx-[10px]" style="padding: 5px 20px" @click="changeViewMode('EditMode')">Edit</button>
            <button v-else class="purple mx-[10px]" style="padding: 5px 20px" @click="changeViewMode('ViewMode')">View</button>
            <button v-if="displayMode == 'EditMode'" class="button purple  mx-[10px]" @click.prevent="updateUser">Save</button>
            <button v-if="displayMode == 'EditMode'" class="button purple  mx-[10px]" @click.prevent="changeViewMode('ViewMode')">Cancel</button>
        </div>
        <div v-if="displayMode == 'ViewMode'" class="items-holder">
            <div class="card-shadowed user-image">
                <div class="image-holder">
                    <img src="/storage/user.jpg">
                </div>
                <div class="user-name">
                    <p>Username</p>
                </div>
                <div class="rating-item">
                    <div class="h-[25px] flex items-center justify-center" style="width: fit-content">
                        <div class="star-icon w-[100%] h-[100%] p-[3px]">
                            <img style="max-width: 20px;max-height: 20px" src="/storage/icons8-star-100.png">
                        </div>
                        <p class="pt-[3px]">4.5</p>
                    </div>
                </div>
                <div class="status-holder">
                    <p class="p3 mb-[5px] " style="text-align: center;color: var(--light-green)">Available</p>
                </div>
            </div>
            <div class="card-shadowed info-card">
                <h6>About</h6>
                <ul>
                    <li class="w-[50%]">
                        <label>First Name</label>
                        <p>Peter</p>
                    </li>
                    <li class="w-[50%]">
                        <label>Last Name</label>
                        <p>Peter</p>
                    </li>
                    <li class="w-[100%]">
                        <label>Gender</label>
                        <p>Peter</p>
                    </li>
                    <li class="w-[100%]">
                        <label>Email</label>
                        <p>Peter</p>
                    </li>
                    <li class="w-[100%]">
                        <label>Age</label>
                        <p>Peter</p>
                    </li>
                </ul>
            </div>
            <div class="card-shadowed bio-holder">
                <h6>Bio</h6>
                <p class="p3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, culpa debitis dolor
                    ducimus ea, eligendi est explicabo facere facilis minima nulla odit perspiciatis quaerat qui quidem
                    quod quos saepe sapiente.</p>
            </div>
            <InfluencerAccountsVerified v-if="props.user.influencer.social_accounts.length > 0"
                                        :socialAccounts.camel="props.user.influencer.social_accounts"
                                        class="w-[400px] mt-[10px] mb-[100px] social accounts-display"></InfluencerAccountsVerified>
        </div>
        <div v-else class="flex flex-auto flex-wrap" style="align-items: stretch" >
            <div class="image-upload-container bg-white card-shadowed" style="max-width: 300px" >
                <div class="image-holder">
                    <div class="image-wrapper">
                        <img src="/storage/user.jpg" alt="">
                    </div>
                </div>
                <div class="image-changer">
                    <div class="input-group">
                        <label for="ProfilePicture" class="p3">Upload Image</label>
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

            <div class=" w-[100%] mx-[auto] mb-[80px] bg-white p-[20px] container">
                <MobileInfleuncerModifySocialAccountsComponent :supportedPlatforms="influencerForm"
                                                               class="w-[100%]"></MobileInfleuncerModifySocialAccountsComponent>
            </div>
        </div>
    </DesktopDashbooardLayout>
    <div class="m-hide" v-if="displayMode == 'ViewMode'">
        <ViewInfluencerMainInfoCard
            v-on:changeViewMode="changeViewMode"
            :user.camel="props.user"
            class="w-[95%] mx-[auto] mt-[10px] mb-[20px] "></ViewInfluencerMainInfoCard>
        <InfluencerAboutCard :user.camel="props.user"
                             class="w-[95%] mx-[auto] mt-[10px] mb-[20px]"></InfluencerAboutCard>

        <InfluencerBioCard :bio.camel="props.user.influencer.bio"
                           class="w-[95%] mx-[auto] mt-[10px] mb-[20px]"></InfluencerBioCard>
        <InfluencerAccountsVerified v-if="props.user.influencer.social_accounts.length > 0"
                                    :socialAccounts.camel="props.user.influencer.social_accounts"
                                    class="w-[95%] mx-[auto] mt-[10px] mb-[100px]"></InfluencerAccountsVerified>
    </div>
    <div class="m-hide" v-else>
        <div class="topActionBar w-[100%] flex justify-end">
            <button class="button purple" @click.prevent="updateUser">Save</button>
            <button class="button purple" @click.prevent="changeViewMode('ViewMode')">Cancel</button>
        </div>
        <div class="image-upload-container card-shadowed">
            <div class="image-holder">
                <div class="image-wrapper">
                    <img src="/storage/user.jpg" alt="">
                </div>
            </div>
            <div class="image-changer">
                <div class="input-group">
                    <label for="ProfilePicture" class="p3">Upload Image</label>
                    <input id="ProfilePicture" type="file"
                           @input="influencerForm.profile_picture = $event.target.files[0]">
                </div>
            </div>
        </div>
        <div class="w-[95%] mx-[auto] mb-[20px] container]">
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

        <div class="w-[95%] mx-[auto] mb-[20px] container]">
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

        <div class=" w-[100%] mx-[auto] mb-[80px] container">
            <MobileInfleuncerModifySocialAccountsComponent :supportedPlatforms="influencerForm"
                                                           class="w-[100%]"></MobileInfleuncerModifySocialAccountsComponent>
        </div>
    </div>
</template>
<script>
import {useForm} from "@inertiajs/vue3";

export default {
    props: ['user'],
    data() {
        return {
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
        }
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
    width: 95%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: auto auto 20px;

    .image-holder {
        display: flex;
        height: 250px;
        align-items: center;
        justify-content: center;

        .image-wrapper {
            width: 160px;
            padding: 3px;
            height: 250px;

            img {
                height: 100%;
                object-fit: cover;
            }
        }
    }

    .image-changer {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .input-group {
            padding-top: 10px;
            display: flex;
            align-items: center;
            justify-content: center;

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


@include s-screens {
    .button-action-button{
        width: 100%;
        height: 45px;
        margin-bottom: 20px;
        display: flex;
        justify-content: flex-end;
    }
    .items-holder {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: stretch;
        gap: 20px;

        .user-image {
            width: 300px;
            background-color: white;
            display: flex;
            justify-content: center;
            padding: 20px;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            margin-right: auto;

            .image-holder {
                width: 150px;
                height: 150px;
                border-radius: 50%;
                overflow: hidden;
                margin-bottom: 10px;

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
            padding: 20px;
            width: 300px;
            background-color: white;
            margin-right: auto;


            h6 {
                margin-bottom: 10px;
            }

            ul {
                display: flex;
                flex-wrap: wrap;
            }

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
            background-color: white;
            width: calc(100% - 300px - 300px - 40px);
            min-width: 300px;
            padding: 20px;
            margin-right: auto;

            h6 {
                margin-bottom: 10px;
            }

            p {
                color: grey;
            }
        }

        .accounts-display{
            margin-right: auto;
        }
    }
}


</style>
