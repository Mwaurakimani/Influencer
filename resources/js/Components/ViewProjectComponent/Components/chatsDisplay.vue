<template>
    <div class="chats-display sm:mb-[80px] md:mb-[0px]">
        <div class="chat-holder">
            <div id="chatWindow" class="chat-timeline" ref="chatWindow">
                <ul>
                    <li v-for="chat in chats" :class="[chat.sender_id == user.id?'right-chat':'left-chat']">
                        <div class="message">
                            <div class="p3 message-content">
                                {{ chat.message }}
                            </div>
                            <div class="carret">

                            </div>
                        </div>
                        <div class="message-details p3">{{ convertDate(chat.created_at) }}</div>
                    </li>
                </ul>
            </div>
            <div class="send-pannel">
                <div class="input-group">
                    <textarea id="autoresizing" class="h-[40px]" v-model="message"></textarea>
                </div>
                <div class="button-holder">
                    <button class="purple" @click.prevent="sendM()">Send</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import convertDate from "@/Helpers/convertDate";

export default {
    setup(){

      return {
          convertDate
      }
    },
    name: "chatsDisplay",
    props:['chats'],
    data(){
        return {
            user: this.currentUser,
            message:null
        }
    },
    inject:['currentUser'],
    methods:{
        sendM(){
            this.$emit('sendMessage',this.message)
            this.message = null
        }
    },
    mounted() {
        let element = $('#chatWindow');

        element.animate({
            scrollTop: element.get(0).scrollHeight
        }, 1000)

        $('#autoresizing').on('input', function () {
            this.style.height = 'auto';

            this.style.height =
                (this.scrollHeight) + 'px';
        });

        $('#autoresizing').on('', function () {
            this.style.height = 'auto';

            this.style.height =
                (this.scrollHeight) + 'px';
        });
    }
}
</script>

<style scoped lang="scss">
@import "../../../Pages/sassLoader";

.chats-display {
    height: 100%;

    .chat-holder {
        height: 100%;

        .chat-timeline {
            width: 100%;
            height: 62vh;
            overflow-y: auto;

            ul {
                font-size: 0.9em;

                li {
                    display: flex;
                    flex-direction: column;
                    padding: 10px;
                    overflow: hidden;

                    h3 {
                        font-weight: bolder;
                        margin-bottom: 10px;
                    }
                }

                .left-chat {
                    margin-bottom: 10px;
                    padding: 10px;

                    .message {
                        position: relative;
                        width: 250px;
                        border-radius: 20px;
                        background-image: linear-gradient(200deg, #e0e0e0, #c4c4c4);

                        .message-content {
                            width: 100%;
                            height: 100%;
                            color: #494949;
                        }

                        .carret {
                            position: absolute;
                            transform: rotate(30deg);
                            width: 40px;
                            height: 40px;
                            border-radius: 5px;
                            background: conic-gradient(from 0deg at center, #c4c4c4 35deg, transparent 35deg);
                            top: calc(100% - 18px);
                            left: -30px;
                        }
                    }
                }

                .right-chat {
                    margin-bottom: 10px;
                    padding: 10px;
                    display: flex;
                    align-items: flex-end;

                    .message {
                        position: relative;
                        width: 250px;
                        border-radius: 20px;
                        background-image: linear-gradient(320deg, #f63a9e, #f58694);

                        .message-content {
                            width: 100%;
                            height: 100%;
                            color: white;
                        }

                        .carret {
                            position: absolute;
                            transform: rotate(-70deg);
                            width: 40px;
                            height: 40px;
                            border-radius: 5px;
                            background: conic-gradient(from 0deg at center, #f13d9f 35deg, transparent 35deg);
                            top: calc(100% - 18px);
                            left: calc(100% - 10px);
                        }
                    }
                }

                .message-content {
                    padding: 18px;
                }

                .message {
                    margin-bottom: 10px;
                }

                .message-details {
                    color: grey;
                    margin: 5px;
                }
            }
        }

        .send-pannel {
            display: flex;

            .input-group {
                padding: 10px;

                textarea {
                    width: 100%;
                    border-radius: 3px;
                    border: 2px solid grey !important;
                    resize: none;
                }
            }

            .button-holder {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100px;
            }
        }
    }
}
</style>
