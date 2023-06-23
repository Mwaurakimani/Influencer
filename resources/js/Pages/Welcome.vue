<template>
    <nav>
        <MobileNavigationComponent :active-nav-button="'Home'"/>
        <DesktopNavigationVue style="position: absolute;" class="w-[100%]" :alter.camel="true" :activeNavButton="'Home'" :static="true"/>
    </nav>
    <div class="banner flex justify-around align-middle" style="align-items: center; height:100vh">
        <section class="flex flex-col justify-center align-middle w-[500px]">
            <h3 class="text-center text-white mb-[20px] ">Welcome to Vumisha where brands and influencers make magic happen. . .</h3>
            <img class="p-[10px] w-[90px] mb-[10px] mx-[auto]  h-[90px] bg-white" style="border-radius: 50%;display: block"
                 :src="defaults.systemImages+'/logos/colored/icon-colored.svg'">
            <p class="text-white p-[10px]" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eius esse repudiandae tempora. Atque deleniti dolorum, ducimus est eum ex facere itaque, libero nihil quo sed suscipit tempore veniam. Unde?</p>
            <div class="banner-image ">
            </div>
        </section>
        <section class="d-hide">
            <div class="w-[550px] h-[360px] bg-white" style="border-radius: 8px;box-shadow: 0 0 8px lightgray">

            </div>
        </section>
    </div>
</template>
<script>
import {DEFAULTS} from "@stores/DEFAULTS.js";

export default {
    setup(){
        const defaults = DEFAULTS()

        return {
            defaults
        }
    },
    inject:['currentUser'],
    data(){
        return {
            activeTab:'Influencer'
        }
    },
    methods:{
        changeTagLine() {
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
    }
}
</script>

<style lang="scss" scoped>
@import "sassLoader";
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
    background-image: linear-gradient(200DEG, #ec1489, #ff005d);

    .banner-image {
        width: 100%;
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


<!--    <section class="mb-[200px]" >-->
<!--        <ul class="tab" @click="changeTagLine()">-->
<!--            <li class="p3 active">Influencer</li>-->
<!--            <li class="p3">Marketer</li>-->
<!--        </ul>-->
<!--        <div v-if="activeTab == 'Influencer'" id="influencerTagLine" class="body"-->
<!--             style="background-color: var(&#45;&#45;light-grey)">-->
<!--            <p class="px-[7%] py-[20px] p1 text-center ">We have made it easy to work with your favorite brands. No more-->
<!--                long meetings-->
<!--                trying to negotiate on your pricing or working model. Just join and start-->
<!--                bidding on projects </p>-->
<!--            <div class="flex journey-map h-[500px] bg-white ">-->
<!--                <div>-->
<!--                    <ul>-->
<!--                        <li class="active-list">-->
<!--                            <div class="pick">-->
<!--                                <span>-->
<!--                                    <span></span>-->
<!--                                </span>-->
<!--                            </div>-->
<!--                            <h6>Influencer</h6>-->
<!--                            <p class="p3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aut culpa-->
<!--                                dignissimos earum </p>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </div>-->
<!--                <div>-->
<!--                    <section>-->

<!--                    </section>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div v-if="activeTab == 'Marketer'" id="marketerTagLine" class="body"-->
<!--             style="background-color: var(&#45;&#45;light-grey)">-->
<!--            <p class="px-[7%] py-[20px] p1 text-center ">We bidding on projects </p>-->
<!--            <div class="flex journey-map h-[500px] bg-white ">-->
<!--                <div>-->
<!--                    <ul>-->
<!--                        <li class="active-list">-->
<!--                            <div class="pick">-->
<!--                                <span>-->
<!--                                    <span></span>-->
<!--                                </span>-->
<!--                            </div>-->
<!--                            <h6>Influencer</h6>-->
<!--                            <p class="p3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aut culpa-->
<!--                                dignissimos earum </p>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </div>-->
<!--                <div>-->
<!--                <section>-->

<!--                </section>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </section>-->
<!--    <section class="h-[300px] flex flex-col justify-around items-center mb-[200px]">-->
<!--        <h3>Join the community</h3>-->
<!--        <p class="p4 p-[30px] text-center ">Get to choose which brad to workwit,-->
<!--            get value for your content with Vumisha</p>-->
<!--        <Link  as="button" href="/SignUpAs" class="pink"> Take me there</Link>-->
<!--    </section>-->
<!--    <footer>-->
<!--        <Footer></Footer>-->
<!--    </footer>-->
