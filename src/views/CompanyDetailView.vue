<template>
    <div class="companyDetail">
        <div class="pageRoute">
            <p class="fromRoute"><router-link to="/"> HomePage </router-link></p>
            <span> ▸ </span>
            <p class="fromRoute">
                <router-link to="/companies"> Companies List </router-link>
            </p>
            <span>▸</span>
            <p class="toRoute">
                <router-link to="/companies"> Company Details </router-link>
            </p>
            <span class="routeLine"> - </span>
            <p class="toRoute">
                <router-link to="/companydetail/5"> Kaplan Brode Tekstil Sanayi Ve Ticaret Anonim Sirketi </router-link>
            </p>
        </div>
        <div class="companyDetailPage">
            <div class="companyDetailHead">
                <div class="companyDetailTitle">
                    <h1>Kaplan Brode Tekstil Sanayi Ve Ticaret Anonim Sirketi</h1>
                    <div class="companyStatus">
                        <div><span class="material-icons-outlined">emoji_events</span>Standard Member</div>
                        <div><span class="material-icons-outlined">people_alt</span>Personel Count: 1000+</div>
                    </div>
                </div>
                <div class="changeLanguage">
                    <div class="field-container">
                        <img src="../assets/img/translate_black_24dp.svg" alt="" />
                        <select class="form-select field-input" aria-label="Category">
                            <option selected>Turkey</option>
                            <option value="1">Turkey One</option>
                            <option value="2">Turkey Two</option>
                            <option value="3">Turkey Three</option>
                        </select>
                        <label class="field-placeholder" for="inputName">Change Language</label>
                    </div>
                </div>
            </div>
            <!-- <hr class="line" /> -->
            <div class="companyContent">
                <div class="companyPromotion">
                    <div class="contentLeft">
                        <div class="companyAbout">
                            <div class="title"><span class="material-icons-outlined">business</span>About</div>
                            <div class="content">
                                <p>
                                    ′Durak Industrial Threads′ excellent products manufactured from high-quality raw material using professionally designed high-tech processes and
                                    years of experience and know-how are used in the clothing, home textile, shoes and leather, furniture and automotive industries. DURAK TEXTILE
                                    guarantees that the quality of its products meets high standards and ensures the continuation of this quality in line with these standards.
                                    Through our pre-sales and post-sales services we share our knowledge and experience obtained after years of long-term research and
                                    experimentation as well as organize trainings, and provide on-the-job technical trainings through professional staff. Established as a small
                                    family-run business in 1971, DURAK TEXTILE has become a multinational company with nearly 1,000 employees working in its sales outlets spread
                                    over three continents. Wherever industrial threads are used, DURAK is the solution partner. For more than 35 years DURAK threads have been used
                                    with full confidence on sewing and embroidery machines for underwear and outerwear, sports clothing and uniforms, jeans, leather and shoes, beds
                                    and mattresses, upholstery, automobiles and car seats, curtains, tents, awnings, sails and other textile products. Durak Tekstil has ISO 9001
                                    and Oekotex documents. viscose rayon embroidery threads, elastic sewing threads, polyester embroidery thread, textured sewing threads, acrylic
                                    embroidery threads, nylon filament sewing threads, spangle & sequin embroidery threads, polyester broidery upper threads, metallic embroidery
                                    threads, viscose rayon broidery upper threads, bobbin threads, embroidery threads, core spun polyester sewing threads, sewing threads, staple
                                    spun polyester sewing threads, flame retardant threads, air-jet texurized sewing threads, cocoon
                                </p>
                            </div>
                            <span>Read More</span>
                        </div>
                        <div class="companyCretif">
                            <div class="title"><span class="material-icons-outlined">article</span>Certificates</div>
                            <div class="content">
                                <span> Standard 100 Oeko-tex® </span> <span> / </span> <span> Global Organic Textile(GOTS) </span> <span> / </span>
                                <span> Better Cotton Initiative(BCI) </span>
                            </div>
                        </div>
                        <div class="companyBrands">
                            <div class="title"><span class="material-icons-outlined">store</span>Brands</div>
                            <div class="content">
                                <span> Sateks </span>
                                <span> / </span>
                                <span> inditex </span>
                                <span> / </span>
                                <span> Oeko-tex </span>
                            </div>
                        </div>
                    </div>
                    <div class="contentRight">
                        <div class="companyCategories">
                            <div class="title"><span class="material-icons-outlined">book</span> Categories</div>
                            <div class="content">
                                <span>Paper - Packaging - Printing </span>
                                <span>Construction and Building Industry </span>
                                <span>Textile Products</span>
                            </div>
                        </div>
                        <div class="companyBusiness">
                            <div class="title"><span class="material-icons-outlined">segment</span> Business Segments</div>
                            <div class="content">
                                <span>Exporter </span>
                                <span>Manufacturer</span>
                            </div>
                        </div>
                        <div class="companyAdress">
                            <div class="title"><span class="material-icons-outlined">map</span> Adress</div>
                            <div class="content">
                                <span>Halit GÜMÜŞER</span>
                                <span>Aksu Mh. Gazi Mustafa Kemal Bulvarı, No:105/A, Kahramanmaraş, Turkey</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="companyProductSlider">
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
                <div class="categoryTags">
                    <div class="title"><span class="material-icons-outlined">tag</span>Categories</div>
                    <div class="content">
                        <span>Textile</span>
                        <span>Textile Product</span>
                        <span>Technical Textiles</span>
                        <span>Technical Textile Product</span>
                        <span>Bleaching To Mercerizing</span>
                        <span>Continuous Dyeing</span>
                        <span>Rotation Printing</span>
                        <span>Finishing</span>
                        <span>Fabric</span>
                        <span>Fabric Bleaching</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="similarCompanies">
            <div class="companyList">
                <div class="companyList-companies">
                    <div class="companyListTitle">
                        <h1>Similar Companies</h1>
                    </div>
                    <div class="company">
                        <div class="card mb-3" style="max-width: 100%">
                            <div class="row g-0">
                                <div class="col-md-1">
                                    <div class="company-logo">
                                        <div class="company-logoImage">
                                            <img src="https://cdn.Raijoffle.com/storage/general/logo/Raijoffle-logo.svg" class="img-fluid rounded-start" alt="ss" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-11">
                                    <div class="card-body">
                                        <h5 class="card-title">Linden Tekstil Mermer Gida Nakliye Ithalat Ihracat Sanayi Ve Ticaret Limited Sirketi</h5>
                                        <p class="card-text">Based on quality, our principle is *CUSTOMER SATISFACTION” As we know that quality is an important criteria t......</p>
                                        <a href="#" class="card-text"><country-flag country="tr" size="normal" /> Read Profile Page</a>
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
                                            <img src="https://www.turkishexporter.net/assetsFront/img/logo.png" class="img-fluid rounded-start" alt="ss" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-11">
                                    <div class="card-body">
                                        <h5 class="card-title">Linden Tekstil Mermer Gida Nakliye Ithalat Ihracat Sanayi Ve Ticaret Limited Sirketi</h5>
                                        <p class="card-text">Based on quality, our principle is *CUSTOMER SATISFACTION” As we know that quality is an important criteria t......</p>
                                        <a href="#" class="card-text"><country-flag country="us" size="normal" /> Read Profile Page</a>
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
                                                src="https://cdn.Raijoffle.com/storage/images/companies/logo/2a819095-18e3-4e0b-b348-aa811fb101ce.png"
                                                class="img-fluid rounded-start"
                                                alt="ss"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-11">
                                    <div class="card-body">
                                        <h5 class="card-title">Linden Tekstil Mermer Gida Nakliye Ithalat Ihracat Sanayi Ve Ticaret Limited Sirketi</h5>
                                        <p class="card-text">Based on quality, our principle is *CUSTOMER SATISFACTION” As we know that quality is an important criteria t......</p>
                                        <a href="#" class="card-text"> <country-flag country="ca" size="normal" /> Read Profile Page</a>
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
                                                src="https://cdn.Raijoffle.com/storage/images/companies/logo/799d298a-d673-4da9-ab14-e27ca0c65600.jpg"
                                                class="img-fluid rounded-start"
                                                alt="ss"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-11">
                                    <div class="card-body">
                                        <h5 class="card-title">Linden Tekstil Mermer Gida Nakliye Ithalat Ihracat Sanayi Ve Ticaret Limited Sirketi</h5>
                                        <p class="card-text">Based on quality, our principle is *CUSTOMER SATISFACTION” As we know that quality is an important criteria t......</p>
                                        <a href="#" class="card-text"> <country-flag country="eu" size="normal" /> Read Profile Page</a>
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
                                                src="https://cdn.Raijoffle.com/storage/images/companies/logo/de128a34-4018-4b3d-af3a-a38a73034582.png"
                                                class="img-fluid rounded-start"
                                                alt="ss"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-11">
                                    <div class="card-body">
                                        <h5 class="card-title">Linden Tekstil Mermer Gida Nakliye Ithalat Ihracat Sanayi Ve Ticaret Limited Sirketi</h5>
                                        <p class="card-text">Based on quality, our principle is *CUSTOMER SATISFACTION” As we know that quality is an important criteria t......</p>
                                        <a href="#" class="card-text"> <country-flag country="au" size="normal" /> Read Profile Page</a>
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
        </div>
    </div>
</template>
<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default defineComponent({
    name: "CompanyDetailView",
    data: () => ({
        // carousel settings
        settings: {
            itemsToShow: 1.5,
            snapAlign: "center",
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            320: {
                itemsToShow: 1.5,
                snapAlign: "center",
            },
            480: {
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
.companyDetail {
    font-family: "DM Sans", sans-serif;
    height: 100%;
}
.pageRoute {
    width: 100%;
    height: auto;
    max-height: 50px;
    text-align: left;
    position: relative;
    display: flex;
    align-items: center;
    vertical-align: center;
    justify-content: left;
    line-height: 20px;
    flex-wrap: wrap;
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
.routeLine {
    margin: 0px 5px;

    position: relative;
    top: -1px;
    font-weight: 600;
}
.companyDetailPage {
    width: 100%;
    height: 100%;
    padding: 32px;
    margin-top: 28px;
}
.companyDetailTitle {
    width: 80%;
}
.companyDetailHead {
    display: flex;
    width: 100%;
}
.companyDetailTitle h1 {
    left: 0px;
    top: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: #1b1b1d;
    text-align: left;
}
.companyStatus {
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    flex: none;
    order: 1;
    flex-grow: 0;
    flex-wrap: wrap;
}
.companyStatus div {
    margin-right: 9px;
    margin-top: 16px;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    order: 1;
    flex-grow: 0;
}
.companyStatus span {
    margin-right: 9px;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}
.changeLanguage {
    width: 20%;
    height: 100px;
    position: relative;
}

.field-container {
    position: relative;
    height: 50px;
    width: 100%;
}
.changeLanguage img {
    position: absolute;
    z-index: 3;
    left: 5px;
    top: 15px;
}
.changeLanguage select {
    position: relative;
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
    padding: 10px;
    border-radius: 4px;
    font-size: 14px;
    display: block;
    box-sizing: border-box;
    width: 100%;
    max-width: 187px;
    bottom: 0px;
    height: 50px;
}
.changeLanguage select option {
    text-align: center;
}
.changeLanguage select option[selected] {
    text-align: left;
}
.field-input ~ label {
    color: #555f71;
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
.companyContent {
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: 64px;
}
.companyPromotion {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
}
.contentLeft {
    width: 100%;
    max-width: 855px;
}
.contentRight {
    width: 100%;
    max-width: 376px;
}
.companyAbout {
    position: relative;
}
.companyAbout .title {
    position: static;
    width: 100%;
    max-width: 855px;
    height: 28px;
    left: 34px;
    top: 0px;
    display: flex;
    align-items: center;
    font-feature-settings: "liga";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    flex: none;
    order: 1;
    flex-grow: 0;
}
.companyAbout .title span:nth-child(1) {
    margin: 0px 10px;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}
.companyAbout span:nth-child(3) {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;
    font-feature-settings: "liga" off;
    color: #5d5e61;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 8px 10px;
    cursor: pointer;
    width: 72px;
    height: 20px;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}
.companyAbout .content {
    height: 148px;
    overflow: hidden;
    font-style: normal;
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    margin: 8px 10px;
}
.companyCretif {
    height: 56px;
    width: 100%;
    max-width: 100%;
    margin-top: 24px;
}
.companyCretif .title {
    position: static;
    height: 24px;
    left: 34px;
    top: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.1px;
    color: #555f71;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 10px;
}
.companyCretif span {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}
.companyCretif .content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    position: static;
    height: 24px;
    left: 0px;
    top: 32px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 8px 10px;
    overflow: hidden;
}
.companyCretif .content span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    box-sizing: border-box;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #1b1b1d;
}
.companyBrands {
    width: 100%;
    margin-top: 14px;
}
.companyBrands .title {
    position: static;
    left: 34px;
    top: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.1px;
    color: #555f71;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 10px;
}
.companyBrands .title span {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}
.companyBrands .content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    position: static;
    max-width: 526px;
    width: 100%;
    height: 24px;
    left: 0px;
    top: 32px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 8px 10px;
}
.companyCategories {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: static;
    max-width: 335px;
    width: 100%;
    height: 104px;
    left: 0px;
    top: 0px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 16px 0px;
}
.companyCategories .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    position: static;
    max-width: 276px;
    width: 100%;
    height: 24px;
    left: 0px;
    top: 0px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 10px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: #555f71;
}
.companyCategories .content {
    position: static;
    max-width: 335px;
    width: 100%;
    height: 72px;
    left: 0px;
    top: 32px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    letter-spacing: 0.5px;
    color: #1b1b1d;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 8px 10px;
}
.companyCategories .content span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 10px;
}

.companyBusiness {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: static;
    max-width: 335px;
    width: 100%;
    height: 80px;
    left: 0px;
    top: 136px;
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
    /* margin: 16px 0px; */
}
.companyBusiness .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    position: static;
    height: 24px;
    left: 0px;
    top: 0px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 10px;
    height: 24px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.1px;
    color: #555f71;
}
.companyBusiness .content {
    position: static;
    max-width: 276px;
    width: 100%;
    height: 48px;
    left: 0px;
    top: 32px;
    margin: 8px 10px;
    position: static;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #1b1b1d;
}
.companyBusiness .content span {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    margin: 0px 10px;
}
.companyAdress {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: static;
    max-width: 335px;
    width: 100%;
    height: 112px;
    left: 0px;
    top: 248px;
    flex: none;
    order: 4;
    align-self: stretch;
    flex-grow: 0;
    margin: 16px 0px;
}

.companyAdress .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    position: static;
    left: 0px;
    top: 32px;
    flex: none;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.1px;
    color: #555f71;
    margin: 0px 10px;
}
.companyAdress .content span {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 0px;
    position: static;
    margin: 8px 20px;
    color: #555f71;
    font-size: 16px;
    line-height: 24px;
}
.companyProductSlider {
    position: relative;
    max-height: 305px;
    margin-top: 50px;
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
    margin-top: 50px;
}
.carousel__prev,
.carousel__next {
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
    background: none;
    background-color: transparent !important;
}

.carousel__item {
    padding: 5px;
    margin: 0 16px;
    max-height: 200px;
    overflow: hidden;
}
.carousel__item img {
    max-width: 280px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}
.categoryTags {
    width: 100%;
    position: relative;
}
.categoryTags .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    position: static;
    width: 100%;
    height: 24px;
    left: 24px;
    top: 24px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 8px 0px;
}
.categoryTags .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px 16px;
    position: static;
    flex-wrap: wrap;
    justify-content: left;
    max-height: 200px;
}

.categoryTags .content span {
    left: 0px;
    top: 0px;
    background: #fdfbff;
    border: 1px solid #74777f;
    box-sizing: border-box;
    border-radius: 8px;
    margin: 8px 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    font-feature-settings: "liga" off;
    color: #43474f;
    padding: 6px 16px;
    max-width: 250px;
    max-height: 32px;
    display: flex;
    align-items: center;
}
.similarCompanies {
    height: 100%;
    width: 100%;
    margin-top: 50px;
}
.companiesList {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    position: relative;
    width: 100%;
}
.companyList-companies {
    font-family: "DM Sans", sans-serif;
    position: relative;
    margin-top: 28px;
    width: 100%;
}
.companyListFlex {
    display: flex;
    justify-content: left;
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
    -webkit-user-select: none;
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

.company {
    font-family: "Dm Sans", sans-serif;
    text-align: left;
    position: relative;
    border: 1px solid rgba(116, 119, 127, 0.12);
    width: 100%;
    margin-top: 15px;
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
    font-weight: 400;
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
@media only screen and (max-width: 1200px) {
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
}
@media only screen and (max-width: 1080px) {
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
}
@media only screen and (max-width: 975px) {
    .companyDetailPage {
        padding: 0;
    }
    .categoryTags .content {
        overflow-x: scroll;
        overflow-y: hidden;
        flex-wrap: nowrap;
    }
    ::-webkit-scrollbar {
        height: 5px;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: #005eb5;
        border-radius: 50px;
    }
    .categoryTags .content span {
        font-size: 12px;
        width: 100%;
        max-height: 62px;
    }
    .company .card-body a {
        bottom: -10px;
        left: 0;
    }
}
@media only screen and (max-width: 767px) {
    .field-placeholder {
        position: absolute;
        display: none;
    }
    .changeLanguage img {
        display: none;
    }
    .changeLanguage {
        width: 100px;
        right: 0;
        margin-left: 15px;
    }
    .companyDetailTitle h1 {
        font-size: 24px;
        line-height: 24px;
    }
    .companyStatus div {
        font-size: 14px;
        letter-spacing: 0;
    }
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
    .pageRoute a {
        font-size: 11px;
    }
    .field-placeholder {
        display: none;
    }
    .changeLanguage img {
        display: block;
        background-color: #fff;
        top: 0px;
        color: #000;
        border: 1px solid #74777f;
        box-sizing: border-box;
        padding: 10px;
        border-radius: 4px;
        font-size: 14px;
        display: block;
        box-sizing: border-box;
        width: 100%;
        max-width: 187px;
        height: 40px;
        width: 40px;
    }
    .changeLanguage select {
        z-index: 3;
        opacity: 0;
        width: 40px;
        height: 40px;
        padding: 10px;
        margin: 0;
    }
}
</style>
