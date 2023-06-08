<template>
    <div id="header">
        <div class="header-content">
            <div class="headerLogo">
                <img src="@/assets/img/LOGO.webp" alt="raijoffle random logo" />
            </div>
            <div class="headerLinks">
                <div class="loginlink">
                    <router-link to="/login"> <span class="material-icons-outlined">verified_user</span> Log In</router-link>
                </div>
                <router-link to="/">Home Page</router-link>
                <router-link to="/companies">Companies</router-link>
                <router-link to="/leades">Leades </router-link>
                <router-link to="/products">Products</router-link>
                <router-link class="myaccount" to="/mypage">My Account</router-link>
                <div class="accountModal">
                    <div>
                        <router-link to="/mypage/5"> <span class="material-icons-outlined">person</span> My Page</router-link>
                    </div>
                    <div>
                        <router-link to="/"> <span class="material-icons-outlined">business_center</span> Company Managment</router-link>
                    </div>
                    <div>
                        <router-link to="/"> <span class="material-icons-outlined">mail</span> Message Center</router-link>
                    </div>
                    <div>
                        <router-link to="/"> <span class="material-icons-outlined">public</span> Request Center</router-link>
                    </div>
                    <div>
                        <router-link to="/"> <span class="material-icons-outlined">logout</span> Log Out</router-link>
                    </div>
                </div>
            </div>
            <div class="headerMobil">
                <span class="material-icons-outlined"> search </span>
                <span class="material-icons-outlined mobilMenuIcon" @click="openMobilMenuActive"> menu </span>
                <span class="material-icons-outlined mobilMenuClose"> close </span>
            </div>
            <div class="headerSearch">
                <span class="iconofsearch"> <span class="material-icons-outlined searchIcon" @click="targetSearch"> search </span></span>
                <input id="headerSearchInput" type="text" placeholder="Search company, request or product..." />
            </div>
            <div class="headerAccount">
                <div class="headerLogin">
                    <router-link to="/login"><span class="material-icons-outlined verifiedUser">verified_user</span> Log in</router-link>
                </div>
                <div class="headerSignUp">
                    <div class="headerSignUpButton">
                        <router-link to="/signup">Sign Up</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
export default {
    name: "HeaderView",
    props: {},
    methods: {
        targetSearch() {
            document.getElementById("headerSearchInput").focus();
        },
        openMobilMenuActive() {
            const mobilMenuIcon = $(".mobilMenuIcon");
            const headerLinks = $(".headerLinks");
            const headerFixed = $("#header");

            mobilMenuIcon.click(() => {
                headerLinks.addClass("mobilMenu-active");
                $(".mobilMenuIcon").hide();
                $(".mobilMenuClose").show();
                headerFixed.addClass("headerFixed");
            });
            $(".mobilMenuClose").click(() => {
                headerLinks.removeClass("mobilMenu-active");
                $(".mobilMenuIcon").show();
                $(".mobilMenuClose").hide();
                headerFixed.removeClass("headerFixed");
            });
            $(".headerLinks a").click(() => {
                headerLinks.removeClass("mobilMenu-active");
                $(".mobilMenuIcon").show();
                $(".mobilMenuClose").hide();
                headerFixed.removeClass("headerFixed");
            });
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    font-family: "DM Sans", sans-serif;
    font-style: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
}
.headerLinks {
    display: block;
    position: relative;
    width: 35%;
    margin: 4px 8px;
    float: left;
    top: 16px;
}
.headerLinks a {
    margin: 0px 8px;
}
.headerLinks a.router-link-exact-active {
    color: #a5c8ff !important;
}
#header {
    width: 100%;
    height: 56px;
    background: #005eb5;
    position: relative;
    top: 0;
    left: 0;
    text-align: center;
    justify-content: center;
    display: flex;
    box-sizing: border-box;
}
.headerLogo {
    float: left;
    position: relative;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    align-items: center;
    align-content: center;
    max-width: 200px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
}
.headerLogo img {
    max-height: 20px;
}
.headerSearch {
    position: relative;
    float: left;
    margin: 2px 8px;
    top: 6px;
    width: 25%;
    height: 40px;
    text-align: left;
    border-radius: 100px;
    background-color: #fff;
    margin-left: 10%;
}
.headerSearch input {
    position: relative;
    display: inline-block;
    width: 83%;
    margin: 0px auto;
    top: 10px;
    left: 12px;
    text-align: left;
}
.searchIcon {
    position: relative;
    width: 5%;
    float: left;
    top: 8px;
    left: 4px;
    color: #005eb5;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    z-index: 2;
}
#headerSearchInput::placeholder {
    font-family: "DM Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    color: #5d5e61;
    letter-spacing: 0.25px;
    font-size: 14px;
    line-height: 20px;
    text-align: left;
}
.headerAccount {
    width: 15%;
    float: right;
    margin-left: 0;
    display: flex;
}
.headerLogin {
    color: #fff;
    position: relative;
    margin: 8px 0;
    width: 50%;
    top: 8px;
    font-family: "DM Sans", sans-serif;
    font-style: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    font-weight: 500;
}
.headerAccount a.router-link-exact-active {
    color: #a5c8ff;
}
.headerSignUp a.router-link-exact-active {
    color: #005eb5;
}
.verifiedUser {
    font-size: 14px;
    margin-right: 3px;
    margin-top: 5px;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}

.headerSignUp {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 2.5rem;
    background: #a5c8ff;
    border-radius: 100px;
    flex: none;
    order: 2;
    flex-grow: 0;
    top: 8px;
}
.headerMobil {
    color: #fff;
    position: relative;
    top: 16px;
    float: right;
    display: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}
.mobilMenuClose {
    display: none;
    position: relative;
    left: 3%;
    z-index: 2;
}
.headerMobil span {
    margin: 0px 8px;
}
.headerFixed {
    position: fixed !important;
    z-index: 12;
}
.headerLinks .loginlink {
    display: none;
}
.headerLinks .myaccount {
    display: none;
}
.accountModal {
    display: none;
}
@media only screen and (max-width: 1200px) {
    .headerLinks a {
        font-size: 10px;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    }
    .headerLinks {
        width: 30%;
    }
    .headerSearch {
        margin-left: 110px;
    }
}
@media only screen and (max-width: 1024px) {
    #headerSearchInput::placeholder {
        position: relative;
        left: 5px;
    }
    .searchIcon {
        left: 0px;
        position: relative;
        z-index: 6;
    }
    .headerSearch {
        float: right;
        width: 29%;
        margin-right: 0;
        display: none;
    }
    .headerSearch input {
        margin-left: 5px;
        border-radius: 5px;
    }
    .headerAccount {
        display: none;
    }

    .headerMobil {
        display: inline-block;
        cursor: pointer;
        position: relative;
        z-index: 6;
    }
    .headerLinks a {
        color: #fff;
        font-size: 18px;
        width: fixed;
        height: 25px;
        margin: 16px;
        opacity: 1;
    }
    .headerLinks {
        margin: 0;
        width: 100%;
        height: calc(100vh - 54px);
        top: 54px;
        position: fixed;
        float: left;
        flex-direction: column;
        background-color: #1b1b1d;
        justify-content: flex-start;
        align-items: flex-start;
        /* justify-content: space-around; */
        opacity: 0;
        z-index: -6;
    }
    .mobilMenu-active {
        right: 0px;
        animation: linksFade 0.3s ease-out;
        display: flex;
        z-index: 5;
        opacity: 1;
        visibility: inherit;
    }
    @keyframes linksFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0px);
        }
    }
    .headerLinks .loginlink {
        display: block;
    }
    .headerLinks .loginlink a {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .headerLinks .myaccount {
        display: block;
    }
    .accountModal {
        display: block;
        background: linear-gradient(0deg, rgba(165, 200, 255, 0.08), rgba(165, 200, 255, 0.08)), #1b1b1d;
        border-radius: 4px;
    }
    .accountModal div a span {
        color: #a5c8ff;
        margin-right: 18px;
    }
    .accountModal div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
}
@media only screen and (max-width: 768px) {
    .headerSearch {
        display: none;
    }
}
@media only screen and (max-width: 320px) {
    .accountModal {
        width: 100%;
    }
}

.header-content {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    max-width: 1320px;
}

@media only screen and (max-width: 1400px) {
    .header-content {
        max-width: 1320px;
        padding-right: var(--bs-gutter-x, 0.75rem);
        padding-left: var(--bs-gutter-x, 0.75rem);
    }
}
@media only screen and (max-width: 1200px) {
    .header-content {
        max-width: 1140px;
    }
}
@media only screen and (max-width: 992px) {
    .header-content {
        max-width: 960px;
    }
}
</style>
