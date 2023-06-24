<script setup>
import {reactive, ref, watch} from "vue";
import {DEFAULTS} from "@stores/DEFAULTS.js";

const activeTab = ref('facebook');

const props = defineProps([
    'supportedPlatforms',
    'edit'
])

const supportedPlatforms = props.supportedPlatforms.social_account

const defaults = DEFAULTS()

watch(
    supportedPlatforms,
    (newValue, oldValue) => {
        for (let platform in supportedPlatforms) {
            let name = platform
            for (let platformData in supportedPlatforms[name].platformDetail) {
                supportedPlatforms[name].platformDetail[platformData].status = (() => {
                    return !(supportedPlatforms[name].platformDetail[platformData].value === 'undefined' ||
                        supportedPlatforms[name].platformDetail[platformData].value == null ||
                        supportedPlatforms[name].platformDetail[platformData].value === 0);
                })()
            }
        }
    }
)

for (let platform in supportedPlatforms) {
    let name = platform

    for (let platformData in supportedPlatforms[name].platformDetail) {

        supportedPlatforms[name].platformDetail[platformData].status = (() => {

            return !(supportedPlatforms[name].platformDetail[platformData].value === 'undefined' ||
                supportedPlatforms[name].platformDetail[platformData].value == null ||
                supportedPlatforms[name].platformDetail[platformData].value === 0);
        })()
    }
}


function changeTab(payload) {
    activeTab.value = payload
}

</script>

<template>
    <div class="card-shadowed bg-white">
        <div class="header h-[40px] flex">
            <div
                @click.prevent="changeTab('facebook')"
                class="social-media-icon-holder h-[40px] w-[40px]"
                :class="{'active' : activeTab == 'facebook'}"
            >
                <img class="w-[30px] h-[30px]" :src="defaults.platformIcons+'/facebook-icon.png'">
            </div>
            <div
                @click.prevent="changeTab('twitter')"
                class="social-media-icon-holder h-[40px] w-[40px]"
                :class="{'active' : activeTab == 'twitter'}"
            >
                <img class="w-[30px] h-[30px]" :src="defaults.platformIcons+'/twitter-icon.png'">
            </div>
            <div
                @click.prevent="changeTab('instagram')"
                class="social-media-icon-holder h-[40px] w-[40px]"
                :class="{'active' : activeTab == 'instagram'}"
            >
                <img class="w-[30px] h-[30px]" :src="defaults.platformIcons+'/instagram-icon.png'">
            </div>
            <div
                @click.prevent="changeTab('tiktok')"
                class="social-media-icon-holder h-[40px] w-[40px]"
                :class="{'active' : activeTab == 'tiktok'}"
            >
                <img class="w-[30px] h-[30px]" :src="defaults.platformIcons+'/tiktok-icon.png'">
            </div>
        </div>
        <section v-for="(platform,platformKey) in supportedPlatforms">
            <div  v-if="activeTab === platformKey"
                 class="body mb-[20px]" id="facebook">
                <div class="input-group flex p-[20px]" style="flex-direction: column">
                    <label class="mb-[10px]" for="">Username</label>
                    <input style="border-radius: 5px !important;" v-model="supportedPlatforms[platformKey].username">
                </div>
                <div class="input-group flex p-[20px]" style="flex-direction: column">
                    <label class="mb-[10px]" for="">Influencer Class</label>
                    <select style=" width: 100%;border-radius: 5px !important;"
                            v-model="supportedPlatforms[platformKey].influencerClass">
                        <option value="Nano-Influencer">Nano-Influencer (1K - 10K )</option>
                        <option value="Micro-Influencer">Micro-Influencer (10K - 100K )</option>
                        <option value="Macro-Influencer">Macro-Influencer (100K - 500K )</option>
                        <option value="Meta-Influencer">Meta-Influencer (500K - 1M )</option>
                        <option value="Mega-Influencer">Mega-Influencer (1M+)</option>
                    </select>
                </div>
                <hr class="mb-[20px] bg-grey">
            </div>
        </section>
        <div  v-if="props.edit != null && props.edit==true ">
            <button class="button purple m-[10px]" @click.prevent="$emit('removeAccount',activeTab)">Remove Account</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Mobile-brand-Project-breakdown-Entry-component',
}
</script>
<style lang="scss" scoped>
@import './../../Pages/sassLoader';

.card-shadowed {
    overflow: hidden;

    .header {
        border-bottom: 1px solid var(--light-grey);
        align-items: center;

        .social-media-icon-holder {
            @include flex-center;

            img {
                border-radius: 50%;
            }
        }

        .active {
            background-color: var(--light-grey);
        }
    }

    .body {
        background-color: var(--light-grey);
    }
}


.card-shadowed {
    overflow: hidden;

}

.input-g {
    input[type="checkbox"] {
        width: 20px;
        height: 20px;
    }

    label {
        max-width: 100px;
    }
}

@include s-screens {

}
</style>
