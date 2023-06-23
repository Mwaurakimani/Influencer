<template>
    <teleport to=body>
        <div class="flex items-center justify-center"
             :class="['modal-element',modal.properties.visible ? 'visible':'']">
            <form @submit.prevent="sortDataset" id="Filters" v-if="modal.properties.display == 'Filters'"
                  class="bg-white sm:w-[95%] mx-[auto]"
                  style="border-radius: 5px;box-shadow: 0 0 6px #444444;overflow: hidden">
                <article class="flex p-[10px] justify-between" style="border-bottom: 1px solid #dadada;">
                    <h3>Filters</h3>
                    <div @click.prevent="modal.closeModal()"
                         style="width: 20px;height: 20px;display: grid;place-items: center;color: white;border-radius: 50%"
                         class="bg-red-500">
                        <p class="text-white">X</p>
                    </div>
                </article>
                <div class="filter-pane bg-white lg:flex" style="background-color: #f3f3f3;padding: 20px">
                    <div style="max-height: 70vh; overflow: auto">
                        <section>
                            <h6>Platforms</h6>
                            <ul class="pl-[0px]">
                                <div class="platformSelectX" v-for="(platform,index) in fun.platforms" :key="platform">
                                    <div>
                                        <input
                                            type="checkbox"
                                            class="platformSelect"
                                            true-value="1"
                                            false-value="0"
                                            v-model="filterDataset.filters.platform[index][platform]"
                                        >
                                        <label class="platformName">{{ platform }}</label>
                                    </div>
                                    <ul v-if="fun.findPlatform(platform)" class="ml-[30px]">
                                        <li><input type="checkbox" true-value="1" false-value="0"
                                                   v-model="filterDataset.filters.platform[index].sub.Nano_Influencer"><label>Nano-Influencer
                                            (1K - 10K)</label></li>
                                        <li><input type="checkbox" true-value="1" false-value="0"
                                                   v-model="filterDataset.filters.platform[index].sub.Micro_Influencer"><label>Micro-Influencer
                                            (10K - 50K)</label></li>
                                        <li><input type="checkbox" true-value="1" false-value="0"
                                                   v-model="filterDataset.filters.platform[index].sub.Macro_Influencer"><label>Macro-Influencer
                                            (50K - 200K)</label></li>
                                        <li><input type="checkbox" true-value="1" false-value="0"
                                                   v-model="filterDataset.filters.platform[index].sub.Meta_Influencer"><label>Meta-Influencer
                                            (200K - 500K)</label></li>
                                        <li><input type="checkbox" true-value="1" false-value="0"
                                                   v-model="filterDataset.filters.platform[index].sub.Mega_Influencer"><label>Mega-Influencer
                                            (500K+)</label></li>
                                    </ul>
                                </div>
                            </ul>
                        </section>
                        <section>
                            <h6>Budget Range</h6>
                            <ul class=" mt-[10px]">
                                <li class="flex mb-[10px] align-middle">
                                    <label class="w-[50px] p-[10px]">From</label>
                                    <input class="w-[150px] h-[30px]" type="number" placeholder="Ksh"
                                           v-model="filterDataset.filters.budget.from">
                                </li>
                                <li class="flex align-middle">
                                    <label class="w-[50px] p-[10px]">To</label>
                                    <input class="w-[150px] h-[30px]" type="number" placeholder="Ksh"
                                           v-model="filterDataset.filters.budget.to">
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
                <article class="w-100% pb-[20px] grid place-content-center">
                    <button class="button purple mx-[auto] mt-[20px]" style="width: 100px">Apply</button>
                </article>
            </form>
            <form @submit.prevent="sortDataset" id="Sort" v-if="modal.properties.display == 'Sort'"
                  class="bg-white w-fit mx-[auto] h-fit"
                  style="border-radius: 5px;box-shadow: 0 0 6px #444444;overflow: hidden">
                <article class="flex p-[10px] justify-between" style="border-bottom: 1px solid #dadada;">
                    <h3>Sort</h3>
                    <div @click.prevent="modal.closeModal()"
                         style="width: 20px;height: 20px;display: grid;place-items: center;color: white;border-radius: 50%"
                         class="bg-red-500">
                        <p class="text-white">X</p>
                    </div>
                </article>
                <div class="filter-pane bg-white lg:flex items-center justify-center"
                     style="background-color: #f3f3f3;padding: 20px">
                    <div class="flex items-center gap-[10px] mb-[20px]">
                        <label class="w-[60px]">Sort By:</label>
                        <select class="w-[200px]" v-model="filterDataset.sort.by">
                            <option value="budget">Budget</option>
                            <option value="runtime">Campaign Runtime</option>
                        </select>
                    </div>
                    <div class="flex items-center gap-[10px] mb-[20px]">
                        <label class="w-[60px]">Order:</label>
                        <select class="w-[200px]" v-model="filterDataset.sort.order">
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </div>
                </div>
                <article class="w-100% pb-[10px] grid place-content-center">
                    <button class="button purple mx-[auto] mt-[20px]" style="width: 100px">Sort</button>
                </article>
            </form>
            <form @submit.prevent="sortDataset" id="Search" v-if="modal.properties.display == 'Search'"
                  class="bg-white w-fit mx-[auto] h-fit"
                  style="border-radius: 5px;box-shadow: 0 0 6px #444444;overflow: hidden">
                <article class="flex p-[10px] justify-between" style="border-bottom: 1px solid #dadada;">
                    <h3>Search</h3>
                    <div @click.prevent="modal.closeModal()"
                         style="width: 20px;height: 20px;display: grid;place-items: center;color: white;border-radius: 50%"
                         class="bg-red-500">
                        <p class="text-white">X</p>
                    </div>
                </article>
                <div class="filter-pane bg-white lg:flex" style="background-color: #f3f3f3;padding: 20px">
                    <div class="flex flex-wrap">
                        <input type="search" class="w-[100%]" v-model="filterDataset.search"
                               placeholder="Search by title">
                        <button class="button purple mx-[auto] mt-[20px]" style="width: 100%">Search</button>
                    </div>
                </div>
            </form>
        </div>
    </teleport>

    <nav>
        <MobileNavigationComponent :activeNavButton="'Projects'"/>
        <DesktopNavigationVue class="scrolled" :activeNavButton="'Projects'"/>
    </nav>
    <header class="bg-white">
        <div class="">
            <section class="flex items-center">
                <h3 class="pt-[10px]" style="color: var(--t-purple)">Projects</h3>
                <div class="actions">
                    <button @click.prevent="openFilters('Filters')">Filters</button>
                    <button @click.prevent="openFilters('Sort')">Sort</button>
                    <button @click.prevent="openFilters('Search')">Search</button>
                </div>
            </section>
            <form @submit.prevent="searchProduct" class="hidden">
                <input type="search" placeholder="Search...">
            </form>
            <section class="sm:flex-wrap items-center hidden" v-if="projects && projects.length > 0">
                <p class="block mb-[10px] w-[100%] ">{{ projects.length }} Projects found</p>
            </section>
        </div>
    </header>
    <div class="content-area mb-[50px]">
        <div class="desktop-content-area lg:flex lg:gap-[20px]">
            <div class="filter-pane w-[360px] bg-white hidden lg:flex px-[5px]"
                 style="background-color: #f3f3f3;padding: 20px">
                <div>
                    <section>
                        <h6>Platforms</h6>
                        <ul class="pl-[10px]">
                            <div class="platformSelectX" v-for="(platform,index) in fun.platforms" :key="platform">
                                <div>
                                    <input
                                        type="checkbox"
                                        class="platformSelect"
                                        true-value="1"
                                        false-value="0"
                                        v-model="filterDataset.filters.platform[index][platform]"
                                        @change="sortDataset"
                                    >
                                    <label class="platformName">{{ platform }}</label>
                                </div>
                                <ul v-if="fun.findPlatform(platform)" class="ml-[30px]">
                                    <li><input @change="sortDataset" type="checkbox" true-value="1" false-value="0"
                                               v-model="filterDataset.filters.platform[index].sub.Nano_Influencer"><label>Nano-Influencer
                                        (1K - 10K)</label></li>
                                    <li><input @change="sortDataset" type="checkbox" true-value="1" false-value="0"
                                               v-model="filterDataset.filters.platform[index].sub.Micro_Influencer"><label>Micro-Influencer
                                        (10K - 50K)</label></li>
                                    <li><input @change="sortDataset" type="checkbox" true-value="1" false-value="0"
                                               v-model="filterDataset.filters.platform[index].sub.Macro_Influencer"><label>Macro-Influencer
                                        (50K - 200K)</label></li>
                                    <li><input @change="sortDataset" type="checkbox" true-value="1" false-value="0"
                                               v-model="filterDataset.filters.platform[index].sub.Meta_Influencer"><label>Meta-Influencer
                                        (200K - 500K)</label></li>
                                    <li><input @change="sortDataset" type="checkbox" true-value="1" false-value="0"
                                               v-model="filterDataset.filters.platform[index].sub.Mega_Influencer"><label>Mega-Influencer
                                        (500K+)</label></li>
                                </ul>
                            </div>
                        </ul>
                    </section>
                    <section>
                        <h6>Budget Range</h6>
                        <ul class=" mt-[10px]">
                            <li class="flex mb-[10px] align-middle">
                                <label class="w-[50px] p-[10px]">From</label>
                                <input class="w-[150px] h-[30px]" type="number" @change="sortDataset"
                                       v-model="filterDataset.filters.budget.from" placeholder="Ksh">
                            </li>
                            <li class="flex align-middle">
                                <label class="w-[50px] p-[10px]">To</label>
                                <input class="w-[150px] h-[30px]" type="number" @change="sortDataset"
                                       v-model="filterDataset.filters.budget.to" placeholder="Ksh">
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
            <section class="md:w-[calc(100%-360px)]">
                <ul class="bg-white p-[10px] w-[100%] flex flex-wrap"
                    style="align-items: center; gap:10px; border-bottom: 1px solid lightgrey;">
                    <li v-if="filterDataset.search" class="category-pill">Search : {{ filterDataset.search }}<span
                        @click.prevent="disableSearch">X</span></li>
                    <li v-if="filterDataset.sort.by != null || filterDataset.sort.order" class="category-pill">Sort by
                        {{ filterDataset.sort.by }}
                        {{ filterDataset.sort.order == 'desc' ? 'Descending' : 'Ascending' }} <span
                            @click.prevent="disableSort">X</span></li>
                    <li v-if="filterDataset.filters.budget.from != null || filterDataset.filters.budget.to"
                        class="category-pill">Budget from {{ 'Ksh' + filterDataset.filters.budget.from }}
                        {{ filterDataset.filters.budget.to != (null) ? ' to Ksh' + filterDataset.filters.budget.to : '' }}
                        <span @click.prevent="disableBudgetFilter">X</span></li>
                </ul>
                <div class="lg:bg-white p-[10px]" style="justify-content: space-between; width:100%">
                    <div v-if="filterProjects && filterProjects.length > 0"
                         class="w-[100%] flex flex-wrap xl:justify-between p-[10px] gap-2">
                        <MobileProjectDisplayCard
                            v-for="project in filterProjects"
                            class="w-[100%] md:w-[49%] mb-4 lg:w-[30%] xl:300px"
                            :project="project"
                            :link="'ViewProject'"
                        />
                    </div>
                    <div v-else class="w-[350px] mb-[30px]">
                        <p style="font-weight:bolder; font-size: 1.5em">No Projects Found</p>
                    </div>
                    <pagination-component v-if="filterProjects && filterProjects.length > 0"></pagination-component>
                </div>
            </section>
        </div>
    </div>
    <footer>
        <Footer></Footer>
    </footer>
</template>

<script>
import * as fun from './ProjectFilterFunctionality.js'
import {authStore} from "@stores/AuthStore.js";
import {storeToRefs} from "pinia";
import PaginationComponent from "./../Components/Shared/PaginationComponent.vue";
import MobileProjectDisplayCard from "../Components/MobilOnlyComponents/MobileProjectDisplayCard.vue";
import {reactive, toRef} from "vue";
import Modal from "@Components/Modal.vue";
import {filterData} from "./ProjectFilterFunctionality.js";
import route from "ziggy-js/src/js";


export default {
    computed: {
        filterData() {
            return filterData
        }
    },
    setup(props) {
        const auth = authStore()
        const {status, user} = storeToRefs(auth)

        const filterDataset = reactive({
            filters: {
                platform: [],
                budget: {
                    from: null,
                    to: null
                }
            },
            sort: {
                by: null,
                order: null
            },
            search: null
        })

        fun.platforms.forEach((data) => {
            let obj = {
                data: "0",
                sub: {
                    Nano_Influencer: '0',
                    Micro_Influencer: '0',
                    Macro_Influencer: '0',
                    Meta_Influencer: '0',
                    Mega_Influencer: '0'
                }
            }
            obj[data] = obj['data']
            delete obj['data']

            filterDataset.filters.platform.push(obj)
        })

        const modal = {
            properties: reactive({
                visible: false,
                display: null
            }),
            openModal: (payload) => {
                document.body.style.overflow = "hidden";
                modal.properties.visible = true
                modal.properties.display = payload
                fun.setUp()
            },
            closeModal: () => {
                document.body.style.overflow = "auto";
                modal.properties.visible = false
            }
        }

        return {
            auth,
            status,
            user,
            fun,
            modal,
            filterDataset,
        }
    },
    components: {
        Modal,
        PaginationComponent,
        MobileProjectDisplayCard
    },
    inject: ['currentUser'],
    props: ['projects'],
    data() {
        return {
            filterProjects: this.projects
        }
    },
    methods: {
        sortDataset() {
            axios.post(route('mainPageDatasetAction'), {
                dataset: this.filterDataset
            }).then((resp) => {
                if (resp.data.projects.length > 0) {
                    this.filterProjects = resp.data.projects
                    this.modal.closeModal()
                } else {
                    this.filterProjects = null
                    console.log("done")
                }
            }).catch((err) => {
                console.log("Error :" + err)
            })
        },
        openFilters(payload) {
            this.modal.openModal(payload)
        },
        disableSort() {
            this.filterDataset.sort.by = null
            this.filterDataset.sort.order = null
            this.sortDataset()
        },
        disableSearch() {
            console.log("hi")
            this.filterDataset.search = null
            this.sortDataset()
        },
        disableBudgetFilter() {
            this.filterDataset.filters.budget.from = null
            this.filterDataset.filters.budget.to = null
            this.sortDataset()
        }
    },
    mounted() {
        this.fun.setUp()

        if (this.currentUser != null) {
            this.auth.authenticate()
        }
    }
}
</script>

<style lang="scss" scoped>
@import "sassLoader";

.filter-pane {
    color: #676767;

    section {
        margin-bottom: 20px;
    }

    input {
        margin: 4px;
    }

    input[type="checkbox"] {
        width: 5px !important;
        height: 5px !important;
    }

    input[type="number"] {
        font-size: 0.9em;
        height: 30px;
    }
}

.modal-element {
    display: none;
    opacity: 0;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: rgba(24, 24, 24, 0.62);
    z-index: -1000;
}

.visible {
    display: flex !important;
    opacity: 1 !important;
    z-index: 3000 !important;
}


@media only screen and (min-width: 768px) {
    .desktop-content-area {
        min-height: 60vh;
        margin-bottom: 50px;
        font-size: 0.8em;
    }
}
</style>
