<template>
    <div class="companiesList">
        <div class="pageRoute">
            <p class="fromRoute"><router-link to="/">HomePage</router-link></p>
            <span>▸</span>
            <p class="toRoute"><router-link to="/leades">Leades List</router-link></p>
        </div>
        <div class="leadesListFlex">
            <div class="leadesList">
                <div class="leadesList-companies">
                    <div class="leadesListTitle">
                        <h1>Leades List</h1>
                        <div @click="filterActive(1)">
                            <span class="material-icons-outlined"> filter_alt </span>Advanced Filter
                        </div>
                    </div>
                    <div class="leades">
                        <div class="card mb-3" style="max-width: 100%">
                            <div class="row g-0">
                                <div class="col-md-12">
                                    <div class="card-body">
                                        <span class="mobilLeadesDate">27.01.2022</span>
                                        <h5 class="card-title">
                                            <span class="leadesTitleFlag"><country-flag country="bd" size="normal" /> </span>Heavy
                                            duty vehicles to import Bangladesh
                                        </h5>
                                        <p class="card-text">
                                            Actually i am looking for construction equipment manufacturer. pay loader, motor
                                            grader, beam lifter, forklift, excavator etc.
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
                                            <span class="leadesTitleFlag"><country-flag country="bd" size="normal" /></span>Heavy
                                            duty vehicles to import Bangladesh
                                        </h5>
                                        <p class="card-text">
                                            Actually i am looking for construction equipment manufacturer. pay loader, motor
                                            grader, beam lifter, forklift, excavator etc.
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
                                            <span class="leadesTitleFlag"><country-flag country="bd" size="normal" /></span>Heavy
                                            duty vehicles to import Bangladesh
                                        </h5>
                                        <p class="card-text">
                                            Actually i am looking for construction equipment manufacturer. pay loader, motor
                                            grader, beam lifter, forklift, excavator etc.
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
                                            <span class="leadesTitleFlag"><country-flag country="bd" size="normal" /></span>Heavy
                                            duty vehicles to import Bangladesh
                                        </h5>
                                        <p class="card-text">
                                            Actually i am looking for construction equipment manufacturer. pay loader, motor
                                            grader, beam lifter, forklift, excavator etc.
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
                                            <span class="leadesTitleFlag"><country-flag country="bd" size="normal" /></span>Heavy
                                            duty vehicles to import Bangladesh
                                        </h5>
                                        <p class="card-text">
                                            Actually i am looking for construction equipment manufacturer. pay loader, motor
                                            grader, beam lifter, forklift, excavator etc.
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
                                            <span class="leadesTitleFlag"><country-flag country="bd" size="normal" /></span>Heavy
                                            duty vehicles to import Bangladesh
                                        </h5>
                                        <p class="card-text">
                                            Actually i am looking for construction equipment manufacturer. pay loader, motor
                                            grader, beam lifter, forklift, excavator etc.
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
                                            <span class="leadesTitleFlag"><country-flag country="bd" size="normal" /></span>Heavy
                                            duty vehicles to import Bangladesh
                                        </h5>
                                        <p class="card-text">
                                            Actually i am looking for construction equipment manufacturer. pay loader, motor
                                            grader, beam lifter, forklift, excavator etc.
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
                                            <span class="leadesTitleFlag"><country-flag country="bd" size="normal" /></span>Heavy
                                            duty vehicles to import Bangladesh
                                        </h5>
                                        <p class="card-text">
                                            Actually i am looking for construction equipment manufacturer. pay loader, motor
                                            grader, beam lifter, forklift, excavator etc.
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
                                            <span class="leadesTitleFlag"><country-flag country="bd" size="normal" /></span>Heavy
                                            duty vehicles to import Bangladesh
                                        </h5>
                                        <p class="card-text">
                                            Actually i am looking for construction equipment manufacturer. pay loader, motor
                                            grader, beam lifter, forklift, excavator etc.
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
                                            <span class="leadesTitleFlag"><country-flag country="bd" size="normal" /></span>Heavy
                                            duty vehicles to import Bangladesh
                                        </h5>
                                        <p class="card-text">
                                            Actually i am looking for construction equipment manufacturer. pay loader, motor
                                            grader, beam lifter, forklift, excavator etc.
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
                                            <span class="leadesTitleFlag"><country-flag country="bd" size="normal" /></span>Heavy
                                            duty vehicles to import Bangladesh
                                        </h5>
                                        <p class="card-text">
                                            Actually i am looking for construction equipment manufacturer. pay loader, motor
                                            grader, beam lifter, forklift, excavator etc.
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
                                            <span class="leadesTitleFlag"><country-flag country="bd" size="normal" /></span>Heavy
                                            duty vehicles to import Bangladesh
                                        </h5>
                                        <p class="card-text">
                                            Actually i am looking for construction equipment manufacturer. pay loader, motor
                                            grader, beam lifter, forklift, excavator etc.
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
                                            <span class="leadesTitleFlag"><country-flag country="bd" size="normal" /></span>Heavy
                                            duty vehicles to import Bangladesh
                                        </h5>
                                        <p class="card-text">
                                            Actually i am looking for construction equipment manufacturer. pay loader, motor
                                            grader, beam lifter, forklift, excavator etc.
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
                                            <span class="leadesTitleFlag"><country-flag country="bd" size="normal" /></span>Heavy
                                            duty vehicles to import Bangladesh
                                        </h5>
                                        <p class="card-text">
                                            Actually i am looking for construction equipment manufacturer. pay loader, motor
                                            grader, beam lifter, forklift, excavator etc.
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
                                            <span class="leadesTitleFlag"><country-flag country="bd" size="normal" /></span>Heavy
                                            duty vehicles to import Bangladesh
                                        </h5>
                                        <p class="card-text">
                                            Actually i am looking for construction equipment manufacturer. pay loader, motor
                                            grader, beam lifter, forklift, excavator etc.
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
                        <router-link to="/companies">View More Leades</router-link>
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
                    <div class="filterTag">
                        <span class="filterTagActive">All</span>
                        <span>Buy Request</span>
                        <span>Sell Offer</span>
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
                                <option selected>All</option>
                                <option value="1">Textile Products One</option>
                                <option value="2">Textile Products Two</option>
                                <option value="3">Textile Products Three</option>
                            </select>
                            <label class="field-placeholder" for="inputName">Category</label>
                        </div>
                        <hr />
                        <div class="field-container subcategory">
                            <select class="form-select field-input" aria-label="Category">
                                <option selected>All</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Japonase">Japonase</option>
                                <option value="United Cties">United Cties</option>
                            </select>
                            <label class="field-placeholder" for="inputName">Country</label>
                        </div>
                        <hr />
                        <div class="field-container">
                            <select class="form-select field-input" aria-label="Category">
                                <option selected>All</option>
                                <option value="Exporter">Exporter</option>
                                <option value="Manufacturer">Manufacturer</option>
                                <option value="Importer">Importer</option>
                            </select>
                            <label class="field-placeholder" for="inputName">Business Segments</label>
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
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    position: relative;
    width: 100%;
}
.leadesList-companies {
    font-family: "DM Sans", sans-serif;
    position: relative;
    margin-top: 28px;
    width: 90%;
}
.leadesListFlex {
    display: flex;
    justify-content: left;
}
.leadesList-companies h1 {
    font-weight: 400, regular;
    font-style: normal;
    font-size: 28px;
    line-height: 36px;
    position: relative;
    display: flex;
    left: 0;
    flex-direction: row;
}
.leadesListTitle {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
}

.leadesListTitle div {
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
    font-family: "Dm Sans", sans-serif;
    text-align: left;
    position: relative;
    margin-bottom: 25px;
    border: 1px solid rgba(116, 119, 127, 0.12);
    border-radius: 28px;
    padding: 6px 6px;
    box-sizing: border-box;
    height: auto;
}
.leades div {
    border: none;
}
.leades .card-body {
    padding: 0;
    height: auto;
    max-height: 400px;
}
.leades .card-title {
    color: #005eb5;
    font-weight: 500, medium;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
    padding: 8px 8px;
}
.leades .card-text {
    font-weight: 400, Regular;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    padding: 8px 8px;
}

.leades .leadesTags {
    position: relative;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: left;
}
.leades .leadesTags span {
    border: 1px solid rgba(116, 119, 127, 0.16);
    border-radius: 8px;
    padding: 6px 16px;
    box-sizing: border-box;
    margin: 8px 8px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #43474f;
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
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
.leadesTitleFlag {
    font-size: 25px;
    margin-right: 16px;
}
.leadesStatus {
    display: flex;
    align-items: center;
    justify-content: left;
    flex-wrap: wrap;
    margin-bottom: 30px;
}
.leadesStatus div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    margin-top: 10px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    font-feature-settings: "liga" off;
    color: #1b1b1d;
    flex: none;
    order: 1;
    flex-grow: 0;
}
.leadesStatus span {
    margin: 0px 8px;
}
.mobilLeadesDate {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0.1px;
    font-feature-settings: "liga" off;
    color: #5d5e61;
    display: none;
}
.filterTag {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-height: 40px;
}
.filterTag span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    position: static;
    height: 32px;
    left: 62px;
    top: 0px;
    background: #ffffff;
    border: 1px solid #74777f;
    box-sizing: border-box;
    border-radius: 8px;
    flex: none;
    order: 1;
    flex-grow: 0;
    cursor: pointer;
}
.filterTagActive {
    background-color: #d9e3f8 !important;
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
    .filterTag {
        margin-top: 25px;
    }
    .leades {
        padding: 6px 0px;
    }
    .leades .leades .leadesTags span {
        font-size: 11px;
    }
    .leadesListTitle div {
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
@media only screen and (max-width: 767px) {
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
}
@media only screen and (max-width: 480px) {
    .leadesList .leadesList-companies .leadesListTitle h1 {
        font-size: 22px;
        max-width: 115px;
        max-height: 40px;
        overflow: hidden;
    }
    .leadesList .leadesList-companies .leadesListTitle div {
        width: 120px;
        font-size: 12px;
    }
    .leadesList .leadesList-companies .leadesListTitle div span {
        font-size: 18px;
    }
    .mobilLeadesDate {
        display: block;
    }
    .leadesTitleFlag {
        margin-right: 0;
        float: right;
        font-size: 20px;
    }
}
@media only screen and (max-width: 320px) {
    .filterMobil {
        padding: 20px;
        max-width: 320px;
    }
    .leades {
        width: 300px;
    }
}
@media only screen and (max-width: 280px) {
    .leadesList .leadesList-companies .leadesListTitle h1 {
        font-size: 20px;
    }
    .leadesList .leadesList-companies .leadesListTitle div {
        width: 100px;
        height: 35px;
        font-size: 11px;
        padding: 6px;
    }
    .leades {
        width: 260px;
    }
    .filterMobil {
        width: 280px;
    }
}
</style>
