<script  setup>
import {Link, router, useForm} from '@inertiajs/vue3';
import MobileNavigationComponent from '../../Components/MobileNavigationComponent.vue'
import DesktopNavigationVue from '../../Components/DesktopNavigation.vue';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});

const influencerForm = useForm({
    'first_name' :null,
    'last_name' :null,
    'email' :null,
    'phone' :null,
    'password' :null,
    'confirm_password' :null,
})

function submit(){

    axios.post(route('createInfluencer'),influencerForm)
        .then((resp) => {
            if(resp.data.status){
                router.visit('login')
            }
        })
}

</script>

<template>
    <nav>
        <MobileNavigationComponent :activeNavButton="'Projects'"></MobileNavigationComponent>
        <DesktopNavigationVue :activeNavButton="'Projects'"></DesktopNavigationVue>
    </nav>
    <header>
        <div class="modile-header">
            <div class="container">
                <section>
                    <h1>Join Marketers</h1>
                </section>
            </div>
        </div>
    </header>
    <div class="content-area">
        <div class="container">
            <p class="mb-[20px]" style="text-align: center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                asperiores ea neque quae eaque possimus vel amet quisquam fugiat sequi repudiandae ex, perferendis minus
                illum. Sit autem nesciunt totam deserunt!</p>
            <form action="" @submit.prevent="submit">
                <h1>Registration Form</h1>
                <div class="form-content">
                    <section>
                        <div class="splitter">
                            <div class="input-group">
                                <label for="">First Name</label>
                                <input type="text" v-model="influencerForm.first_name">
                            </div>
                            <div class="input-group">
                                <label for="">Last Name</label>
                                <input type="text" v-model="influencerForm.last_name">
                            </div>
                        </div>
                        <div class="input-group">
                            <label for="">Email</label>
                            <input type="email" v-model="influencerForm.email">
                        </div>
                        <div class="input-group">
                            <label for="">Phone</label>
                            <input type="tel" v-model="influencerForm.phone">
                        </div>
                        <div class="input-group">
                            <label for="">Password</label>
                            <input type="password" v-model="influencerForm.password">
                        </div>
                        <div class="input-group">
                            <label for="">Confirm Password</label>
                            <input type="password" v-model="influencerForm.confirm_password">
                        </div>
                    </section>
                </div>
                <div class="button-section">
                    <button type="submit">Join</button>
                </div>
            </form>
        </div>
    </div>
    <footer>

    </footer>
</template>

<style lang="scss" scoped>
* {
    font-size: 0.96em;
}

header {
    width: 100%;
    box-shadow: 0 0 6px rgb(182, 182, 182);
    margin-bottom: 20px;
    min-height: 80px;

    section {
        padding: 10px 10px;
        display: flex;
        justify-content: space-between;

        h1 {
            font-weight: 800;
            font-size: 1.3em;
        }

        .actions {
            button {
                border-radius: 3px;
                font-size: 0.9em;
                padding: 2px;
                border: 1px solid rgb(201, 201, 201);
                background-color: rgb(226, 226, 226);
                margin: 0px 5px;
            }
        }

        p {
            color: grey;
        }
    }
}

.container {
    display: flex;
    flex-wrap: wrap;

    button {
        border: 1px solid orange;
        margin: 20px auto;
        padding: 10px 30px;
        border-radius: 4px;
        font-weight: 700;
        color: orange;

        &:active,
        &:hover {
            background-color: orange;
            color: white;
        }
    }
}

.content-area {
    max-width: 1200px;
    margin: auto;
}

form {
    border-radius: 4px;
    background-color: white;
    padding: 20px;
    width: 100%;
    box-shadow: 0 0 6px grey;
    margin-bottom: 40px;

    h1 {
        font-size: 1.1em;
        font-weight: 700;
        margin-bottom: 10px;
        text-decoration: underline;
    }
    .form-content{
        section:nth-of-type(1){
            padding-bottom: 20px;
            margin-bottom: 20px;
            border-bottom:1px solid rgb(209, 209, 209);
        }
        .input-group{
            margin-bottom: 10px;
        }
        label{
            margin-bottom: 5px;
            width: 100%;
        }
        input,select{
            border-radius: 3px !important;
            width: 100%;
            height: 35px;
            padding: 5px;
        }
    }
    button{
        padding:10px 15px
    }
}

@media only screen and (min-width: 980px) {
    header {
        section {
            padding: 20px 10px;

            h1 {
                font-size: 2em;
            }
        }
    }

    form{
        h1{
            font-size: 1.5em;
            text-decoration: underline;
            margin-bottom: 20px;
        }
        .form-content{
            display: flex;
            justify-content: center;
        }
        section{
            padding: 30px;
            width:40%;
            border:none;

            .input-group{
                margin: auto;
            }

            .splitter{
                display: flex;
                .input-group:nth-of-type(1){
                    margin-right: 10px;
                }
            }
        }

        section:nth-of-type(1){
            border:none !important;
            border-right: 1px solid rgb(209, 209, 209) !important;
        }

        .button-section{
            padding:10px 20px !important;
            display: flex;
        }
    }
}

@media only screen and (min-width: 849px) {}
</style>
