<template>
    <div class="serverError">
        <div class="errorLeft">
            <div class="leftIcon"><img src="@/assets/img/icon-logo.svg" alt="İkon Logo Svg" />Textile Products</div>
            <div class="errorText"><p>An unknown error has occurred on the server.</p></div>
            <div class="forieNetwork">
                <img src="@/assets/img/ForieNetwork.png" alt="" />
            </div>
        </div>
        <div class="errorRight">
            <img src="@/assets/img/server-error-image.webp" alt="" />
            <div class="filterDiv"><div class="filter"></div></div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
* {
    font-family: "Dm Sans";
}
.serverError {
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
}
.errorLeft {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    position: relative;
    z-index: 1;
}
.leftIcon {
    font-family: "Fira Sans";
    font-style: italic;
    font-weight: 700;
    font-size: 33.75px;
    line-height: 45px;
    display: flex;
    align-items: center;
    color: #005eb5;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 15px;
}
.leftIcon img {
    width: 30px;
    margin: 0px 10px;
}
.errorText {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    line-height: 52px;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.errorRight {
    position: relative;
    width: 600px;
    height: 600px;
}
.errorRight img {
    width: 100%;
}
.filterDiv {
    width: 100%;
    height: 100%;
    mix-blend-mode: normal;
    border: 1px solid #005eb5;
    box-sizing: border-box;
    border-radius: 100px;
    position: absolute;
    top: 50px;
    left: 50px;
    animation: mymoveFilterDiv 5s infinite;
}

@keyframes mymoveFilterDiv {
    0% {
        top: 50px;
    }
    25% {
        top: -50px;
    }
    50% {
        left: -50px;
    }
    75% {
        top: 50px;
    }
    100% {
        left: 50px;
    }
}
.filter {
    width: 100%;
    height: 100%;
    background: #005eb5;
    mix-blend-mode: screen;
    border-radius: 100px;
    border: 1px solid #005eb5;
    animation: mymoveFilter 5s infinite;
}

@keyframes mymoveFilter {
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(90deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
@media only screen and (max-width: 1440px) {
    .errorText {
        font-size: 32px;
    }
}
@media only screen and (max-width: 1300px) {
    .errorLeft {
        width: 100%;
    }
    .errorText {
        font-size: 32px;
    }
}
@media only screen and (max-width: 900px) {
    .errorRight {
        position: relative;
        width: 400px;
        height: 400px;
    }
}
@media only screen and (max-width: 500px) {
    .errorRight {
        position: relative;
        width: 80%;
        height: 50%;
    }
}
@media only screen and (max-width: 425px) {
    .filterDiv {
        border-radius: 50px;
        top: 30px;
        left: 30px;
    }
    .filter {
        border-radius: 50px;
    }
    .errorRight {
        position: relative;
        width: 70%;
        height: 35%;
    }
}
@media only screen and (max-width: 375px) {
    .errorRight {
        height: 30%;
    }
}
@media only screen and (max-width: 325px) {
    .errorRight {
        height: 25%;
    }
    .filterDiv {
        top: 25px;
        left: 25px;
    }
}
@media only screen and (max-width: 280px) {
    .leftIcon {
        font-size: 20px;
    }
    .errorText {
        font-size: 23px;
        font-weight: bold;
    }
    .serverError {
        height: 110vh;
    }
    .errorRight {
        position: relative;
        width: 70%;
        height: 150px;
    }
    .filterDiv {
        border-radius: 25px;
        width: 90%;
        top: 40px;
        left: 35px;
    }
    .filter {
        border-radius: 25px;
    }
    .errorRight {
        display: flex;
        align-items: flex-start;
    }
}
</style>
