<script setup>
import {Link, router, useForm} from '@inertiajs/vue3';
import MobileNavigationComponent from '../../Components/MobileNavigationComponent.vue'
import DesktopNavigationVue from '../../Components/DesktopNavigation.vue';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});


const projectForm = useForm({
    title: null,
    description: null,
    budget: null,
    location: null,
    notes: null,
    runtime: null,
    metric: null,
    position: null,
    kpi: null,
    social: [
        {
            name: "Facebook",
            active: false,
            influencerClass: null,
            targetValue: null
        },
        {
            name: "Twitter",
            active: false,
            influencerClass: null,
            targetValue: null
        },
        {
            name: "Instagram",
            active: false,
            influencerClass: null,
            targetValue: null
        }
    ]
})

function submitProject() {
    axios.post(route('PostProject'), projectForm).then((resp) => {
        if(resp){
            router.visit(route("ViewOwnedProject",{
                id:resp.data.project.id
            }))
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
                    <h1>Post Project</h1>
                </section>
            </div>
        </div>
    </header>
    <div class="content-area">
        <div class="container">
            <!-- <p class="mb-[20px]" style="text-align: center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                        asperiores ea neque quae eaque possimus vel amet quisquam fugiat sequi repudiandae ex, perferendis minus
                        illum. Sit autem nesciunt totam deserunt!</p> -->
            <form @submit.prevent="submitProject">
                <!-- <h1>Registration Form</h1> -->
                <div class="form-content">
                    <section>
                        <div class="input-group">
                            <label for="">Title</label>
                            <input type="text" v-model="projectForm.title">
                        </div>
                        <div class="input-group">
                            <label for="">Description</label>
                            <textarea v-model="projectForm.description"></textarea>
                        </div>
                        <div class="input-group">
                            <label for="">Budget</label>
                            <input type="number" v-model="projectForm.budget">
                        </div>
                        <div class="input-group">
                            <label for="">Key Performance Indicator(KPI)</label>
                            <select v-model="projectForm.kpi">
                                <option value="Airtime">Airtime</option>
                                <option value="Impressions">Impressions</option>
                                <option value="Content_Reach">Content Reach</option>
                                <option value="Account_Growth">Account Growth</option>
                                <option value="Promo_Code">Promo Code</option>
                            </select>
                        </div>
                        <div class="input-group">
                            <label for="">Project Runtime</label>
                            <div class="text-group flex">
                                <input type="number" class="mr-[10px]" v-model="projectForm.runtime">
                                <select v-model="projectForm.metric">
                                    <option value="Hrs">Hr(s)</option>
                                    <option value="Week">Week(s)</option>
                                    <option value="Month">Month(s)</option>
                                </select>
                            </div>
                        </div>
                        <div class="input-group" v-if="true">
                            <label for="">Display Position</label>
                            <select v-model="projectForm.position">
                                <option value="Airtime">Airtime</option>
                                <option value="Impressions">Impressions</option>
                                <option value="Content_Reach">Content Reach</option>
                                <option value="Account_Growth">Account Growth</option>
                                <option value="Promo_Code">Promo Code</option>
                            </select>
                        </div>
                        <div class="input-group">
                            <label for="">Notes</label>
                            <textarea v-model="projectForm.notes"></textarea>
                        </div>

                    </section>
                    <section>
                        <div class="input-group">
                            <label for="">Location</label>
                            <input type="text" v-model="projectForm.location">
                        </div>
                        <div class="input-group" id="platform-select">
                            <label for="">Platform Requirements</label>
                            <div>
                                <article>
                                    <section>
                                        <input
                                            type="checkbox" v-model="projectForm.social[0].active"
                                            true-value=true
                                            false-value=false
                                        >
                                        <label>Facebook</label>
                                    </section>
                                    <section class="flex">
                                        <label>Class</label>
                                        <select v-model="projectForm.social[0].influencerClass">
                                            <option value="Nano-Influencer">Nano Influencer : 1K - 10K</option>
                                            <option value="Micro-Influencer">Micro Influencer : 10K - 50K</option>
                                            <option value="Macro-Influencer">Macro Influencer : 50K - 200K</option>
                                            <option value="Mega-Influencer">Mega Influencer : 200K - 1M</option>
                                        </select>
                                    </section>
                                    <section class="flex">
                                        <label>Target</label>
                                        <input type="number" v-model="projectForm.social[0].targetValue">
                                    </section>
                                </article>
                                <article>
                                    <section>
                                        <input type="checkbox" v-model="projectForm.social[1].active"
                                               true-value=true
                                               false-value=false>
                                        <label>Twitter</label>
                                    </section>
                                    <section class="flex">
                                        <label>Class</label>
                                        <select v-model="projectForm.social[1].influencerClass">
                                            <option value="Nano-Influencer">Nano Influencer : 1K - 10K</option>
                                            <option value="Micro-Influencer">Micro Influencer : 10K - 50K</option>
                                            <option value="Macro-Influencer">Macro Influencer : 50K - 200K</option>
                                            <option value="Mega-Influencer">Mega Influencer : 200K - 1M</option>
                                        </select>
                                    </section>
                                    <section class="flex">
                                        <label>Target</label>
                                        <input type="number" v-model="projectForm.social[1].targetValue">
                                    </section>
                                </article>
                                <article>
                                    <section>
                                        <input
                                            type="checkbox" v-model="projectForm.social[2].active"
                                            true-value=true
                                            false-value=false
                                        >
                                        <label>Instagram</label>
                                    </section>
                                    <section class="flex">
                                        <label>Class</label>
                                        <select v-model="projectForm.social[2].influencerClass">
                                            <option value="Nano-Influencer">Nano Influencer : 1K - 10K</option>
                                            <option value="Micro-Influencer">Micro Influencer : 10K - 50K</option>
                                            <option value="Macro-Influencer">Macro Influencer : 50K - 200K</option>
                                            <option value="Mega-Influencer">Mega Influencer : 200K - 1M</option>
                                        </select>
                                    </section>
                                    <section class="flex">
                                        <label>Target</label>
                                        <input type="number" v-model="projectForm.social[2].targetValue">
                                    </section>
                                </article>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="button-section">
                    <button type="submit">Post</button>
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

    .form-content {
        section:nth-of-type(1) {
            padding-bottom: 20px;
            margin-bottom: 20px;
            border-bottom: 1px solid rgb(209, 209, 209);
        }

        .input-group {
            margin-bottom: 20px;
        }

        label {
            margin-bottom: 5px;
            width: 100%;
        }

        input,
        select,
        textarea {
            border-radius: 3px !important;
            width: 100%;
            height: 35px;
            padding: 5px;
        }

        textarea {
            height: 200px;
        }
    }

    button {
        padding: 10px 15px
    }
}

#platform-select {

    & > div {
        width: 100%;
        display: flex;
        flex-direction: column;

        & > article {
            display: flex;
            flex-wrap: wrap;

            & > section {
                width: 100%;
                border: none !important;

                & > select {
                    width: 100%;
                }
            }

            & > section:nth-of-type(1) {
                width: 100%;
                display: flex;
                align-items: center;
                margin-bottom: 0px;

                & > input {
                    width: 15px;
                    height: 15px;
                    margin-right: 5px
                }

                label {
                    padding-top: 7px;
                }
            }
        }
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

    form {
        h1 {
            font-size: 1.5em;
            text-decoration: underline;
            margin-bottom: 20px;
        }

        .form-content {
            display: flex;
            justify-content: center;
        }

        section {
            padding: 30px;
            width: 40%;
            border: none;

            .input-group {
                margin: auto;
            }

            .splitter {
                display: flex;

                .input-group:nth-of-type(1) {
                    margin-right: 10px;
                }
            }
        }

        section:nth-of-type(1) {
            border: none !important;
            border-right: 1px solid rgb(209, 209, 209) !important;
        }

        .button-section {
            padding: 10px 20px !important;
            display: flex;
        }
    }
}

#platform-select {
    padding: 10px;

    section {
        padding: 10px !important;
    }
}

@media only screen and (min-width: 849px) {
}
</style>
