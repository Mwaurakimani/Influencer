<script setup>
import {onMounted, reactive, ref, watch} from "vue";
import login from "@/Pages/Auth/Login.vue";

const emit = defineEmits(['updatePlatformData'])

const props = defineProps(['activeTab'])

const platformData = reactive([
    {
        name: 'facebook',
        selected: null,
        options: [
            'Cover Photo',
            'Post',
            'Timeline',
            'Stories',
            'Reels'
        ],
        target: {
            unit: "Hrs",
            value: null,
        }
    },
    {
        name: 'twitter',
        selected: null,
        options: [
            'Post',
            'Timeline',
        ],
        target: {
            unit: "Hrs",
            value: null,
        }
    },
    {
        name: 'instagram',
        selected: null,
        options: [
            'Post',
            'Stories',
        ],
        target: {
            unit: "Hrs",
            value: null,
        }
    },
    {
        name: 'tiktok',
        selected: null,
        options: [
            'Post',
        ],
        target: {
            unit: "Hrs",
            value: null,
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
        <div v-for="(platform,index) in platformData" class="body" id="facebook">
            <div v-if="props.activeTab == platform.name">
                <p class="p4 p-3" style="color: var(--text-grey)">{{ instruction }}</p>
                <div class="flex mb-[20px]  mx-auto">
                    <section class="input-select pl-[10px]" style="width: calc(100% - 180px)">
                        <div v-for="option in platformData[index].options" class="input-g">
                            <input type="radio" style="border-radius: 3px" :value="option"
                                   v-model="platformData[index].selected">
                            <label class="p4"> {{ option }}</label>
                        </div>
                    </section>
                    <section class="input-select pr-[10px]">
                        <div class="w-[200px] h-[300px] bg-white"
                             style="border-radius: 8px;border: 1px solid lightgrey">
                        </div>
                    </section>
                </div>
                <p class="p4 p-3" style="color: var(--text-grey)">{{ timeInstruction }}</p>
                <div class="flex flex-wrap pl-4">
                    <div class="input-g">
                        <input type="number" min="0" placeholder="0" style="border-radius: 3px"
                               v-model="platformData[index].target.value">
                    </div>
                    <div class="input-g">
                        <select v-model="platformData[index].target.unit">
                            <option value="Hrs">Hrs</option>
                            <option value="Days">Days</option>
                            <option value="Weeks">Weeks</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Airtime',
    data() {
        return {
            instruction: 'Choose the section where you would like your advertisement to appear.',
            timeInstruction: 'Please enter the desired duration (in hours, days or\n' +
                '                    weeks) for your advertisement to be displayed on the influencer\'s platform'
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
