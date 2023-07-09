<template>
    <nav>
        <MobileNavigationComponent :active-nav-button="'Home'"/>
        <DesktopNavigationVue style="position: absolute;" class="w-[100%]" :alter.camel="true" :activeNavButton="'Home'"
                              :static="true"/>
    </nav>
    <div class="banner p-[20px] flex flex-wrap gap-[10px] justify-around h-[calc(100vh-60px)] md:h-[100vh]" style="align-items: center; justify-content: space-around;overflow: hidden">
        <section class=" sm:w-[100%] mb-[20px] md:w-[40%] flex flex-col justify-center align-middle">
            <h3 class="text-center text-white mb-[20px] ">Welcome to Vumisha where brands and influencers make magic
                happen. . .</h3>
            <img class="p-[10px] w-[90px] mb-[20px] mx-[auto]  h-[90px] bg-white"
                 style="border-radius: 50%;display: block"
                 :src="defaults.systemImages+'/logos/colored/icon-colored.svg'">
            <p class="line-1 text-center text-white p1 anim-typewriter">Create... Inspire... Connect...</p>
        </section>
        <section class="sm:w-[100%] md:w-[45%] mx-h-[50%]">
            <div class="w-[100%] h-[500px]" style="overflow: hidden">
                <div class="w-[100%] h-[100%]" style="">
                    <img class="w-[90%]" style="object-fit: contain"  :src="defaults.systemImages+'/banner.svg'">
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import {DEFAULTS} from "@stores/DEFAULTS.js";

export default {
    setup() {
        const defaults = DEFAULTS()

        return {
            defaults
        }
    },
    inject: ['currentUser'],
    data() {
        return {
            activeTab: 'Influencer'
        }
    },
    methods: {
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
    },
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
    background-image: linear-gradient(200DEG, #570ca8, rgba(255, 0, 93, 0.85), rgba(87, 12, 168, 0.82));

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

/* Google Fonts */
@import url(https://fonts.googleapis.com/css?family=Anonymous+Pro);

/* Global */
.line-1{
    position: relative;
    top: 50%;
    margin: 0 auto;
    border-right: 2px solid rgba(255,255,255,.75);
    text-align: center;
    white-space:nowrap;
    overflow: hidden;
    transform: translateY(-50%);
}

/* Animation */
.anim-typewriter{
    animation: typewriter 4s steps(44) 1s 1 normal both,
    blinkTextCursor 500ms steps(44) infinite normal;
}
@keyframes typewriter{
    from{width: 0;}
    to{width: 13em;}
}
@keyframes blinkTextCursor{
    from{border-right-color: rgba(255,255,255,.75);}
    to{border-right-color: transparent;}
}
</style>
