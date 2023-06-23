<template>
    <div class="header h-[40px] items-center flex">
        <div
            @click.prevent="changeTab('facebook')" :class="{'active' : activeTab == 'facebook'}"
        >
            <img :src="defaults.platformIcons+'/facebook-icon.png'">
        </div>
        <div
            @click.prevent="changeTab('twitter')" :class="{'active' : activeTab == 'twitter'}"
        >
            <img :src="defaults.platformIcons+'/twitter-icon.png'">
        </div>
        <div
            @click.prevent="changeTab('instagram')" :class="{'active' : activeTab == 'instagram'}"
        >
            <img :src="defaults.platformIcons+'/instagram-icon.png'">
        </div>
        <div
            @click.prevent="changeTab('tiktok')" :class="{'active' : activeTab == 'tiktok'}"
        >
            <img :src="defaults.platformIcons+'/tiktok-icon.png'">
        </div>
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
    props:['activeTab'],
    name: "headerComponent",
    methods: {
        changeTab(active){
            this.$emit("changeTab", active)
        }
    }
}
</script>

<style scoped lang="scss">
.header {
    border-bottom: 1px solid var(--light-grey);

    &>div {
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
    }

    .active {
        background-color: var(--light-grey);
    }
}

</style>
