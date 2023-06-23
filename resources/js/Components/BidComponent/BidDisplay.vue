<template>
    <div>
        <div v-if="bids != null && bids.length > 0" class="bid-display gap-[20px] flex justify-center  flex-wrap">
            <MobileBidComponent
                v-for="bid in bids"
                :display="display"
                :bid="bid"
                class="comp w-[90%] md:w-[350px] mb-[20px]"
            />
        </div>
        <div v-else>
            <p>No Bid was Made</p>
        </div>
    </div>
</template>
<script>
import MobileBidComponent from "./MobileBidComponent.vue";

export default {
    name: 'bidDisplay',
    props: ['bids','display'],
    components:{
        MobileBidComponent
    }
}
</script>
<style lang="scss" scoped>
@import "../../Pages/sassLoader";

.comp:last-of-type {
    margin-bottom: 90px;
}

@include s-screens {
    .bid-display {
        flex-direction: row;
        align-items: stretch !important ;
        max-width: 100%;

    }
}

;
</style>
