<template>
    <div class="freeJoin">
        <div class="joinContent">
            <div class="logo">
                <img src="@/assets/img/ForieNetwork.png" alt="" />
            </div>
            <span class="memberText">TextileYarn is a member of Forie Network</span>
            <div class="joinTitle">
                <h3>Free Join the Forie Network, which includes more than 6 million companies worldwide.</h3>
            </div>
            <div class="joinSubTitle">
                <span
                    >Forie Network, provides opportunities to find new customers by conveying millions of purchase requests and sale offers, promoting international digital brand
                    visibility and analyzing target market with its strong infrastructure.</span
                >
            </div>
        </div>
        <div class="joinForm">
            <div class="formTitle">
                <h1>Welcome to Forie</h1>
                <span>You can log in to the system with your registered e-mail and password</span>
            </div>
            <div class="form">
                <form>
                    <div class="emailAdress">
                        <span class="material-icons-outlined">mail</span>
                        <input type="email" placeholder="Email Address" />
                    </div>
                    <div class="password">
                        <span class="material-icons-outlined">lock</span>
                        <input type="password" placeholder="Password" />
                    </div>

                    <button type="button" class="login">LOG IN</button>
                    <span
                        >If you don't have a membership yet,
                        <router-link to="/signup">sign up now</router-link>
                    </span>
                    <router-link class="accountActivation" to="/accountactivation">Account Activation</router-link>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.agreementText a {
    color: #21cef5;
}
.freeJoin {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    flex-wrap: wrap;
}
.freeJoin .joinContent {
    width: 640px;
    height: 748px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    margin: 0 auto;
}

.freeJoin .joinContent .logo img {
    position: relative;
    left: 0;
    width: 150px;
}
.freeJoin .joinContent .memberText {
    position: static;
    max-width: 350px;
    left: 0px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0.1px;
    font-feature-settings: "liga" off;
    color: #1b1b1d;
    flex: none;
    align-self: stretch;
    flex-grow: 0;
    margin-top: 24px;
}
.freeJoin .joinContent .joinTitle {
    position: static;
    width: 400px;
    height: 220px;
    left: 0px;
    top: 140px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    display: flex;
    align-items: center;
    color: #1b1b1d;
    flex: none;
    align-self: stretch;
    flex-grow: 0;
    margin: 24px 0px;
    text-align: left;
}
.freeJoin .joinContent .joinSubTitle {
    position: static;
    width: 456px;
    height: 140px;
    left: 0px;
    top: 384px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #43474f;
    flex: none;
    align-self: stretch;
    flex-grow: 0;
    text-align: left;
}
.freeJoin .joinForm .formTitle h1 {
    position: static;
    width: 374px;
    height: 32px;
    left: 40px;
    top: 40px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #1b1b1d;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-bottom: 24px;
}
.freeJoin .joinForm .formTitle span {
    position: static;
    width: 374px;
    height: 48px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    flex: none;
    align-self: stretch;
    flex-grow: 0;
    text-align: left;
}
.freeJoin .joinForm {
    width: 640px;
    height: 748px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.joinForm .form {
    display: flex;
    flex-direction: column;
    width: 375px;
}
.joinForm .form input[type="text"],
.joinForm .form input[type="email"],
.joinForm .form input[type="password"],
select {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 32px;
    position: static;
    width: 374px;
    height: 56px;
    left: 0px;
    top: 0px;
    background: rgba(27, 27, 29, 0.08);
    border: 1px solid rgba(142, 145, 154, 0.16);
    box-sizing: border-box;
    border-radius: 8px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 8px 0px;
}
.formGender {
    width: 100%;
    height: 50px;
    font-size: 14px;
    display: flex;
    justify-content: left;
    align-items: center;
    position: static;
    left: 0px;
    top: 0px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0.1px;
    font-feature-settings: "liga" off;
    color: #1b1b1d;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 10px 6px;
}
.formGender input[type="radio"] {
    height: 20px;
    width: 20px;
    margin-right: 6px;
}
.formGender div {
    margin: 10px 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.formAgreement {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    width: 100%;
}
.agreement {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0px;
}
.agreementInput {
    width: 30px;
}
.agreementText {
    position: static;
    width: 346px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: #364153;
    flex: none;
    order: 1;
    flex-grow: 1;
}
.joinForm .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;
    font-feature-settings: "liga" off;
    color: #ffffff;
    position: static;
    width: 100%;
    background: #005eb5;
    border-radius: 100px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 16px 0px;
}
.joinForm a {
    color: #005eb5;
}

.accountActivation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    position: static;
    width: 180px;
    height: 40px;
    border: 1px solid #74777f;
    box-sizing: border-box;
    border-radius: 100px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 50px 50%;
    transform: translateX(-50%);
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;
    font-feature-settings: "liga" off;
    color: #005eb5;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.emailAdress {
    position: relative;
}

.emailAdress span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 6px;
    display: flex;
    width: 24px !important;
    color: #005eb5;
}
.password {
    position: relative;
}
.password span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 6px;
    display: flex;
    width: 24px !important;
    color: #005eb5;
}
@media only screen and (max-width: 470px) {
    .joinContent {
        justify-content: center;
    }
}
@media only screen and (max-width: 470px) {
    .freeJoin .joinContent {
        width: 320px;
    }
    .freeJoin .joinContent .joinTitle {
        font-size: 30px;
        width: 300px;
    }
    .freeJoin .joinContent .joinSubTitle {
        font-size: 14px;
        width: 300px;
    }
    .memberText {
        width: 300px;
    }
    .freeJoin .joinForm {
        width: 100%;
    }
    .freeJoin .joinForm .formTitle,
    .freeJoin .joinForm .formTitle h1,
    .freeJoin .joinForm .formTitle span {
        width: 320px;
    }
    .freeJoin .joinForm .form,
    .freeJoin .joinForm .form span {
        width: 320px;
    }
    .form input {
        max-width: 320px;
    }
}
@media only screen and (max-width: 320px) {
    .freeJoin .joinContent {
        width: 300px;
    }

    .freeJoin .joinForm .formTitle,
    .freeJoin .joinForm .formTitle h1,
    .freeJoin .joinForm .formTitle span {
        width: 300px;
    }
    .freeJoin .joinForm .form,
    .freeJoin .joinForm .form span {
        width: 300px;
    }
    .form input {
        max-width: 300px;
    }
}
@media only screen and (max-width: 280px) {
    .memberText {
        font-size: 13px !important;
        width: 260px !important;
    }
    .freeJoin .joinContent {
        width: 280px;
    }
    .freeJoin .joinContent .joinTitle {
        font-size: 22px;
        width: 260px;
        margin: 0;
    }
    .freeJoin .joinContent .joinSubTitle {
        font-size: 12px;
        width: 260px;
    }

    .freeJoin .joinForm {
        width: 100%;
    }
    .freeJoin .joinForm .formTitle,
    .freeJoin .joinForm .formTitle h1,
    .freeJoin .joinForm .formTitle span {
        width: 280px;
    }
    .freeJoin .joinForm .form,
    .freeJoin .joinForm .form span {
        width: 280px;
    }
    .form input {
        max-width: 280px;
    }
    .freeJoin .joinContent,
    .freeJoin .joinForm {
        height: 500px;
    }
}
</style>
