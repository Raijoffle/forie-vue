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
    font-family: Dm Sans, sans-serif;
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
</style>
