<template>
    <nav>
        <MobileNavigationComponent :activeNavButton="'AboutUs'"/>
        <DesktopNavigationVue class="scrolled" :activeNavButton="'AboutUs'"></DesktopNavigationVue>
    </nav>
    <footer>
        <Footer/>
    </footer>
</template>
