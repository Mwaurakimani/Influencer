<script setup>
import { counterStore } from '../Store/stores';
import { storeToRefs } from 'pinia';
import MobileNavigationComponent from '../Components/MobileNavigationComponent.vue'
import DesktopNavigationVue from '../Components/DesktopNavigation.vue';
import InfluencerCard from '../Components/InfluencerCard.vue';
import ProjectCard from '../Components/ProjectsCard.vue';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});

</script>

<template>
    <nav>
        <MobileNavigationComponent></MobileNavigationComponent>
        <DesktopNavigationVue></DesktopNavigationVue>
    </nav>
    <div class="banner">
        <div class="over-lay">
            <button>Join Our Influencer Community</button>
            <button>Join Our Marketer Community</button>
        </div>
    </div>
    <div class="container how-it-works">
        <h2>How it works</h2>
        <ul>
            <li>
                <div class="icon-holder">
                    <img src="/storage/addvert.png" alt="">
                </div>
                <p>Welcome to Kenyas best influencer hub. Where you can post and receive ads.</p>
            </li>
            <li>
                <div class="icon-holder">
                    <img src="/storage/projects.png" alt="">
                </div>
                <p>We siplify searching for the best adverts and influencers to ensure you get exactly what you need.</p>
            </li>
            <li>
                <div class="icon-holder">
                    <img src="/storage/get-updates.png" alt="">
                </div>
                <p>Get the the right exposer for your product hustle free</p>
            </li>
            <li>
                <div class="icon-holder">
                    <img src="/storage/secure-payment.png" alt="">
                </div>
                <p>Trust that your money is safe throughout the whole process untill the project is completed</p>
            </li>
            <li>
                <div class="icon-holder">
                    <img src="/storage/release-payment.png" alt="">
                </div>
                <p>Payment is released once the project is completed</p>
            </li>
        </ul>
    </div>
    <div class="container available-influencers">
        <h2>Available Influencers</h2>
        <ul>
            <InfluencerCard></InfluencerCard>
            <InfluencerCard></InfluencerCard>
            <InfluencerCard></InfluencerCard>
            <InfluencerCard></InfluencerCard>
        </ul>
    </div>
    <div class="container available-influencers available-projects">
        <h2>Available Projects</h2>
        <ul>
            <ProjectCard :key="1"></ProjectCard>
            <ProjectCard :key="2"></ProjectCard>
            <ProjectCard :key="3"></ProjectCard>
        </ul>
    </div>
    <footer>

    </footer>

</template>

<style lang="scss" scoped>
nav {
    width: 100%;
    position: sticky;
    top: 0px;
    z-index: 1000;
    box-shadow: 0 0 6px grey;
}

.banner {
    width: 100%;
    height: calc(100vh - 60px);
    background-color: red;
    background-image: url('/storage/mobile-banner.jpg');
    background-position: center;

    .over-lay {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        button {
            background-color: orange;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 0 3px rgb(172, 172, 172);
            margin: 20px 0px;
            color: white;
        }
    }
}

.how-it-works{
    padding: 40px 0px;
    h2{
        font-size: large;
        font-weight: 700;
        margin-bottom: 20px;
        text-align: center;
    }
    ul{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 20px;
        li{
            margin-bottom: 15px;
            padding: 10px;
            .icon-holder{
                margin: auto;
                padding: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            p{
                text-align: center;
                max-width: 150px;
                font-size: smaller;
            }
        }
    }
}

.available-influencers{
    padding: 40px 0px;
    h2{
        font-size: large;
        font-weight: 700;
        margin-bottom: 20px;
        text-align: center;
    }
    ul{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 20px;
        gap: 8px;
    }
}

footer{
    height:300px;
    background-color: rgb(66, 66, 66);
}

@media only screen and (min-width: 980px) {
    .banner {
        background-image: url('/storage/desktop-banner.jpg');

        .over-lay {
            flex-direction: row !important;

            button {
                margin: 0px 30px;
            }
        }

    }



}
@media only screen and (min-width: 849px) {

    .available-influencers{
        ul{
            max-height: 300px;
            overflow: hidden;
        }
    }

    .available-projects{
        ul{
            padding: 5px;
            max-height: fit-content;
        }
    }
}
</style>
