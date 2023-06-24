<script setup>
import {reactive, ref, watch} from "vue";

const emit = defineEmits(['updatePlatformData'])

const props = defineProps(['activeTab'])

const platformData = reactive([
    {
        name: 'facebook',
        selected: null,
        options: [
            'Post',
            'Live',
            'Stories',
        ],
        target:{
            followers:{
                status:false,
                value:null
            },
        }
    },
    {
        name: 'twitter',
        selected: null,
        options: [
            'Post',
            'Timeline',
        ],
        target:{
            followers:{
                status:false,
                value:null
            },
        }
    },
    {
        name: 'instagram',
        selected: null,
        options: [
            'Post',
            'Live',
            'Stories',
        ],
        target:{
            followers:{
                status:false,
                value:null
            },
        }
    },
    {
        name: 'tiktok',
        selected: null,
        options: [
            'Post',
            'Live',
        ],
        target:{
            followers:{
                status:false,
                value:null
            },
        }
    }
]);

watch(platformData, (newPlatform, oldPlatform) => {
    emit('updatePlatformData', [
        'Airtime',
        newPlatform
    ]);
})

function changeTab(payload) {
    this.activeTab = payload
}

</script>

<template>
    <div>
        <div v-for="(platform,index) in platformData" className="body" id="facebook">
            <div v-if="props.activeTab == platform.name">
                <p className="p4 p-3" style="color: var(--text-grey)">{{ instruction }}</p>
                <div className="flex mb-[20px]  mx-auto">
                    <section className="input-select pl-[10px]" style="width: calc(100% - 180px)">
                        <div v-for="option in platformData[index].options" className="input-g">
                            <input type="radio" style="border-radius: 3px" :value="option"
                                   v-model="platformData[index].selected">
                            <label className="p4"> {{ option }}</label>
                        </div>
                    </section>
                    <section className="input-select pr-[10px]">
                        <div className="w-[200px] h-[300px] bg-white"
                             style="border-radius: 8px;border: 1px solid lightgrey">
                        </div>
                    </section>
                </div>
                <p className="p4 p-3" style="color: var(--text-grey)">{{ timeInstruction }}</p>
                <div className="flex flex-wrap pl-4">
                    <div className="input-g">
                        <div class="input-g flex items-center">
                            <input type="checkbox" true-value="true" false-value="false" v-model="platformData[index].target.followers.status">
                            <p class="mx-[10px] w-[100px]">Followers</p>
                            <input class="w-[140px] text-left" type="number" min="0" placeholder="0" style="border-radius: 3px" v-model="platformData[index].target.followers.value">
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Views',
    data() {
        return {
            instruction: 'Choose the section where you would like your advertisement to appear.',
            timeInstruction: 'Please set your campaign targets below.'
        }
    },
}
</script>
<style lang="scss" scoped>
@import './../../Pages/sassLoader';

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
