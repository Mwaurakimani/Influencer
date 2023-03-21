<script setup>
import {storeToRefs} from 'pinia';
import {inject, reactive} from 'vue';
import MobileNavigationComponent from '../Components/MobileNavigationComponent.vue'
import DesktopNavigationVue from '../Components/DesktopNavigation.vue';
import InfluencerCardBidView from '../Components/InfluencerCardBidView.vue';
import convertDate from "../Helpers/convertDate";
import {authStore} from "../Store/AuthStore";
import {router, useForm} from "@inertiajs/vue3";
import Modal from "../Components/Modal.vue"


const currentUser = inject('currentUser');
const auth = authStore()
if (currentUser() != null) {
    auth.authenticate()
}
const {status, user} = storeToRefs(auth)


const props = defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    project: Object
});
const project = reactive(props.project)

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

function submitBid() {
    axios.post(route('MakeBid', [project[0].id]), bidForm).then((resp) => {
        if (resp.data.status) {
            alert("Bid was done successfully");
            router.visit(route('ViewProject',[project[0].id]))
        }else {
            alert("Bid could not be made.Ensure you dont have an active bid with this project")
        }
    }).catch((err) => {
        alert("Error Bidding. Only an influencer can bid on projects");
    }).finally(() => {
    })
}


</script>

<template>
    <teleport to=body>
        <Modal :visible="modal.properties.visible">
            <div class="bid-display">
                <div class="bid-container">
                    <div class="header">
                        <h3>Bid for Project</h3>
                        <button class="text-white" @click="modal.closeModal()">X</button>
                    </div>
                    <div class="body">
                        <form @submit.prevent="">
                            <div class="input-group">
                                <label>Amount</label>
                                <input type="number" v-model="bidForm.amount">
                            </div>
                            <div class="input-group">
                                <label>Comment</label>
                                <textarea v-model="bidForm.comment"></textarea>
                            </div>
                            <button type="submit" @click.prevent="submitBid">Submit</button>
                        </form>
                    </div>
                    <div class="footer"></div>
                </div>
            </div>
        </Modal>
    </teleport>
    <nav>
        <MobileNavigationComponent :activeNavButton="'Projects'"></MobileNavigationComponent>
        <DesktopNavigationVue :activeNavButton="'Projects'"></DesktopNavigationVue>
    </nav>
    <header>
        <div class="modile-header">
            <div class="container">
                <section>
                    <h1>Projects</h1>
                </section>
            </div>
        </div>
    </header>
    <div class="content-area">
        <div class="container">
            <div class="top-section">
                <div class="left-section">
                    <div class="cont-bid">
                        <label>Bid</label>
                        <p>{{ (project[0].bids).length }}</p>
                    </div>
                    <div class="cont-budget">
                        <label>Budget</label>
                        <p>Ksh 15,000</p>
                    </div>
                    <div class="cont-location">
                        <label>Location</label>
                        <p>{{ project[0].location }}</p>
                    </div>
                </div>
                <div class="right-section">
                    <button v-if="status == false" @click.prevent="router.visit(route('login'))">Bid</button>
                    <button v-else-if="status == true  " @click.prevent='modal.openModal()'>Bid</button>
                    <p class="desktop-date">Date Posted : <span>{{ convertDate(project[0].created_at) }}</span></p>
                </div>
            </div>
            <div class="description-section">
                <h3>Description</h3>
                <p style="color:grey">{{ project[0].description }}</p>
            </div>
        </div>

        <div class="container bidders-container" style="box-shadow:none">
            <InfluencerCardBidView v-for="viewProject in project[0].bids"
                                   :bid="viewProject"></InfluencerCardBidView>
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

.content-area {
    padding: 10px;

    .container {
        border-radius: 3px;
        padding: 10px;
        box-shadow: 0 0 6px grey;
        margin-bottom: 20px;

        .top-section {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;

            .left-section {
                & > div {
                    display: flex;
                    margin-bottom: 5px;

                    label {
                        width: 70px;
                        font-weight: 600;
                    }
                }
            }

            .right-section {
                display: flex;
                flex-direction: column;
                align-items: flex-end;

                button {
                    margin-bottom: 10px;
                    border: 1px solid orange;
                    padding: 5px 20px;
                    color: orange;
                    border-radius: 4px;
                    transition: all ease 100ms;

                    &:active {
                        background-color: orange;
                        color: white;
                    }
                }

                .desktop-date {
                    font-size: 0.8em;
                    font-weight: 800;
                }
            }
        }

        & > div {
            margin-bottom: 10px;

            h3 {
                font-size: 1em;
                font-weight: 800;
                margin-bottom: 5px;
            }
        }
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
                        border-radius: 5px;
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

                button {
                    border-radius: 5px;
                    width: 90%;
                    height: 40px;
                    color: orange;
                    display: block;
                    margin: auto;
                    text-align: center;
                    line-height: 30px;
                    border: 1px solid orange;

                    &:hover {
                        background-color: orange;
                        color: white;
                    }
                }
            }
        }
    }
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

@media only screen and (min-width: 849px) {
}
</style>
