<template>
    <div class="leadesDetail">
        <div class="pageRoute">
            <p class="fromRoute"><router-link to="/"> HomePage </router-link></p>
            <span> ▸ </span>
            <p class="fromRoute">
                <router-link to="/leades"> Leads List </router-link>
            </p>
            <span>▸</span>
            <p class="toRoute">
                <router-link to="/leades"> Lead Details </router-link>
            </p>
            <span class="routeLine"> - </span>
            <p class="toRoute">
                <router-link to="/leadesdetail/5"> Carpets for Hotels to import United Kingdom </router-link>
            </p>
        </div>
        <div class="leadesDetailPage">
            <div class="leadesDetailHead">
                <div class="leadesDetailTitle">
                    <h1>Carpets for Hotels to import United Kingdom</h1>
                    <div class="leadesStatus">
                        <div><span class="material-icons-outlined">card_travel</span>Buy Request</div>
                        <div><span class="material-icons-outlined">copyright</span> 10 Credit</div>
                        <div><span class="material-icons-outlined">date_range</span> 27.01.2022</div>
                        <div><span class="material-icons-outlined">schedule</span> 12:44:00</div>
                        <div><span class="material-icons-outlined">flag</span> United Kingdom</div>
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
            <div class="leadesContent">
                <div class="leadesPromotion">
                    <div class="contentLeft">
                        <div class="leadesAbout">
                            <div class="title"><span class="material-icons-outlined">business</span>Summary</div>
                            <div class="content">
                                <p>
                                    We're currently looking for supplier from Turkey who can supply the carpet for our hotels. Can you offer your company factory profile, and
                                    update catalogue to us, so that we can select suitable carpet for our group. I look forward to cooperate with your company soon. Thank you so
                                    much...
                                </p>
                            </div>
                        </div>
                        <!--  -->
                        // ! Buralara Bak v-if olayını çöz
                        <div class="requesttrue" v-if="loggedIn == true">
                            <span class="material-icons-outlined">shopping_cart</span>
                            <h3>Credit is Required for The Request!</h3>
                            <span>You need to spend some credits to view the details of the request.</span>
                            <div>
                                <select name="leadesSelect" id="leadesSelect">
                                    <option value="CompanySelect">CompanySelect</option>
                                    <option value="CompanySelect1">CompanySelect1</option>
                                    <option value="CompanySelect2">CompanySelect2</option>
                                    <option value="CompanySelect3">CompanySelect3</option>
                                </select>
                                <button>Pay 10 Credits</button>
                            </div>
                        </div>
                        <div class="requestfalse" v-else>
                            <span class="material-icons-outlined">lock</span>
                            <h3>You need to be logged in to view the details of this lead</h3>
                            <div class="requestLink">
                                <span class="requestsignup"><router-link to="/signup">Sign Up</router-link></span>
                                <span
                                    ><router-link to="/login"
                                        ><span class="material-icons-outlined"> verified_user </span>
                                        Log In
                                    </router-link></span
                                >
                            </div>
                        </div>
                        <!--  -->
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
                        <div class="shareRequest">
                            // ! Buralara Bak v-if olayını çöz
                            <div class="shareBtn" v-if="loggedIn == true">
                                <span class="shareText">Share The Request </span>
                                <span class="shareFacebook"
                                    ><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17 8.04902C17 3.60302 13.418 -0.000976562 9.00005 -0.000976562C4.58005 2.34375e-05 0.998047 3.60302 0.998047 8.05002C0.998047 12.067 3.92405 15.397 7.74805 16.001V10.376H5.71805V8.05002H7.75005V6.27502C7.75005 4.25802 8.94505 3.14402 10.772 3.14402C11.648 3.14402 12.563 3.30102 12.563 3.30102V5.28102H11.554C10.561 5.28102 10.251 5.90202 10.251 6.53902V8.04902H12.469L12.115 10.375H10.25V16C14.074 15.396 17 12.066 17 8.04902Z"
                                            fill="#1877F2"
                                        />
                                    </svg>
                                </span>
                                <span class="shareTwitter">
                                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.026 13.5007C11.064 13.5007 14.367 8.49769 14.367 4.16669C14.367 4.02669 14.367 3.88469 14.361 3.74469C15.0041 3.27918 15.5591 2.70284 16 2.04269C15.3993 2.30754 14.7628 2.4821 14.111 2.56069C14.7975 2.15033 15.3117 1.50466 15.558 0.743693C14.913 1.12582 14.207 1.39407 13.471 1.53669C12.9762 1.00972 12.3214 0.660611 11.6081 0.543451C10.8948 0.42629 10.1627 0.547615 9.52534 0.88863C8.88796 1.22965 8.38081 1.77132 8.08245 2.42975C7.78409 3.08818 7.71118 3.82663 7.875 4.53069C6.56974 4.46524 5.29282 4.12616 4.12704 3.53544C2.96127 2.94471 1.93268 2.11554 1.108 1.10169C0.68934 1.82478 0.561574 2.68009 0.750646 3.49396C0.939718 4.30782 1.43145 5.01922 2.126 5.48369C1.60554 5.46601 1.09652 5.32625 0.64 5.07569V5.12069C0.640897 5.87817 0.903307 6.61211 1.38287 7.19845C1.86244 7.78479 2.52975 8.18757 3.272 8.33869C2.99026 8.41631 2.69923 8.455 2.407 8.45369C2.20098 8.45432 1.99538 8.43523 1.793 8.39669C2.00279 9.04875 2.41127 9.61886 2.96125 10.0272C3.51122 10.4355 4.17513 10.6615 4.86 10.6737C3.69656 11.5875 2.2594 12.0831 0.78 12.0807C0.519321 12.0818 0.258823 12.0668 0 12.0357C1.50151 12.993 3.2453 13.5012 5.026 13.5007Z"
                                            fill="#1DA1F2"
                                        />
                                    </svg>
                                </span>
                                <span class="shareLinkedin"
                                    ><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0 1.146C0 0.513 0.526 0 1.175 0H14.825C15.474 0 16 0.513 16 1.146V14.854C16 15.487 15.474 16 14.825 16H1.175C0.526 16 0 15.487 0 14.854V1.146ZM4.943 13.394V6.169H2.542V13.394H4.943ZM3.743 5.182C4.58 5.182 5.101 4.628 5.101 3.934C5.086 3.225 4.581 2.686 3.759 2.686C2.937 2.686 2.4 3.226 2.4 3.934C2.4 4.628 2.921 5.182 3.727 5.182H3.743ZM8.651 13.394V9.359C8.651 9.143 8.667 8.927 8.731 8.773C8.904 8.342 9.299 7.895 9.963 7.895C10.832 7.895 11.179 8.557 11.179 9.529V13.394H13.58V9.25C13.58 7.03 12.396 5.998 10.816 5.998C9.542 5.998 8.971 6.698 8.651 7.191V7.216H8.635C8.64031 7.20765 8.64564 7.19932 8.651 7.191V6.169H6.251C6.281 6.847 6.251 13.394 6.251 13.394H8.651Z"
                                            fill="#0077B5"
                                        />
                                    </svg>
                                </span>
                                <span class="shareInstagram">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 0C5.829 0 5.556 0.01 4.703 0.048C3.85 0.088 3.269 0.222 2.76 0.42C2.22609 0.620819 1.74249 0.935826 1.343 1.343C0.936076 1.7427 0.621107 2.22624 0.42 2.76C0.222 3.268 0.087 3.85 0.048 4.7C0.01 5.555 0 5.827 0 8.001C0 10.173 0.01 10.445 0.048 11.298C0.088 12.15 0.222 12.731 0.42 13.24C0.625 13.766 0.898 14.212 1.343 14.657C1.787 15.102 2.233 15.376 2.759 15.58C3.269 15.778 3.849 15.913 4.701 15.952C5.555 15.99 5.827 16 8 16C10.173 16 10.444 15.99 11.298 15.952C12.149 15.912 12.732 15.778 13.241 15.58C13.7746 15.3791 14.2578 15.0641 14.657 14.657C15.102 14.212 15.375 13.766 15.58 13.24C15.777 12.731 15.912 12.15 15.952 11.298C15.99 10.445 16 10.173 16 8C16 5.827 15.99 5.555 15.952 4.701C15.912 3.85 15.777 3.268 15.58 2.76C15.3789 2.22623 15.0639 1.74268 14.657 1.343C14.2576 0.935676 13.774 0.620645 13.24 0.42C12.73 0.222 12.148 0.087 11.297 0.048C10.443 0.01 10.172 0 7.998 0H8.001H8ZM7.283 1.442H8.001C10.137 1.442 10.39 1.449 11.233 1.488C12.013 1.523 12.437 1.654 12.719 1.763C13.092 1.908 13.359 2.082 13.639 2.362C13.919 2.642 14.092 2.908 14.237 3.282C14.347 3.563 14.477 3.987 14.512 4.767C14.551 5.61 14.559 5.863 14.559 7.998C14.559 10.133 14.551 10.387 14.512 11.23C14.477 12.01 14.346 12.433 14.237 12.715C14.1087 13.0624 13.904 13.3764 13.638 13.634C13.358 13.914 13.092 14.087 12.718 14.232C12.438 14.342 12.014 14.472 11.233 14.508C10.39 14.546 10.137 14.555 8.001 14.555C5.865 14.555 5.611 14.546 4.768 14.508C3.988 14.472 3.565 14.342 3.283 14.232C2.9355 14.1039 2.62113 13.8996 2.363 13.634C2.09675 13.376 1.89172 13.0617 1.763 12.714C1.654 12.433 1.523 12.009 1.488 11.229C1.45 10.386 1.442 10.133 1.442 7.996C1.442 5.86 1.45 5.608 1.488 4.765C1.524 3.985 1.654 3.561 1.764 3.279C1.909 2.906 2.083 2.639 2.363 2.359C2.643 2.079 2.909 1.906 3.283 1.761C3.565 1.651 3.988 1.521 4.768 1.485C5.506 1.451 5.792 1.441 7.283 1.44V1.442ZM12.271 2.77C12.1449 2.77 12.0201 2.79483 11.9036 2.84308C11.7872 2.89132 11.6813 2.96203 11.5922 3.05118C11.503 3.14032 11.4323 3.24615 11.3841 3.36262C11.3358 3.4791 11.311 3.60393 11.311 3.73C11.311 3.85607 11.3358 3.9809 11.3841 4.09738C11.4323 4.21385 11.503 4.31968 11.5922 4.40882C11.6813 4.49797 11.7872 4.56868 11.9036 4.61692C12.0201 4.66517 12.1449 4.69 12.271 4.69C12.5256 4.69 12.7698 4.58886 12.9498 4.40882C13.1299 4.22879 13.231 3.98461 13.231 3.73C13.231 3.47539 13.1299 3.23121 12.9498 3.05118C12.7698 2.87114 12.5256 2.77 12.271 2.77ZM8.001 3.892C7.45607 3.8835 6.91489 3.98349 6.40898 4.18614C5.90306 4.3888 5.44251 4.69007 5.05415 5.07242C4.66579 5.45478 4.35736 5.91057 4.14684 6.41326C3.93632 6.91595 3.8279 7.4555 3.8279 8.0005C3.8279 8.5455 3.93632 9.08505 4.14684 9.58774C4.35736 10.0904 4.66579 10.5462 5.05415 10.9286C5.44251 11.3109 5.90306 11.6122 6.40898 11.8149C6.91489 12.0175 7.45607 12.1175 8.001 12.109C9.07954 12.0922 10.1082 11.6519 10.865 10.8833C11.6217 10.1146 12.0459 9.07917 12.0459 8.0005C12.0459 6.92183 11.6217 5.88641 10.865 5.11775C10.1082 4.34909 9.07954 3.90883 8.001 3.892ZM8.001 5.333C8.70833 5.333 9.38669 5.61399 9.88685 6.11415C10.387 6.61431 10.668 7.29267 10.668 8C10.668 8.70733 10.387 9.38569 9.88685 9.88585C9.38669 10.386 8.70833 10.667 8.001 10.667C7.29367 10.667 6.61531 10.386 6.11515 9.88585C5.61499 9.38569 5.334 8.70733 5.334 8C5.334 7.29267 5.61499 6.61431 6.11515 6.11415C6.61531 5.61399 7.29367 5.333 8.001 5.333Z"
                                            fill="#833AB4"
                                        />
                                    </svg>
                                </span>
                                <span class="sharePinterest"
                                    ><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.00509 1.61021e-06C6.13978 -0.00118135 4.3327 0.649478 2.8963 1.83948C1.45989 3.02947 0.484465 4.684 0.138677 6.51697C-0.207111 8.34994 0.0984782 10.2461 1.00261 11.8777C1.90673 13.5092 3.35256 14.7735 5.09009 15.452C5.02009 14.819 4.95609 13.846 5.11709 13.155C5.26309 12.53 6.05509 9.178 6.05509 9.178C6.05509 9.178 5.81609 8.699 5.81609 7.991C5.81609 6.878 6.46109 6.048 7.26409 6.048C7.94609 6.048 8.27609 6.56 8.27609 7.175C8.27609 7.861 7.83909 8.887 7.61309 9.838C7.42509 10.634 8.01309 11.284 8.79809 11.284C10.2201 11.284 11.3131 9.784 11.3131 7.62C11.3131 5.705 9.93609 4.366 7.97109 4.366C5.69509 4.366 4.35909 6.073 4.35909 7.837C4.35909 8.525 4.62409 9.262 4.95409 9.663C4.98251 9.69323 5.0026 9.73031 5.01242 9.77062C5.02223 9.81093 5.02143 9.85309 5.01009 9.893C4.94909 10.145 4.81409 10.689 4.78809 10.8C4.75309 10.946 4.67209 10.977 4.52009 10.907C3.52009 10.442 2.89609 8.981 2.89609 7.807C2.89609 5.284 4.73009 2.967 8.18209 2.967C10.9571 2.967 13.1141 4.944 13.1141 7.587C13.1141 10.344 11.3751 12.563 8.96309 12.563C8.15209 12.563 7.39009 12.142 7.12909 11.644L6.63109 13.546C6.45009 14.241 5.96209 15.112 5.63609 15.643C6.73606 15.9831 7.89648 16.0818 9.03809 15.9323C10.1797 15.7828 11.2756 15.3886 12.2509 14.7767C13.2262 14.1648 14.0579 13.3496 14.6892 12.3868C15.3206 11.424 15.7367 10.3362 15.9091 9.19787C16.0815 8.0595 16.0061 6.89733 15.6881 5.79075C15.3702 4.68418 14.8171 3.65927 14.0667 2.78604C13.3164 1.91281 12.3863 1.21184 11.3402 0.731016C10.294 0.250192 9.15644 0.000842303 8.00509 1.61021e-06Z"
                                            fill="#E60023"
                                        />
                                    </svg>
                                </span>
                                <span class="shareTelegram"
                                    ><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM8.287 5.906C7.509 6.23 5.953 6.9 3.621 7.916C3.243 8.066 3.044 8.214 3.026 8.358C2.996 8.601 3.301 8.697 3.716 8.828L3.891 8.883C4.299 9.016 4.849 9.171 5.134 9.177C5.394 9.183 5.683 9.077 6.002 8.857C8.181 7.386 9.306 6.643 9.376 6.627C9.426 6.615 9.496 6.601 9.542 6.643C9.589 6.684 9.584 6.763 9.579 6.784C9.549 6.913 8.352 8.025 7.733 8.601C7.54 8.781 7.403 8.908 7.375 8.937C7.31334 9.00001 7.25067 9.06202 7.187 9.123C6.807 9.489 6.523 9.763 7.202 10.211C7.529 10.427 7.791 10.604 8.052 10.782C8.336 10.976 8.62 11.169 8.988 11.411C9.081 11.471 9.171 11.536 9.258 11.598C9.589 11.834 9.888 12.046 10.255 12.012C10.469 11.992 10.69 11.792 10.802 11.192C11.067 9.775 11.588 6.706 11.708 5.441C11.7153 5.33584 11.711 5.2302 11.695 5.126C11.6856 5.04192 11.6449 4.96446 11.581 4.909C11.49 4.84619 11.3815 4.81365 11.271 4.816C10.971 4.821 10.508 4.982 8.287 5.906Z"
                                            fill="#0088CC"
                                        />
                                    </svg>
                                </span>
                                <span class="shareWhatsapp"
                                    ><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.6362 2.32605C12.9026 1.58573 12.0291 0.998793 11.0665 0.599454C10.1038 0.200115 9.07133 -0.00364427 8.02916 4.93305e-05C3.66216 4.93305e-05 0.103156 3.55805 0.0991563 7.92605C0.0991563 9.32505 0.465156 10.686 1.15616 11.891L0.0351562 16L4.23916 14.898C5.40216 15.531 6.70509 15.8627 8.02916 15.863H8.03316C12.4012 15.863 15.9592 12.305 15.9632 7.93305C15.9642 6.89109 15.759 5.85924 15.3594 4.89693C14.9599 3.93462 14.3739 3.06088 13.6352 2.32605H13.6362ZM8.02916 14.521C6.84815 14.5214 5.68886 14.2036 4.67316 13.601L4.43316 13.457L1.93916 14.111L2.60516 11.6781L2.44916 11.427C1.78896 10.3774 1.4398 9.16208 1.44216 7.92205C1.44216 4.29605 4.39916 1.33805 8.03316 1.33805C8.8989 1.3365 9.75638 1.50632 10.5562 1.83774C11.356 2.16916 12.0823 2.65561 12.6932 3.26905C13.3062 3.8801 13.7922 4.60647 14.1231 5.40628C14.454 6.20609 14.6233 7.06349 14.6212 7.92905C14.6172 11.568 11.6602 14.521 8.02916 14.521ZM11.6442 9.58705C11.4472 9.48805 10.4742 9.00905 10.2912 8.94105C10.1092 8.87605 9.97616 8.84205 9.84616 9.04005C9.71316 9.23705 9.33316 9.68605 9.21916 9.81505C9.10516 9.94805 8.98716 9.96305 8.78916 9.86505C8.59216 9.76505 7.95316 9.55705 7.19716 8.88005C6.60716 8.35505 6.21216 7.70505 6.09416 7.50805C5.98016 7.31005 6.08316 7.20405 6.18216 7.10505C6.26916 7.01705 6.37916 6.87305 6.47816 6.75905C6.57816 6.64505 6.61116 6.56105 6.67616 6.42905C6.74116 6.29505 6.71016 6.18105 6.66116 6.08205C6.61116 5.98305 6.21616 5.00605 6.04916 4.61205C5.88916 4.22305 5.72616 4.27705 5.60416 4.27205C5.49016 4.26505 5.35716 4.26505 5.22416 4.26505C5.12372 4.26755 5.02488 4.29078 4.93385 4.33328C4.84282 4.37579 4.76155 4.43665 4.69516 4.51205C4.51316 4.71005 4.00416 5.18905 4.00416 6.16605C4.00416 7.14305 4.71416 8.08205 4.81416 8.21505C4.91216 8.34805 6.20816 10.347 8.19716 11.207C8.66716 11.412 9.03716 11.533 9.32616 11.625C9.80116 11.7771 10.2302 11.754 10.5722 11.705C10.9522 11.647 11.7432 11.225 11.9102 10.762C12.0742 10.298 12.0742 9.90205 12.0242 9.81905C11.9752 9.73505 11.8422 9.68605 11.6442 9.58705Z"
                                            fill="#25D366"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div v-else></div>
                            <div class="advertisement">
                                <span
                                    ><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.4541 16.74C7.27414 16.59 4.74414 13.97 4.74414 10.75C4.74414 7.44 7.43414 4.75 10.7441 4.75C13.9641 4.75 16.5841 7.28 16.7341 10.46L14.6341 9.83C14.2241 8.06 12.6341 6.75 10.7441 6.75C8.53414 6.75 6.74414 8.54 6.74414 10.75C6.74414 12.64 8.05414 14.23 9.82414 14.64L10.4541 16.74ZM20.7441 10.75C20.7441 11.05 20.7341 11.35 20.7041 11.65L18.7341 11.06C18.7441 10.96 18.7441 10.85 18.7441 10.75C18.7441 6.33 15.1641 2.75 10.7441 2.75C6.32414 2.75 2.74414 6.33 2.74414 10.75C2.74414 15.17 6.32414 18.75 10.7441 18.75C10.8441 18.75 10.9541 18.75 11.0541 18.74L11.6441 20.71C11.3441 20.74 11.0441 20.75 10.7441 20.75C5.22414 20.75 0.744141 16.27 0.744141 10.75C0.744141 5.23 5.22414 0.75 10.7441 0.75C16.2641 0.75 20.7441 5.23 20.7441 10.75ZM16.9741 15.01L20.7441 13.75L10.7441 10.75L13.7441 20.75L15.0041 16.98L19.2741 21.25L21.2541 19.27L16.9741 15.01Z"
                                            fill="#001B3D"
                                            fill-opacity="0.16"
                                        />
                                    </svg>
                                </span>
                                <span>advertisement</span>
                            </div>
                        </div>
                        <div class="similarLeades">
                            <div class="leadesListList">
                                <div class="leadesListList-leades">
                                    <div class="leadesListListTitle">
                                        <h1>Similar Companies</h1>
                                    </div>
                                    <div class="leades">
                                        <div class="card mb-3" style="max-width: 100%">
                                            <div class="row g-0">
                                                <div class="col-md-12">
                                                    <div class="card-body">
                                                        <span class="mobilLeadesDate">27.01.2022</span>
                                                        <h5 class="card-title">
                                                            <span class="leadesTitleFlag"><country-flag country="bd" size="normal" /></span>Heavy duty vehicles to import Bangladesh
                                                        </h5>
                                                        <p class="card-text">
                                                            Actually i am looking for construction equipment manufacturer. pay loader, motor grader, beam lifter, forklift,
                                                            excavator etc.
                                                        </p>
                                                        <div class="leadesStatus">
                                                            <div class="leadesRequest">
                                                                <span class="material-icons-outlined">card_travel</span>
                                                                Buy Request
                                                            </div>
                                                            <div class="leadesCredit">
                                                                <span class="material-icons-outlined">copyright</span>
                                                                10 Credit
                                                            </div>
                                                            <div class="leadesDate">
                                                                <span class="material-icons-outlined">date_range</span>
                                                                27.01.2022
                                                            </div>
                                                            <div class="leadesClock">
                                                                <span class="material-icons-outlined">schedule</span>
                                                                12:44:00
                                                            </div>
                                                            <div class="leadesFlag">
                                                                <span class="material-icons-outlined">flag</span>
                                                                Bangladesh
                                                            </div>
                                                        </div>
                                                        <div class="leadesTags">
                                                            <span class="leadesTag1">forklift</span>
                                                            <span class="leadesTag1">beam lifter</span>
                                                            <span class="leadesTag1">motor grader</span>
                                                            <span class="leadesTag1">candy</span>
                                                            <span class="leadesTag1">beam lifter</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="leades">
                                        <div class="card mb-3" style="max-width: 100%">
                                            <div class="row g-0">
                                                <div class="col-md-12">
                                                    <div class="card-body">
                                                        <span class="mobilLeadesDate">27.01.2022</span>
                                                        <h5 class="card-title">
                                                            <span class="leadesTitleFlag"><country-flag country="bd" size="normal" /></span>Heavy duty vehicles to import Bangladesh
                                                        </h5>
                                                        <p class="card-text">
                                                            Actually i am looking for construction equipment manufacturer. pay loader, motor grader, beam lifter, forklift,
                                                            excavator etc.
                                                        </p>
                                                        <div class="leadesStatus">
                                                            <div class="leadesRequest">
                                                                <span class="material-icons-outlined">card_travel</span>
                                                                Buy Request
                                                            </div>
                                                            <div class="leadesCredit">
                                                                <span class="material-icons-outlined">copyright</span>
                                                                10 Credit
                                                            </div>
                                                            <div class="leadesDate">
                                                                <span class="material-icons-outlined">date_range</span>
                                                                27.01.2022
                                                            </div>
                                                            <div class="leadesClock">
                                                                <span class="material-icons-outlined">schedule</span>
                                                                12:44:00
                                                            </div>
                                                            <div class="leadesFlag">
                                                                <span class="material-icons-outlined">flag</span>
                                                                Bangladesh
                                                            </div>
                                                        </div>
                                                        <div class="leadesTags">
                                                            <span class="leadesTag1">forklift</span>
                                                            <span class="leadesTag1">beam lifter</span>
                                                            <span class="leadesTag1">motor grader</span>
                                                            <span class="leadesTag1">candy</span>
                                                            <span class="leadesTag1">beam lifter</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="leades">
                                        <div class="card mb-3" style="max-width: 100%">
                                            <div class="row g-0">
                                                <div class="col-md-12">
                                                    <div class="card-body">
                                                        <span class="mobilLeadesDate">27.01.2022</span>
                                                        <h5 class="card-title">
                                                            <span class="leadesTitleFlag"><country-flag country="bd" size="normal" /></span>Heavy duty vehicles to import Bangladesh
                                                        </h5>
                                                        <p class="card-text">
                                                            Actually i am looking for construction equipment manufacturer. pay loader, motor grader, beam lifter, forklift,
                                                            excavator etc.
                                                        </p>
                                                        <div class="leadesStatus">
                                                            <div class="leadesRequest">
                                                                <span class="material-icons-outlined">card_travel</span>
                                                                Buy Request
                                                            </div>
                                                            <div class="leadesCredit">
                                                                <span class="material-icons-outlined">copyright</span>
                                                                10 Credit
                                                            </div>
                                                            <div class="leadesDate">
                                                                <span class="material-icons-outlined">date_range</span>
                                                                27.01.2022
                                                            </div>
                                                            <div class="leadesClock">
                                                                <span class="material-icons-outlined">schedule</span>
                                                                12:44:00
                                                            </div>
                                                            <div class="leadesFlag">
                                                                <span class="material-icons-outlined">flag</span>
                                                                Bangladesh
                                                            </div>
                                                        </div>
                                                        <div class="leadesTags">
                                                            <span class="leadesTag1">forklift</span>
                                                            <span class="leadesTag1">beam lifter</span>
                                                            <span class="leadesTag1">motor grader</span>
                                                            <span class="leadesTag1">candy</span>
                                                            <span class="leadesTag1">beam lifter</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="leades">
                                        <div class="card mb-3" style="max-width: 100%">
                                            <div class="row g-0">
                                                <div class="col-md-12">
                                                    <div class="card-body">
                                                        <span class="mobilLeadesDate">27.01.2022</span>
                                                        <h5 class="card-title">
                                                            <span class="leadesTitleFlag"><country-flag country="bd" size="normal" /></span>Heavy duty vehicles to import Bangladesh
                                                        </h5>
                                                        <p class="card-text">
                                                            Actually i am looking for construction equipment manufacturer. pay loader, motor grader, beam lifter, forklift,
                                                            excavator etc.
                                                        </p>
                                                        <div class="leadesStatus">
                                                            <div class="leadesRequest">
                                                                <span class="material-icons-outlined">card_travel</span>
                                                                Buy Request
                                                            </div>
                                                            <div class="leadesCredit">
                                                                <span class="material-icons-outlined">copyright</span>
                                                                10 Credit
                                                            </div>
                                                            <div class="leadesDate">
                                                                <span class="material-icons-outlined">date_range</span>
                                                                27.01.2022
                                                            </div>
                                                            <div class="leadesClock">
                                                                <span class="material-icons-outlined">schedule</span>
                                                                12:44:00
                                                            </div>
                                                            <div class="leadesFlag">
                                                                <span class="material-icons-outlined">flag</span>
                                                                Bangladesh
                                                            </div>
                                                        </div>
                                                        <div class="leadesTags">
                                                            <span class="leadesTag1">forklift</span>
                                                            <span class="leadesTag1">beam lifter</span>
                                                            <span class="leadesTag1">motor grader</span>
                                                            <span class="leadesTag1">candy</span>
                                                            <span class="leadesTag1">beam lifter</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="leades">
                                        <div class="card mb-3" style="max-width: 100%">
                                            <div class="row g-0">
                                                <div class="col-md-12">
                                                    <div class="card-body">
                                                        <span class="mobilLeadesDate">27.01.2022</span>
                                                        <h5 class="card-title">
                                                            <span class="leadesTitleFlag"><country-flag country="bd" size="normal" /></span>Heavy duty vehicles to import Bangladesh
                                                        </h5>
                                                        <p class="card-text">
                                                            Actually i am looking for construction equipment manufacturer. pay loader, motor grader, beam lifter, forklift,
                                                            excavator etc.
                                                        </p>
                                                        <div class="leadesStatus">
                                                            <div class="leadesRequest">
                                                                <span class="material-icons-outlined">card_travel</span>
                                                                Buy Request
                                                            </div>
                                                            <div class="leadesCredit">
                                                                <span class="material-icons-outlined">copyright</span>
                                                                10 Credit
                                                            </div>
                                                            <div class="leadesDate">
                                                                <span class="material-icons-outlined">date_range</span>
                                                                27.01.2022
                                                            </div>
                                                            <div class="leadesClock">
                                                                <span class="material-icons-outlined">schedule</span>
                                                                12:44:00
                                                            </div>
                                                            <div class="leadesFlag">
                                                                <span class="material-icons-outlined">flag</span>
                                                                Bangladesh
                                                            </div>
                                                        </div>
                                                        <div class="leadesTags">
                                                            <span class="leadesTag1">forklift</span>
                                                            <span class="leadesTag1">beam lifter</span>
                                                            <span class="leadesTag1">motor grader</span>
                                                            <span class="leadesTag1">candy</span>
                                                            <span class="leadesTag1">beam lifter</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="moreLinkDiv">
                                        <router-link to="/leades">View More Leades</router-link>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contentRight">
                        <div class="leadesLastRequests">
                            <div class="title">Last 24 Hours</div>
                            <div class="content p-3">
                                <div class="lastRequest">
                                    <div class="requestTitle">Heavy duty vehicles to import Bangladesh</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Buy Request
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:38:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Kerevit satmak istiyoruz</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Sell Offer
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:40:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Vehicle mounted type thermal foggers wanted Georgia</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Buy Request
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:42:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Heavy duty vehicles to import Bangladesh</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Buy Request
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:38:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Kerevit satmak istiyoruz</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Sell Offer
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:40:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Vehicle mounted type thermal foggers wanted Georgia</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Buy Request
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:42:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Heavy duty vehicles to import Bangladesh</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Buy Request
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:38:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Kerevit satmak istiyoruz</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Sell Offer
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:40:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Vehicle mounted type thermal foggers wanted Georgia</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Buy Request
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:42:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Heavy duty vehicles to import Bangladesh</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Buy Request
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:38:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Kerevit satmak istiyoruz</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Sell Offer
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:40:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Vehicle mounted type thermal foggers wanted Georgia</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Buy Request
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:42:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Heavy duty vehicles to import Bangladesh</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Buy Request
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:38:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Kerevit satmak istiyoruz</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Sell Offer
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:40:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Vehicle mounted type thermal foggers wanted Georgia</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Buy Request
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:42:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Heavy duty vehicles to import Bangladesh</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Buy Request
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:38:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Kerevit satmak istiyoruz</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Sell Offer
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:40:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Vehicle mounted type thermal foggers wanted Georgia</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Buy Request
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:42:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Heavy duty vehicles to import Bangladesh</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Buy Request
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:38:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Kerevit satmak istiyoruz</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Sell Offer
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:40:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Vehicle mounted type thermal foggers wanted Georgia</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Buy Request
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:42:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Heavy duty vehicles to import Bangladesh</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Buy Request
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:38:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Kerevit satmak istiyoruz</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Sell Offer
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:40:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Vehicle mounted type thermal foggers wanted Georgia</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Buy Request
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:42:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Heavy duty vehicles to import Bangladesh</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Buy Request
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:38:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Kerevit satmak istiyoruz</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Sell Offer
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:40:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Vehicle mounted type thermal foggers wanted Georgia</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Buy Request
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:42:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Heavy duty vehicles to import Bangladesh</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Buy Request
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:38:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Kerevit satmak istiyoruz</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Sell Offer
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:40:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Vehicle mounted type thermal foggers wanted Georgia</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Buy Request
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:42:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Heavy duty vehicles to import Bangladesh</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Buy Request
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:38:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Kerevit satmak istiyoruz</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Sell Offer
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:40:00
                                        </div>
                                    </div>
                                </div>
                                <div class="lastRequest">
                                    <div class="requestTitle">Vehicle mounted type thermal foggers wanted Georgia</div>
                                    <div class="requestStatus">
                                        <div class="requestType">
                                            <span class="material-icons-outlined"> card_travel</span>
                                            Buy Request
                                        </div>
                                        <div class="requestTime">
                                            <span class="material-icons-outlined">schedule</span>
                                            12:42:00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
data() { return { loggedIn :true } },
<style scoped>
.leadesDetail {
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
.leades {
    max-height: 300px;
}

.leadesDetailPage {
    width: 100%;
    height: 100%;
    padding: 32px;
    margin-top: 28px;
}
.leadesDetailTitle {
    width: 80%;
}
.leadesDetailHead {
    display: flex;
    width: 100%;
}
.leadesDetailTitle h1 {
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
.leadesStatus {
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    flex: none;
    order: 1;
    flex-grow: 0;
    flex-wrap: wrap;
}
.leadesStatus div {
    margin-right: 6px;
    margin-top: 6px;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    order: 1;
    flex-grow: 0;
}
.leadesStatus span {
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
.leadesContent {
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: 64px;
}
.leadesPromotion {
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
.leadesAbout {
    position: relative;
}
.leadesAbout .title {
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
.leadesAbout .title span:nth-child(1) {
    margin: 0px 10px;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}
.leadesAbout span:nth-child(3) {
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
.leadesAbout .content {
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

.leadesLastRequests {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
}
.leadesLastRequests .title {
    width: 140px;
    height: 28px;
    font-family: "Dm Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    display: flex;
    align-items: center;
    font-feature-settings: "liga" off;
    color: #1b1b1d;
    margin: 6px 16px;
}
.leadesLastRequests .requestTitle {
    position: static;
    text-align: left;
    left: 0px;
    top: 0px;
    font-family: "Dm Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: #005eb5;
    flex: none;
    order: 0;
    flex-grow: 1;
    margin: 8px 8px;
}
.leadesLastRequests .requestStatus {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: left;
}
.leadesLastRequests .requestStatus div span {
    color: #555f71 !important;
}
.leadesLastRequests .requestStatus div {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-around;
    margin: 0 6px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #1b1b1d;
}
.lastRequest {
    margin: 16px 0px;
}
.categoryTags {
    width: 100%;
    position: relative;
    margin: 50px 0px;
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
.similarLeades {
    height: 100%;
    width: 100%;
    margin-top: 50px;
}
.leadesList {
    font-family: "Dm Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    position: relative;
    width: 100%;
}
.leadesListList-leades {
    position: relative;
    margin-top: 28px;
    width: 100%;
}
.leadesListListFlex {
    display: flex;
    justify-content: left;
}
.leadesListList-leades h1 {
    font-weight: 400, regular;
    font-style: normal;
    font-size: 28px;
    line-height: 36px;
    position: relative;
    display: flex;
    left: 0;
    flex-direction: row;
}
.leadesListListTitle {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
}

.leadesListListTitle div {
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

.leades {
    text-align: left;
    position: relative;
    border: 1px solid rgba(116, 119, 127, 0.12);
    width: 100%;
    margin-top: 15px;
    /* height: 100%; */
}
.leades div {
    border: none;
}
.leades .card-body {
    padding: 0;
    height: 265px;
}
.leades .card-title {
    color: #005eb5;
    font-weight: 500, medium;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: flex-start;
}
.leades .card-text {
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    margin-top: 16px;
}
.leades .card-body a {
    position: absolute;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: left;
}
.leades .card-body a span {
    margin: 0px;
}

.leades .leadesTags {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    width: 50%;
    justify-content: right;
}
.leades .leadesTags span {
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
.leades .leades-logo {
    width: 100%;
    margin-top: 5px;
}
.leades-logoImage {
    border-radius: 50%;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.leades .leades-logo .leades-logoImage img {
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

.requesttrue {
    width: 100%;
    height: 248px;
    max-height: 388px;
    background: #d4e3ff;
    border-radius: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
}
.requesttrue h3 {
    font-family: "Dm Sans", sans-serif;
    font-size: 22px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
}
.requesttrue span:nth-child(1) {
    color: #005eb5;
}
.requesttrue span:nth-child(3) {
    min-width: 320px;
    height: 24px;
    font-family: "Dm Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    margin: 4px 0px;
}
.requesttrue div {
    display: flex;
}
.requesttrue div select {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px;
    position: static;
    width: 245px;
    height: 56px;
    left: 0px;
    top: 0px;
    background: #fdfbff;
    border: 1px solid #74777f;
    box-sizing: border-box;
    border-radius: 8px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 8px;
    font-family: "Dm Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 56px;
    color: #1b1b1d;
    display: flex;
    align-items: center;
    letter-spacing: 0.25px;
}
.requesttrue div button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 14px 18px;
    position: static;
    background: #005eb5;
    border-radius: 8px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 0px;

    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;
}
.requestfalse {
    width: 100%;
    height: 248px;
    max-height: 388px;
    background: #ffdad4;
    border-radius: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
}
.shareRequest {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: left;
}

.shareRequest .shareBtn span {
    margin: 0px 10px;
    cursor: pointer;
}

.shareText {
    width: 320px;
    height: 24px;
    font-family: "Dm Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #000000;
}

.advertisement {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    height: 100px;
    width: 100%;
    max-width: 840px;
    background: rgba(224, 226, 235, 0.16);
    border-radius: 28px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.5px;
    color: rgba(0, 27, 61, 0.16);
}
.requestLink {
    display: flex;
    justify-content: center;
    align-items: center;
}
.requestLink span {
    margin: 0px 6px;
}

.requestLink span a {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;
    font-feature-settings: "liga" off;
    color: #fff;
    width: 105px;
    height: 40px;
    background: #ba1b1b;
    border-radius: 100px;
}
.requestLink a {
    display: flex;
    justify-content: center;
    align-items: center;
}
.requestLink .requestsignup a {
    background: none;
    color: #ba1b1b;
    border: 1px solid #ba1b1b;
}
.mobilLeadesDate {
    display: none;
}

.flag {
    margin-right: 6px;
}
@media only screen and (max-width: 1200px) {
    .leades .leadesTags span {
        font-size: 11px;
    }
    .leadesListListTitle div {
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
    .leades .card-title {
        font-size: 15px;
    }
    .leades .card-body {
        margin-left: 10px;
    }
    .leades .leadesTags {
        width: 60%;
    }
    .leades .card-body .leadesTags span {
        padding: 0;
        font-size: 13px;
    }
    .leades .card-body a {
        font-size: 13px;
    }
    .leades-logoImage {
        width: 44px;
        height: 44px;
    }
}
@media only screen and (max-width: 975px) {
    .leadesDetailPage {
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
    .leades .card-body a {
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
    .leadesDetailTitle h1 {
        font-size: 24px;
        line-height: 24px;
    }
    .leadesStatus div {
        font-size: 14px;
        letter-spacing: 0;
    }
    .leades .leadesTags {
        bottom: 26px;
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    .leades .card-body .leadesTags span {
        margin-left: 0px;
        text-align: center;
        width: 33.3%;
    }
    .leades .card-text {
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0px;
        color: #1b1b1d;
    }
    .leades .card-body {
        font-size: 11px;
    }
    .leades .card-body a {
        width: 100%;
        margin-top: 3px;
        font-size: 16px;
    }
    .leades .leadesTags span {
        position: unset;
        display: block;
    }
    .leades .card-body p {
        font-size: 14px;
    }
    .leades-logoImage {
        display: none;
    }
    .contentRight {
        display: none;
    }
    .similarLeades {
        height: 70%;
        position: static;
    }
}

@media only screen and (max-width: 480px) {
    .leadesListList .leadesListList-leades .leadesListListTitle h1 {
        font-size: 22px;
    }
    .leadesListList .leadesListList-leades .leadesListListTitle div {
        width: 120px;
        font-size: 12px;
    }
    .leadesListList .leadesListList-leades .leadesListListTitle div span {
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
