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
        </div>
        <homeSlider />
        <hr class="line" />
        <homeCompanies />
        <hr class="line" />
        <homeLeades />
    </div>
</template>

<script>
import homeSlider from "@/components/HomeComponents/HomeSlider.vue";
import homeCompanies from "@/components/HomeComponents/HomeCompanies.vue";
import homeLeades from "@/components/HomeComponents/HomeLeades.vue";

export default {
    name: "HomePage",
    components: {
        homeSlider,
        homeCompanies,
        homeLeades,
    },
};
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
    color: #3c7fb9b8;
    text-align: left;
}
.companyTags span {
    overflow: hidden;
}
.leadesTags span {
    overflow: hidden;
}
@media only screen and (max-width: 1400px) {
    .suppliersBackground {
        background-size: 120%;
    }
}
@media only screen and (max-width: 1200px) {
    .suppliersBackground {
        background-size: 140%;
    }
}
@media only screen and (max-width: 1000px) {
    .suppliersBackground {
        background-size: 135%;
    }
}
@media only screen and (max-width: 992px) {
    .suppliersBackground {
        background-size: 380%;
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
}
@media only screen and (max-width: 280px) {
    .suppliers {
        height: 315px;
    }

    .leadesStatus span:nth-child(2) {
        margin-right: 100px;
    }
}
</style>
