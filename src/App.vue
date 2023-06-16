<template>
    <Header></Header>
    <div class="pages">
        <router-view />
    </div>
    <Footer></Footer>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style>
#app {
    font-family: "Dm Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    overflow: hidden;
}
.material-icons-outlined {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}
.line {
    margin-top: 50px;
}
.pages {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    max-width: 1320px;
}

@media only screen and (max-width: 1400px) {
    .pages {
        max-width: 1320px;
        padding-right: var(--bs-gutter-x, 0.75rem);
        padding-left: var(--bs-gutter-x, 0.75rem);
    }
}
@media only screen and (max-width: 1200px) {
    .pages {
        max-width: 1140px;
    }
}
@media only screen and (max-width: 992px) {
    .pages {
        max-width: 960px;
    }
}

@font-face {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    src: local("Roboto"), local("Roboto"),
        url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700display=swap) format("css");
    font-display: swap;
}

/* fallback */
@font-face {
    font-family: "Material Icons Outlined";
    font-style: normal;
    font-weight: 400;
    src: url(@/assets/css/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUce.woff2) format("woff2");
}

.material-icons-outlined {
    font-family: "Material Icons Outlined";
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased;
}
</style>
