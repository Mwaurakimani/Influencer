<script setup>
import MobileProjectBreakdownDisplayCard
    from "../../MobilOnlyComponents/MobileProjectBreakdownDisplayCard.vue";
import followersFormat from "../../../Helpers/followersFormat.js";
import {inject} from "vue";


const props = defineProps(['project','assignmentDetails','marketerStatus','MarketerDetails'])
const project = props.project
const assignmentDetails = inject('assignmentDetails')

</script>

<template>
  <div class="ProjectDetails px-[10px]">
      <MobileProjectBreakdownDisplayCard
          :ProjectType="project.type"
          :ProjectRequirements="project.project_requirements"
          class="w-[9 9%] pt-[20px]"/>
  </div>
</template>
<script>
export default {
  name: 'ProjectDisplay'
}
</script>
<style lang="scss" scoped>
@import "../../../Pages/sassLoader";

@media only screen and (min-width: 980px) {
}

@media only screen and (min-width: 849px) {
}
</style>
