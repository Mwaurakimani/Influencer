<script setup>

</script>

<template>
    <nav>
        <MobileNavigationComponent :activeNavButton="'ContactUs'"></MobileNavigationComponent>
        <DesktopNavigationVue class="scrolled" :activeNavButton="'ContactUs'"></DesktopNavigationVue>
    </nav>
    <footer>
        <Footer/>
    </footer>
</template>
