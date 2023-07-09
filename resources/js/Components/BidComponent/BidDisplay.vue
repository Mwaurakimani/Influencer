<template>
    <div>
        <div v-if="bids != null && bids.length > 0" class="bid-display gap-[20px] flex justify-center  flex-wrap">
            <MobileBidComponent
                v-for="bid in bids"
                :display="display"
                :bid="bid"
                class=""
            />
        </div>
        <div v-else>
            <p>No Bid Made</p>
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

@include s-screens {
    .bid-display {
        flex-direction: row;
        align-items: stretch !important ;
        max-width: 100%;

    }
}

;
</style>
