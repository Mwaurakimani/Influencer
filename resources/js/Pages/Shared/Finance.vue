<script setup>
import {storeToRefs} from 'pinia';
import {inject, onMounted, provide, reactive, ref} from 'vue';
import {authStore} from "../../Store/AuthStore";
import {usePage} from "@inertiajs/vue3";
import Modal from '../../Components/Modal.vue'
import BalanceComponent from "./FinanceComponent/BalanceComponent.vue";
import Deposit from "./FinanceComponent/Deposit.vue";
import Withdraw from "./FinanceComponent/Withdraw.vue";


const currentUser = inject('currentUser');
const auth = authStore()
if (currentUser != null) {
    auth.authenticate()
}
const {status, user} = storeToRefs(auth)
const activeTab = ref('Balance')
provide('activeTab', 'Finance')
provide('pageName', 'Finance')


const props = defineProps(['finance']);

const modal = {
    properties: reactive({
        visible: false,
        bid: null
    }),
    openModal: (payload) => {
        document.body.style.overflow = "hidden";
        modal.properties.visible = true
        modal.properties.bid = payload
    },
    closeModal: () => {
        document.body.style.overflow = "auto";
        modal.properties.visible = false
        modal.properties.bid = null
    }
}


let errorBag = reactive([])

onMounted(() => {
    // console.log(usePage().props.errors)
    if (usePage().props.errors != null) {
        if (usePage().props.errors.WorkspaceError != null) {
            errorBag[0] = usePage().props.errors
        }
    }
})

function switchTabs(payload) {
    activeTab.value = payload
}

</script>

<template>
    <teleport to=body>
                <Modal :visible="modal.properties.visible">
                </Modal>
        <MobileDashboardLayout :activePage="'Finance'"/>
    </teleport>
    <MobileDashboardHeader :backButton="true" :title="'Finance'"/>
    <DesktopDashbooardLayout>
        <nav class="">
            <ul class="w-[100%] h-[50px] items-center flex justify-around">
                <li @click.prevent="switchTabs('Balance')"
                    :class="['w-[33.3%]','text-center',activeTab === 'Balance' ? 'active-tab':'' ]">Balance
                </li>
                <li @click.prevent="switchTabs('Deposit')"
                    :class="['w-[33.3%]','text-center',activeTab === 'Deposit' ? 'active-tab':'' ]">Deposit
                </li>
                <li @click.prevent="switchTabs('Withdraw')"
                    :class="['w-[33.3%]','text-center',activeTab === 'Withdraw' ? 'active-tab':'' ]">Withdraw
                </li>
            </ul>
        </nav>
        <div class="container h-[100vh]">
            <BalanceComponent  :balance="props.finance.Balance" v-if="activeTab === 'Balance'"/>
            <Deposit :Deposit="props.finance.Deposit" v-if="activeTab === 'Deposit'"/>
            <Withdraw :Withdrawal="props.finance.Withdrawal"  v-if="activeTab === 'Withdraw'"/>
        </div>
    </DesktopDashbooardLayout>
</template>
<style lang="scss" scoped>
@import "../sassLoader";

.active-tab {
    height: 100%;
    line-height: 50px;
    background-color: var(--light-grey);
}

nav {
    box-shadow: 0 3px 2px lightgrey;
    position: sticky;
    background-color: white;
    margin-bottom: 20px;
    z-index: 500;
    li{
        height: 100%;
        line-height: 50px;
        cursor: pointer;
        &:hover{
            background-color: lightgrey;
        }
    }
}

@include s-screens{
    .active-tab{
        background-color: var(--t-pink);
        color: white;
    }
}

@media only screen and (min-width: 849px) {
}
</style>

