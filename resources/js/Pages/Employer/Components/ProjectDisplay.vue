<template>
    <div class="ProjectDetails">
<!--        :class="['w-[99%]','pt-[20px]']"-->

        <MobileProjectBreakdownDisplayCard
            :ProjectType="project.type"
            :ProjectRequirements="project.project_requirements"
            />
    </div>
</template>
<script>
import MobileProjectBreakdownDisplayCard from "../../../Components/MobilOnlyComponents/MobileProjectBreakdownDisplayCard.vue";
import followersFormat from "./../../../Helpers/followersFormat.js";
import {DEFAULTS} from "@stores/DEFAULTS";

export default {
    setup() {
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

        return {
            defaults,
            displayIcon,
            followersFormat
        }
    },

    components: {
        MobileProjectBreakdownDisplayCard
    },
    name: 'ProjectDisplay',
    props: ['project', 'assignmentDetails', 'MarketerDetails']
}
</script>
<style lang="scss" scoped>
@import "../../sassLoader";
</style>
