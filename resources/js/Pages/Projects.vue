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
        <section class="flex items-center sm:justify-items-start sm:flex-wrap md:justify-between">
            <h3 class=" sm:w-[100%] pt-[10px] md:w-[100px]" style="color: #565656">Projects</h3>
            <div class="hidden md:flex items-center justify-center md:w-[calc(100%-100px)] h-[50px] ">
                <form class="w-[70%] flex items-center" @submit.prevent="sortDataset">
                    <input type="search" class="h-[40px] w-[100%]"
                           style="background-color: #f5f5f5; border-radius: 40px" placeholder="Search..." v-model="filterDataset.search">
                    <button type="submit" style="border-radius: 50%"
                            class="bg-pink-500 flex items-center justify-center w-[42px] h-[36px]">
                        <img class="w-[33px] h-[33px] p-[5px]" :src="defaults.systemIcons+'/icons8-search-128.png'">
                    </button>
                </form>
            </div>
        </section>
        <section class="sm:flex-wrap items-center hidden">
            <div aria-label="breadcrumb" style="height: 20px">
                <ol class="breadcrumb">
                    <li class="p4 breadcrumb-item">
                        <Link href="/">Home</Link>
                    </li>
                    <li class="p4 breadcrumb-item active">Projects</li>
                </ol>
            </div>
        </section>
    </header>

    <p class="hidden md:block pr-[10px] text-right  mb-[10px]">100 Projects Found</p>


    <div class="mb-[50px] lg:flex lg:gap-[10px]">
        <div class="filter-pane mx-[10px] w-[320px] bg-white hidden lg:flex flex-col px-[10px] pt-[10px]"
             style="background-color: #f3f3f3;">
            <h6 class="mb-[20px]">Filter By:</h6>
            <section>
                <p class="p2">Platforms</p>
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
                            <label class="p3 platformName">{{ platform }}</label>
                        </div>
                        <ul v-if="fun.findPlatform(platform)" class="ml-[30px]">
                            <li><input @change="sortDataset" type="checkbox" true-value="1" false-value="0"
                                       v-model="filterDataset.filters.platform[index].sub.Nano_Influencer"><label
                                class="p3">Nano-Influencer
                                (1K - 10K)</label></li>
                            <li><input @change="sortDataset" type="checkbox" true-value="1" false-value="0"
                                       v-model="filterDataset.filters.platform[index].sub.Micro_Influencer"><label
                                class="p3">Micro-Influencer
                                (10K - 50K)</label></li>
                            <li><input @change="sortDataset" type="checkbox" true-value="1" false-value="0"
                                       v-model="filterDataset.filters.platform[index].sub.Macro_Influencer"><label
                                class="p3">Macro-Influencer
                                (50K - 200K)</label></li>
                            <li><input @change="sortDataset" type="checkbox" true-value="1" false-value="0"
                                       v-model="filterDataset.filters.platform[index].sub.Meta_Influencer"><label
                                class="p3">Meta-Influencer
                                (200K - 500K)</label></li>
                            <li><input @change="sortDataset" type="checkbox" true-value="1" false-value="0"
                                       v-model="filterDataset.filters.platform[index].sub.Mega_Influencer"><label
                                class="p3">Mega-Influencer
                                (500K+)</label></li>
                        </ul>
                    </div>
                </ul>
            </section>
            <section>
                <p class="p2">Budget Range</p>
                <ul class=" mt-[10px]">
                    <li class="flex mb-[10px] align-middle">
                        <label class="w-[50px] p-[10px] p3">From</label>
                        <input class="w-[150px] h-[30px]" type="number" @change="sortDataset"
                               v-model="filterDataset.filters.budget.from" placeholder="Ksh">
                    </li>
                    <li class="flex align-middle">
                        <label class="w-[50px] p-[10px] p3">To</label>
                        <input class="w-[150px] h-[30px]" type="number" @change="sortDataset"
                               v-model="filterDataset.filters.budget.to" placeholder="Ksh">
                    </li>
                </ul>
            </section>
        </div>
        <section class="  lg:w-[calc(100%-360px)]">
            <p class="md:hidden pl-[10px] mb-[10px]">100 Projects Found</p>
            <div class="mobile-filter-bar w-[100%] h-[60px] px-[10px] bg-white flex items-center justify-between">
                <p class="md:hidden" @click.prevent="dropDownSearch">Find Project</p>
                <div class="hidden md:block">
                    <ul class="bg-white p-[10px] w-[100%] flex flex-wrap"
                        style="align-items: center; gap:10px;">
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
                </div>
                <ul class="flex">
                    <li class="flex" @click="openFilters('Sort')"><img :src="defaults.systemIcons+'/icons8-sort-100.png'"></li>
                    <li class="flex lg:hidden" @click="openFilters('Filters')" ><img :src="defaults.systemIcons+'/icons8-filter-100.png'"></li>
                </ul>
            </div>
            <section id="SearchBlock" class="hidden bg-white p-[10px] mb-[10px] flex-col">
                <div class="flex">
                    <form class="w-[100%] flex items-center" @submit.prevent="sortDataset">
                        <input type="search" class="h-[40px] w-[100%]"
                               style=" margin: 2px; background-color: #f5f5f5; border-radius: 40px"
                               placeholder="Search..." v-model="filterDataset.search">
                        <button type="submit" style="border-radius: 50%"
                                class="bg-pink-500 flex items-center justify-center w-[42px] h-[36px]">
                            <img class="w-[33px] h-[33px] p-[5px]" :src="defaults.systemIcons+'/icons8-search-128.png'">
                        </button>
                    </form>
                </div>
            </section>
            <div class="lg:bg-white p-[10px]" style="justify-content: space-between; width:100%">
                <div v-if="filterProjects && filterProjects.length > 0"
                     class="w-[100%] flex flex-wrap lg:justify-around p-[5px] gap-1">
                    <MobileProjectDisplayCard
                        v-for="project in filterProjects"
                        class="w-[100%] md:w-[49%] mb-4 lg:w-[30%] xl:w-[300px] 2xl:w-[350px]"
                        :project="project"
                        :link="'ViewProject'"
                    />
                </div>
                <div v-else class="w-[350px] mb-[30px]">
                    <p style="font-weight:bolder; font-size: 1.5em">No Projects Found</p>
                </div>
                <pagination-component v-if="filterProjects && filterProjects.length > 0 && paginationData" :paginationData="paginationData"></pagination-component>
            </div>
        </section>
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
import {DEFAULTS} from "@stores/DEFAULTS";


export default {
    computed: {
        filterData() {
            return filterData
        }
    },
    setup(props) {
        const auth = authStore()
        const {status, user} = storeToRefs(auth)
        const defaults = DEFAULTS()

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
            defaults
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
            filterProjects: this.projects.data,
            paginationData: this.projects
        }
    },
    methods: {
        sortDataset() {
            console.log(this.filterDataset)
            axios.post(route('mainPageDatasetAction'), {
                dataset: this.filterDataset
            }).then((resp) => {
                if (resp.data.projects.data.length > 0) {
                    this.filterProjects = resp.data.projects.data
                    this.paginationData = null
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
        },
        searchProjects() {
            console.log("searching...")
        },
        dropDownSearch() {
            let clicked = $(event.currentTarget);
            let element = $("#SearchBlock");

            if (clicked.text() == 'Find Project') {
                clicked.text("Close search bar")
                element.fadeIn('fast')
            } else {
                clicked.text("Find Project")
                element.fadeOut('fast')
            }


        },
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

.mobile-filter-bar {
    ul {
        gap: 10px;
        height: 100%;
        align-items: center;

        li {
            align-items: center;
            height: 100%;

            img {
                margin: 0px 4px;
                width: 30px;
                height: 30px;
            }
        }
    }
}

.filter-pane {
    color: #676767;

    section {
        margin-bottom: 20px;
        padding-bottom: 10px;
        width: 100%;
        border-bottom: 1px solid #e5e5e5;
    }

    .p2 {
        font-weight: 6;
    }

    .p3 {
        font-weight: lighter;
    }

    input {
        margin: 4px;
    }

    input[type="checkbox"] {
        margin: 6px;
        padding: 6px;
        width: 1px !important;
        height: 1px !important;
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

/* clears the ‘X’ from Internet Explorer */
input[type=search]::-ms-clear {
    display: none;
    width: 0;
    height: 0;
}

input[type=search]::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
}

/* clears the ‘X’ from Chrome */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
    display: none;
}
</style>


<!--                <div class="actions">-->
<!--                    <button @click.prevent="openFilters('Filters')">Filters</button>-->
<!--                    <button @click.prevent="">Sort</button>-->
<!--                    <button @click.prevent="openFilters('Search')">Search</button>-->
<!--                </div>-->
