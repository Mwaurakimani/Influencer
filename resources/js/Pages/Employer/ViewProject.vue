<template>
    <teleport to=body>
        <MobileDashboardLayout :activePage="'Projects'">
        </MobileDashboardLayout>
    </teleport>
    <MobileDashboardHeader :backButton="true" :title="'Projects'"/>
    <DesktopDashboardLayout>
        <div class="flex justify-end mb-[10px]" v-if="assignmentDetails && assignmentDetails.is_assigned && project.status != 'Inactive'">
            <button @click.prevent="markAsComplete()" class="purple p4">Mark Project as Complete</button>
        </div>
        <ViewProject
            :project="project"
            :display="'Marketer'"
            :marketer="marketer"
        />
    </DesktopDashboardLayout>

</template>

<script>
import ViewProject from "@Components/ViewProjectComponent/ViewProject.vue";
import {onMounted, provide, reactive} from "vue";
import {usePage} from "@inertiajs/vue3";
import {authStore} from "@stores/AuthStore";
import route from "ziggy-js/src/js/index";

export default {
    setup(props) {
        provide('activeTab', 'All Projects')
        provide('pageName', 'All Projects')

        const auth = authStore()
        const assignmentDetails = reactive({
            is_assigned: is_assigned(),
            assignment: assignment()
        })

        onMounted(() => {
            if (usePage().props.errors != null) {
                if (usePage().props.errors.WorkspaceError != null) {
                    errorBag[0] = usePage().props.errors
                }
            }
        })

        function markAsComplete() {
            if (true || confirm('Please confirm project completion.')) {

                axios.post(route('MarketerMarkAsComplete', assignmentDetails))
                    .then((response) => {
                        if (response.data.status) {
                            alert("Project was marked as complete.");
                            alert("Credits have been transferred to the influencer");
                            window.location.reload();
                        } else {
                            alert("Error marking project as complete.");
                        }
                    })
                    .catch((error) => {
                        alert("Error marking project as complete.");
                    });

            }
        }

        function is_assigned() {
            let response = false;
            if (props.project != null && props.project.bids != null) {
                for (let bid of props.project.bids) {
                    if (bid.assignment != null) {
                        response = true;
                        break;
                    }
                }
            }
            return response
        }

        function assignment() {
            let assignment = null;
            if (props.project != null && props.project.bids != null) {
                for (let bid of props.project.bids) {
                    if (bid.assignment != null) {
                        assignment = bid.assignment

                        break;
                    }
                }
            }

            return assignment
        }

        provide('assignmentDetails', assignmentDetails)


        let errorBag = reactive([])

        return {
            auth,
            is_assigned,
            assignmentDetails,
            errorBag,
            markAsComplete,
        }
    },
    components:{
        ViewProject,
    },
    props: ['project','marketer'],
    inject: ['currentUser'],
}
</script>

<style lang="scss" scoped>
@import "../sassLoader";
</style>

