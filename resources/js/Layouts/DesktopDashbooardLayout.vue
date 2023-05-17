<script setup>
import {inject} from "vue";

const activeTab = inject('activeTab');

console.log(activeTab);
</script>


<template>
    <div class="dashboard-container">
        <div class="side-section" style="box-shadow: 0 0 6px #c9c9c9;z-index: 1000">
            <div class="logo-section">
                <img src="/storage/DESIGN/WORKSPACE/LOGO/SVG/logo-icon.svg">
            </div>
            <section>
                <h6>Account Management</h6>
                <ul>
                    <li :class="[activeTab == 'Account'?'activeTab':'']" >Account</li>
                </ul>
            </section>
            <hr>
            <section>
                <h6>Projects</h6>
                <ul>
                    <li :class="[activeTab == 'All Projects'?'activeTab':'']" >All Projects</li>
                    <li>Bid Projects</li>
                    <li>Assigned Projects</li>
                    <li>Completed Projects</li>
                    <li>Completed Projects</li>
                    <li>Archived Projects</li>
                </ul>
            </section>
            <hr>
            <section>
                <h6>Finance</h6>
                <ul>
                    <li>Balance</li>
                    <li>Deposit</li>
                    <li>Withdraw</li>
                </ul>
            </section>
            <hr>
            <section>
                <h6>Notifications</h6>
                <ul>
                    <li>General</li>
                    <li>Admin</li>
                    <li>System</li>
                </ul>
            </section>

        </div>
        <div class="system-content">
            <div class="desktop-navigation">
                <div class="search-bar-display">
                    <input type="search" placeholder="Search...">
                </div>
                <div class="action-display">
                    <div class=" mx-[20px] account-display">
                        <div class="user-icon">
                            <img src="/storage/user.jpg">
                        </div>
                        <p>Username</p>
                    </div>
                    <div>
                        <button>Log Out</button>
                    </div>
                </div>
            </div>
            <div class=" p-[10px] content-holder">
                <h3 class="mb-[20px]">Name</h3>
                <slot>

                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DesktopDashbooardLayout"
}
</script>

<style lang="scss" scoped>
@import "../Pages/sassLoader";

.dashboard-container{
    display: none;
}



@include s-screens{
    .dashboard-container{
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-columns: 200px 1fr;
        grid-template-areas:
        "side system";
        overflow: hidden;

        .side-section{
            width: 100%;
            height: 100%;
            background-color: #f3f3f3;
            grid-area: side;

            .activeTab{
                background-color: deeppink;
                color: white;
                border-radius: 8px 0px 0px 8px;
                padding-left: 10px;

            }

            .logo-section{
                width: 100%;
                height: 100px;
                display: grid;
                place-content: center;
                margin-bottom: 20px;
                img{
                    width: 80px;
                }
            }

            section{
                margin-bottom: 20px;
                h6{
                    margin-left: 10px;
                    margin-bottom: 10px;
                    color: #484848;
                }
                ul{
                    padding-left: 30px;
                    color: grey;
                    li{
                        font-size: 0.9em;
                        margin: 10px 0px;
                    }
                }
            }

            hr{
                width: 90%;
                display: block;
                margin: auto;
                background-color: darkgrey;
                margin-bottom: 20px;
            }
        }
        .system-content{
            background-color: #efefef;
            grid-area: system;
            overflow: auto;
            .desktop-navigation{
                position: sticky;
                top: 0px;
                width: 99%;
                margin: auto;
                display: flex;
                justify-content: space-between;
                padding-right: 20px;
                height: 50px;
                background-color: white;
                z-index: 2000 !important;
                box-shadow: 0 0  6px lightgrey;

                .search-bar-display{
                    width: 300px;
                    height: 100%;
                    display: grid;
                    padding-left: 20px;
                    place-items: center;
                    input{
                        width: 100%;
                    }
                }

                .action-display{
                    height: 100%;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    flex-wrap: nowrap;
                    .account-display{
                        display: flex;
                        align-items: center;
                        .user-icon{
                            border-radius: 50%;
                            margin: 0 20px;
                            width: 45px;
                            height: 45px;
                            overflow: hidden;
                            img{
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            }
                        }
                    }
                }

                button{
                    border: 1px solid var(--t-purple);
                    padding: 5px 20px !important;
                    border-radius: 6px;
                    color: var(--t-purple);
                    font-size: 0.8em;
                    &:hover{
                        background-color: var(--t-purple);
                        color: white;
                    }
                }

            }
        }
    }
}
</style>
