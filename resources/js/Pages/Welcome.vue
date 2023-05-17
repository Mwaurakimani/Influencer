<script setup>
import MobileNavigationComponent from "./../Components/MobileNavigationComponent.vue";
import DesktopNavigation from "@Components/DesktopNavigation.vue";
import {inject, ref} from "vue";
import {Link} from "@inertiajs/vue3";

const currentUser = inject('currentUser');

const activeTab = ref('Marketer')

function changeTagLine() {
    let elem = $(event.target)
    let parent = elem.parent();

    $.each(parent.find('li'), function (key, value) {
        $(value).removeClass('active')
        if ($(value).text() == elem.text()) {
            activeTab.value = elem.text()
            $(value).addClass('active')
        }
    })
}

</script>

<template>
    <nav>
        <MobileNavigationComponent :active-nav-button="'Home'"></MobileNavigationComponent>
        <DesktopNavigation>hi</DesktopNavigation>
    </nav>
    <div class="banner flex flex-col justify-center align-middle mb-[50px]"
         style="align-items: center; height: calc(100vh - 60px)">
        <h3 class="text-center text-white mb-[20px] ">Welcome to Vumisha where brands and influencers make magic happen
            . . .</h3>
        <img class="p-[10px] w-[90px] mb-[10px]  h-[90px] bg-white" style="border-radius: 50%"
             src="/storage/DESIGN/WORKSPACE/LOGO/SVG/logo-icon.svg">
        <div class="banner-image">
        </div>
    </div>
    <section class="mb-[200px]">
        <h4 class=" text-center text-grey-400 mb-[80px]">What we do ...</h4>
        <div class="flex flex-wrap">
            <div class=" mx-[auto] description card-shadowed mb-[10px]   w-[300px] h-[350px]" v-for="item in 3"
                 style="position: relative;border-radius: 8px">
                <div class="text-holder pb-[20px] flex" style="align-items: flex-end;justify-content: center">
                </div>
                <p class="p4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis laudantium
                    nisi odit quod reprehenderit. Assumenda deleniti dignissimos doloribus eligendi, et qui. At deserunt
                    illum libero nulla officia quaerat quibusdam quidem.</p>
                <h6>Influencer</h6>
            </div>
        </div>
    </section>
    <section class="mb-[200px]" >
        <ul class="tab" @click="changeTagLine()">
            <li class="p3 active">Influencer</li>
            <li class="p3">Marketer</li>
        </ul>
        <div v-if="activeTab == 'Influencer'" id="influencerTagLine" class="body"
             style="background-color: var(--light-grey)">
            <p class="px-[7%] py-[20px] p1 text-center ">We have made it easy to work with your favorite brands. No more
                long meetings
                trying to negotiate on your pricing or working model. Just join and start
                bidding on projects </p>
            <div class="flex journey-map h-[500px] bg-white ">
                <div>
                    <ul>
                        <li class="active-list">
                            <div class="pick">
                                <span>
                                    <span></span>
                                </span>
                            </div>
                            <h6>Influencer</h6>
                            <p class="p3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aut culpa
                                dignissimos earum </p>
                        </li>
                        <li>
                            <div class="pick">
                                <span>
                                    <span></span>
                                </span>
                            </div>
                            <h6>Influencer</h6>
                            <p class="p3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aut culpa
                                dignissimos earum eligendi et exercitationem fuga illum laudantium, magnam maxime modi
                                nihil odio porro qui rerum sed sint.</p>
                        </li>
                        <li>
                            <div class="pick">
                                <span>
                                    <span></span>
                                </span>
                            </div>
                            <h6>Influencer</h6>
                            <p class="p3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aut culpa
                                dignissimos earum eligendi et exercitationem fuga illum laudantium, magnam maxime modi
                                nihil odio porro qui rerum sed sint.</p>
                        </li>
                        <li>
                            <div class="pick">
                                <span>
                                    <span></span>
                                </span>
                            </div>
                            <h6>Influencer</h6>
                            <p class="p3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aut culpa
                                dignissimos earum eligendi et exercitationem fuga illum laudantium, magnam maxime modi
                                nihil odio porro qui rerum sed sint.</p>
                        </li>
                        <li>
                            <div class="pick">
                                <span>
                                    <span></span>
                                </span>
                            </div>
                            <h6>Influencer</h6>
                            <p class="p3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aut culpa
                                dignissimos earum eligendi et exercitationem fuga illum laudantium, magnam maxime modi
                                nihil odio porro qui rerum sed sint.</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <section>

                    </section>
                </div>
            </div>
        </div>
        <div v-if="activeTab == 'Marketer'" id="marketerTagLine" class="body"
             style="background-color: var(--light-grey)">
            <p class="px-[7%] py-[20px] p1 text-center ">We bidding on projects </p>
            <div class="flex journey-map h-[500px] bg-white ">
                <div>
                    <ul>
                        <li class="active-list">
                            <div class="pick">
                                <span>
                                    <span></span>
                                </span>
                            </div>
                            <h6>Influencer</h6>
                            <p class="p3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aut culpa
                                dignissimos earum </p>
                        </li>
                        <li>
                            <div class="pick">
                                <span>
                                    <span></span>
                                </span>
                            </div>
                            <h6>Influencer</h6>
                            <p class="p3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aut culpa
                                dignissimos earum eligendi et exercitationem fuga illum laudantium, magnam maxime modi
                                nihil odio porro qui rerum sed sint.</p>
                        </li>
                        <li>
                            <div class="pick">
                                <span>
                                    <span></span>
                                </span>
                            </div>
                            <h6>Influencer</h6>
                            <p class="p3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aut culpa
                                dignissimos earum eligendi et exercitationem fuga illum laudantium, magnam maxime modi
                                nihil odio porro qui rerum sed sint.</p>
                        </li>
                        <li>
                            <div class="pick">
                                <span>
                                    <span></span>
                                </span>
                            </div>
                            <h6>Influencer</h6>
                            <p class="p3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aut culpa
                                dignissimos earum eligendi et exercitationem fuga illum laudantium, magnam maxime modi
                                nihil odio porro qui rerum sed sint.</p>
                        </li>
                        <li>
                            <div class="pick">
                                <span>
                                    <span></span>
                                </span>
                            </div>
                            <h6>Influencer</h6>
                            <p class="p3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aut culpa
                                dignissimos earum eligendi et exercitationem fuga illum laudantium, magnam maxime modi
                                nihil odio porro qui rerum sed sint.</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <section>

                    </section>
                </div>
            </div>
        </div>
    </section>
    <section class="h-[300px] flex flex-col justify-around items-center mb-[200px]">
        <h3>Join the community</h3>
        <p class="p4 p-[30px] text-center ">Get to choose which brand to workwit,
            get value for your content with Vumisha</p>
        <Link  as="button" href="/SignUpAs" class="pink"> Take me there</Link>
    </section>
    <footer>
    </footer>
</template>

<style lang="scss" scoped>
@import 'sassLoader';

.description {
    overflow: hidden;

    h6 {
        position: absolute;
        bottom: 0px;
        width: 100%;
        padding: 20px;
        text-align: center;
    }

    p {
        z-index: 10;
        top: 0px;
        width: 100%;
        padding: 20px;
        position: absolute;
        color: white;
    }
}

.text-holder {
    border-radius: 50%;
    width: 900px;
    height: 900px;
    background-color: var(--t-purple);
    position: absolute;
    top: -630px;
    left: -95%;
    z-index: 5;
}

.banner {
    background-color: var(--pink);

    .banner-image {
        width: 80%;
        height: 200px;
    }
}

.tab {
    width: 100%;
    display: flex;

    li {
        text-align: center;
        width: 50%;
        padding: 10px;
    }

    .active {
        background-color: var(--light-grey);
        color: var(--t-purple);
    }
}

section > .body {
    background-color: var(--light-grey);
    padding-bottom: 20px;
}

.journey-map {
    width: 100%;
    display: flex;
    gap: 10px;
    background-color: var(--light-grey) !important;

    & > div:nth-of-type(1) {
        width: 100%;
        padding: 30px;

        ul {
            position: relative;
            height: fit-content;

            & > span {
                top: 50px;
                left: 50px;
                position: absolute;
                height: 80%;
                width: 1px !important;
                background-color: blue;
            }

            li {
                padding: 10px;
                display: grid;
                grid-template-columns: 50px 1fr;
                grid-template-rows: fit-content(100px) 1fr;
                grid-template-areas:
                "pick header"
                "pick comment";
                margin-bottom: 10px;

                div {
                    grid-area: pick;
                    display: grid;
                    place-content: center;
                    width: 50px;
                    height: 100%;
                    z-index: 500;

                    & > span {
                        width: 20px;
                        border-radius: 50%;
                        height: 20px;
                        background-color: white;
                        border: 1px solid var(--t-purple);
                        display: grid;
                        place-content: center;

                        span {
                            width: 10px;
                            height: 10px;
                            background-color: var(--t-purple);
                            border-radius: 50%;
                        }
                    }
                }

                h6 {
                    grid-area: header;
                    margin-bottom: 10px;
                }

                p {
                    grid-area: comment;
                    display: none;
                }
            }

            .active-list {
                background-color: white;

                p {
                    display: block;
                }
            }
        }
    }
}

@include s-screens {
    .journey-map {
        width: 100%;
        display: flex;
        gap: 10px;
        background-color: var(--light-grey) !important;

        & > div {
            width: 50%;
        }

        & > div:nth-of-type(1) {
            padding: 30px;
            width: 50%;

            ul {
                position: relative;
                height: fit-content;

                & > span {
                    top: 50px;
                    left: 50px;
                    position: absolute;
                    height: 80%;
                    width: 1px !important;
                    background-color: blue;
                }

                li {
                    padding: 10px;
                    display: grid;
                    grid-template-columns: 50px 1fr;
                    grid-template-rows: fit-content(100px) 1fr;
                    grid-template-areas:
                "pick header"
                "pick comment";
                    margin-bottom: 10px;

                    div {
                        grid-area: pick;
                        display: grid;
                        place-content: center;
                        width: 50px;
                        height: 100%;
                        z-index: 500;

                        & > span {
                            width: 20px;
                            border-radius: 50%;
                            height: 20px;
                            background-color: white;
                            border: 1px solid var(--t-purple);
                            display: grid;
                            place-content: center;

                            span {
                                width: 10px;
                                height: 10px;
                                background-color: var(--t-purple);
                                border-radius: 50%;
                            }
                        }
                    }

                    h6 {
                        grid-area: header;
                        margin-bottom: 10px;
                    }

                    p {
                        grid-area: comment;
                        display: none;
                    }
                }

                .active-list {
                    background-color: white;

                    p {
                        display: block;
                    }
                }
            }
        }

        & > div:nth-of-type(2) {
            padding: 30px;
            display: block;

            section {
                width: 100%;
                height: 100%;
                background-color: white;
                border-radius: 10px;
            }
        }
    }
}
</style>
