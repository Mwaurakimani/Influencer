<template>
    <nav>
        <MobileNavigationComponent :activeNavButton="'SignUpAs'"></MobileNavigationComponent>
        <DesktopNavigationVue class="scrolled" :activeNavButton="'join'"></DesktopNavigationVue>
    </nav>
    <section class="flex align-middle justify-center" style="height: calc(100vh - 60px);overflow: auto">
        <section class="hidden md:w-[50%] md:block">
            <img class="w-[100%] h-[100%]" style="object-fit: cover" :src="defaults.systemImages+'/Join-platform.jpg'">
        </section>
        <section class="container md:w-[50%] h-[100%] sm:w-[100%] flex flex-col align-middle justify-center">
            <header>
                <h1>Join the Comunity</h1>
            </header>
            <div class="content-area">
                <div class="container" style="box-shadow:none">
                    <p style="width: 100%;text-align: center">Would you like to sign up as</p>
                    <Link :href="route('SignUpAsInfluencer')" as="button">An Influencer</Link>
                    <Link :href="route('SignUpAsEmployer')" as="button">A Marketer</Link>
                </div>
            </div>
        </section>
    </section>
    <footer>

    </footer>
</template>
<script>
import {DEFAULTS} from "@stores/DEFAULTS.js";

export default {
    setup(){
        const defaults = DEFAULTS();

        return{
            defaults
        }
    }
}
</script>

<style lang="scss" scoped>


header {
    h1 {
        font-weight: 800;
        font-size: 1.8em;
        text-align: center;
        padding: 20px;
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

.container {
    display: flex;
    flex-wrap: wrap;

    button {
        min-width: 200px;
        border: 1px solid deeppink;
        margin: 20px auto;
        padding: 20px 30px;
        border-radius: 4px;
        font-weight: 700;
        color: deeppink;

        &:active, &:hover {
            background-color: deeppink;
            color: white;
        }
    }
}
</style>
