<script setup>
import { counterStore } from '../Store/stores';
import { storeToRefs } from 'pinia';
import MobileNavigationComponent from '../Components/MobileNavigationComponent.vue'
import DesktopNavigationVue from '../Components/DesktopNavigation.vue';
import InfluencerCard from '../Components/InfluencerCard.vue';
import ProjectCard from '../Components/ProjectsCard.vue';

const props = defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    projects:Object
});

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
                    <h1>Projects</h1>
                    <div class="actions">
                        <button>Filters</button>
                        <button>Sort</button>
                    </div>
                </section>
                <section>
                    <p>100 Projects found</p>
                </section>
            </div>
        </div>
    </header>
    <div class="content-area">
        <div class="mobile-content-area">
            <div class="container" v-for="project in props.projects">
                <ProjectCard :key="project.id" :project="project"></ProjectCard>
            </div>
            <div class="container">
                <div class="pagination">

                </div>
            </div>
        </div>
    </div>
    <footer>

    </footer>
</template>

<style lang="scss" scoped>
header {
    width: 100%;
    box-shadow: 0 0 6px rgb(182, 182, 182);
    margin-bottom: 20px;
    section{
        padding: 10px 10px;
        display: flex;
        justify-content: space-between;
        h1{
            font-weight: 800;
            font-size: 1.3em;
        }

        .actions{
            button{
                border-radius: 3px;
                font-size: 0.9em;
                padding:2px;
                border:1px solid rgb(201, 201, 201);
                background-color: rgb(226, 226, 226);
                margin: 0px 5px;
            }
        }
        p{
            color: grey;
        }
    }
}


@media only screen and (min-width: 980px) {
    header{
        section{
            padding: 20px 10px;
            h1{
                font-size: 2em;
            }
        }
    }

    .actions{
        button{
            border-radius: 3px;
            font-size: 0.9em;
            padding:5px 10px !important;
            border:1px solid orange !important;
            background-color: transparent !important;
            margin: 0px 5px;
            color: orange;

            &:hover{
                background-color: orange !important;
                color: white !important;
            }
        }
    }
}

@media only screen and (min-width: 849px) {}
</style>
