<script setup>
import { counterStore } from '../Store/stores';
import { storeToRefs } from 'pinia';

import { ref } from 'vue';

import MobileNavigationComponent from '../Components/MobileNavigationComponent.vue'
import DesktopNavigationVue from '../Components/DesktopNavigation.vue';
import InfluencerCard from '../Components/InfluencerCard.vue';
import ProjectCard from '../Components/ProjectsCard.vue';
import InfluencerCardBidView from '../Components/InfluencerCardBidView.vue';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});

const modalVisible = ref(true)

console.log(modalVisible);

function closeModal(){
    document.body.style.overflow = "auto";
    modalVisible.value = false
}

function openModal(){
    document.body.style.overflow = "hidden";
    modalVisible.value = true
}

</script>

<template>
    <teleport to=body>
        <modal :visible="modalVisible">
            <button class="text-white" @click="closeModal" >close</button>
        </modal>
    </teleport>
    <nav>
        <MobileNavigationComponent :activeNavButton="'Projects'"></MobileNavigationComponent>
        <DesktopNavigationVue :activeNavButton="'Projects'"></DesktopNavigationVue>
    </nav>
    <header>
        <div class="modile-header">
            <div class="container">
                <section>
                    <h1>Projects</h1>
                </section>
            </div>
        </div>
    </header>
    <div class="content-area">
        <div class="container">
            <div class="top-section">
                <div class="left-section">
                    <div class="cont-bid">
                        <label>Bid</label>
                        <p>1</p>
                    </div>
                    <div class="cont-budget">
                        <label>Budget</label>
                        <p>Ksh 15,000</p>
                    </div>
                    <div class="cont-location">
                        <label>Location</label>
                        <p>Nairobi</p>
                    </div>
                </div>
                <div class="right-section">
                    <button>Bid</button>
                    <p class="desktop-date">Date Posted : <span>March 3, 2020</span></p>
                </div>
            </div>
            <div class="description-section">
                <h3>Description</h3>
                <p style="color:grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eum libero praesentium vitae, ut fuga dolorum assumenda repellendus expedita doloribus quod quia veritatis consequatur incidunt officiis similique tempore voluptas rem.</p>
            </div>
        </div>

        <div class="container bidders-container" style="box-shadow:none">
            <InfluencerCardBidView @click="openModal"></InfluencerCardBidView>
            <InfluencerCardBidView @click="openModal"></InfluencerCardBidView>
            <InfluencerCardBidView @click="openModal"></InfluencerCardBidView>
            <InfluencerCardBidView @click="openModal"></InfluencerCardBidView>
            <InfluencerCardBidView @click="openModal"></InfluencerCardBidView>
        </div>
    </div>
    <footer>

    </footer>
</template>

<style lang="scss" scoped>
*{
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

.content-area{
    padding:10px;
    .container{
    border-radius: 3px;
        padding:10px;
        box-shadow: 0 0 6px grey;
        margin-bottom: 20px;
        .top-section{
            display:flex;
            justify-content: space-between;
            margin-bottom: 10px;

            .left-section{
                &>div{
                    display:flex;
                    margin-bottom: 5px;
                    label{
                        width:70px;
                        font-weight:600 ;
                    }
                }                
            }

            .right-section{
                display:flex;
                flex-direction: column;
                align-items: flex-end;
                button{
                    margin-bottom: 10px;
                    border:1px solid orange;
                    padding:5px 20px;
                    color:orange;
                    border-radius: 4px;
                    transition:all ease 100ms;
                    &:active{
                        background-color: orange;
                        color:white;
                    }
                }
                .desktop-date{
                    font-size: 0.8em;
                    font-weight: 800;
                }
            }
        }
        &>div{
            margin-bottom: 10px;
            h3{
                font-size: 1em;
                font-weight: 800;
                margin-bottom: 5px;
            }
        }
    }
}

.bidders-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    &>div{
        margin: 10px;
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
}

@media only screen and (min-width: 849px) {}
</style>