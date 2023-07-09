<template>
    <div class="flex flex-wrap">
        <section class="w-[100%] h-fit flex flex-wrap mb-[20px]">
            <article class=" w-[100%] flex md:justify-around flex-wrap gap-2 mb-[20px]">
                <div class="w-[100%] lg:w-[48%] lg:h-[100]">
                    <div class="card-shadowed bg-white p-[10px] h-[100%] mb-[20px]">
                        <h6 class="text-grey-200 mb-[10px]">{{ project.title }}</h6>
                        <p class="p3">{{ project.description }}</p>
                    </div>
                </div>
                <div class=" w-[100%] lg:w-[48%] card-shadowed  bg-white p-[10px]">
                    <h6 class="text-grey-200 mb-[10px]">Details</h6>
                    <ul>
                        <li class="flex justify-between w-[90%] mb-[10px]">
                            <label class="p3">Status:</label>
                            <p class="p3" style="color: var(--light-green)">{{ project.status }}</p>
                        </li>
                        <li class="flex justify-between w-[90%] mb-[10px]">
                            <label class="p3">Price:</label>
                            <p class="p3">Ksh {{ project.budget }}</p>
                        </li>
                        <li class="flex justify-between w-[90%] mb-[10px]">
                            <label class="p3">Run Time</label>
                            <p class="p3">{{ project.runtime }} {{ project.metrics }}</p>
                        </li>
                        <li class="flex justify-between w-[90%] mb-[10px]">
                            <label class="p3">Total Bids</label>
                            <p class="p3">{{ project.bids.length }}</p>
                        </li>
                    </ul>
                </div>
            </article>
            <article class="w-[100%] bg-white pb-[30px]">
                <nav>
                    <ul class="w-[100%] h-[50px] items-center mb-[20px] flex justify-between">
                        <li @click.prevent="switchTabs('Project')"
                            class="w-[100%]"
                            :class="['text-center',activeSubTab === 'Project' ? 'active-tab':'' ]">Project
                        </li>
                        <li @click.prevent="switchTabs('Bids')"
                            class="w-[100%]"
                            :class="['text-center',activeSubTab === 'Bids' ? 'active-tab':'' ]">Bids
                        </li>
                        <li @click.prevent="switchTabs('Media')"
                            v-if="is_assigned() && assignmentDetails.assignment.marketer_status != 'complete'"
                            class="w-[100%]"
                            :class="['text-center',activeSubTab === 'Media' ? 'active-tab':'' ]">Media
                        </li>
                        <li @click.prevent="switchTabs('Chat')"
                            v-if="is_assigned() && assignmentDetails.assignment.marketer_status != 'complete'"
                            class="w-[100%]"
                            :class="['text-center',activeSubTab === 'Chat' ? 'active-tab':'' ]">Chat
                        </li>

                        <li @click.prevent="switchTabs('RateMarketer')"
                            v-if="is_assigned() && project.assignment.marketer_status == 'complete' && (project.marketer.user.id == currentUser.id)"
                            class="w-[100%]"
                            :class="['text-center',activeSubTab === 'RateMarketer' ? 'active-tab':'' ]">Rate
                        </li>
                        <li @click.prevent="switchTabs('RateInfluencer')"
                            v-if="is_assigned() && project.assignment.influencer_status == 'complete' && project.influencer &&  (project.influencer.id == currentUser.id)"
                            class="w-[100%]"
                            :class="['text-center',activeSubTab === 'RateInfluencer' ? 'active-tab':'' ]">Rate
                        </li>
                    </ul>
                </nav>
                <div class="container">
                    <slot>
                        <ProjectDisplay
                            v-if="activeSubTab === 'Project'"
                            :project="project"
                            :MarketerDetails="MarketerDetails"
                        />

                        <BidDisplay
                            v-if="activeSubTab === 'Bids'"
                            :display="display"
                            :bids="project.bids"
                        />


                        <media-dispay
                            v-if="activeSubTab === 'Media'"
                            v-on:uploadFile="uploadFile"
                            v-on:DeleteMedia="remove"
                            :medias="project.media"
                        />

                        <chats-display
                            v-if="activeSubTab === 'Chat'"
                            v-on:sendMessage="sendMessage"
                            :chats="project.chats"
                        />

                        <RatingComponent
                            v-if="activeSubTab === 'RateMarketer'"
                            v-on:rate="marketerRating"
                            :user_type="'marketer'"
                            :assignment="project.assignment"
                        />

                        <RatingComponent
                            v-if="activeSubTab === 'RateInfluencer'"
                            v-on:rate="influencerRating"
                            :user_type="'influencer'"
                            :assignment="project.assignment"
                        />
                    </slot>
                </div>
            </article>
        </section>
        <section class="w-[100%] h-fit flex flex-wrap items-stretch justify-between">
            <div class="card-shadowed w-[100%]  lg:w-[calc(100%-340px)] xl:w-[350px] bg-white p-[20px] mb-[20px]">
                <h6 class="text-grey-200 ">{{ project.marketer.user.first_name }} {{
                        project.marketer.user.last_name
                    }}</h6>
                <hr class="mb-[10px]" style="background-color: var(--light-grey)">
                <ul>
                    <li class=" w-[100%] flex justify-between mb-[10px]">
                        <label class="p3">Projects Posted:</label>
                        <p class="p3">{{ marketer.posted_projects }}</p>
                    </li>
                    <li class="flex justify-between w-[100%] mb-[10px]">
                        <label class="p3">Influencers Hired:</label>
                        <p class="p3">{{ marketer.assigned_projects }}</p>
                    </li>
                    <li class="flex justify-between w-[100%] mb-[10px]">
                        <label class="p3">Total Spent:</label>
                        <p class="p3">Ksh {{ marketer.total_spent }}</p>
                    </li>
                </ul>
            </div>
            <div class="card-shadowed w-[100%]  lg:w-[300px] bg-white xl:w-[350px] p-[20px] mb-[20px]">
                <h6 class="text-grey-200 mb-[10px]">Social Account Requirements</h6>
                <div class="social-accounts-display pl-[10px] pb-[20px]">
                    <div class="flex" v-for="project_requirement in project.project_requirements">

                        <div class="social-media-icon-holder h-[30px] w-[30px]">
                            <img class="w-[27px] h-[27px]" style="border-radius: 50%;padding: 2px"
                                 :src="defaults.platformIcons+'/'+displayIcon(project_requirement.platform.name)">
                        </div>
                        <p class="p3 pt-[5px] text-grey-200 ml-[10px]">
                            {{ project_requirement.influencerClass.name }}
                            ({{ followersFormat(project_requirement.influencerClass.min_count) }}
                            -
                            {{ followersFormat(project_requirement.influencerClass.max_count) }})</p>
                    </div>
                </div>
            </div>
            <div class="card-shadowed w-[100%]  xl:w-[calc(100%-780px)] bg-white p-[20px] mb-[80px]">
                <h6 class="text-grey-200 mb-[10px]">Notes</h6>
                <p class="p3">{{ project.notes }}</p>
            </div>
        </section>
    </div>
</template>

<script>
import BidDisplay from "@Components/BidComponent/BidDisplay.vue";
import ProjectDisplay from "./Components/ProjectDisplay.vue";
import mediaDispay from "./Components/mediaDispay.vue";
import chatsDisplay from "./Components/chatsDisplay.vue";
import followersFormat from "@/Helpers/followersFormat";
import {getMarketerDetails} from "@/Helpers/marketer";
import {onMounted, provide, reactive} from "vue";
import {usePage} from "@inertiajs/vue3";
import {authStore} from "@stores/AuthStore";
import {DEFAULTS} from "@stores/DEFAULTS";
import route from "ziggy-js/src/js/index";
import projects from "../../Pages/Projects.vue";
import RatingComponent from "@Components/ViewProjectComponent/RatingComponent.vue";

export default {
    computed: {
        projects() {
            return projects
        }
    },
    setup(props) {
        const defaults = DEFAULTS()
        const auth = authStore()
        const assignmentDetails = reactive({
            is_assigned: is_assigned(),
            assignment: assignment()
        })

        let errorBag = reactive([])


        onMounted(() => {
            // console.log(usePage().props.errors)
            if (usePage().props.errors != null) {
                if (usePage().props.errors.WorkspaceError != null) {
                    errorBag[0] = usePage().props.errors
                }
            }
        })

        function is_assigned() {
            let response = false;
            if (props.project.assignment != null) {
                for (let bid of props.project.bids) {
                    if (bid.assignment != null) {
                        response = true;
                        break;
                    }
                }
            }
            return response
        }

        function assignment() {
            let assignment = null;
            if (props.project != null && props.project.bids != null) {
                for (let bid of props.project.bids) {
                    if (bid.assignment != null) {
                        assignment = bid.assignment

                        break;
                    }
                }
            }

            return assignment
        }

        provide('assignmentDetails', assignmentDetails)

        function displayIcon(name) {
            let icon = null

            switch (name) {
                case 'facebook':
                    icon = 'facebook-icon.png'
                    break;
                case 'twitter':
                    icon = 'twitter-icon.png'
                    break;
                case 'instagram':
                    icon = 'instagram-icon.png'
                    break;
                case 'tiktok':
                    icon = 'tiktok-icon.png'
                    break;

            }

            return icon

        }

        return {
            auth,
            is_assigned,
            followersFormat,
            errorBag,
            defaults,
            displayIcon,
        }
    },
    props: ['project', 'display', 'marketer'],
    inject: ['currentUser', 'activeTab', 'pageName', 'assignmentDetails'],
    components: {
        RatingComponent,
        BidDisplay,
        ProjectDisplay,
        mediaDispay,
        chatsDisplay
    },
    data() {
        return {
            MarketerDetails: {
                posted_projects: null,
                assigned_projects: null,
                total_spent: null,
                last_active: null,
            },
            icons: [
                'facebook',
                'twitter',
                'instagram',
                'tiktok',
            ],
            fileForm: null,
            activeSubTab: 'Project'
        }
    },
    methods: {
        async fetchMarketerDetails(marketerID) {
            try {
                const resp = await getMarketerDetails(marketerID);
                this.MarketerDetails = resp.data; // Assuming the response data is the marketer details
            } catch (error) {
                console.error(error);
            }
        },
        switchTabs(payload) {
            this.activeSubTab = payload
        },
        uploadFile(payload) {
            this.fileForm = payload

            axios.post(route('uploadFile'), {
                project: this.project.id,
                Upload: this.fileForm.data
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((resp) => {
                if (resp.data.status) {
                    alert("File Uploaded")
                    window.location.reload();
                } else if (resp.message) {
                    alert("Error")
                } else {
                    alert(resp.data.error)
                }


            }).catch((err) => {
                if (err && err.response && err.response.data && err.response.data.message) {
                    alert(err.response.data.message)
                }
            })
        },
        remove(media) {
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
        },
        sendMessage(message) {


            let payload = {
                project: this.project.id,
                message: message
            }

            axios.post(route('sendMessage'), payload)
                .then((resp) => {
                    let element = $('#chatWindow');

                    this.project.chats.push(resp.data.chat)

                    element.animate({
                        scrollTop: element.get(0).scrollHeight
                    }, 1000)
                }).catch((err) => {
                console.log(err)
            })
        },
        marketerRating(payload) {
            axios.post(
                route('rateInfluencer', [this.project.id]),
                payload
            ).then((resp) => {
                alert("Updated")
            }).catch((err) => {
                alert("Could not update rating")
            })
        },
        influencerRating(payload) {
            axios.post(
                route('rateMarketer', [this.project.id]),
                payload
            ).then((resp) => {
                alert("Updated")
            }).catch((err) => {
                alert("Could not update rating")
            })
        }
    },
    mounted() {
        if (this.currentUser != null) {
            this.auth.authenticate()
        }

        this.fetchMarketerDetails(this.project.marketer.id);
    }
}
</script>

<style lang="scss" scoped>
@import "../../Pages/sassLoader";

.active-tab {
    height: 100%;
    line-height: 50px;
    background-color: var(--light-grey);
}

nav {
    box-shadow: 0 3px 2px lightgrey;
    background-color: white;
    position: static !important;
    cursor: pointer;
}
</style>

