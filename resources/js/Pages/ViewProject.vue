<template>
    <teleport to=body>
        <Modal :visible="modal.properties.visible">
            <div class="bid-display">
                <div class="bid-container">
                    <div class="header">
                        <h6>Bid for Project</h6>
                        <button class="text-white" @click="modal.closeModal()">X</button>
                    </div>
                    <div class="body">
                        <form @submit.prevent="">
                            <div class="input-group">
                                <label class="p3">Amount</label>
                                <input type="number" v-model="bidForm.amount">
                            </div>
                            <div class="input-group">
                                <label class="p3">Comment</label>
                                <textarea v-model="bidForm.comment"></textarea>
                            </div>
                            <button class="purple" type="submit" @click.prevent="submitBid">Submit</button>
                        </form>
                    </div>
                    <div class="footer"></div>
                </div>
            </div>
        </Modal>
    </teleport>
    <nav>
        <MobileNavigationComponent :activeNavButton="'Projects'"></MobileNavigationComponent>
        <DesktopNavigationVue class="scrolled" :activeNavButton="'Projects'"></DesktopNavigationVue>
    </nav>
    <header class="bg-white">
        <section class="flex items-center sm:justify-items-start sm:flex-wrap md:justify-between">
            <h3 class=" sm:w-[100%] pt-[10px] md:w-[100px]" style="color: #565656">Projects</h3>
            <div class="">
                <section class="flex justify-end">
                    <div class="actions pt-[10px]">
                        <button @click.prevent="modal.openModal()" class="purple" style="padding-top: 8px">Bid on Project</button>
                    </div>
                </section>
            </div>
        </section>
        <section class="sm:flex-wrap items-center hidden">
            <div aria-label="breadcrumb" style="height: 20px">
                <ol class="breadcrumb">
                    <li class="p4 breadcrumb-item">
                        <Link href="/">Home</Link>
                    </li>
                    <li class="p4 breadcrumb-item">
                        <Link href="/Projects">Projects</Link>
                    </li>
                </ol>
            </div>
        </section>
    </header>

    <div class="flex flex-wrap md:flex-nowrap px-[10px]">
        <section class="sm:w-[100%] sm:p-[10px] md:pt-[0px] md:w-[calc(100%-300px)] flex-wrap mb-[20px] h-fit flex">
            <article class=" w-[100%] flex flex-wrap gap-2 mb-[20px] md:justify-between">
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
            <article class="w-[100%]">
                <div class="w-[100%] bg-white card-shadowed mb-[20px] pt-[10px]" style="overflow: hidden">
                    <ProjectDisplay
                        :project="project"
                        :MarketerDetails="MarketerDetails"
                    />
                </div>

                <div class="w-[100%] bg-white p-[10px] card-shadowed">
                    <h6 class="text-grey-200 mb-[10px]">Bids</h6>
                    <BidDisplay
                        :display="null"
                        :bids="project.bids"
                    />
                </div>
            </article>
        </section>
        <section class="sm:w-[100%] md:w-[275px] h-fit flex flex-wrap items-stretch justify-between">
            <div class="card-shadowed w-[100%]  lg:w-[calc(100%)] xl:w-[350px] bg-white p-[20px] mb-[20px]">
                <h6 class="text-grey-200 ">{{ project.marketer.user.first_name }} {{
                        project.marketer.user.last_name
                    }}</h6>
                <hr class="mb-[10px]" style="background-color: var(--light-grey)">
                <ul>
                    <li class=" w-[100%] flex justify-between mb-[10px]">
                        <label class="p3">Projects Posted:</label>
                        <p class="p3">{{ MarketerDetails.posted_projects }}</p>
                    </li>
                    <li class="flex justify-between w-[100%] mb-[10px]">
                        <label class="p3">Influencers Hired:</label>
                        <p class="p3">{{ MarketerDetails.assigned_projects }}</p>
                    </li>
                    <li class="flex justify-between w-[100%] mb-[10px]">
                        <label class="p3">Total Spent:</label>
                        <p class="p3">Ksh {{ MarketerDetails.total_spent }}</p>
                    </li>
                    <li v-if="MarketerDetails.last_active" class="flex justify-between w-[90%] mb-[10px]">
                        <label class="p3">Last Active:</label>
                        <p class="p3">{{ MarketerDetails.last_active }}</p>
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
            <div class="card-shadowed w-[100%]  xl:w-[calc(100%)] bg-white p-[20px] mb-[80px]">
                <h6 class="text-grey-200 mb-[10px]">Notes</h6>
                <p class="p3">{{ project.notes }}</p>
            </div>
        </section>
    </div>


    <footer>
        <Footer></Footer>
    </footer>
</template>
<script>
import {getMarketerDetails} from "../Helpers/marketer.js";
import {provide, reactive, ref} from "vue";
import {router, useForm} from "@inertiajs/vue3";
import followersFormat from "../Helpers/followersFormat.js";
import {authStore} from "@stores/AuthStore";
import Modal from "../Components/Modal.vue"
import ProjectDisplay from "./Employer/Components/ProjectDisplay.vue";
import BidDisplay from "@Components/BidComponent/BidDisplay.vue";
import mediaDispay from "@Components/ViewProjectComponent/Components/mediaDispay.vue";
import chatsDisplay from "@Components/ViewProjectComponent/Components/chatsDisplay.vue";
import {DEFAULTS} from "@stores/DEFAULTS";


export default {
    setup() {
        const defaults = DEFAULTS()
        const auth = authStore()
        const activeTab = ref('project')
        const activeSubTab = ref('project')
        const modal = {
            properties: reactive({
                visible: false
            }),
            openModal: () => {
                document.body.style.overflow = "hidden";
                modal.properties.visible = true
            },
            closeModal: () => {
                document.body.style.overflow = "auto";
                modal.properties.visible = false
            }
        }

        const bidForm = useForm({
            amount: null,
            comment: null
        })

        function openBids() {
            activeTab.value = 'bids'
        }

        function openProject() {
            activeTab.value = 'project'
        }

        function is_assigned() {
            let response = false;
            if (props.project != null) {
                if (props.project.bids != null) {
                    for (let bid of props.project.bids) {
                        if (bid.assignment != null) {
                            response = true;
                            break;
                        }
                    }
                }
            }

            return response
        }

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


        provide('assignmentDetails', null)

        return {
            auth,
            activeTab,
            modal,
            bidForm,
            openBids,
            activeSubTab,
            followersFormat,
            defaults,
            displayIcon
        }
    },
    props: ['project'],
    inject: ['currentUser'],
    components: {
        chatsDisplay, mediaDispay,
        Modal,
        ProjectDisplay,
        BidDisplay
    },
    data() {
        return {
            MarketerDetails: {
                posted_projects: null,
                assigned_projects: null,
                total_spent: null,
                last_active: null,
            }
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
        submitBid() {
            axios.post(route('MakeBid', [this.project.id]), this.bidForm).then((resp) => {
                if (resp.data.status) {
                    // alert("Bid was made successfully");
                    window.location.href = window.location.href
                } else {
                    // alert("Bid could not be made")
                }
            }).catch((err) => {
                if (err.response.data.message) {
                    // alert(err.response.data.message)
                } else if (err.response.data) {
                    // alert(err.response.data)
                }
            }).finally(() => {
                this.modal.closeModal()
            })
        }
    },
    beforeMount() {
        if (this.currentUser != null) {
            this.auth.authenticate()
        }
        // this.fetchMarketerDetails(this.project.marketer.id);
    }
}
</script>

<style lang="scss" scoped>


header {
    margin-bottom: 20px;

    section {
        padding: 10px 10px;
        display: flex;
        justify-content: space-between;

        h1 {
            font-weight: 800;
            font-size: 1.3em;
        }

        button {
            font-size: 0.8em;
        }

    }
}

header {
    .d-hide {
        display: none;
    }
}

.bidders-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    & > div {
        margin: 10px;
    }
}

.bid-display {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .bid-container {
        border-radius: 6px;
        box-shadow: 0 0 6px #7a7a7a;
        width: 320px;
        background-color: white;

        .header {
            padding: 0 10px;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid lightgrey;

            h3 {
                font-weight: bolder;
            }

            & > button {
                background-color: red;
                color: white;
                height: 20px;
                padding: 0px;
                font-size: 0.9em;
                width: 20px;
                border-radius: 50%;

            }
        }

        .body {
            width: 100%;
            padding: 15px;

            form {
                .input-group {
                    margin-bottom: 10px;
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;

                    input, textarea {
                        width: 100%;
                        border-radius: 5px !important;
                        height: 30px;
                        padding: 0px 5px;
                        margin: 0px;
                        border: 1px solid lightgrey;
                    }

                    textarea {
                        height: 200px;
                        margin-bottom: 20px;
                    }

                    label {
                        width: 100%;
                        margin-bottom: 10px;
                    }

                }
            }
        }
    }
}


@media only screen and (min-width: 980px) {
    .content-area {
        min-height: 65vh;
    }

    header {
        .d-hide {
            display: flex;
        }
    }
}

@media only screen and (min-width: 849px) {
}
</style>
