<script setup>

function toggle_dropdown() {

    let height = $('.dropdown-mobile-menu').css('height')

    console.log();

    if (height == '0px') {
        $('.dropdown-mobile-menu').css({
            height: '320px'
        })
    } else {
        $('.dropdown-mobile-menu').css({
            height: '0px'
        })
    }


}

</script>

<template>
    <div class="desktop-nav" style="background-color: orange;">
        <div class="logo-display">
            <h1 style="font-size:1.3em;line-height:60px;color:white" class="w-[100%] h-[100%] text-center">Vumisha</h1>
        </div>
        <div class="dropdown-mobile-menu">
            <ul class="m-[15px]">
                <li>Home</li>
                <li>Find Adverts</li>
                <li>Post Adverts</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
            <ul style="display: flex; justify-content: space-between;" class="m-[15px] ml-[80px]">
                <li>Log In</li>
                <li>Sign Up</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
.desktop-nav {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;

    .logo-display {
        width: 180px;
        height: 60px;

    }

    .menu-burger {
        width: 50px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .dropdown-mobile-menu {
        width: auto;
        height: 0px;
        transition: all ease-in 250ms;
        background-color: white;
        box-shadow: 2px 0px 6px grey;
        display: flex;
        color: white;

        ul {
            display: flex;
            li{
                margin: 0px 10px;
            }
        }
    }
}

@media only screen and (max-width: 980px) {
    .desktop-nav {
        display: none;
    }

}
</style>