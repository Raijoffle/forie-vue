<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default defineComponent({
    name: "HomeView",
    data: () => ({
        // carousel settings
        settings: {
            itemsToShow: 1,
            snapAlign: "center",
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            280: {
                itemsToShow: 1.5,
                snapAlign: "start",
            },
            320: {
                itemsToShow: 2,
                snapAlign: "start",
            },
            425: {
                itemsToShow: 2.5,
                snapAlign: "start",
            },
            500: {
                itemsToShow: 2.5,
                snapAlign: "start",
            },
            600: {
                itemsToShow: 4,
                snapAlign: "start",
            },
            // 700px and up
            700: {
                itemsToShow: 4,
                snapAlign: "start",
            },
            // 1024 and up
            1024: {
                itemsToShow: 5,
                snapAlign: "start",
            },
        },
    }),
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    methods: {},
});
</script>
<template>
    <div class="suppliersContent">
        <h3 class="suppliersContent1">Suppliers in All Industries Manufacturers and Exporter Companies Lists</h3>
        <h6 class="suppliersContent2">Importers, exporters, wholesalers, producers from all around the world</h6>
    </div>
    <hr class="line" />
    <div class="home-slider">
        <div class="productpreview">
            <carousel :settings="settings" :breakpoints="breakpoints">
                <slide v-for="slide in 10" :key="slide">
                    <div class="carousel__item">
                        <img class="w-100" :src="require(`/src/assets/img/Image1.png`)" :alt="slide" />
                        <small :title="slide">{{ slide }} slide</small>
                    </div>
                </slide>
                <template #addons>
                    <div class="sider-btn">
                        <Navigation />
                    </div>
                </template>
            </carousel>
        </div>
    </div>
</template>

<style scoped>
.productpreview {
    width: 100%;
    height: 234px;
    height: 100%;
    position: relative;
    padding-top: 30px;
}
::-webkit-scrollbar {
    display: none;
}
.sider-btn {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    height: 50px;
    width: 50px;
}

.home-slider {
    position: relative;

    max-height: 234px;
}
.carousel__prev,
.carousel__next {
    background-color: transparent !important;
    border-radius: 50%;
    width: var(--vc-nav-width);
    height: var(--vc-nav-width);
    text-align: center;
    font-size: 24px;
    padding: 0;
    color: #1b1b1d;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    position: absolute;
    cursor: pointer;
    left: 0;

    margin-top: 30px;
}
.carousel__item {
    padding: 5px;
    margin: 0 16px;
    max-height: 175px;
}
.carousel__item img {
    max-width: 280px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}

.suppliersContent {
    width: 80%;
    margin: 0 auto;
    margin-top: 50px;

    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    color: #1b1b1d;

    align-items: center;
    text-align: center;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.suppliersContent2 {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    align-items: center;
    text-align: center;
    letter-spacing: 0.5px;
    margin: 0 auto;
}

@media only screen and (max-width: 480px) {
    .carousel__item {
        padding: 5px;
        margin: 0 4px;
        max-height: 175px;
    }
}

@media only screen and (max-width: 320px) {
    .suppliersContent1 {
        font-size: 1.2rem;
    }
    .suppliersContent2 {
        font-size: 0.8rem;
        margin-top: 10px;
    }
    .productpreview {
        height: 200px;
    }
    .sider-btn {
        left: 45%;
        transform: translateY(-45%);
    }
}
@media only screen and (max-width: 280px) {
    .suppliersContent1 {
        font-size: 1.05rem;
    }
    .suppliersContent2 {
        font-size: 0.7rem;
        margin-top: 10px;
    }
    .sider-btn {
        left: 45%;
        transform: translateY(-45%);
        top: 50px;
    }
}
</style>

<style>
.carousel__prev,
.carousel__next {
    background-color: #005eb5 !important;
}
</style>
