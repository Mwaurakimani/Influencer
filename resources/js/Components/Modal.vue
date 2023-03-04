<script setup>


defineProps(['visible'])

</script>

<template>
    <div :class="['modal-element',visible ? 'visible':'']" @click.prevent>
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    .modal-element{
        display:none;
        opacity:0;
        position:fixed;
        top:0px;
        left:0px;
        width:100vw;
        height:100vh;
        background-color: rgba(26, 26, 26, 0.322);
        z-index: -1000;
    }

    .visible{
        display:flex !important;
        opacity: 1 !important;
        z-index: 3000 !important;
    }
</style>