<template>
    <Link as="div" :href="route(link,project.id)" class="card-shadowed p-[5px] bg-white">
        <div>
            <h6 class="p2 text-grey-400 px-[10px] pt-[20px]">{{ project.title }}</h6>
            <p class="p-[10px] p4 ">{{ project.description }}</p>
            <p class="p2 text-grey-400 p-[10px]">Social Account Requirements</p>
            <div class="social-accounts-display pl-[20px] pb-[20px]">
                <div class="flex" v-for="projectRequirement in project.project_requirements">
                    <div class="social-media-icon-holder h-[30px] w-[30px]">
                        <img class="w-[27px] h-[27px]" style="border-radius: 50%;padding: 2px" :src="defaults.platformIcons+'/'+displayIcon(projectRequirement.platform.name)">
                    </div>
                    <p class="p3 pt-[5px] text-grey-200 ml-[10px] ">{{ projectRequirement.influencerClass.name }} ({{
                            followersFormat(projectRequirement.influencerClass.min_count)
                        }} - {{ followersFormat(projectRequirement.influencerClass.max_count) }})</p>
                </div>
            </div>
            <div class="w-[80%] m-[auto] pb-[30px] flex justify-end">
                <h6 class="text-grey-500">Ksh {{ project.budget }}</h6>
            </div>
        </div>
    </Link>
</template>
<script>
import {Link} from '@inertiajs/vue3';
import followersFormat from "../../Helpers/followersFormat.js";
import {DEFAULTS} from "@stores/DEFAULTS";

export default {
    setup() {
        const defaults = DEFAULTS()

        return {
            followersFormat,
            defaults
        }
    },
    data(){
      return {
          icons:[
              'facebook',
              'twitter',
              'instagram',
              'tiktok',
          ]
      }
    },
    methods:{
        displayIcon(name) {
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
    },
    props: ['project', 'link'],
    name: 'Mobile-brand-Project-breakdown-Entry-component'
}
</script>
<style lang="scss" scoped>
@import './../../Pages/sassLoader';

.social-accounts-display {
    & > div {
        margin-bottom: 10px;
        width: 96%;
        border-bottom: 1px solid #e3e1e1;
    }
}

.card-shadowed {
    &:hover {
        cursor: pointer;
        transition: all ease-in-out 100ms;
        transform: scale(1.02);
    }
}

</style>
