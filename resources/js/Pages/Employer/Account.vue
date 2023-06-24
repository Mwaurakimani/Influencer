<template>
    <teleport to="body">
        <MobileDashboardLayout :activePage="'Account'"/>
    </teleport>
    <MobileDashboardHeader :title="'Account'"/>
    <DesktopDashbooardLayout>
        <div class="flex gap-[20px] flex-wrap" style="height: fit-content">
            <MarketerAboutCard v-if="mode != 'editMode'"  :user.camel="userForm" class="w-[100%] mx-[auto]">
                <div class="intro">
                    <p class="p2" style="text-align: center"> {{ userForm.first_name }}  {{ userForm.last_name }}</p>
                    <div class="h-[25px] flex items-center justify-center" style="width: fit-content">
                        <div class="star-icon w-[100%] h-[100%] p-[3px]">
                            <img style="max-width: 20px;max-height: 20px" :src="defaults.systemIcons+'/icons8-star-100.png'">
                        </div>
                        <p class="pt-[3px]">4.5</p>
                    </div>
                    <!--        TODO::add status-->
                    <p class="p3 mb-[5px] " style="text-align: center;color: var(--light-green)">Available</p>
                    <span @click.prevent="changeMode('editMode')" as="span" class="icon w-[30px] h-[30px] p-[5px] ">
                        <img :src="defaults.systemIcons+'/icons8-pencil-96.png'">
                    </span>
                </div>
            </MarketerAboutCard>
            <div v-if="mode == 'editMode'" class=" pr-[10px] flex justify-end items-end w-[100%] gap-[10px]" >
                <button class="px-[20px] py-[10px] purple" @click.prevent="changeMode('viewMode')">View</button>
                <button class="px-[20px] py-[10px] purple" @click.prevent="changeMode('viewMode')">Cancel</button>
            </div>
            <section class="w-[100%] h-[100%] flex flex-wrap md:flex-nowrap gap-[10px]">
                <section v-if="mode == 'editMode'" class="card-shadowed h-[100%] w-[100%] md:w-[60%] mb-[20px]  bg-white">
                    <h5 class="p-[10px]" >Account</h5>
                    <form class="p-[10px] w-[100%] flex flex-col gap-[5px]" action="" @submit.prevent="updateUser()">
                        <article class="flex">
                            <div class="input-group w-[50%]">
                                <label>First Name</label>
                                <input class="w-[100%]" type="text" v-model="userForm.first_name">
                            </div>
                            <div class="input-group w-[50%]">
                                <label>Last Name</label>
                                <input class="w-[100%]" type="text" v-model="userForm.last_name">
                            </div>
                        </article>
                        <div class="input-group w-[100%]">
                            <label>Email</label>
                            <input type="text" v-model="userForm.email">
                        </div>
                        <div class="input-group w-[100%] mb-[50px]">
                            <label>Phone</label>
                            <input type="text" v-model="userForm.phone">
                        </div>
                        <div class="form-action flex w-[100%] align-middle justify-between">
                            <button class="px-[20px] py-[10px] purple" type="submit">Update Account</button>
                            <button class="px-[20px] py-[10px] purple" type="reset">Reset Form</button>
                        </div>
                    </form>

                </section>
                <section v-if="mode == 'editMode'" class="card-shadowed h-[100%] w-[100%] md:w-[39%] mb-[70px] bg-white">
                    <h5 class="p-[10px]" >Password</h5>
                    <form class=" p-[10px] w-[100%] flex gap-[10px] flex-wrap" action="" @submit.prevent="validatePassword()">
                        <div class="input-group w-[100%]">
                            <label>Current Password</label>
                            <input type="text" v-model="userPassword.currentPassword">
                            <span style="color: red">{{ this.$attrs.errors.currentPassword }}</span>

                        </div>
                        <div class="input-group w-[100%] mb-[20px]">
                            <label>New Password</label>
                            <input type="text" v-model="userPassword.newPassword">
                        </div>
                        <div class="input-group w-[100%] mb-[20px]">
                            <label>Confirm New Password</label>
                            <input type="text" v-model="userPassword.confirmPassword">
                            <span style="color: red">{{ userPassword.confirmPasswordError }}</span>
                            <span style="color: red">{{ this.$attrs.errors.confirmPasswordError }}</span>
                        </div>
                        <div class="form-action flex w-[100%] align-middle justify-between">
                            <button class="px-[20px] py-[10px] purple" type="submit">Update Password</button>
                            <button class="px-[20px] py-[10px] purple" type="reset">Reset Form</button>
                        </div>
                    </form>
                </section>
            </section>
        </div>
    </DesktopDashbooardLayout>
</template>

<script>
import {Link, useForm} from '@inertiajs/vue3';
import MobileDashboardHeader from '../../Layouts/DashboardLayout/Components/MobileDashboardHeader.vue';
import MarketerAboutCard from "../../Components/Shared/MarketerAboutCard.vue";
import authenticate from "../Shared/authenticate.js";
import {authStore} from "@stores/AuthStore.js";
import {ref} from "vue";
import {DEFAULTS} from "@stores/DEFAULTS.js";

export default {
    setup(){
        const auth = authStore();
        const authenticated = ref(false);
        const defaults = DEFAULTS()

        return {
            auth,
            authenticated,
            defaults
        }
    },
    props:['user','marketer','company','requestStatus','message'],
    inject:['currentUser'],
    provide:{
        activeTab:'Account',
        pageName:'Account'
    },
    components:{
      MobileDashboardHeader,
      MarketerAboutCard
    },
    data(){
        return {
            userForm:useForm({
                ...this.user
            }),
            userPassword:useForm({
                currentPassword:null,
                currentPasswordError:this.$attrs.errors.currentPassword ? this.$attrs.errors.currentPassword : null,
                newPassword:null,
                confirmPassword:null,
                confirmPasswordError: null
            }),
            mode:"viewMode"
        }
    },
    methods:{
        updateUser(){
            axios.post(route('updateEmployer',['MarketerUpdate',this.user.id]),this.userForm)
                .then((resp) => {
                    if (resp.data.status == true){
                        alert(resp.data.message)
                    }
                }).catch((err) => {
                console.log(err)
                alert("Error Updating Your account")
            })
        },
        validatePassword(){
            if (this.userPassword.confirmPassword != this.userPassword.newPassword){
                this.userPassword.confirmPasswordError = "Password entered does not match"
            }else {
                this.userPassword.post(route('updateUserPassword',[this.user.id]))
            }
        },
        changeMode(mode){
            this.mode = mode
        }
    },
    beforeMount() {
        authenticate();

        if (this.currentUser == null || this.currentUser == 'undefined'){
            window.location.href = window.location.href
        }
    },
    mounted() {
        if (this.requestStatus){
            alert(this.requestStatus)
        }

        if (this.message){
            console.log(this.$props.message)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../sassLoader";

.input-group{
    margin-bottom: 15px;
    label{
        display: block;
        width: 100%;
    }

    input{
        width: 100%;
        border-radius: 5px !Important;
    }
}

.intro {
    padding: 10px;
    height: 100px;
    display: grid;
    grid-template-columns: 1fr 40px;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
    "name edit"
    "rating edit"
    "status edit";

    p:nth-of-type(1) {
        text-align: left;
        width: fit-content;
        grid-area: name;
    }

    p:nth-of-type(2) {
        text-align: left;
        width: fit-content;
        grid-area: status;
    }

    div{
        grid-area: rating;
    }

    span{
        grid-area: edit;
    }
}

@include s-screens{
    form{
        .input-group{
            margin-bottom: 20px;
            label{
                width: 100%;
                margin-bottom: 10px;
            }
            input{
                border-radius: 5px !important;
                width: 100%;
            }
        }
    }
}

</style>
