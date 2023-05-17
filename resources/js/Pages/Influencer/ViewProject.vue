<script setup>
import {storeToRefs} from 'pinia';
import {inject, onMounted, provide, reactive, ref} from 'vue';
import {authStore} from "../../Store/AuthStore";
import {router, useForm, usePage} from "@inertiajs/vue3";
import MobileInfluencerDashboardLayout from "../../Layouts/MobileInfluencerDashboardLayout.vue";
import MobileDashboardHeader from '../../Components/MobilOnlyComponents/MobileDashboardHeader.vue';
import ProjectDisplay from "./Components/ProjectDisplay.vue";
import BidDisplay from "../../Components/BidDisplay.vue";
import MediaDispay from "./Components/mediaDispay.vue";
import route from "ziggy-js/src/js/index.js";
import ChatsDisplay from "./Components/chatsDisplay.vue";
import followersFormat from "./../../../../resources/js/Helpers/followersFormat.js";



const currentUser = inject('currentUser');
const auth = authStore()
if (currentUser != null) {
    auth.authenticate()
}
const {status, user} = storeToRefs(auth)
const activeTab = ref('Project')

const props = defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    project: Object,
    chats:[],
    marketerStatus:String
});


console.log(props.marketerStatus)

const project = reactive(props.project)

const modal = {
    properties: reactive({
        visible: false,
        bid: null
    }),
    openModal: (payload) => {
        document.body.style.overflow = "hidden";
        modal.properties.visible = true
        modal.properties.bid = payload
    },
    closeModal: () => {
        document.body.style.overflow = "auto";
        modal.properties.visible = false
        modal.properties.bid = null
    }
}

const bidForm = useForm({
    amount: null,
    comment: null
})
const fileForm = useForm({
    fileUpload: null
})

const assignmentDetails = reactive({
    is_assigned:is_assigned(),
    assignment:assignment()
})

function submitBid() {
    axios.post(route('MakeBid', [project[0].id]), bidForm).then((resp) => {
        if (resp.data.status) {
            alert("Bid was done successfully");
            router.visit(route('ViewProject', [project[0].id]))
        }
    }).catch((err) => {
        alert("Error Bidding");
    }).finally(() => {
    })
}

function openWorkspace(payload) {
    router.visit(route('EmployerWorkspace', payload))
}

let errorBag = reactive([])

onMounted(() => {
    // console.log(usePage().props.errors)
    if (usePage().props.errors != null) {
        if (usePage().props.errors.WorkspaceError != null) {
            errorBag[0] = usePage().props.errors
        }
    }
})

function switchTabs(payload) {
    activeTab.value = payload
}

function is_assigned() {
    let response = false;
    if (props.project != null) {
        if (props.project.bids != null){
            for (let bid of props.project.bids){
                if (bid.assignment != null){
                    response = true;
                    break;
                }
            }
        }
    }

    return response
}

function assignment() {
    let assignment = null;
    if (props.project != null) {
        if (props.project.bids != null){
            for (let bid of props.project.bids){
                if (bid.assignment != null){
                    assignment = bid.assignment

                    break;
                }
            }
        }
    }

    return assignment
}

function uploadFile(payload) {
    fileForm.fileUpload = payload

    axios.post(route('uploadFile'), {
        project: props.project,
        fileData: fileForm.fileUpload
    }, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then((resp) => {
        if (resp.data.status) {
            alert("File Uploaded")
            window.location.reload();
        } else {
            alert(resp.data.error)
        }


    }).catch((err) => {
        alert("File is missing or is unsupported")
    })
}

function sendMessage(message){
    let payload = {
        project: project,
        message:message.message
    }

    axios.post(route('sendMessage'),
        payload)
        .then((resp) => {
            let element = $('#chatWindow');

            if (props.project.chats) {
                props.project.chats.push(resp.data.chat)
            }else {
                props.project.chats = []
                props.project.chats.push(resp.data.chat)
            }

            element.animate({
                scrollTop: element.get(0).scrollHeight
            }, 1000)
        }).catch((err) => {
        console.log(err)
    })
}

function remove(media) {
    if (confirm("Are you sure you want to delete this media?")) {
        axios.delete(route('DeleteMedia', {
            media: media
        }))
            .then((response) => {
                if (response.data.status) {
                    alert("Media deleted successfully.");
                    window.location.reload();
                } else {
                    alert("Error deleting media.");
                }
            })
            .catch((error) => {
                alert("Error deleting media.");
            });
    }
}

provide('assignmentDetails',assignmentDetails)

function markAsComplete(payload) {
    if (true || confirm('Please confirm project completion.')) {
        axios.post(route('InfluencerMarkAsComplete', payload))
            .then((response) => {
                if (response.data.status) {
                    alert("Project was marked as complete.");
                    window.location.reload();
                } else {
                    alert("Error marking project as complete.");
                }
            })
            .catch((error) => {
                alert("Error marking project as complete.");
            });
    }
}
</script>

<template>
    <teleport to=body>
        <!--        <Modal :visible="modal.properties.visible">-->
        <!--            <InfluencerDisplayCard :bid="modal.properties.bid" v-on:closeModal="modal.closeModal()"/>-->
        <!--        </Modal>-->
        <MobileInfluencerDashboardLayout :activePage="'Projects'">
        </MobileInfluencerDashboardLayout>
    </teleport>
    <DesktopDashbooardLayout>
        <div class="flex gap-3">
            <section class="w-[70%]" >
                <article class="flex gap-2" >
                    <div class="w-[60%]" >
                        <div class="card-shadowed bg-white h-[200px] p-[10px] mb-[20px]">
                            <h6 class="text-grey-200 mb-[10px]" >{{ project.title }}</h6>
                            <p class="p3">{{ project.description }}</p>
                        </div>
                    </div>
                    <div class="card-shadowed w-[40%] bg-white p-[10px] mb-[20px]">
                        <h6 class="text-grey-200 mb-[20px]">Details</h6>
                        <ul>
                            <li class="flex justify-between w-[90%] mb-[10px]">
                                <label class="p3">Status:</label>
                                <p class="p3" style="color: var(--light-green)"  >{{ project.status }}</p>
                            </li>
                            <li class="flex justify-between w-[90%] mb-[10px]">
                                <label class="p3">Price:</label>
                                <p class="p3" >Ksh {{ project.budget }}</p>
                            </li>
                            <li class="flex justify-between w-[90%] mb-[10px]">
                                <label class="p3">Run Time</label>
                                <p class="p3" >{{ project.runtime }} {{ project.metrics }}</p>
                            </li>
                            <li class="flex justify-between w-[90%] mb-[10px]">
                                <label class="p3">Total Bids</label>
                                <p class="p3" >{{ project.bids.length }}</p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article class="bg-white pb-[30px]">
                    <nav>
                        <ul class="w-[100%] h-[50px] items-center flex justify-around">
                            <li @click.prevent="switchTabs('Project')"
                                :class="['w-[33.3%]','text-center',activeTab === 'Project' ? 'active-tab':'' ]">Project
                            </li>
                            <li @click.prevent="switchTabs('Bids')"
                                :class="['w-[33.3%]','text-center',activeTab === 'Bids' ? 'active-tab':'' ]">Bids
                            </li>
                            <li @click.prevent="switchTabs('Media')" v-if="is_assigned()"
                                :class="['w-[33.3%]','text-center',activeTab === 'Media' ? 'active-tab':'' ]">Media
                            </li>
                            <li @click.prevent="switchTabs('Chat')" v-if="is_assigned()"
                                :class="['w-[33.3%]','text-center',activeTab === 'Chat' ? 'active-tab':'' ]">Chat
                            </li>
                        </ul>
                    </nav>
                    <div class="container">
                        <ProjectDisplay v-if="activeTab == 'Project'"
                                        :project="project"
                                        :marketerStatus="props.marketerStatus"
                                        :assignmentDetails="assignmentDetails"
                                        v-on:markAsComplete="markAsComplete"/>
                        <BidDisplay v-if="activeTab == 'Bids'" :bids="props.project.bids" :influencer="project"/>
                        <media-dispay v-if="activeTab == 'Media'" v-on:uploadFile="uploadFile" v-on:DeleteMedia="remove" :assignmentDetails="assignmentDetails"></media-dispay>
                        <ChatsDisplay v-if="activeTab == 'Chat'" v-on:sendMessage="sendMessage" :chats="props.project.chats"></ChatsDisplay>
                    </div>
                </article>
            </section>
            <section class="w-[28%] " >
                <div class="card-shadowed bg-white p-[20px] mb-[20px]">
                    <h6 class="text-grey-200 " >{{ project.marketer.user.first_name }} {{ project.marketer.user.last_name }}</h6>
                    <hr class="mb-[10px]" style="background-color: var(--light-grey)" >
                    <ul>
                        <li class="flex justify-between w-[90%] mb-[10px]">
                            <label class="p3">Projects Posted:</label>
                            <p class="p3" >20</p>
                        </li>
                        <li class="flex justify-between w-[90%] mb-[10px]">
                            <label class="p3">Influencers Hired:</label>
                            <p class="p3" >20</p>
                        </li>
                        <li class="flex justify-between w-[90%] mb-[10px]">
                            <label class="p3">Total Spent:</label>
                            <p class="p3" >20</p>
                        </li>
                        <li class="flex justify-between w-[90%] mb-[10px]">
                            <label class="p3">Last Active:</label>
                            <p class="p3" >20</p>
                        </li>
                    </ul>
                </div>
                <div class="card-shadowed bg-white p-[20px] mb-[20px]">
                    <h6 class="text-grey-200 mb-[10px]" >Social Account Requirements</h6>
                    <div class="social-accounts-display pl-[10px] pb-[20px]">
                        <div class="flex" v-for="platform in props.project.platforms">
                            <div class="social-media-icon-holder h-[30px] w-[30px]">
                                <img v-if="platform.name == 'facebook'" class="w-[27px] h-[27px]" style="border-radius: 50%;padding: 2px" src="/storage/DESIGN/WORKSPACE/icons/facebook-icon.png">
                                <img v-if="platform.name == 'twitter'" class="w-[27px] h-[27px]" style="border-radius: 50%;padding: 2px" src="/storage/DESIGN/WORKSPACE/icons/twitter-icon.png">
                                <img v-if="platform.name == 'instagram'" class="w-[27px] h-[27px]" style="border-radius: 50%;padding: 2px" src="/storage/DESIGN/WORKSPACE/icons/Instagram-icon.png">
                                <img v-if="platform.name == 'tiktok'" class="w-[27px] h-[27px]" style="border-radius: 50%;padding: 2px" src="/storage/DESIGN/WORKSPACE/icons/tiktok-icon.png">
                            </div>
                            <p class="p3 pt-[5px] text-grey-200 ml-[10px] ">{{
                                    platform.pivot.influencer_data.name
                                }} ({{


                                    followersFormat(platform.pivot.influencer_data.min_count)
                                }} - {{ followersFormat(platform.pivot.influencer_data.max_count) }})</p>
                        </div>
                    </div>
                </div>
                <div class="card-shadowed bg-white p-[20px] mb-[80px]">
                    <h6 class="text-grey-200 mb-[10px]" >Notes</h6>
                    <p class="p3" >{{ project.notes }}</p>
                </div>
            </section>
        </div>
    </DesktopDashbooardLayout>
    <MobileDashboardHeader :backButton="true" :title="'Projects'"/>
    <nav class="m-hide">
        <ul class="w-[100%] h-[50px] items-center flex justify-around">
            <li @click.prevent="switchTabs('Project')"
                :class="['w-[33.3%]','text-center',activeTab === 'Project' ? 'active-tab':'' ]">Project
            </li>
            <li @click.prevent="switchTabs('Bids')"
                :class="['w-[33.3%]','text-center',activeTab === 'Bids' ? 'active-tab':'' ]">Bids
            </li>
            <li @click.prevent="switchTabs('Media')" v-if="is_assigned()"
                :class="['w-[33.3%]','text-center',activeTab === 'Media' ? 'active-tab':'' ]">Media
            </li>
            <li @click.prevent="switchTabs('Chat')" v-if="is_assigned()"
                :class="['w-[33.3%]','text-center',activeTab === 'Chat' ? 'active-tab':'' ]">Chat
            </li>
        </ul>
    </nav>
    <div class="container m-hide">
        <ProjectDisplay v-if="activeTab == 'Project'"
                        :project="project"
                        :marketerStatus="props.marketerStatus"
                        :assignmentDetails="assignmentDetails"
                        v-on:markAsComplete="markAsComplete"/>
        <BidDisplay v-if="activeTab == 'Bids'" :bids="props.project.bids" :influencer="project"/>
        <media-dispay v-if="activeTab == 'Media'" v-on:uploadFile="uploadFile" v-on:DeleteMedia="remove" :assignmentDetails="assignmentDetails"></media-dispay>
        <ChatsDisplay v-if="activeTab == 'Chat'" v-on:sendMessage="sendMessage" :chats="props.project.chats"></ChatsDisplay>
    </div>
</template>
<style lang="scss" scoped>
@import "../sassLoader";

.active-tab {
    height: 100%;
    line-height: 50px;
    background-color: var(--light-grey);
}

nav {
    box-shadow: 0 3px 2px lightgrey;
    position: sticky;
    top: 60px;
    background-color: white;
    margin-bottom: 20px;
    z-index: 500;
}

@media only screen and (min-width: 980px) {
}

@media only screen and (min-width: 849px) {
}
</style>

