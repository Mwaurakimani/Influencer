<script  setup>
import { Link } from '@inertiajs/vue3';
import {defineProps} from "vue";

const props = defineProps(['user'])
</script>

<template>
    <div class="content mx-[5px]">
        <section class="top-section">
            <div class="right-section">
                <div class="image-section">
                    <img>
                </div>
                <div class="details-section">
                    <h2>{{ props.user.first_name + ' '+props.user.last_name }}</h2>
<!--                    <div class="ratting-card">-->
<!--                    </div>-->
                    <p>100 Projects Completed</p>
                    <p>Ksh {{props.user.influencer.price}} {{props.user.influencer.unit}}</p>
                </div>
            </div>
            <div class="left-section">
                <button>Edit</button>
                <button>Stats</button>
            </div>
        </section>
<!--        <section class="tags-section">-->
<!--            <h2>Tags</h2>-->
<!--            <ul>-->
<!--                <li>Real estate</li>-->
<!--                <li>Real estate</li>-->
<!--                <li>Real estate</li>-->
<!--                <li>Real estate</li>-->
<!--                <li>Real estate</li>-->
<!--                <li>Real estate</li>-->
<!--                <li>Real estate</li>-->
<!--            </ul>-->
<!--        </section>-->
        <section class="description-section">
            <h2>Bio</h2>
            <p>{{ props.user.influencer.description != null ? props.user.influencer.description : 'N/A'  }}</p>
        </section>

        <section class="account-status">
            <h2>Account Status</h2>
            <select disabled>
                <option value="">Active</option>
                <option value="">Suspended</option>
            </select>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.content {
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0 0 6px rgb(212, 212, 212);

    section:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;

        .left-section {
            display: block;

            flex-direction: column;
            width: 70px;
            align-items: flex-end;

            button {
                border-radius: 5px;
                margin-bottom: 10px;
                padding: 5px 10px;
                display: block;
                border: 1px solid orange;
                color: orange;
            }
        }

        .right-section {
            width: 100%;

            .image-section {
                width: 60px;
                height: 60px;
                background-color: orange;
                border-radius: 50%;
                margin-bottom: 10px;
            }

            .details-section {
                h2 {
                    font-weight: bolder;
                }

                p {
                    font-size: 0.9em;
                    color: grey;
                }
            }
        }
    }

    section:nth-of-type(2) {
        h2 {
            font-weight: bolder;
            padding: 10px;
        }
    }

    section:nth-of-type(3) {
        h2 {
            font-weight: bolder;
            padding: 10px;
        }

        margin-bottom: 15px;

        p {
            font-size: 0.87em;
        }
    }

    section:nth-of-type(4) {
        h2 {
            font-weight: bolder;
            padding: 10px;
        }

        margin-bottom: 15px;

        select {
            font-size: 0.9em;
            max-width: 250px;
            height: 26px;
            padding: 0px;
            border-radius: 4px;
            padding: 3px;
            line-height: 20px;
        }
    }
}

.tags-section {
    display: none;
}

@media only screen and (min-width: 980px) {
    .right-section {
        width:fit-content;
        display: flex;
        .image-section{
            display: inline;
            margin-right: 20px;
        }
    }

    .tags-section {
        display: block;

        ul {
            display: flex;
            flex-wrap: wrap;

            li {
                font-size: 0.8em;
                margin: 2px;
                padding: 3px 5px;
                border-radius: 20px;
                border: 1px solid orange;
            }
        }
    }

}

@media only screen and (min-width: 849px) {}
</style>
