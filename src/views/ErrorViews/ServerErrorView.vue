<template>
    <div class="serverError">
        <div class="errorLeft">
            <div class="leftIcon">
                <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.18971 21.0655C-0.102548 25.5059 -0.61677 30.6355 0.749432 35.4332C2.11563 40.2309 5.26208 44.3449 9.56248 46.9565L13.6078 39.1158C11.3976 37.5655 9.82598 35.2823 9.17997 32.6831C8.53395 30.0839 8.85661 27.3421 10.089 24.9582C11.3214 22.5744 13.3814 20.7075 15.8927 19.6985C18.4041 18.6895 21.1994 18.6056 23.7683 19.4622L33.913 0L21.7299 10.3181C17.7633 9.99745 13.7898 10.848 10.3142 12.7617C6.83858 14.6754 4.01791 17.5658 2.21066 21.0655"
                        fill="#005EB5"
                    />
                    <path
                        d="M36.939 39.0064C39.2299 34.554 39.7442 29.4098 38.3795 24.5986C37.0147 19.7873 33.871 15.6619 29.5746 13.0439L25.5914 20.7767C27.7991 22.3313 29.3689 24.6207 30.0142 27.2271C30.6595 29.8335 30.3372 32.5829 29.1062 34.9733C27.8752 37.3637 25.8175 39.2358 23.309 40.2476C20.8004 41.2594 18.0083 41.3435 15.4424 40.4845L5.21484 60.0004L17.2534 49.7524C21.2426 50.1109 25.2487 49.2775 28.7555 47.3594C32.2623 45.4414 35.1089 42.5266 36.9285 38.9909"
                        fill="#005EB5"
                    />
                </svg>
                Textile Products
            </div>
            <div class="errorText"><p>An unknown error has occurred on the server.</p></div>
            <div class="forieNetwork">
                <img src="@/assets/img/ForieNetwork.png" alt="" />
            </div>
        </div>
        <div class="errorRight">
            <img src="@/assets/img/shutterstock1.png" alt="" />
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
    height: 100vh;
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
.leftIcon svg {
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
}
.filter {
    width: 100%;
    height: 100%;
    background: #005eb5;

    mix-blend-mode: screen;
    border-radius: 100px;
    border: 1px solid #005eb5;
}

@media only screen and (max-width: 1300px) {
    .errorLeft {
        width: 100%;
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
@media only screen and (max-width: 400px) {
    .filterDiv {
        border-radius: 50px;
    }
    .filter {
        border-radius: 50px;
    }
    .errorRight {
        position: relative;
        width: 70%;
        height: 30%;
    }
}
@media only screen and (max-width: 320px) {
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
