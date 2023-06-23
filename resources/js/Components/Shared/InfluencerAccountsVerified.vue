<template>
    <div class="card-shadowed pb-[20px] bg-white">
        <h6 class="text-grey-400 p-[10px] mb-[5px]" >Social Accounts</h6>
        <ul class="px-[20px]">
            <li v-for="account in socialAccounts" class="flex mb-[10px] pb-[10px]" style="border-bottom: 1px solid lightgrey">
                <div v-if="account.platform.name == 'facebook'" class="icon-holder w-[30px] w-[30px] mr-[30px]">
                    <img class="w-[30px] h-[30px]" :src="defaults.platformIcons+'/facebook-icon.png'">
                </div>
                <div v-if="account.platform.name == 'twitter'" class="icon-holder w-[30px] w-[30px] mr-[30px]">
                    <img class="w-[30px] h-[30px]" :src="defaults.platformIcons+'/twitter-icon.png'">
                </div>
                <div v-if="account.platform.name == 'instagram'" class="icon-holder w-[30px] w-[30px] mr-[30px]">
                    <img class="w-[30px] h-[30px]" :src="defaults.platformIcons+'/instagram-icon.png'">
                </div>
                <div v-if="account.platform.name == 'tiktok'" class="icon-holder w-[30px] w-[30px] mr-[30px]">
                    <img class="w-[30px] h-[30px]" :src="defaults.platformIcons+'/tiktok-icon.png'">
                </div>

                <div class="details-holder mr-[40px]">
                    <p>@{{ account.username }}</p>
                    <p>{{ account.influencer_class.name }}</p>
                    <p v-if=" account.status == 'verified' " style="color: var(--light-green)">Verified</p>
                    <p v-if=" account.status == 'unverified' " style="color: var(--pale-red-1)">Unverified</p>
                </div>

            </li>
        </ul>
    </div>
</template>

<script>
import {DEFAULTS} from "@stores/DEFAULTS.js";

export default {
    setup(){
        const defaults = DEFAULTS()

      return {
          defaults
      }
    },
    props:['socialAccounts']
}
</script>

<style lang="scss" scoped>
@import './../../Pages/sassLoader';

ul{
  li:last-of-type{
      border: none !important;
  }
}

.icon-holder{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    img{
        object-fit: cover;
    }
}

@include s-screens {

}
</style>
