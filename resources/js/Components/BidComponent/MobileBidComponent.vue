<template>
    <div class="card-shadowed bg-white">
        <teleport to="body">
            <Modal  class="py-[50px]" :visible="modal.properties.visible">
                <MobileBidModalComponent
                    :influencer="bid"
                    class="w-[98%] h-[90%] m-[auto]"
                    style="overflow: auto"
                    :display="display"
                    v-on:closeModal="modal.closeModal()"
                />
            </Modal>
        </teleport>
        <div class="p-[10px]">
            <div class="flex mb-[20px]">
                <div class="w-[100px] h-[100px] p-[3px] mr-[20px]">
                    <img class="w-[100px] h-[100px]" style="border-radius: 50%;overflow: hidden;object-fit: cover" v-if="bid.user.influencer.image_path != null" :src="'/storage/'+bid.user.influencer.image_path">
                    <img class="w-[100px] h-[100px]" style="border-radius: 50%;overflow: hidden;object-fit: cover" v-else :src="defaults.systemImages+'/default-avatar.jpg'">
                </div>
                <ul>
                    <li><p class="p2">{{ bid.user.first_name }} {{ bid.user.last_name }}</p></li>
                    <li>
                        <div class="w-[40%] h-[30px]"></div>
                    </li>
                    <li><p class="p3" style="color: var(--light-green)">Active</p></li>
                </ul>
            </div>
            <ul>
                <li class="flex">
                    <label class="w-[100px]">Amount</label>
                    <p>Ksh {{ bid.bid_amount }}</p>
                </li>
                <li class="flex">
                    <label class="w-[100px]">Bid Status</label>
                    <p>{{ bid.assignment != null ? "Assigned" : "Unassigned" }}</p>
                </li>
            </ul>
        </div>
        <hr style="margin: auto;width: calc(100% - 20px)">
        <div v-if="bid.description && (display == 'Marketer' ||  (currentUser != null && currentUser.id == bid.user.id))" class="p-[10px]">
            <p class="p2" style="font-weight: bolder"> Description</p>
            <p>{{ bid.description }}</p>
        </div>
        <div class="flex justify-between py-[20px] px-[10px] ">
            <button @click.click="modal.openModal()" class="button text-white " style="background-color: var(--bright-blue)">View Influencer</button>
            <div v-if="display == 'Marketer' && !assignmentDetails.is_assigned" class="flex">
                <button id="click" @click.prevent="hireBid(bid.id)" class="button text-white " style="background-color: var(--light-green)">Hire</button>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from "../Modal.vue";
import {reactive} from "vue";
import MobileBidModalComponent from "./MobileBidModalComponent.vue";
import {DEFAULTS} from "@stores/DEFAULTS";


export default {
    setup(){
        const defaults = DEFAULTS()


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

        return {
            modal,
            defaults,
        }
    },
    inject:['currentUser','assignmentDetails'],
    props:['display','bid'],
    data(){
        return {
            activeTab:'facebook',
            owner:false
        }
    },
    methods:{
        hireBid(bidID){

            axios.post(route('AcceptBid',[this.bid.id])).then((resp) => {
                alert(resp.data.message)
            }).catch((err)=>{
                alert("Error Assigning bid")
            }).finally(() => {
                window.location.reload();
            })
        },
        changeTab(payload) {
            this.activeTab = payload
        }
    },
    components:{
        Modal,
        MobileBidModalComponent
    },
    mounted() {
        if (this.currentUser != null){
            if (this.bid.user.id == this.currentUser.id){
                this.owner = true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../Pages/sassLoader';

.card-shadowed {
    overflow: hidden;

    .header {
        align-items: flex-end;
    }

    .body {
        section {

            .user-display {
                margin-bottom: 20px;
                width: 100%;
                display: grid;
                grid-template-columns: [image] 100px [details] calc(100% - 100px);
                grid-template-rows: [row1] 30px [row2] 30px [row3] 30px;
                grid-column-gap: 10px;
                grid-template-areas:
                "image details-1"
                "image details-2"
                "image details-3";

                .image-section {
                    grid-area: image;
                    @include flex-center;

                    img {
                        width: 70px;
                        height: 70px;
                        border-radius: 50%;
                        object-fit: cover;
                        object-position: 0px 0px;
                    }

                }

                .name-section {
                    grid-area: details-1;
                    display: flex;
                    align-items: flex-end;
                }

                .ratings-section {
                    grid-area: details-2;
                    @include flex-center;
                }

                .availability-section {
                    grid-area: details-3;

                }
            }
        }
    }
}

@include s-screens {

}
</style>
