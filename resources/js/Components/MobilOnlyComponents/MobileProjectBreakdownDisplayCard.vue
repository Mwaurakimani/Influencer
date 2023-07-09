<template>
    <div class="bg-white mx-[auto] mb-[20px] pb-[10px]">
        <p class="p2 pl-[10px] font-bold mb-[20px] ">Project Breakdown</p>
        <section class="pl-[20px] mb-[30px]" v-for="requirement in ProjectRequirements">
            <div class="flex align-middle">
                <div class="social-media-icon-holder h-[40px] w-[40px]">
                    <img class="w-[27px] h-[27px]" style="border-radius: 50%;padding: 2px" :src="defaults.platformIcons+'/'+displayIcon(requirement.platform.name)">
                </div>
                <p class="p3 ml-[50px] " style="font-weight: bolder">{{ requirement.influencerClass.name }} ({{
                        followersFormat(requirement.influencerClass.min_count)
                    }} - {{ followersFormat(requirement.influencerClass.max_count) }})</p>
            </div>
            <ul class="text-grey-200 ">
                <li class="flex mb-[20px]">
                    <label class="w-[100px] p4 " style="font-weight: bolder">Location</Label>
                    <div>
                        <ul>
                            <li><p class="p4 text-grey-100 ">{{ requirement.post_location }}</p></li>
                        </ul>
                    </div>
                </li>
                <li class="flex items-center">
                    <label class="w-[100px] p4 " style="font-weight: bolder">Target</Label>
                    <div>
                        <ul>
                            <li v-if="ProjectType == 'Airtime'" class="flex items-center w-[210px] justify-between">
                                <p v-if="requirement.targets != null" class="p4 text-grey-100 ">{{( openTargets(requirement.targets)).unit}}</p>
                                <span v-if="requirement.targets != null" >{{( openTargets(requirement.targets)).value}}</span>
                            </li>
                            <li v-else-if="requirement.targets != null" class="flex w-[210px] items-center justify-between" v-for="(target,index) in openTargets(requirement.targets)" >
                                <p class="p4 text-grey-100 ">{{ index }}</p>
                                <span>{{target.value}}</span>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
import {reactive, ref} from "vue";
import followersFormat from "../../Helpers/followersFormat.js";
import {DEFAULTS} from "@stores/DEFAULTS";

export default {
    setup (props){

        const ProjectRequirements = reactive(props.ProjectRequirements)

        const defaults = DEFAULTS()

        function openTargets(targets) {
            return JSON.parse(targets)
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

        return {
            openTargets,
            followersFormat,
            ProjectRequirements,
            displayIcon,
            defaults
        }
    },
    name: 'Mobile-brand-Project-breakdown-Entry-component',
    props:['ProjectRequirements','ProjectType']
}
</script>
<style lang="scss" scoped>
@import './../../Pages/sassLoader';
</style>
