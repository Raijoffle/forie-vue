<template>
    <div class="companiesList">
        <div class="pageRoute">
            <p class="fromRoute"><router-link to="/">HomePage</router-link></p>
            <span>▸</span>
            <p class="toRoute">
                <router-link to="/companies">Companies List</router-link>
            </p>
        </div>
        <div class="companyListFlex">
            <div class="companyList">
                <div class="companyList-companies">
                    <div class="companyListTitle">
                        <h1>Companies List</h1>
                        <div @click="filterActive(1)">
                            <span class="material-icons-outlined"> filter_alt </span>Advanced Filter
                        </div>
                    </div>
                    <div class="company">
                        <div class="card mb-3" style="max-width: 100%">
                            <div class="row g-0">
                                <div class="col-md-1">
                                    <div class="company-logo">
                                        <div class="company-logoImage">
                                            <img
                                                src="@/assets/img/LOGO.webp"
                                                alt="raijoffle random logo"
                                                class="img-fluid rounded-start"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-11">
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            Linden Tekstil Mermer Gida Nakliye Ithalat Ihracat Sanayi Ve Ticaret Limited
                                            Sirketi
                                        </h5>
                                        <p class="card-text">
                                            Based on quality, our principle is *CUSTOMER SATISFACTION” As we know that
                                            quality is an important criteria t......
                                        </p>
                                        <a href="#" class="card-text"
                                            ><country-flag country="gb" size="normal" /> Read Profile Page</a
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
                                                src="@/assets/img/LOGO.webp"
                                                alt="raijoffle random logo"
                                                class="img-fluid rounded-start"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-11">
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            Linden Tekstil Mermer Gida Nakliye Ithalat Ihracat Sanayi Ve Ticaret Limited
                                            Sirketi
                                        </h5>
                                        <p class="card-text">
                                            Based on quality, our principle is *CUSTOMER SATISFACTION” As we know that
                                            quality is an important criteria t......
                                        </p>
                                        <a href="#" class="card-text"
                                            ><country-flag country="tr" size="normal" /> Read Profile Page</a
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
                                                src="@/assets/img/LOGO.webp"
                                                alt="raijoffle random logo"
                                                class="img-fluid rounded-start"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-11">
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            Linden Tekstil Mermer Gida Nakliye Ithalat Ihracat Sanayi Ve Ticaret Limited
                                            Sirketi
                                        </h5>
                                        <p class="card-text">
                                            Based on quality, our principle is *CUSTOMER SATISFACTION” As we know that
                                            quality is an important criteria t......
                                        </p>
                                        <a href="#" class="card-text"
                                            ><country-flag country="tr" size="normal" /> Read Profile Page
                                        </a>
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
                                                src="@/assets/img/LOGO.webp"
                                                alt="raijoffle random logo"
                                                class="img-fluid rounded-start"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-11">
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            Linden Tekstil Mermer Gida Nakliye Ithalat Ihracat Sanayi Ve Ticaret Limited
                                            Sirketi
                                        </h5>
                                        <p class="card-text">
                                            Based on quality, our principle is *CUSTOMER SATISFACTION” As we know that
                                            quality is an important criteria t......
                                        </p>
                                        <a href="#" class="card-text"
                                            ><country-flag country="tr" size="normal" /> Read Profile Page</a
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
                                                src="@/assets/img/LOGO.webp"
                                                alt="raijoffle random logo"
                                                class="img-fluid rounded-start"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-11">
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            Linden Tekstil Mermer Gida Nakliye Ithalat Ihracat Sanayi Ve Ticaret Limited
                                            Sirketi
                                        </h5>
                                        <p class="card-text">
                                            Based on quality, our principle is *CUSTOMER SATISFACTION” As we know that
                                            quality is an important criteria t......
                                        </p>
                                        <a href="#" class="card-text"
                                            ><country-flag country="rus" size="normal" /> Read Profile Page
                                        </a>
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
                        <router-link to="/companies">View More Companies</router-link>
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
export default {
    methods: {
        filterActive: function (s) {
            if (s == 1) {
                $(".filterDiv").addClass("filterActive");
            } else {
                $(".filterDiv").removeClass("filterActive");
            }
        },
    },
};
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
.companiesList {
    font-family: "Dm Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    position: relative;
    width: 100%;
}
.companyList-companies {
    position: relative;
    margin-top: 28px;
    width: 1020px;
}
.companyListFlex {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
}
.companyList-companies h1 {
    font-weight: 400, regular;
    font-style: normal;
    font-size: 28px;
    line-height: 36px;
    position: relative;
    display: flex;
    left: 0;
    flex-direction: row;
}
.companyListTitle {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
}

.companyListTitle div {
    cursor: pointer;
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
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}

.company {
    text-align: left;
    position: relative;
    margin-bottom: 25px;
    border: 1px solid rgba(116, 119, 127, 0.12);
    max-height: 280px;
    height: auto;
    border-radius: 28px;
    padding: 6px 16px;
    box-sizing: border-box;
}
.company div {
    border: none;
}
.company .card-body {
    padding: 0;
    height: 260px;
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
    margin-top: 16px;
}
.company .card-body a {
    position: absolute;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: left;
}
.company .card-body a span {
    margin: 0px;
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
    font-family: "Dm Sans", sans-serif;
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
.filterDiv {
    margin-top: 50px;
    position: relative;
    top: 0;
    right: 0;
    width: 264px;
    height: 980px;
}
.companyTags span {
    overflow: hidden;
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

    height: 50px;
    width: 100%;
    margin-top: 24px;
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
    .companyList-companies {
        width: 100%;
    }

    .company .companyTags span {
        font-size: 11px;
    }
    .companyListTitle div {
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
    .company .card-body a {
        bottom: -10px;
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
    .companyList .companyList-companies .companyListTitle h1 {
        font-size: 22px;
        max-width: 115px;
        max-height: 40px;
        overflow: hidden;
    }
    .companyList .companyList-companies .companyListTitle div {
        width: 120px;
        font-size: 12px;
    }
    .companyList .companyList-companies .companyListTitle div span {
        font-size: 18px;
    }
}
@media only screen and (max-width: 320px) {
    .filterMobil {
        padding: 20px;
        max-width: 320px;
    }
    .company .card-body a {
        bottom: -15px;
        left: 0;
    }
}
@media only screen and (max-width: 280px) {
    .companyList .companyList-companies .companyListTitle h1 {
        font-size: 18px;
    }
    .companyList .companyList-companies .companyListTitle div {
        width: 100px;
        height: 35px;
        padding: 6px;
    }
    .filterMobil {
        width: 280px;
    }
}
</style>
