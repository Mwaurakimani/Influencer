<template>
    <div class="card bg-white" id="displayCard">
        <div class="header h-[25px] mb-[10px] pr-[10px] pt-[10px] flex" style="justify-content: flex-end;">
            <div class="w-[20px] h-[20px] bg-red-500"
                 style="border-radius: 50%">
                <p @click="closeModal" class="text-white  p-[2px] " style="text-align: center; font-size: 0.8em;cursor: pointer">X</p>
            </div>
        </div>
        <div class="body">
            <section class="w-[90%] mx-auto" style="border-bottom: 1px solid var(--light-grey);margin-bottom: 20px;padding-bottom: 20px">
                <div class="user-display">
                    <div class="image-section grid" style="place-items: center">
                        <img  v-if="influencer.user.influencer.image_path != null" :src="'/storage/'+influencer.user.influencer.image_path">
                        <img class="w-[100px] h-[100px]" style="border-radius: 50%;overflow: hidden;object-fit: cover" v-else :src="defaults.systemImages+'/default-avatar.jpg'">
                    </div>
                    <div class="name-section">
                        <p class="p2" style="font-weight: bolder">{{ influencer.user.first_name }} {{ influencer.user.last_name }}</p>
                    </div>
                    <div class="h-[25px] flex items-center justify-center" style="width: fit-content">
                        <div class="star-icon w-[100%] h-[100%] p-[3px]">
<!--                            <img style="max-width: 20px;max-height: 20px" src="/storage/icons8-star-100.png">-->
                        </div>
                        <p class="pt-[3px]" >4.5</p>
                    </div>
                    <div class="availability-section">
                        <p class="p2" style="color: var(--light-green)">Available</p>
                    </div>
                </div>
                <div class="bid-details  text-gray-500 p3">
                    <div>
                        <label class="w-[100px] " >Bid Amount</label>
                        <p class="w-[130px]" style=" display: inline-block; text-align: right" > KSh {{ influencer.bid_amount }}</p>
                    </div>
                </div>
            </section>
            <section v-if="owner" class="w-[90%] mx-auto" style="border-bottom: 1px solid var(--light-grey);margin-bottom: 20px;padding-bottom: 20px">
                <p class="p2 mb-[5px]" style="font-weight: bolder">Comment</p>
                <p class="p4 text-grey-100 " >{{ influencer.description }}</p>
            </section>
            <section class="w-[90%] mx-auto" style="margin-bottom: 20px;padding-bottom: 20px">

                <div v-for="account in influencer.user.social_accounts" class="account-section mb-[30px]">
                    <div class="social-media-icon-holder h-[30px] w-[30px] mb-[10px]">
                        <img class="w-[27px] h-[27px]" style="border-radius: 50%;padding: 2px" :src="defaults.platformIcons+'/'+displayIcon(account.platform.name)">
                    </div>
                    <div class="flex justify-between mb-[5px]" >
                        <p class="p3 text-grey-200">Class</p>
                        <p class="p3 text-grey-200">{{ account.influencer_class.name }} ({{ followerFormat(account.influencer_class.min_count) }} - {{ followerFormat(account.influencer_class.max_count) }})</p>
                    </div>
                    <!--                    <div class="flex justify-between mb-[5px]" >-->
                    <!--                        <p class="p3 text-grey-200">Engagement</p>-->
                    <!--                        <p class="p3 text-grey-200">Nano-Infleuncer(1K - 5K)</p>-->
                    <!--                    </div>-->
                    <!--                    <div class="flex justify-between mb-[5px]" >-->
                    <!--                        <p class="p3 text-grey-200">Estimated Reach</p>-->
                    <!--                        <p class="p3 text-grey-200">Nano-Infleuncer(1K - 5K)</p>-->
                    <!--                    </div>-->
                </div>
            </section>

            <!--            <section class="flex justify-end mb-[20px]" >-->
            <!--                <button class="px-[10px] py-[5px] text-white mx-[5px]"  style="background-color: var(&#45;&#45;light-green);border-radius: 25px" >Accept</button>-->
            <!--                <button class="px-[10px] py-[5px] text-white mx-[5px]"  style="background-color: var(&#45;&#45;pale-red-1);border-radius: 25px" >Reject</button>-->
            <!--            </section>-->

        </div>
    </div>
</template>
<script>
import followerFormat from "../../Helpers/followersFormat.js"
import {DEFAULTS} from "@stores/DEFAULTS";

export default {
    setup(){

        const defaults = DEFAULTS()

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

        return{
            defaults,
            displayIcon,
            followerFormat,
        }
    },
    data(){
        return {
        }
    },
    props:['influencer','marketerHandle','owner','display'],
    name: 'Mobile-brand-Project-breakdown-Entry-component',
    methods:{
        closeModal(){
            this.$emit('closeModal')
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../Pages/sassLoader';

.card {
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

                    img{
                        width: 70px;
                        height: 70px;
                        border-radius: 50%;
                        object-fit: cover;
                        object-position: 0px 0px;
                    }

                }

                .name-section{
                    grid-area: details-1;
                    display: flex;
                    align-items: flex-end;
                }

                .ratings-section{
                    grid-area: details-2;
                    @include flex-center;
                }

                .availability-section{
                    grid-area: details-3;

                }
            }
        }
    }
}

@include s-screens {
    #displayCard{
        max-width: 500px;
        max-height: 550px;
    }
}
</style>
