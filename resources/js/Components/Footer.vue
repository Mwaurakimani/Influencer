<template>
    <div class="temp-wrapper bg-white w-[100%]" style="background-color: #f5f5f5">
        <div class="mobile-footer m-hide">
            <div class="logo-holder flex">
                <div class="icon-holder">
                    <img :src="defaults.systemImages+'/logos/colored/icon-colored.svg'">
                </div>
                <div class="name-holder" style="display: grid;place-items: center">
                    <img :src="defaults.systemImages+'/logos/colored/name-colored.svg'">
                </div>
            </div>
            <section>
                <h6>VUMISHA</h6>
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Influencers</li>
                    <li>About Us</li>
                </ul>
            </section>
            <section>
                <h6>RESOURCES</h6>
                <ul>
                    <li>For Influencers</li>
                    <li>For Marketers</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Condition</li>
                </ul>
            </section>
            <section>
                <h6>SOCIAL</h6>
                <ul class="flex justify-between pr-[10px]">
                    <li v-for="item in icons" class="w-[45px] h-[45px]" style="border-radius: 10px;overflow: hidden">
                        <img class="w-[45px] h-[45px]" :src="item">
                    </li>
                </ul>
            </section>
        </div>
        <div class="desktop-footer d-hide">
            <div class="logo-holder flex">
                <div class="icon-holder">
                    <img :src="defaults.systemImages+'/logos/colored/icon-colored.svg'">
                </div>
                <div class="name-holder" style="display: grid;place-items: center">
                    <img :src="defaults.systemImages+'/logos/colored/name-colored.svg'">
                </div>
            </div>
            <section>
                <h6>VUMISHA</h6>
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Influencers</li>
                    <li>About Us</li>
                </ul>
            </section>
            <section>
                <h6>RESOURCES</h6>
                <ul class="ml-[60px]">
                    <li>For Influencers</li>
                    <li>For Marketers</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Condition</li>
                </ul>
            </section>
            <section>
                <h6>SOCIAL</h6>
                <ul class="flex justify-between pr-[10px] w-[200px]">
                    <li v-for="item in icons" class="w-[30px] h-[30px]" style="border-radius: 10px;overflow: hidden">
                        <!--                        <img class="w-[30px] h-[30px]" :src="item">-->
                    </li>
                </ul>
            </section>
        </div>
        <div class="copyright">
            copyright
        </div>
    </div>
</template>

<script>
//TODO:Still haven't worked on the footer
import {DEFAULTS} from "@stores/DEFAULTS.js";

export default {
    setup() {
        const defaults = DEFAULTS()


        return {
            defaults
        }
    },
    name: "Footer",
    data() {
        return {
            icons: [
                this.defaults.platformIcons + '/facebook-icon.png',
                this.defaults.platformIcons + '/instagram-icon.png',
                this.defaults.platformIcons + '/tiktok-icon.png',
                this.defaults.platformIcons + '/twitter-icon.png',
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.mobile-footer {
    padding-top: 20px;
    padding-bottom: 20px;
}

.logo-holder {
    margin: auto;
    margin-bottom: 20px;
    width: 300px;
    height: 80px;

    .icon-holder {
        width: 100px;
        height: 80px;
        padding: 10px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .name-holder {
        width: calc(100% - 100px);
        height: 80px;
        padding: 2px;
    }
}

section {
    margin-left: 30px;
    margin-bottom: 40px;

    h6 {
        font-size: 1.3em;
        margin-bottom: 5px;
    }

    ul {
        padding-left: 20px;

        li {
            font-size: 1.1em;
        }
    }
}

.copyright {
    text-align: center;
    padding: 5px;
    background-color: deeppink;
    color: white;
}

@media only screen and (min-width: 730px) {

    .logo-holder {
        margin: 0px;
        height: 100% !important;
    }

    .desktop-footer {
        padding-top: 30px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        h6 {
            font-size: 1em;
        }

        li {
            font-size: 0.9em;
        }

        div, section {
            width: 25%;
        }

        section {
            display: flex;
            align-items: center;
            flex-direction: column;
        }

    }
}

</style>
