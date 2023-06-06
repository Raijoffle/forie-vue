<template>
    <div class="home">
        <div class="suplierDiv">
            <div class="suppliers">
                <div class="suppliersBackground">
                    <div class="suppliersText">
                        <h1>Textile Products Suppliers</h1>
                    </div>
                </div>
            </div>
            <div class="suppliersContent">
                <p class="suppliersContent1">Suppliers in All Industries Manufacturers and Exporter Companies Lists</p>
                <p class="suppliersContent2">Importers, exporters, wholesalers, producers from all around the world</p>
            </div>
        </div>
        <hr class="mt-5 line" />
        <!-- --------------------------------------------------------------------------------------SLider-------------------------------------------------------------------------------------------------- -->
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
        <!-- --------------------------------------------------------------------------------------SLider-------------------------------------------------------------------------------------------------- -->
        <hr class="line" />
        <div class="home-companies">
            <h1>Companies</h1>
            <div class="company">
                <div class="card mb-3" style="max-width: 100%">
                    <div class="row g-0">
                        <div class="col-md-1">
                            <div class="company-logo">
                                <div class="company-logoImage">
                                    <img
                                        src="https://cdn.forie.com/storage/general/logo/forie-logo.svg"
                                        class="img-fluid rounded-start"
                                        alt="ss"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-11">
                            <div class="card-body">
                                <h5 class="card-title">
                                    Linden Tekstil Mermer Gida Nakliye Ithalat Ihracat Sanayi Ve Ticaret Limited Sirketi
                                </h5>
                                <p class="card-text">
                                    Based on quality, our principle is *CUSTOMER SATISFACTION” As we know that quality is an
                                    important criteria t......
                                </p>
                                <a href="#" class="card-text">
                                    <country-flag country="tr" size="small" />
                                    <country-flag country="gb" size="small" /> Read Profile Page</a
                                >
                                <div class="companyTags">
                                    <span class="companyTag1">technical clothing</span>
                                    <span class="companyTag2">school uniform</span>
                                    <span class="companyTag3">surgery uniforms</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="company">
                <div class="card mb-3" style="max-width: 100%">
                    <div class="row g-0">
                        <div class="col-md-1">
                            <div class="company-logo">
                                <div class="company-logoImage">
                                    <img
                                        src="https://www.turkishexporter.net/assetsFront/img/logo.png"
                                        class="img-fluid rounded-start"
                                        alt="ss"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-11">
                            <div class="card-body">
                                <h5 class="card-title">
                                    Linden Tekstil Mermer Gida Nakliye Ithalat Ihracat Sanayi Ve Ticaret Limited Sirketi
                                </h5>
                                <p class="card-text">
                                    Based on quality, our principle is *CUSTOMER SATISFACTION” As we know that quality is an
                                    important criteria t......
                                </p>
                                <a href="#" class="card-text">
                                    <country-flag country="tr" size="small" />
                                    <country-flag country="gb" size="small" /> Read Profile Page</a
                                >
                                <div class="companyTags">
                                    <span class="companyTag1">technical clothing</span>
                                    <span class="companyTag2">school uniform</span>
                                    <span class="companyTag3">surgery uniforms</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="company">
                <div class="card mb-3" style="max-width: 100%">
                    <div class="row g-0">
                        <div class="col-md-1">
                            <div class="company-logo">
                                <div class="company-logoImage">
                                    <img
                                        src="https://cdn.forie.com/storage/images/companies/logo/2a819095-18e3-4e0b-b348-aa811fb101ce.png"
                                        class="img-fluid rounded-start"
                                        alt="ss"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-11">
                            <div class="card-body">
                                <h5 class="card-title">
                                    Linden Tekstil Mermer Gida Nakliye Ithalat Ihracat Sanayi Ve Ticaret Limited Sirketi
                                </h5>
                                <p class="card-text">
                                    Based on quality, our principle is *CUSTOMER SATISFACTION” As we know that quality is an
                                    important criteria t......
                                </p>
                                <a href="#" class="card-text">
                                    <country-flag country="tr" size="small" />
                                    <country-flag country="gb" size="small" /> Read Profile Page</a
                                >
                                <div class="companyTags">
                                    <span class="companyTag1">technical clothing</span>
                                    <span class="companyTag2">school uniform</span>
                                    <span class="companyTag3">surgery uniforms</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="company">
                <div class="card mb-3" style="max-width: 100%">
                    <div class="row g-0">
                        <div class="col-md-1">
                            <div class="company-logo">
                                <div class="company-logoImage">
                                    <img
                                        src="https://cdn.forie.com/storage/images/companies/logo/799d298a-d673-4da9-ab14-e27ca0c65600.jpg"
                                        class="img-fluid rounded-start"
                                        alt="ss"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-11">
                            <div class="card-body">
                                <h5 class="card-title">
                                    Linden Tekstil Mermer Gida Nakliye Ithalat Ihracat Sanayi Ve Ticaret Limited Sirketi
                                </h5>
                                <p class="card-text">
                                    Based on quality, our principle is *CUSTOMER SATISFACTION” As we know that quality is an
                                    important criteria t......
                                </p>
                                <a href="#" class="card-text">
                                    <country-flag country="tr" size="small" />
                                    <country-flag country="gb" size="small" /> Read Profile Page</a
                                >
                                <div class="companyTags">
                                    <span class="companyTag1">technical clothing</span>
                                    <span class="companyTag2">school uniform</span>
                                    <span class="companyTag3">surgery uniforms</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="company">
                <div class="card mb-3" style="max-width: 100%">
                    <div class="row g-0">
                        <div class="col-md-1">
                            <div class="company-logo">
                                <div class="company-logoImage">
                                    <img
                                        src="https://cdn.forie.com/storage/images/companies/logo/de128a34-4018-4b3d-af3a-a38a73034582.png"
                                        class="img-fluid rounded-start"
                                        alt="ss"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-11">
                            <div class="card-body">
                                <h5 class="card-title">
                                    Linden Tekstil Mermer Gida Nakliye Ithalat Ihracat Sanayi Ve Ticaret Limited Sirketi
                                </h5>
                                <p class="card-text">
                                    Based on quality, our principle is *CUSTOMER SATISFACTION” As we know that quality is an
                                    important criteria t......
                                </p>
                                <a href="#" class="card-text">
                                    <country-flag country="tr" size="small" />
                                    <country-flag country="gb" size="small" /> Read Profile Page</a
                                >
                                <div class="companyTags">
                                    <span class="companyTag1">technical clothing</span>
                                    <span class="companyTag2">school uniform</span>
                                    <span class="companyTag3">surgery uniforms</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="moreLinkDiv">
                <router-link to="/companies">More Companies</router-link>
            </div>
        </div>
        <hr class="mt-5 line" />

        <div class="home-leades">
            <h1>Leades</h1>
            <div class="leades-flex">
                <div class="leades">
                    <div class="leadesDate"><span>27.01.2022</span></div>
                    <div class="leadesHead">
                        <div class="leadesTitle">
                            <h5>Heavy duty vehicles to import Bangladesh</h5>
                        </div>
                        <div class="leadesFlag">
                            <span> <country-flag country="tr" size="normal" /></span>
                        </div>
                    </div>
                    <div class="leadesBody">
                        <div class="leadesContent">
                            Actually i am looking for construction equipment manufacturer. pay loader, motor grader, beam
                            lifter, forklift, excavator etc.
                        </div>
                        <div class="leadFooter">
                            <div class="leadesStatus">
                                <span class="material-icons-outlined leadesIcon"> card_travel </span
                                ><span class="leadesText">Buy Request</span>
                                <span class="material-icons-outlined leadesIcon"> copyright </span
                                ><span class="leadesText">10 Credit</span>
                            </div>
                        </div>
                        <div class="leadesTag">
                            <span>deniz mahsulleri</span>
                            <span>deniz ürünleri</span>
                            <span>motor grader</span>
                        </div>
                    </div>
                </div>
                <div class="leades">
                    <div class="leadesDate"><span>27.01.2022</span></div>
                    <div class="leadesHead">
                        <div class="leadesTitle">
                            <h5>Heavy duty vehicles to import Bangladesh</h5>
                        </div>
                        <div class="leadesFlag">
                            <span> <country-flag country="tr" size="normal" /></span>
                        </div>
                    </div>
                    <div class="leadesBody">
                        <div class="leadesContent">
                            Actually i am looking for construction equipment manufacturer. pay loader, motor grader, beam
                            lifter, forklift, excavator etc.
                        </div>
                        <div class="leadFooter">
                            <div class="leadesStatus">
                                <span class="material-icons-outlined leadesIcon"> card_travel </span
                                ><span class="leadesText">Buy Request</span>
                                <span class="material-icons-outlined leadesIcon"> copyright </span
                                ><span class="leadesText">10 Credit</span>
                            </div>
                        </div>
                        <div class="leadesTag">
                            <span>deniz mahsulleri</span>
                            <span>deniz ürünleri</span>
                            <span>motor grader</span>
                        </div>
                    </div>
                </div>
                <div class="leades">
                    <div class="leadesDate"><span>27.01.2022</span></div>
                    <div class="leadesHead">
                        <div class="leadesTitle">
                            <h5>Heavy duty vehicles to import Bangladesh</h5>
                        </div>
                        <div class="leadesFlag">
                            <span> <country-flag country="tr" size="normal" /></span>
                        </div>
                    </div>
                    <div class="leadesBody">
                        <div class="leadesContent">
                            Actually i am looking for construction equipment manufacturer. pay loader, motor grader, beam
                            lifter, forklift, excavator etc.
                        </div>
                        <div class="leadFooter">
                            <div class="leadesStatus">
                                <span class="material-icons-outlined leadesIcon"> card_travel </span
                                ><span class="leadesText">Buy Request</span>
                                <span class="material-icons-outlined leadesIcon"> copyright </span
                                ><span class="leadesText">10 Credit</span>
                            </div>
                        </div>
                        <div class="leadesTag">
                            <span>deniz mahsulleri</span>
                            <span>deniz ürünleri</span>
                            <span>motor grader</span>
                        </div>
                    </div>
                </div>
                <div class="leades">
                    <div class="leadesDate"><span>27.01.2022</span></div>
                    <div class="leadesHead">
                        <div class="leadesTitle">
                            <h5>Heavy duty vehicles to import Bangladesh</h5>
                        </div>
                        <div class="leadesFlag">
                            <span> <country-flag country="tr" size="normal" /></span>
                        </div>
                    </div>
                    <div class="leadesBody">
                        <div class="leadesContent">
                            Actually i am looking for construction equipment manufacturer. pay loader, motor grader, beam
                            lifter, forklift, excavator etc.
                        </div>
                        <div class="leadFooter">
                            <div class="leadesStatus">
                                <span class="material-icons-outlined leadesIcon"> card_travel </span
                                ><span class="leadesText">Buy Request</span>
                                <span class="material-icons-outlined leadesIcon"> copyright </span
                                ><span class="leadesText">10 Credit</span>
                            </div>
                        </div>
                        <div class="leadesTag">
                            <span>deniz mahsulleri</span>
                            <span>deniz ürünleri</span>
                            <span>motor grader</span>
                        </div>
                    </div>
                </div>
                <div class="leades">
                    <div class="leadesDate"><span>27.01.2022</span></div>
                    <div class="leadesHead">
                        <div class="leadesTitle">
                            <h5>Heavy duty vehicles to import Bangladesh</h5>
                        </div>
                        <div class="leadesFlag">
                            <span> <country-flag country="tr" size="normal" /></span>
                        </div>
                    </div>
                    <div class="leadesBody">
                        <div class="leadesContent">
                            Actually i am looking for construction equipment manufacturer. pay loader, motor grader, beam
                            lifter, forklift, excavator etc.
                        </div>
                        <div class="leadFooter">
                            <div class="leadesStatus">
                                <span class="material-icons-outlined leadesIcon"> card_travel </span
                                ><span class="leadesText">Buy Request</span>
                                <span class="material-icons-outlined leadesIcon"> copyright </span
                                ><span class="leadesText">10 Credit</span>
                            </div>
                        </div>
                        <div class="leadesTag">
                            <span>deniz mahsulleri</span>
                            <span>deniz ürünleri</span>
                            <span>motor grader</span>
                        </div>
                    </div>
                </div>
                <div class="leades">
                    <div class="leadesDate"><span>27.01.2022</span></div>
                    <div class="leadesHead">
                        <div class="leadesTitle">
                            <h5>Heavy duty vehicles to import Bangladesh</h5>
                        </div>
                        <div class="leadesFlag">
                            <span> <country-flag country="tr" size="normal" /></span>
                        </div>
                    </div>
                    <div class="leadesBody">
                        <div class="leadesContent">
                            Actually i am looking for construction equipment manufacturer. pay loader, motor grader, beam
                            lifter, forklift, excavator etc.
                        </div>
                        <div class="leadFooter">
                            <div class="leadesStatus">
                                <span class="material-icons-outlined leadesIcon"> card_travel </span
                                ><span class="leadesText">Buy Request</span>
                                <span class="material-icons-outlined leadesIcon"> copyright </span
                                ><span class="leadesText">10 Credit</span>
                            </div>
                        </div>
                        <div class="leadesTag">
                            <span>deniz mahsulleri</span>
                            <span>deniz ürünleri</span>
                            <span>motor grader</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="moreLinkDiv mb-5">
                <router-link to="/leades">More Leades</router-link>
            </div>
        </div>
    </div>
</template>

<script>
// import $ from "jquery";

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
                itemsToShow: 1.5,
                snapAlign: "start",
            },
            300: {
                itemsToShow: 2,
                snapAlign: "center",
            },
            400: {
                itemsToShow: 2.5,
                snapAlign: "center",
            },
            500: {
                itemsToShow: 2.5,
                snapAlign: "center",
            },
            600: {
                itemsToShow: 3,
                snapAlign: "center",
            },
            // 700px and up
            700: {
                itemsToShow: 3.5,
                snapAlign: "center",
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
    created() {
        // axios.get(this.url).then((response) => (this.products = response.data));
    },
    methods: {},
});
</script>
<style scoped>
.suplierDiv {
    position: relative;
}
.suppliers {
    width: 100%;
    height: 396px;
    overflow: hidden;
}
.suppliersBackground {
    background-image: url(../assets/img/banner-background.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 64px;
    width: 100%;
    height: 100%;
    max-height: 400px;
}
.suppliersText {
    width: 30%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    left: 10%;
    z-index: 2;
}

.suppliers h1 {
    display: inline-block;
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 36px;
    line-height: 44px;
    display: flex;
    align-items: center;
    color: #fff;
    text-align: left;
}
.suppliersContent {
    width: 80%;
    margin: 0 auto;
    margin-top: 50px;
    font-family: DM Sans;
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
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    align-items: center;
    text-align: center;
    letter-spacing: 0.5px;
    margin: 0 auto;
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

.home-companies {
    font-family: "DM Sans", sans-serif;
    position: relative;
    margin-top: 50px;
}
.home-companies h1 {
    font-weight: 400, regular;
    font-style: normal;
    font-size: 28px;
    line-height: 36px;
    position: relative;
    display: flex;
    left: 0;
    flex-direction: row;
    margin-bottom: 50px;
}
.company {
    font-family: "Dm Sans", sans-serif;
    text-align: left;
    position: relative;
    margin-bottom: 25px;
    border: 1px solid rgba(116, 119, 127, 0.12);
    border-radius: 28px;
    box-shadow: border-box;
    padding: 6px 16px;
}
.company div {
    border: none;
}
.company .card-body {
    padding: 0;
    height: 220px;
}
.company .card-title {
    color: #005eb5;
    font-weight: 500, medium;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
}
.company .card-text {
    font-weight: 400, Regular;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #1b1b1d;
}
.company .card-body a {
    position: absolute;
    bottom: 0;
}
.company .companyTags {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    width: 50%;
    justify-content: right;
}
.company .companyTags span {
    border: 1px solid rgba(116, 119, 127, 0.16);
    border-radius: 8px;
    padding: 6px 16px;
    box-sizing: border-box;
    margin: 0px 8px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #43474f;
}
.company .company-logo {
    width: 100%;
    margin-top: 5px;
}
.company-logoImage {
    border-radius: 50%;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.company .company-logo .company-logoImage img {
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
.home-leades {
    position: relative;
    margin-top: 50px;
}
.home-leades h1 {
    font-weight: 400, regular;
    font-style: normal;
    font-size: 28px;
    line-height: 36px;
    position: relative;
    display: flex;
    left: 0;
    flex-direction: row;
    margin-bottom: 50px;
}
.leades-flex {
    height: 100%;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    flex-wrap: wrap;
    justify-content: space-around;
}
.leades {
    height: auto;
    width: auto;
    max-width: 360px;
    max-height: 380px;
    margin: 20px 0px;
    font-family: "DM Sans", sans-serif;
    position: relative;
    border: 1px solid rgba(116, 119, 127, 0.15);
    box-sizing: border-box;
    border-radius: 12px;
}

.leadesHead {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 16px;
}
.leadesDate {
    text-align: left;
    width: 100%;
    height: 20px;
    padding: 16px;
}
.leadesTitle {
    color: #005eb5;
    width: 80%;
    text-align: left;
    align-items: center;
}

.leadesFlag span {
    border-radius: 8px;
    position: absolute;
    right: 5px;
    top: 10px;
}

.leadesBody {
    padding: 20px;
    box-sizing: border-box;
    height: calc(100% - 80px);
    border-radius: 12px;
}
.leadesBody .leadesContent {
    height: 120px;
    max-height: 180px;
    text-align: left;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #1b1b1d;
    overflow: hidden;
}

.leadesStatus {
    text-align: left;
    margin-top: 5px;
}
.leadFooter {
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: left;
}
.leadesIcon {
    margin-right: 5px;
}
.leadesText {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-right: 25px;
    position: relative;
    top: -6px;
}
.leadesTag {
    width: 100%;
    height: 48px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-around;
}
.leadesTag span {
    background-color: #fff;
    align-self: center;
    text-align: center;
    height: 26px;
    width: calc(100% / 3 - (4 * 5));
    max-width: 110px;
    padding: 5px;

    border: 1px solid rgba(116, 119, 127, 0.16);
    box-sizing: border-box;
    border-radius: 8px;
    box-sizing: border-box;

    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    overflow: hidden;
}
@media only screen and (max-width: 1400px) {
    .suppliersBackground {
        background-size: 120%;
    }
}
@media only screen and (max-width: 1200px) {
    .company .companyTags span {
        font-size: 11px;
    }
    .suppliersBackground {
        background-size: 140%;
    }
}
@media only screen and (max-width: 1000px) {
    .company .card-title {
        font-size: 15px;
    }
    .company .card-body {
        margin-left: 10px;
    }
    .company .companyTags {
        width: 60%;
    }
    .company .card-body .companyTags span {
        padding: 0;
        font-size: 13px;
    }
    .company .card-body a {
        font-size: 13px;
    }
    .company-logoImage {
        width: 44px;
        height: 44px;
    }
    .suppliersBackground {
        background-size: 135%;
    }
}
@media only screen and (max-width: 992px) {
    .suppliersBackground {
        background-size: 380%;
    }
}

@media only screen and (max-width: 767px) {
    .company .companyTags {
        bottom: 26px;
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    .company .card-body .companyTags span {
        margin-left: 0px;
        text-align: center;
        width: 33.3%;
    }
    .company .card-text {
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0px;
        color: #1b1b1d;
    }
    .company .card-body {
        font-size: 11px;
    }
    .company .card-body a {
        width: 100%;
        margin-top: 3px;
        font-size: 16px;
    }
    .company .companyTags span {
        position: unset;
        display: block;
    }
    .company .card-body p {
        font-size: 14px;
    }
    .company-logoImage {
        display: none;
    }
}
@media only screen and (max-width: 480px) {
    .carousel__item {
        padding: 5px;
        margin: 0 4px;
        max-height: 175px;
    }
}
@media only screen and (max-width: 354px) {
    .suppliersBackground {
        background-size: 390%;
    }
}
@media only screen and (max-width: 320px) {
    .suppliers {
        height: 358px;
    }
    .suppliersText h1 {
        font-size: 26px;
    }
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
    .suppliers {
        height: 315px;
    }

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
    .leadesStatus span:nth-child(2) {
        margin-right: 100px;
    }
}
</style>
