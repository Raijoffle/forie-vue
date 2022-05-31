<template>
    <div class="productsList">
        <div class="pageRoute">
            <p class="fromRoute"><router-link to="/">HomePage</router-link></p>
            <span>▸</span>
            <p class="toRoute">
                <router-link to="/products">Products List</router-link>
            </p>
        </div>
        <div class="productListFlex">
            <div class="productList">
                <div class="productList-products">
                    <div class="productListTitle">
                        <h1>Products List</h1>
                        <div @click="filterActive(1)">
                            <span class="material-icons-outlined"> filter_alt </span>Advanced Filter
                        </div>
                    </div>
                    <div class="product">
                        <div class="card mb-3" style="max-width: 100%">
                            <div class="row g-0">
                                <div class="col-md-12">
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            Linden Tekstil Mermer Gida Nakliye Ithalat Ihracat Sanayi Ve Ticaret Limited Sirketi
                                        </h5>
                                        <p class="card-text product-text">
                                            Based on quality, our principle is *CUSTOMER SATISFACTION” As we know that quality is
                                            an important criteria t......
                                        </p>
                                        <!-- Slide -->
                                        <div class="product-slider">
                                            <div class="productpreview">
                                                <carousel :settings="settings" :breakpoints="breakpoints">
                                                    <slide v-for="slide in 10" :key="slide">
                                                        <div class="carousel__item">
                                                            <img class="w-100" :src="require(`/src/assets/img/Image1.png`)" />
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
                                        <!-- Slide -->
                                        <a href="#" class="card-text"><country-flag country="gb" size="normal" /> England</a>
                                        <div class="productTags">
                                            <span class="productTag1">technical clothing</span>
                                            <span class="productTag2">school uniform</span>
                                            <span class="productTag3">surgery uniforms</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product">
                        <div class="card mb-3" style="max-width: 100%">
                            <div class="row g-0">
                                <div class="col-md-12">
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            Linden Tekstil Mermer Gida Nakliye Ithalat Ihracat Sanayi Ve Ticaret Limited Sirketi
                                        </h5>
                                        <p class="card-text product-text">
                                            Based on quality, our principle is *CUSTOMER SATISFACTION” As we know that quality is
                                            an important criteria t......
                                        </p>
                                        <!-- Slide -->
                                        <div class="product-slider">
                                            <div class="productpreview">
                                                <carousel :settings="settings" :breakpoints="breakpoints">
                                                    <slide v-for="slide in 10" :key="slide">
                                                        <div class="carousel__item">
                                                            <img class="w-100" :src="require(`/src/assets/img/Image1.png`)" />
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
                                        <!-- Slide -->
                                        <a href="#" class="card-text"><country-flag country="gb" size="normal" /> England</a>
                                        <div class="productTags">
                                            <span class="productTag1">technical clothing</span>
                                            <span class="productTag2">school uniform</span>
                                            <span class="productTag3">surgery uniforms</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product">
                        <div class="card mb-3" style="max-width: 100%">
                            <div class="row g-0">
                                <div class="col-md-12">
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            Linden Tekstil Mermer Gida Nakliye Ithalat Ihracat Sanayi Ve Ticaret Limited Sirketi
                                        </h5>
                                        <p class="card-text product-text">
                                            Based on quality, our principle is *CUSTOMER SATISFACTION” As we know that quality is
                                            an important criteria t......
                                        </p>
                                        <!-- Slide -->
                                        <div class="product-slider">
                                            <div class="productpreview">
                                                <carousel :settings="settings" :breakpoints="breakpoints">
                                                    <slide v-for="slide in 10" :key="slide">
                                                        <div class="carousel__item">
                                                            <img class="w-100" :src="require(`/src/assets/img/Image1.png`)" />
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
                                        <!-- Slide -->
                                        <a href="#" class="card-text"><country-flag country="gb" size="normal" /> England</a>
                                        <div class="productTags">
                                            <span class="productTag1">technical clothing</span>
                                            <span class="productTag2">school uniform</span>
                                            <span class="productTag3">surgery uniforms</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product">
                        <div class="card mb-3" style="max-width: 100%">
                            <div class="row g-0">
                                <div class="col-md-12">
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            Linden Tekstil Mermer Gida Nakliye Ithalat Ihracat Sanayi Ve Ticaret Limited Sirketi
                                        </h5>
                                        <p class="card-text product-text">
                                            Based on quality, our principle is *CUSTOMER SATISFACTION” As we know that quality is
                                            an important criteria t......
                                        </p>
                                        <!-- Slide -->
                                        <div class="product-slider">
                                            <div class="productpreview">
                                                <carousel :settings="settings" :breakpoints="breakpoints">
                                                    <slide v-for="slide in 10" :key="slide">
                                                        <div class="carousel__item">
                                                            <img class="w-100" :src="require(`/src/assets/img/Image1.png`)" />
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
                                        <!-- Slide -->
                                        <a href="#" class="card-text"><country-flag country="gb" size="normal" /> England</a>
                                        <div class="productTags">
                                            <span class="productTag1">technical clothing</span>
                                            <span class="productTag2">school uniform</span>
                                            <span class="productTag3">surgery uniforms</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product">
                        <div class="card mb-3" style="max-width: 100%">
                            <div class="row g-0">
                                <div class="col-md-12">
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            Linden Tekstil Mermer Gida Nakliye Ithalat Ihracat Sanayi Ve Ticaret Limited Sirketi
                                        </h5>
                                        <p class="card-text product-text">
                                            Based on quality, our principle is *CUSTOMER SATISFACTION” As we know that quality is
                                            an important criteria t......
                                        </p>
                                        <!-- Slide -->
                                        <div class="product-slider">
                                            <div class="productpreview">
                                                <carousel :settings="settings" :breakpoints="breakpoints">
                                                    <slide v-for="slide in 10" :key="slide">
                                                        <div class="carousel__item">
                                                            <img class="w-100" :src="require(`/src/assets/img/Image1.png`)" />
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
                                        <!-- Slide -->
                                        <a href="#" class="card-text"><country-flag country="gb" size="normal" /> England</a>
                                        <div class="productTags">
                                            <span class="productTag1">technical clothing</span>
                                            <span class="productTag2">school uniform</span>
                                            <span class="productTag3">surgery uniforms</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product">
                        <div class="card mb-3" style="max-width: 100%">
                            <div class="row g-0">
                                <div class="col-md-12">
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            Linden Tekstil Mermer Gida Nakliye Ithalat Ihracat Sanayi Ve Ticaret Limited Sirketi
                                        </h5>
                                        <p class="card-text product-text">
                                            Based on quality, our principle is *CUSTOMER SATISFACTION” As we know that quality is
                                            an important criteria t......
                                        </p>
                                        <!-- Slide -->
                                        <div class="product-slider">
                                            <div class="productpreview">
                                                <carousel :settings="settings" :breakpoints="breakpoints">
                                                    <slide v-for="slide in 10" :key="slide">
                                                        <div class="carousel__item">
                                                            <img class="w-100" :src="require(`/src/assets/img/Image1.png`)" />
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
                                        <!-- Slide -->
                                        <a href="#" class="card-text"><country-flag country="gb" size="normal" /> England</a>
                                        <div class="productTags">
                                            <span class="productTag1">technical clothing</span>
                                            <span class="productTag2">school uniform</span>
                                            <span class="productTag3">surgery uniforms</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product">
                        <div class="card mb-3" style="max-width: 100%">
                            <div class="row g-0">
                                <div class="col-md-12">
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            Linden Tekstil Mermer Gida Nakliye Ithalat Ihracat Sanayi Ve Ticaret Limited Sirketi
                                        </h5>
                                        <p class="card-text product-text">
                                            Based on quality, our principle is *CUSTOMER SATISFACTION” As we know that quality is
                                            an important criteria t......
                                        </p>
                                        <!-- Slide -->
                                        <div class="product-slider">
                                            <div class="productpreview">
                                                <carousel :settings="settings" :breakpoints="breakpoints">
                                                    <slide v-for="slide in 10" :key="slide">
                                                        <div class="carousel__item">
                                                            <img class="w-100" :src="require(`/src/assets/img/Image1.png`)" />
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
                                        <!-- Slide -->
                                        <a href="#" class="card-text"><country-flag country="gb" size="normal" /> England</a>
                                        <div class="productTags">
                                            <span class="productTag1">technical clothing</span>
                                            <span class="productTag2">school uniform</span>
                                            <span class="productTag3">surgery uniforms</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="moreLinkDiv">
                        <router-link to="/products">View More products</router-link>
                    </div>
                    <hr />
                </div>
            </div>
            <div class="filterDiv">
                <div class="filterMobil">
                    <div class="filterTitle">
                        <h5>Filters</h5>
                        <span class="material-icons-outlined" @click="filterActive">close</span>
                    </div>
                    <form action="">
                        <div class="field-container">
                            <input class="field-input" id="inputid1" name="inputName" type="text" placeholder="Keywords" />
                            <label class="field-placeholder" for="inputName">Search</label>
                        </div>
                        <hr />
                        <div class="field-container">
                            <!-- <input class="field-input" id="inputid2" name="inputName" type="text" placeholder=" " /> -->
                            <select class="form-select field-input" aria-label="Category">
                                <option selected>Textile Products</option>
                                <option value="1">Textile Products One</option>
                                <option value="2">Textile Products Two</option>
                                <option value="3">Textile Products Three</option>
                            </select>
                            <label class="field-placeholder" for="inputName">Category</label>
                        </div>
                        <div class="field-container subcategory">
                            <!-- <input class="field-input" id="inputid2" name="inputName" type="text" placeholder=" " /> -->
                            <select class="form-select field-input" aria-label="Category">
                                <option selected>Yarn</option>
                                <option value="1">Yarn One</option>
                                <option value="2">Yarn Two</option>
                                <option value="3">Yarn Three</option>
                            </select>
                            <label class="field-placeholder" for="inputName">Sub Category</label>
                        </div>
                        <hr />
                        <div class="field-container">
                            <!-- <input class="field-input" id="inputid2" name="inputName" type="text" placeholder=" " /> -->
                            <select class="form-select field-input" aria-label="Category">
                                <option selected>Turkey</option>
                                <option value="1">Turkey One</option>
                                <option value="2">Turkey Two</option>
                                <option value="3">Turkey Three</option>
                            </select>
                            <label class="field-placeholder" for="inputName">Country</label>
                        </div>
                        <hr />

                        <div class="filterButton">
                            <div class="resetButton">
                                <button type="reset">
                                    <span class="material-icons-outlined"> restart_alt </span>Reset Filters
                                </button>
                            </div>
                            <div class="applyButton">
                                <button type="submit">Apply</button>
                            </div>
                        </div>
                        <hr />
                    </form>
                    <div class="advertisement">
                        <span class="material-icons-outlined"> ads_click </span><span>advertisement</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from "jquery";
// import axios from "axios";
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default defineComponent({
    name: "HomeView",
    data: () => ({
        // carousel settings
        settings: {
            itemsToShow: 1.5,
            snapAlign: "center",
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            200: {
                itemsToShow: 1,
                snapAlign: "start",
            },
            300: {
                itemsToShow: 1,
                snapAlign: "start",
            },
            400: {
                itemsToShow: 1.5,
                snapAlign: "start",
            },
            500: {
                itemsToShow: 2,
                snapAlign: "start",
            },
            600: {
                itemsToShow: 2.5,
                snapAlign: "center",
            },
            // 700px and up
            700: {
                itemsToShow: 3,
                snapAlign: "center",
            },
            // 1024 and up
            1024: {
                itemsToShow: 4,
                snapAlign: "start",
            },
        },
    }),
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    created() {
        // axios.get(this.url).then((response) => (this.products = response.data));
    },
    methods: {
        filterActive: function (s) {
            if (s == 1) {
                $(".filterDiv").addClass("filterActive");
            } else {
                $(".filterDiv").removeClass("filterActive");
            }
        },
    },
});
</script>
<style scoped>
a:hover {
    /* color: #a5c8ff; */
    color: #000;
}

.pageRoute {
    width: 100%;
    height: 20px;
    text-align: left;
    position: relative;
    display: flex;
    align-items: center;
    vertical-align: center;
}
.pageRoute p {
    /* display: inline-block; */
    display: flex;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
}
.pageRoute .toRoute a {
    color: #005eb5;
}
.pageRoute span {
    padding-top: 1px;
    box-sizing: border-box;
}
.productsList {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    position: relative;
    width: 100%;
}
.productList-products {
    font-family: "DM Sans", sans-serif;
    position: relative;
    margin-top: 28px;
    width: 100%;
}
.productListFlex {
    display: flex;
    justify-content: left;
    width: 100%;
    height: 100%;
}
.productList-products h1 {
    font-weight: 400, regular;
    font-style: normal;
    font-size: 28px;
    line-height: 36px;
    position: relative;
    display: flex;
    left: 0;
    flex-direction: row;
}
.productListTitle {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
}

.productListTitle div {
    cursor: pointer;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    position: absolute;
    right: 0;
    background-color: #005eb5;
    display: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 172px;
    height: 40px;
    border-radius: 100px;
    color: #fff;
    font-size: 14px;
}

.product {
    font-family: "Dm Sans", sans-serif;
    text-align: left;
    position: relative;
    margin-top: 25px;
    border: 1px solid rgba(116, 119, 127, 0.12);
    max-height: 523px;
    height: 100%;
    border-radius: 28px;
    padding: 6px 16px;
    box-sizing: border-box;
}
.product div {
    border: none;
}
.product .card-body {
    padding: 0;
    height: 320px;
}
.product .card-title {
    color: #005eb5;
    font-weight: 500, medium;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
    width: 100%;
    max-height: 60px;
    display: flex;
    flex-wrap: wrap;
}

.product .card-text span {
    font-weight: 400, Regular;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    margin-top: 16px;
}
.product .card-body a {
    position: absolute;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: left;
}
.product .card-body a span {
    margin: 0px;
}
.product .productTags {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: right;
}
.product .productTags span {
    border: 1px solid rgba(116, 119, 127, 0.16);
    border-radius: 8px;
    padding: 6px 16px;
    box-sizing: border-box;
    margin: 0px 8px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #43474f;
}
.product .product-logo {
    width: 100%;
    margin-top: 5px;
}
.product-logoImage {
    border-radius: 50%;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.product .product-logo .product-logoImage img {
    max-width: 64px;
    height: auto;
    width: 100%;
}
.moreLinkDiv {
    background-color: #005eb5;
    border-radius: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 212px;
    height: 40px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 50px;
}
.moreLinkDiv a {
    color: #fff;
}
.filterDiv {
    margin-top: 50px;
    position: relative;
    top: 0;
    right: 0;
    width: 264px;
    height: 980px;
    /* transition: all 0.3s ease-in-out; */
}

.filterTitle {
    display: flex;
    justify-content: left;
    align-items: left;
    justify-items: left;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 36px;
    position: relative;
}
.filterTitle span {
    display: none;
    justify-content: center;
    align-items: center;
    justify-items: center;
    width: 40px;
    height: 40px;
    background-color: #a5c8ff;
    border-radius: 100px;
    position: absolute;
    right: 0;
    color: #003063;
}

.field-container {
    position: relative;
    /* border: 1px solid #000; */
    height: 50px;
    width: 100%;
    margin-top: 24px;
    /* padding-left: 12px; */
}
.businessSegments {
    display: none;
}
.field-placeholder {
    position: absolute;
    top: 50%;
    transform: translate(5px, -50%);
    pointer-events: none;
    transition: all 0.14s ease-in-out;
    font-size: 18px;
    color: #adadad;
}

input[type="text"].field-input,
select {
    color: #000;
    border: 1px solid #74777f;
    box-sizing: border-box;
    border-radius: 4px;
    /* margin-top: 20px; */
    font-size: 16px;
    display: block;
    box-sizing: border-box;
    width: 100%;
    bottom: 0px;
    height: 50px;
}
/* input[type="text"].field-input:focus {
    outline: none;
} */
/* input[type="text"].field-input.c-fix,
input[type="text"].field-input:focus,
input[type="text"].field-input:not(:placeholder-shown) {
    border-color: transparent;
} */

.field-input ~ label {
    color: #74777f;
    letter-spacing: 0.5px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    top: 0;
    background-color: #fff;
    left: 15px;
}
input[type="text"] {
    padding-left: 20px;
    padding-right: 20px;
}
input[type="text"].field-input::-webkit-input-placeholder {
    color: #1b1b1d;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
}
input[type="text"].field-input::-moz-placeholder {
    color: #1b1b1d;
    padding-left: 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
}
input[type="text"].field-input:-ms-input-placeholder {
    color: #1b1b1d;
    padding-left: 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
}
.form-select:focus {
    border-color: none;
    outline: 0;
}
.form-select {
    padding-left: 20px;
}
.filterButton {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    margin: 16px 0px;
    margin-bottom: 0px;
    font-feature-settings: "liga" off;
}
.filterButton button {
    margin: 0px 10px;
}
.filterButton .resetButton span {
    position: relative;
    top: 5px;
    font-size: 20px;
}
.filterButton .resetButton button {
    border: none;
    background-color: transparent;
    box-sizing: border-box;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #005eb5;
    letter-spacing: 0.1px;
}
.filterButton .applyButton button {
    background: #005eb5;
    border-radius: 100px;
    width: 117px;
    height: 40px;
    padding: 10px 24px;
    color: #fff;
}
.advertisement {
    background: rgba(224, 226, 235, 0.16);
    border-radius: 28px;
    width: 264px;
    height: 544px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 26px;
}
.advertisement span {
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 16px;
    color: rgba(0, 27, 61, 0.16);
}
.advertisement span:nth-child(2) {
    font-size: 14px;
    position: absolute;
    margin-top: 55px;
}
.filterActive {
    display: block !important;
    right: 0;
}

.productpreview {
    width: 100%;
    height: 234px;

    position: relative;
    padding-top: 30px;
}
::-webkit-scrollbar {
    display: none;
}
.productPreview {
    height: 100%;
}
.sider-btn {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    height: 50px;
    width: 50px;
    /* margin-top: 50px; */
}
.product-slider {
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
    max-height: 175px;
    max-width: 320px;
}
.carousel__item img {
    max-width: 280px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}

@media only screen and (max-width: 1200px) {
    .filterDiv {
        position: fixed;
        display: none;
        background: rgba(0, 0, 0, 0.75);
        width: 100%;
        top: -50px;
        z-index: 12;
        overflow: hidden;
        transition: all 0.3s ease-in-out;
    }

    .product .productTags span {
        font-size: 11px;
    }
    .productListTitle div {
        display: flex;
    }
    .filterMobil {
        background: #fff;
        width: 364px;
        position: absolute;
        right: 0;
        padding: 50px;
        height: 100%;
    }
    .filterTitle span {
        display: flex;
    }

    .advertisement {
        display: none;
    }
}
@media only screen and (max-width: 1000px) {
    .product .card-title {
        font-size: 15px;
    }
    .product .card-body {
        margin-left: 10px;
    }
    .product .productTags {
        width: 60%;
    }
    .product .card-body .productTags span {
        padding: 0;
        font-size: 13px;
    }
    .product .card-body a {
        font-size: 13px;
    }
    .product-logoImage {
        width: 44px;
        height: 44px;
    }
    .product .card-body a {
        bottom: -10px;
    }
}
@media only screen and (max-width: 767px) {
    .product .productTags {
        bottom: 26px;
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    .product .card-body .productTags span {
        margin-left: 0px;
        text-align: center;
        width: 33.3%;
    }
    .product .card-text {
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0px;
        color: #1b1b1d;
    }
    .product .card-body {
        font-size: 11px;
    }
    .product .card-body a {
        width: 100%;
        margin-top: 3px;
        font-size: 16px;
    }
    .product .productTags span {
        position: unset;
        display: block;
    }
    .product .card-body p {
        font-size: 14px;
    }
    .product-logoImage {
        display: none;
    }
    .product .card {
        height: 360px;
    }
}
@media only screen and (max-width: 480px) {
    .productList .productList-products .productListTitle h1 {
        font-size: 22px;
        max-width: 155px;
        max-height: 40px;
    }
    .productList .productList-products .productListTitle div {
        width: 120px;
        font-size: 12px;
    }
    .productList .productList-products .productListTitle div span {
        font-size: 18px;
    }
}
@media only screen and (max-width: 400px) {
    .productsList {
        max-width: 320px;
    }
    .productList-products {
        max-width: 300px;
    }
    .product .card {
        height: 430px;
    }
}
@media only screen and (max-width: 280px) {
    .productsList {
        max-width: 280px;
    }
    .productList-products {
        max-width: 260px;
    }
    .product .card {
        margin: 6px 0px;
    }
    .filterMobil {
        width: 280px;
    }
}
</style>
