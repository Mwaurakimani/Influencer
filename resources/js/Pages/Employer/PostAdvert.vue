<template>
    <teleport to="body">
        <MobileDashboardLayout :activePage="'Projects'">
        </MobileDashboardLayout>
    </teleport>
    <MobileDashboardHeader :backButton="true" :title="'Create Projects'"/>
    <DesktopDashbooardLayout>
        <div v-if="activeSection == 'intro'" class="content-area">
            <div class="card-shadowed p-[20px] mx-[auto] mt-[30px] mb-[80px] w-[96%]">
                <h5 class="text-grey-200 pb-[20px] text-center">Project Intro</h5>
                <div class="mb-[20px]">
                    <p class="p2 pb-[10px]">What would you like to name your project?</p>
                    <input class="w-[100%]" type="text" placeholder="Project Title" v-model="project.title">
                </div>
                <div class="mb-[20px]">
                    <p class="p2 pb-[10px]">How would you like Vumisha to assist you?</p>
                    <ul class="pl-[20px]">
                        <li class="flex mb-[15px]">
                            <input class="mt-[5px]" type="radio" value="Airtime" v-model="project.projectType">
                            <p>Get an influencer to post my advert for some time ( Great for promoting your brand )</p>
                        </li>
                        <li class="flex mb-[15px]">
                            <input class="mt-[5px]" type="radio" value="Impressions" v-model="project.projectType">
                            <p>Get me Likes, Comments and shares for my advertisement ( Great for interacting and
                                engaging
                                with Audience )</p>
                        </li>
                        <li class="flex mb-[15px]">
                            <input class="mt-[5px]" type="radio" value="Views" v-model="project.projectType">
                            <p>Get me Views for my advert ( Great for creating product and brand awareness )</p>
                        </li>
                        <li class="flex mb-[15px]">
                            <input class="mt-[5px]" type="radio" value="Followers" v-model="project.projectType">
                            <p>Get me Followers ( Great for increasing your brand audience on your platform )</p>
                        </li>
                    </ul>
                </div>
                <div class="mb-[20px]">
                    <p class="p2 pb-[10px]">Tell us more about your advert</p>
                    <textarea class="w-[100%]" type="text" placeholder="Description"
                              v-model="project.description"></textarea>
                </div>
                <div class="flex justify-end">
                    <button class="purple" @click.prevent="nextTab('socialMedia',verifyIntro)">Social Media</button>
                </div>
            </div>
        </div>
        <div v-if="activeSection == 'socialMedia'" class="content-area">
            <div class="card-shadowed px-[5px] py-[20px]  mx-[auto] mt-[30px] mb-[80px] w-[96%]">
                <h5 class="text-grey-200 pb-[20px] text-center">Social Media</h5>
                <SocialMediaEntryWrapper
                    v-on:updatePlatformData="updatePlatformData"
                    :platformData=project.projectType
                    class="mb-[20px]">
                </SocialMediaEntryWrapper>

                <div class="flex justify-between">
                    <button class="purple" @click.prevent="nextTab('intro')">Introduction</button>
                    <button class="purple" @click.prevent="nextTab('influencerClass')">Influencer Class</button>
                </div>
            </div>
        </div>
        <div v-if="activeSection == 'influencerClass'" class="content-area">
            <div class="card-shadowed p-[20px] mx-[auto] mt-[30px] mb-[80px] w-[96%]">
                <h5 class="text-grey-200 pb-[20px] text-center">Influencer Class</h5>
                <p class="text-center mb-[30px]">Please select the class of influencer you would like to collaborate
                    with.</p>
                <div class="holder">
                    <ul class="mb-[40px]">

                        <li v-for="(platform,key) in influencerClassPlatromsSelected" class="flex flex-wrap">
                            <div class="w-[20%] icon-section">
                                <img v-if="platform == 'facebook'" class="w-[30px] h-[30px]"
                                     style="border-radius: 50%;overflow: hidden;padding: 1px"
                                     :src="defaults.platformIcons+'/facebook-icon.png'">
                                <img v-if="platform == 'twitter'" class="w-[30px] h-[30px]"
                                     style="border-radius: 50%;overflow: hidden;padding: 1px"
                                     :src="defaults.platformIcons+'/twitter-icon.png'">
                                <img v-if="platform == 'instagram'" class="w-[30px] h-[30px]"
                                     style="border-radius: 50%;overflow: hidden;padding: 1px"
                                     :src="defaults.platformIcons+'/instagram-icon.png'">
                                <img v-if="platform == 'tiktok'" class="w-[30px] h-[30px]"
                                     style="border-radius: 50%;overflow: hidden;padding: 1px"
                                     :src="defaults.platformIcons+'/tiktok-icon.png'">
                            </div>
                            <select class="w-[75%] mb-[10px]" v-model="project.influencerClass[key].selectedClass">
                                <option value="Nano-Influencer">Nano-Influencer (1K - 10K )</option>
                                <option value="Micro-Influencer">Micro-Influencer (10K - 100K )</option>
                                <option value="Macro-Influencer">Macro-Influencer (100K - 500K )</option>
                                <option value="Meta-Influencer">Meta-Influencer (500K - 1M )</option>
                                <option value="Mega-Influencer">Mega-Influencer (1M+)</option>
                            </select>
                            <!--                        <p class="w-[100%] pl-[20%]">Estimated Views : {{ 0 }}</p>-->
                        </li>

                    </ul>
                </div>
                <div class="flex justify-between">
                    <button class="purple" @click.prevent="nextTab('socialMedia')">Social Media</button>
                    <button class="purple" @click.prevent="nextTab('budget')">Budget</button>
                </div>
            </div>
        </div>
        <div v-if="activeSection == 'budget'" class="content-area">
            <div class="card-shadowed p-[20px] mx-[auto] mt-[30px] mb-[80px] w-[96%]">
                <h5 class="text-grey-200 pb-[20px] text-center">Budget</h5>
                <div class="mb-[20px]">
                    <p class="p2 pb-[10px]">Please enter the amount you are willing to pay the influencer for their
                        collaboration.</p>
                    <input class="w-[100%]" type="text" placeholder="In Ksh" v-model="project.budget">
                </div>
                <div class="mb-[100px]">
                    <p class="p2 pb-[10px]">
                        Please enter the duration of your campaign run time (in days, weeks, or months).</p>
                    <div class="flex items-center">
                        <div class="flex items-center">
                            <p class="p2 pb-[10px] px-[10px]">Period</p>
                            <select style="width: 95px !important;" class="px-[5px]" v-model="project.timeline.period">
                                <option value="Hrs">Hrs</option>
                                <option value="Days">Days</option>
                                <option value="Weeks">Weeks</option>
                            </select>
                        </div>
                        <div>
                            <input class="w-[80%]" type="text" v-model="project.timeline.value">
                        </div>
                    </div>
                </div>

                <div class="flex justify-between">
                    <button class="purple" @click.prevent="nextTab('influencerClass')">Influencer Class</button>
                    <button class="purple" @click.prevent="nextTab('Details')">Details</button>
                </div>
            </div>
        </div>
        <div v-if="activeSection == 'Details'" class="content-area">
            <div class="card-shadowed p-[20px] mx-[auto] mt-[30px] mb-[80px] w-[96%]">
                <h5 class="text-grey-200 pb-[20px] text-center">Details</h5>
                <div class="mb-[20px]">
                    <p class="p2 pb-[10px]">Please provide any additional notes or instructions that influencers should
                        be aware of before placing their bids.You can also use this section to define any specific
                        niches, locations, or other demographic requirements that the influencer should meet.</p>
                    <textarea class="w-[100%] h-[100px]" type="text" placeholder="Notes"
                              v-model="project.notes"></textarea>
                </div>
                <div class="flex justify-between">
                    <button class="purple" @click.prevent="nextTab('budget')">Budget</button>
                    <button class="purple" @click.prevent="submitProject">Finish</button>
                </div>
            </div>
        </div>
    </DesktopDashbooardLayout>
</template>
<script>
import {authStore} from "@stores/AuthStore.js";
import {storeToRefs} from "pinia";
import {ref} from "vue";
import {router, useForm} from "@inertiajs/vue3";
import PaginationComponent from "../../Components/Shared/PaginationComponent.vue";
import MobileDashboardHeader from '../../Layouts/DashboardLayout/Components/MobileDashboardHeader.vue';
import MobileProjectDisplayCard from '../../Components/MobilOnlyComponents/MobileProjectDisplayCard.vue';
import SocialMediaEntryWrapper
    from "../../Components/PostPorjectComponent/Components/SocialMediaEntryWrapper.vue";
import {DEFAULTS} from "@stores/DEFAULTS";

export default {
    setup() {
        const auth = authStore()
        const {status, user} = storeToRefs(auth)
        const defaults = DEFAULTS()

        const project = useForm({
            title: null,
            projectType: "Airtime",
            description: null,
            platform: {
                type: null,
                data: null,
            },
            influencerClass: [],
            budget: null,
            timeline: {
                period: 'Hrs',
                value: 0
            },
            notes: null,
            location: null,
        })

        const activeSection = ref('intro')

        const platform = () => {
            switch (project.projectType) {
                case 'airtime':
                    return 'Airtime'
                case 'impressions':
                    return 'Impressions'
                case 'views':
                    return 'Views'
                case 'followers':
                    return 'Followers'
                default:
                    return 'airtime'
            }
        }

        const boundActivePlatforms = () => {
            let bPlatforms = []
            project.influencerClass = []

            if (project.platform.data != null) {
                for (let [key, platform] of Object.entries(project.platform.data)) {
                    if (platform.selected != null) {
                        bPlatforms.push(platform.name)
                    }
                }

                for (let platform of bPlatforms) {
                    project.influencerClass.push(
                        {
                            name: platform,
                            selectedClass: 'Nano-Influencer'
                        }
                    )
                }
                return true;
            } else {
                alert("Please select a platform and advert post location")
                return false
            }
        }

        async function nextTab(payload, fun = null) {
            if (fun != null && !fun()) {
                return
            }

            if (payload === 'influencerClass' && activeSection.value === 'socialMedia') {
                if (boundActivePlatforms()) {
                    activeSection.value = payload
                } else {
                    return false;
                }
            } else if (payload === 'Details') {
                const isValidBudget = await budgetValidation();
                if (isValidBudget) {
                    activeSection.value = payload
                } else {
                    alert('You do not have enough credits in your account to fund this project. Please make a deposit and try again.')
                    return false;
                }
            } else {
                activeSection.value = payload
            }
        }

        async function budgetValidation() {
            try {
                const resp = await axios.post(route('validateBudget'), project);
                if (resp.data.status) {
                    console.log(true);
                    return true;
                }
            } catch (err) {
                console.log("Error");
            }
            console.log(false);
            return false;
        }

        return {
            auth,
            status,
            user,
            activeSection,
            platform,
            project,
            boundActivePlatforms,
            nextTab,
            budgetValidation,
            defaults
        }
    },
    computed:{
        influencerClassPlatromsSelected(){
            let defaultPlatforms = this.project.platform.data
            let projectType = this.project.projectType
            let selectedPlatforms = []

            for(const [key,value] of Object.entries(defaultPlatforms)){
                if(value.selected != null && value.selected != 'undefined'){
                    selectedPlatforms.push(value.name)
                }
            }

            return selectedPlatforms
        }
    },
    provide: {
        activeTab: 'All Projects',
        pageName: 'All Projects'
    },
    inject: ['currentUser'],
    components: {
        PaginationComponent,
        MobileDashboardHeader,
        MobileProjectDisplayCard,
        SocialMediaEntryWrapper
    },
    methods: {
        submitProject() {
            axios.post(route('PostProject'), this.project).then((resp) => {
                if (resp) {
                    router.visit(route("ViewOwnedProject", {
                        id: resp.data.project.id
                    }))
                }
            })
        },
        verifyIntro() {
            if (this.project.title && this.project.projectType) {
                return true;
            } else {
                alert("Please enter the title and select one of the project type")
                return false;
            }
        },
        updatePlatformData(data) {
            this.project.platform.type = data[0]
            this.project.platform.data = data[1]
        }
    },
    beforeMount() {
        if (this.currentUser != null) {
            this.auth.authenticate()
        }
    },
}
</script>


<style lang="scss" scoped>
@import "../sassLoader";

.content-area {
    .card-shadowed {
        background-color: white;

        .card-shadowed {
            box-shadow: none !important;
        }
    }
}

</style>
