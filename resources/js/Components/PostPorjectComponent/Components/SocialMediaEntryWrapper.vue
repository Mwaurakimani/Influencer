<script setup>
import HeaderComponent from "./headerComponent.vue";
import AirtimeComponent from "../AirtimeComponent.vue";
import ImpressionsComponent from "../ImpressionsComponent.vue";
import ViewsComponent from "../ViewsComponent.vue";
import FollowsComponent from "../FollowsComponent.vue";

const props = defineProps(['platformData'])
const projectType = props.platformData

const emit = defineEmits(['updatePlatformData'])

function updatePlatformData(data){
    emit('updatePlatformData', data);
}

</script>

<template>
    <div class="card-shadowed bg-white">
        <header-component :activeTab="activeTab" v-on:changeTab="changeTab"></header-component>
        <AirtimeComponent v-if="projectType == 'Airtime'" :activeTab="activeTab" v-on:updatePlatformData="updatePlatformData"/>
        <ImpressionsComponent v-if="projectType == 'Impressions'" :activeTab="activeTab" v-on:updatePlatformData="updatePlatformData"/>
        <ViewsComponent v-if="projectType == 'Views'" :activeTab="activeTab" v-on:updatePlatformData="updatePlatformData"/>
        <FollowsComponent v-if="projectType == 'Followers'" :activeTab="activeTab" v-on:updatePlatformData="updatePlatformData"/>
    </div>
</template>
<script>
export default {
    name: 'SocialMediaEntry',
    data() {
        return {
            activeTab: 'facebook',
        }
    },
    methods: {
        changeTab(payload) {
            this.activeTab = payload
        }
    }
}
</script>
<style lang="scss" scoped>
@import './../../../Pages/sassLoader';

.card-shadowed {
    overflow: hidden;

    .body {
        background-color: var(--light-grey);

        .input-g {
            margin-bottom: 15px;
        }
    }
}


.card-shadowed {
    overflow: hidden;

}


@include s-screens {

}
</style>
