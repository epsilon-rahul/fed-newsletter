function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardAdminDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"card p-5 col-md-8\">\n        <h2 class=\"mb-5\">Adding New User</h2>\n        <div class=\"alert alert-success mb-3\" role=\"alert\" *ngIf=\"successMssg\">\n            User is Added\n        </div>\n\n        <div\n            class=\"alert alert-danger mb-3\"\n            role=\"alert\"\n            *ngIf=\"successMssg == false\"\n        >\n            {{errorMssg}}\n        </div>\n\n        <form [formGroup]=\"addUser\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group mb-4\">\n                <label>Name<sup>*</sup>:</label>\n                <input\n                    type=\"text\"\n                    formControlName=\"name\"\n                    class=\"form-control mb-0\"\n                    placeholder=\"Name\"\n                />\n                <small\n                    *ngIf=\"f.name.errors && (f.name.dirty || f.name.touched)\"\n                >\n                    <div *ngIf=\"f.name.errors.required\">\n                        Name is required\n                    </div>\n                </small>\n            </div>\n            <div class=\"form-group mb-4\">\n                <label>Email<sup>*</sup>:</label>\n                <input\n                    type=\"email\"\n                    formControlName=\"email\"\n                    class=\"form-control mb-0\"\n                    placeholder=\"email\"\n                />\n                <small\n                    *ngIf=\"f.email.errors && (f.email.dirty || f.email.touched)\"\n                >\n                    <div *ngIf=\"f.email.errors.required\">\n                        Email is required\n                    </div>\n                    <div *ngIf=\"f.email.errors.email\">\n                        Email must be a valid email address\n                    </div>\n                </small>\n            </div>\n            <div class=\"form-group mb-4\">\n                <label>Password<sup>*</sup>:</label>\n                <input\n                    type=\"password\"\n                    formControlName=\"password\"\n                    class=\"form-control mb-0\"\n                    placeholder=\"Password\"\n                />\n                <small\n                    *ngIf=\"f.password.errors && (f.password.dirty || f.password.touched)\"\n                >\n                    <div *ngIf=\"f.password.errors.required\">\n                        Password is required\n                    </div>\n                    <div *ngIf=\"f.password.errors.minlength\">\n                        Password must be at least 6 characters\n                    </div>\n                </small>\n            </div>\n            <div class=\"form-group mb-4\">\n                <label>Confirm Password<sup>*</sup>:</label>\n                <input\n                    type=\"password\"\n                    formControlName=\"confirmPassword\"\n                    class=\"form-control mb-0\"\n                    placeholder=\"Confirm Password\"\n                />\n                <small\n                    *ngIf=\"f.confirmPassword.errors && (f.confirmPassword.dirty || f.confirmPassword.touched)\"\n                >\n                    <div *ngIf=\"f.confirmPassword.errors.required\">\n                        Confirm Password is required\n                    </div>\n                    <div *ngIf=\"f.confirmPassword.errors.mustMatch\">\n                        Passwords must match\n                    </div>\n                </small>\n            </div>\n            <div class=\"form-group text-center\">\n                <button class=\"btn btn-primary\" type=\"submit\">Add</button>\n            </div>\n        </form>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-main></app-main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n\n    <ngb-carousel class=\"mb-5\">\n        <ng-template ngbSlide>\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">News title 1</h5>\n                            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                            <a href=\"#\" class=\"btn btn-primary\">Link</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">News title 4</h5>\n                            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                            <a href=\"#\" class=\"btn btn-primary\">Link</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">News title 5</h5>\n                            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                            <a href=\"#\" class=\"btn btn-primary\">Link</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template ngbSlide>\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">News title 6</h5>\n                            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                            <a href=\"#\" class=\"btn btn-primary\">Link</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">News title 2</h5>\n                            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                            <a href=\"#\" class=\"btn btn-primary\">Link</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">News title 2</h5>\n                            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                            <a href=\"#\" class=\"btn btn-primary\">Link</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template ngbSlide>\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">News title 1</h5>\n                            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                            <a href=\"#\" class=\"btn btn-primary\">Link</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">News title 2</h5>\n                            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                            <a href=\"#\" class=\"btn btn-primary\">Link</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">News title 2</h5>\n                            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                            <a href=\"#\" class=\"btn btn-primary\">Link</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ng-template>\n    </ngb-carousel>\n\n    <div class=\"row\">\n        <div class=\"col-6\">\n            <ngx-charts-area-chart-stacked [view]=\"view\" [scheme]=\"colorScheme\" [legend]=\"legend\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxis]=\"xAxis\" [yAxis]=\"yAxis\" [xAxisLabel]=\"xAxisLabel\" [yAxisLabel]=\"yAxisLabel\" [timeline]=\"timeline\"\n                [results]=\"multi\" (select)=\"onSelect($event)\">\n            </ngx-charts-area-chart-stacked>\n        </div>\n        <div class=\"col-6\">\n            <ngx-charts-gauge [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"single\" [legend]=\"legend\" (select)=\"onSelect($event)\">\n            </ngx-charts-gauge>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-3\">\n            <div class=\"row align-items-center\">\n                <div class=\"col\">\n                    <b>Sorty By:</b>\n                </div>\n                <div class=\"col-8 p-0\">\n                    <select class=\"form-control\" (change)=\"change($event.target.value)\">\n            <option>Opportunity Status</option>\n            <option>Vertical Domain</option>\n          </select>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"mt-5\">\n        <ngx-charts-number-card [scheme]=\"colorScheme\" [results]=\"single\" [cardColor]=\"cardColor\" (select)=\"onSelect($event)\" [innerPadding]=\"10\">\n        </ngx-charts-number-card>\n        <div class=\"clearfix\"></div>\n    </div>\n\n    <div class=\"clearfix\"></div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/even/event/event.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/even/event/event.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEvenEventEventComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"card p-5 col-md-8\">\n    <form>\n      <div class=\"form-group\">\n        <label>Event Name:</label>\n        <input class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label>Event description:</label>\n        <textarea class=\"form-control\" row=\"5\"></textarea>\n      </div>\n      <div class=\"form-group text-right mt-5\">\n        <button class=\"btn btn-primary btn-lg\" type=\"submit\">Add Event</button>\n      </div>\n    </form>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login/login.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login/login.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"login-layout\">\n  <div class=\"login-wrapper\">\n    <h3 class=\"text-center mb-5\">Sign In</h3>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <input type=\"text\" formControlName=\"email\" class=\"form-control\" placeholder=\"email\" />\n\n        <small class=\"errorText\"\n          *ngIf=\"loginForm.controls.email.errors && ( loginForm.controls.email.dirty || loginForm.controls.email.touched)\">\n          <div *ngIf=\"loginForm.controls.email.errors.required\">\n            email is required.\n          </div>\n          <div *ngIf=\"loginForm.controls.email.errors.email\">\n            email username id.\n          </div>\n        </small>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\" />\n        <small class=\"errorText\"\n          *ngIf=\"loginForm.controls.password.errors && (loginForm.controls.password.dirty || loginForm.controls.password.touched)\">\n          <div *ngIf=\"loginForm.controls.password.errors.required\">\n            Password is required.\n          </div>\n          <div *ngIf=\"loginForm.controls.password.errors.password\">\n            Password username id.\n          </div>\n        </small>\n      </div>\n\n      <div class=\"row my-5 d-flex align-items-center\">\n        <div class=\"col\">\n          <div class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\" />\n            <label class=\"custom-control-label\" for=\"customCheck1\">Check this custom checkbox</label>\n          </div>\n        </div>\n        <div class=\"col text-right\">\n          <a href=\"#\">Forgot Password ?</a>\n        </div>\n      </div>\n      <div class=\"form-group text-center\">\n        <button class=\"btn btn-primary\" type=\"submit\">Sign In</button>\n      </div>\n    </form>\n    <div class=\"login-account-link text-center mt-5\">\n      <p>Don't have an account yet?<a href=\"#\" class=\"ml-2\">Sign Up!</a></p>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main/main.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main/main.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMainMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n  <app-header *ngIf=\"auth.isLoggednIn()\"></app-header>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/project/add/add.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/add/add.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectAddAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"card p-5 col-md-8\">\n        <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"successMssg\">\n            New Opportunity is Added\n        </div>\n        <form [formGroup]=\"addForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\">\n                <label>Client Name<sup>*</sup>:</label>\n                <div class=\"ng-autocomplete\">\n                    <ng-autocomplete\n                        [data]=\"lists\"\n                        [searchKeyword]=\"clientkeyword\"\n                        placeHolder=\"Client Name\"\n                        historyIdentifier=\"lists\"\n                        [itemTemplate]=\"clintTemplate\"\n                        [notFoundTemplate]=\"notFoundTemplate\"\n                        formControlName=\"clientName\"\n                    >\n                    </ng-autocomplete>\n\n                    <ng-template #clintTemplate let-item>\n                        <a [innerHTML]=\"item.clientName\"></a>\n                    </ng-template>\n\n                    <ng-template #notFoundTemplate let-notFound>\n                        <div [innerHTML]=\"notFound\"></div>\n                    </ng-template>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Opportunity Name<sup>*</sup>:</label>\n                <div class=\"ng-autocomplete\">\n                    <ng-autocomplete\n                        [data]=\"lists\"\n                        [searchKeyword]=\"oppkeyword\"\n                        placeHolder=\"Opportunity Name\"\n                        historyIdentifier=\"lists\"\n                        [itemTemplate]=\"oppNameTemplate\"\n                        [notFoundTemplate]=\"notFoundTemplate\"\n                        formControlName=\"oppName\"\n                    >\n                    </ng-autocomplete>\n\n                    <ng-template #oppNameTemplate let-item>\n                        <a [innerHTML]=\"item.oppName\"></a>\n                    </ng-template>\n\n                    <ng-template #notFoundTemplate let-notFound>\n                        <div [innerHTML]=\"notFound\"></div>\n                    </ng-template>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Deal Value:</label>\n                <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        aria-label=\"Amount (to the nearest dollar)\"\n                        formControlName=\"dealValue\"\n                    />\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label>DX Value:</label>\n                <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">$</span>\n                    </div>\n                    <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        aria-label=\"Amount (to the nearest dollar)\"\n                        formControlName=\"dxValue\"\n                    />\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Opportunity Status<sup>*</sup>:</label>\n                <select class=\"form-control\" formControlName=\"oppStatus\">\n                    <option disabled>Select option</option>\n                    <option>RFP Requested</option>\n                    <option>RFP In Progress</option>\n                    <option>Proposal Submitted</option>\n                    <option>Proposal Under Review</option>\n                    <option>SOW Under Review</option>\n                    <option>SOW</option>\n                    <option>Verbal Approval</option>\n                    <option>Won</option>\n                    <option>Business Development</option>\n                    <option>Proposal not shortlisted</option>\n                    <option>Closed</option>\n                </select>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Vertical/Domain<sup>*</sup>:</label>\n                <select class=\"form-control\" formControlName=\"domain\">\n                    <option disabled>Select option</option>\n                    <option>Financial</option>\n                    <option>Retail</option>\n                    <option>Media</option>\n                    <option>Healthcare</option>\n                    <option>CPG</option>\n                    <option>Travel & Hospitality</option>\n                    <option>Telecom</option>\n                </select>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div class=\"form-group\">\n                        <label>Probility:</label>\n                        <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            formControlName=\"probility\"\n                        />\n                    </div>\n                </div>\n                <div class=\"col\">\n                    <div class=\"form-group\">\n                        <label>Deal Close Date <sup>*</sup>:</label>\n                        <div class=\"form-group\">\n                            <div class=\"input-group\">\n                                <input\n                                    class=\"form-control\"\n                                    formControlName=\"dealCloseDate\"\n                                    placeholder=\"yyyy-mm-dd\"\n                                    name=\"dcd\"\n                                    ngbDatepicker\n                                    #d=\"ngbDatepicker\"\n                                />\n                                <div class=\"input-group-append\">\n                                    <button\n                                        class=\"btn btn-outline-secondary calendar\"\n                                        (click)=\"d.toggle()\"\n                                        type=\"button\"\n                                    >\n                                        <i class=\"fa fa-calendar\"></i>\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col\">\n                    <div class=\"form-group\">\n                        <label>Est. Start Date <sup>*</sup>:</label>\n                        <div class=\"form-group\">\n                            <div class=\"input-group\">\n                                <input\n                                    class=\"form-control\"\n                                    formControlName=\"estStartDate\"\n                                    placeholder=\"yyyy-mm-dd\"\n                                    name=\"dp\"\n                                    ngbDatepicker\n                                    #dg=\"ngbDatepicker\"\n                                />\n                                <div class=\"input-group-append\">\n                                    <button\n                                        class=\"btn btn-outline-secondary calendar\"\n                                        (click)=\"dg.toggle()\"\n                                        type=\"button\"\n                                    >\n                                        <i class=\"fa fa-calendar\"></i>\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Salesforce URL:</label>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    formControlName=\"salesForceURL\"\n                />\n            </div>\n\n            <div class=\"form-group\">\n                <label>DX Pursuit Lead<sup>*</sup>:</label>\n                <div class=\"ng-autocomplete\">\n                    <ng-autocomplete\n                        [data]=\"dxpList\"\n                        [searchKeyword]=\"dxpkeyword\"\n                        placeHolder=\"DX Pursuit Lead\"\n                        historyIdentifier=\"dxpList\"\n                        [itemTemplate]=\"dxpTemplate\"\n                        [notFoundTemplate]=\"notFoundTemplate\"\n                        formControlName=\"dxPursuitLead\"\n                    >\n                    </ng-autocomplete>\n\n                    <ng-template #dxpTemplate let-item>\n                        <a [innerHTML]=\"item.name\"></a>\n                    </ng-template>\n\n                    <ng-template #notFoundTemplate let-notFound>\n                        <div [innerHTML]=\"notFound\"></div>\n                    </ng-template>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Sales Representative<sup>*</sup>:</label>\n                <div class=\"ng-autocomplete\">\n                    <ng-autocomplete\n                        [data]=\"lists\"\n                        [searchKeyword]=\"srkeyword\"\n                        placeHolder=\"Sales Representative\"\n                        historyIdentifier=\"lists\"\n                        [itemTemplate]=\"srTemplate\"\n                        [notFoundTemplate]=\"notFoundTemplate\"\n                        formControlName=\"salesRepresentative\"\n                    >\n                    </ng-autocomplete>\n\n                    <ng-template #srTemplate let-item>\n                        <a [innerHTML]=\"item.salesRepresentative\"></a>\n                    </ng-template>\n\n                    <ng-template #notFoundTemplate let-notFound>\n                        <div [innerHTML]=\"notFound\"></div>\n                    </ng-template>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Status Update:</label>\n                <textarea\n                    class=\"form-control\"\n                    formControlName=\"statusUpdate\"\n                    row=\"5\"\n                ></textarea>\n            </div>\n\n            <div class=\"form-group text-right mt-5\">\n                <button class=\"btn btn-primary btn-lg\" type=\"submit\">\n                    Add\n                </button>\n            </div>\n        </form>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/project/status/status.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/status/status.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectStatusStatusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"alert alert-dark p-3\" role=\"alert\">\n    Do you have update for your Projects?\n    <div class=\"btn btn-danger ml-3\" (click)=\"noForm()\">No</div>\n    <div class=\"btn btn-primary ml-3\" (click)=\"yesForm()\">Yes</div>\n  </div>\n\n  <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"successMssg\">\n    Status Updated\n  </div>\n\n  <div *ngIf=\"layoutShow == true\">\n\n    <div class=\"container\">\n      <div class=\"card p-5 col-md-8\">\n        <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label>Client Name:</label>\n            <select class=\"form-control\" (change)=\"populateValue()\" formControlName=\"clientName\">\n              <option value=\"\" disabled>Select the project</option>\n              <option *ngFor=\"let data of datas\" [ngValue]=\"data\">{{ data.clientName }}</option>\n            </select>\n          </div>\n\n          <div class=\"form-group\">\n            <label>Opportunity Name:</label>\n            <input type=\"text\" formControlName=\"oppName\" class=\"form-control\">\n          </div>\n\n          <div class=\"form-group\">\n            <label>Deal Value:</label>\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">$</span>\n              </div>\n              <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\"\n                formControlName=\"dealValue\">\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label>DX Value:</label>\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">$</span>\n              </div>\n              <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\"\n                formControlName=\"dxValue\">\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label>Opportunity Status:</label>\n            <select class=\"form-control\" formControlName=\"oppStatus\">\n              <option disabled>Select option</option>\n              <option>RFP Requested</option>\n              <option>RFP In Progress</option>\n              <option>Proposal Submitted</option>\n              <option>Proposal Under Review</option>\n              <option>SOW Under Review</option>\n              <option>SOW</option>\n              <option>Verbal Approval</option>\n              <option>Won</option>\n              <option>Business Development</option>\n              <option>Proposal not shortlisted</option>\n              <option>Closed</option>\n            </select>\n          </div>\n\n          <div class=\"form-group\">\n            <label>Vertical/Domain:</label>\n            <select class=\"form-control\" formControlName=\"domain\">\n              <option disabled>Select option</option>\n              <option>Financial</option>\n              <option>Retail</option>\n              <option>Media</option>\n              <option>Healthcare</option>\n              <option>CPG</option>\n              <option>Travel & Hospitality</option>\n              <option>Telecom</option>\n            </select>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label>Probility:</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"probility\">\n              </div>\n            </div>\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label>Deal Close Date <sup>*</sup>:</label>\n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <input class=\"form-control\" formControlName=\"dealCloseDate\" placeholder=\"yyyy-mm-dd\" name=\"dcd\"\n                      ngbDatepicker #d=\"ngbDatepicker\">\n                    <div class=\"input-group-append\">\n                      <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\n                        <i class=\"fa fa-calendar\"></i>\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label>Est. Start Date <sup>*</sup>:</label>\n                <div class=\"form-group\">\n                  <div class=\"input-group\">\n                    <input class=\"form-control\" formControlName=\"estStartDate\" placeholder=\"yyyy-mm-dd\" name=\"dp\"\n                      ngbDatepicker #dg=\"ngbDatepicker\">\n                    <div class=\"input-group-append\">\n                      <button class=\"btn btn-outline-secondary calendar\" (click)=\"dg.toggle()\" type=\"button\">\n                        <i class=\"fa fa-calendar\"></i>\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label>Salesforce URL:</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"salesForceURL\">\n          </div>\n\n          <div class=\"form-group\">\n            <label>DX Pursuit Lead:</label>\n            <div class=\"ng-autocomplete\">\n              <ng-autocomplete [data]=\"dxpList\" [searchKeyword]=\"dxpkeyword\" placeHolder=\"DX Pursuit Lead\"\n                historyIdentifier=\"dxpList\" [itemTemplate]=\"dxpTemplate\" [notFoundTemplate]=\"notFoundTemplate\"\n                formControlName=\"dxPursuitLead\">\n              </ng-autocomplete>\n\n              <ng-template #dxpTemplate let-item>\n                <a [innerHTML]=\"item.name\"></a>\n              </ng-template>\n\n              <ng-template #notFoundTemplate let-notFound>\n                <div [innerHTML]=\"notFound\"></div>\n              </ng-template>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label>Sales Representative:</label>\n            <div class=\"ng-autocomplete\">\n              <ng-autocomplete [data]=\"lists\" [searchKeyword]=\"srkeyword\" placeHolder=\"Sales Representative\"\n                historyIdentifier=\"lists\" [itemTemplate]=\"srTemplate\" [notFoundTemplate]=\"notFoundTemplate\"\n                formControlName=\"salesRepresentative\">\n              </ng-autocomplete>\n\n              <ng-template #srTemplate let-item>\n                <a [innerHTML]=\"item.salesRepresentative\"></a>\n              </ng-template>\n\n              <ng-template #notFoundTemplate let-notFound>\n                <div [innerHTML]=\"notFound\"></div>\n              </ng-template>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label>Status Update:</label>\n            <textarea class=\"form-control\" formControlName=\"statusUpdate\" row=\"5\"></textarea>\n          </div>\n\n          <div class=\"form-group text-right mt-5\">\n            <button class=\"btn btn-primary btn-lg\" type=\"submit\">Update</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"layoutShow == false\">\n    <div class=\"container\">\n      <div class=\"card p-5 col-md-8\">\n        <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label>Client Name:</label>\n            <select class=\"form-control\" (change)=\"populateValue()\" formControlName=\"clientName\">\n              <option value=\"\" disabled>Select the project</option>\n              <option *ngFor=\"let data of datas\" [ngValue]=\"data\">{{ data.clientName }}</option>\n            </select>\n          </div>\n\n          <div class=\"form-group\">\n            <label>Opportunity Name:</label>\n            <input type=\"text\" formControlName=\"oppName\" class=\"form-control\">\n          </div>\n\n\n          <div class=\"form-group\">\n            <label>Status Update:</label>\n            <textarea class=\"form-control\" formControlName=\"statusUpdate\" row=\"5\"></textarea>\n          </div>\n\n          <div class=\"form-group text-right mt-5\">\n            <button class=\"btn btn-primary btn-lg\" type=\"submit\">Update</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/project/view-all/view-all.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/view-all/view-all.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectViewAllViewAllComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"card-columns\">\n    <div class=\"card\" *ngFor=\"let list of lists\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Client Name: {{list.clientName}}</h5>\n        <h6 class=\"card-subtitle mb-2 text-muted\">Opportunity Name: {{list.oppName}} </h6>\n        <a class=\"card-link\">Deal Value: {{list.dealValue}}</a>\n        <a [routerLink]=\"['/projects/deatil',list._id]\" class=\"card-link text-right\">View More</a>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/project/view-detail/view-detail.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/view-detail/view-detail.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectViewDetailViewDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <div class=\"display-4\">{{detail?.clientName}}</div>\n    </div>\n    <div class=\"card-body\">\n      <h5>{{detail?.oppName}}</h5>\n      <div class=\"row mt-3\">\n        <div class=\"col\">\n          <span class=\"card-link\">Deal Value</span> : {{detail?.dealValue}}\n        </div>\n        <div class=\"col\">\n          <span class=\"card-link\">DX Value</span> : {{detail?.dxValue}}\n        </div>\n        <div class=\"col\">\n          <span class=\"card-link\">Opportunity Status</span> : {{detail?.oppStatus}}\n        </div>\n        <div class=\"col\">\n          <span class=\"card-link\">Vertical/Domain</span> : {{detail?.domain}}\n        </div>\n      </div>\n      <div class=\"row mb-3 mt-3\">\n        <div class=\"col\">\n          <span class=\"card-link\">Probility</span> : {{detail?.probility}}\n        </div>\n        <div class=\"col\">\n          <span class=\"card-link\">DX Pursuit Lead</span> : {{detail?.dxPursuitLead[0].name}}\n        </div>\n        <div class=\"col\">\n          <span class=\"card-link\">Sales Representative</span> : {{detail?.salesRepresentative}}\n        </div>\n      </div>\n\n\n\n      <div class=\"timeline\">\n        <div class=\"item\" *ngFor=\"let hist of detail?.history\">\n          <div class=\"date\">\n            {{ hist.updateDate | date:'MMM d, y' }}\n            <small class=\"text-muted btn-block\">{{ hist.updateDate | date:'h:mm a' }}</small>\n          </div>\n          <div class=\"circle\">\n            <i class=\"fa fa-genderless\"></i>\n          </div>\n          <div class=\"content\">\n\n            <div class=\"row\">\n              <div class=\"col\">\n                <dt>Deal Value</dt>\n                <dl>{{hist.dealValue}}</dl>\n              </div>\n              <div class=\"col\">\n                <dt>DX Pursuit Lead</dt>\n                <dl>{{hist.dxPursuitLead[0].name}}</dl>\n              </div>\n              <div class=\"col\">\n                <dt>Probility</dt>\n                <dl>{{hist.probility}}</dl>\n              </div>\n              <div class=\"col\">\n                <dt>Est. Start Date</dt>\n                <dl>{{hist.estStartDate.year}}/{{hist.estStartDate.month}}/{{hist.estStartDate.day}}</dl>\n              </div>\n            </div>\n            <blockquote class=\"blockquote\">\n              <p><b>Status Update:</b> {{hist.statusUpdate}}</p>\n            </blockquote>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search/result/result.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/result/result.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchResultResultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div *ngIf=\"!message.length\">No List for the Current Data</div>\n  <app-view-all [lists]=\"message\"></app-view-all>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"p-5 text-center\">\n  &copy; 2020 All Right Reserved. Epislon.\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <h1>\n                    <a routerLink=\"/dashboard\"\n                        ><img\n                            src=\"../../../assets/logo.svg\"\n                            alt=\"\"\n                            class=\"logo-img\"\n                    /></a>\n                </h1>\n            </div>\n            <div class=\"col text-right\">\n                <div class=\"btn-group\" dropdown>\n                    <div dropdownToggle class=\"profile-pic\">\n                        <img src=\"../../../assets/300_21.jpg\" alt=\"\" />\n                    </div>\n                    <div\n                        id=\"dropdown-basic\"\n                        *dropdownMenu\n                        class=\"dropdown-menu\"\n                        role=\"menu\"\n                        aria-labelledby=\"button-basic\"\n                    >\n                        <div class=\"profile-dropdown-detail\">\n                            <div class=\"profile-avtar\">\n                                <img src=\"../../../assets/300_21.jpg\" alt=\"\" />\n                            </div>\n                            <div class=\"profile-drop-name\">\n                                {{authSerive.getToken()}}\n                            </div>\n                            <div class=\"sign-out\">\n                                <span (click)=\"signOut()\">Sign Out</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"header-bottom mt-5 navbar navbar-dark bg-dark\">\n        <div class=\"container\">\n            <ul>\n                <li routerLinkActive=\"active\">\n                    <a routerLink=\"/admin\">Add New User</a>\n                </li>\n                <li routerLinkActive=\"active\">\n                    <a routerLink=\"/statupdate\">Status Update</a>\n                </li>\n                <li routerLinkActive=\"active\">\n                    <a routerLink=\"/add\">Add New</a>\n                </li>\n                <li routerLinkActive=\"active\">\n                    <a routerLink=\"/projects\">Opportunity</a>\n                </li>\n                <li routerLinkActive=\"active\">\n                    <a routerLink=\"/events\">Upcoming Event</a>\n                </li>\n            </ul>\n            <form\n                class=\"form-inline\"\n                [formGroup]=\"searchForm\"\n                (ngSubmit)=\"onSubmit()\"\n            >\n                <input\n                    class=\"form-control mr-sm-2\"\n                    type=\"search\"\n                    placeholder=\"ClientName\"\n                    aria-label=\"Search\"\n                    formControlName=\"searchText\"\n                />\n                <button\n                    class=\"btn btn-outline-success my-2 my-sm-0\"\n                    type=\"submit\"\n                >\n                    Search\n                </button>\n            </form>\n        </div>\n    </div>\n</header>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <aside class=\"sidebar col-md-2 px-0\">\n  <h3>SideBar</h3>\n  <ul>\n    <li *ngFor=\"let menu of menus; let i = index\" [class]=\"menu.active\">\n      <a href=\"#\" (click)=\"toggle(i)\">\n        <fa-icon [icon]=\"menu.iconName\" class=\"mr-2\"></fa-icon> {{menu.name}} <fa-icon [icon]=\"menu.iconLeft\"\n          class=\"subIcon\">\n        </fa-icon>\n      </a>\n      <ul *ngIf=\"menu.submenu\">\n        <li *ngFor=\"let submenu of menu.submenu; let j = index\"><a href=\"#\">{{submenu.name}}</a></li>\n      </ul>\n    </li>\n  </ul>\n</aside> -->\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/admin/admin-dashboard/admin-dashboard.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardAdminDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/admin-dashboard.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.ts ***!
    \********************************************************************/

  /*! exports provided: AdminDashboardComponent */

  /***/
  function srcAppAdminAdminDashboardAdminDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function () {
      return AdminDashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_helpers_custom_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/_helpers/custom-validator */
    "./src/app/shared/_helpers/custom-validator.ts");
    /* harmony import */


    var _user_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../user-service.service */
    "./src/app/admin/user-service.service.ts");

    var AdminDashboardComponent =
    /*#__PURE__*/
    function () {
      function AdminDashboardComponent(fb, userService) {
        _classCallCheck(this, AdminDashboardComponent);

        this.fb = fb;
        this.userService = userService;
      }

      _createClass(AdminDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addUser = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }, {
            validator: Object(_shared_helpers_custom_validator__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])("password", "confirmPassword")
          });
        } // convenience getter for easy access to form fields

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          if (!this.addUser.invalid) {
            var data = {
              name: this.f.name.value,
              password: this.f.password.value,
              type: "user",
              email: this.f.email.value
            };
            this.userService.addUser(data).subscribe(function (resp) {
              console.log(resp);
              _this.successMssg = true;
            }, function (err) {
              console.log(err);
              _this.successMssg = false;
              _this.errorMssg = err;
            });
          }
        }
      }, {
        key: "onReset",
        value: function onReset() {
          this.addUser.reset();
        }
      }, {
        key: "f",
        get: function get() {
          return this.addUser.controls;
        }
      }]);

      return AdminDashboardComponent;
    }();

    AdminDashboardComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserServiceService"]
      }];
    };

    AdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-admin-dashboard",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-dashboard.component.scss */
      "./src/app/admin/admin-dashboard/admin-dashboard.component.scss")).default]
    })], AdminDashboardComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin-dashboard/admin-dashboard.component */
    "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["AdminDashboardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
    })], AdminModule);
    /***/
  },

  /***/
  "./src/app/admin/user-service.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/admin/user-service.service.ts ***!
    \***********************************************/

  /*! exports provided: UserServiceService */

  /***/
  function srcAppAdminUserServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserServiceService", function () {
      return UserServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/http/http.service */
    "./src/app/shared/http/http.service.ts");

    var UserServiceService =
    /*#__PURE__*/
    function () {
      function UserServiceService(httpClient) {
        _classCallCheck(this, UserServiceService);

        this.httpClient = httpClient;
      }

      _createClass(UserServiceService, [{
        key: "addUser",
        value: function addUser(data) {
          return this.httpClient.post("users", data, {});
        }
      }]);

      return UserServiceService;
    }();

    UserServiceService.ctorParameters = function () {
      return [{
        type: _shared_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }];
    };

    UserServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], UserServiceService);
    /***/
  },

  /***/
  "./src/app/app-guard/auth.guard.ts":
  /*!*****************************************!*\
    !*** ./src/app/app-guard/auth.guard.ts ***!
    \*****************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAppGuardAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../login/auth.service */
    "./src/app/login/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(auth, router) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.auth.isLoggednIn()) {
            var userRole = this.auth.getRole();

            if (route.data.role && route.data.role.indexOf(userRole) === -1) {
              this.router.navigate(['/login']);
              return false;
            }

            return true;
          } else {
            this.router.navigate(["/login"]);
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _login_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'newsletter';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _main_main_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./main/main.module */
    "./src/app/main/main.module.ts");
    /* harmony import */


    var _admin_admin_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./admin/admin.module */
    "./src/app/admin/admin.module.ts");
    /* harmony import */


    var _even_event_event_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./even/event/event.component */
    "./src/app/even/event/event.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _even_event_event_component__WEBPACK_IMPORTED_MODULE_8__["EventComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_7__["AdminModule"], _main_main_module__WEBPACK_IMPORTED_MODULE_6__["MainModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production
      })],
      providers: [// {provide : LocationStrategy , useClass: PathLocationStrategy}
      ],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ngx-charts-outer {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xccHVcXE9uZURyaXZlIC0gRXBzaWxvblxcbmV3c2xldHRlclxcbmV3c2xldHRlci9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxzQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIm1lZGlhLXRhZ1wiO1xyXG5cclxuLm5neC1jaGFydHMtb3V0ZXJ7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4iLCIubmd4LWNoYXJ0cy1vdXRlciB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./data */
    "./src/app/dashboard/data.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);

        this.view = [, 300]; // options

        this.legend = false;
        this.showLabels = true;
        this.animations = true;
        this.xAxis = true;
        this.yAxis = true;
        this.showYAxisLabel = false;
        this.showXAxisLabel = false;
        this.xAxisLabel = 'Profit';
        this.yAxisLabel = 'Project';
        this.timeline = true;
        this.colorScheme = {
          domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
        };
        this.cardColor = '#232837';
        Object.assign(this, {
          multi: _data__WEBPACK_IMPORTED_MODULE_2__["multi"]
        });
        this.first = [{
          "name": "RFP requested",
          "value": 8940000
        }, {
          "name": "RFP in-progress",
          "value": 5000000
        }, {
          "name": "Proposal submitted",
          "value": 7200000
        }, {
          "name": "Proposal under Review ",
          "value": 5200000
        }, {
          "name": "SOW under Review",
          "value": 7700000
        }, {
          "name": "SOW",
          "value": 4300000
        }, {
          "name": "Verbal approval",
          "value": 4300000
        }, {
          "name": "Won",
          "value": 4300000
        }, {
          "name": "Business Development",
          "value": 4300000
        }, {
          "name": "Proposal not shortlisted",
          "value": 4300000
        }, {
          "name": "Closed",
          "value": 4300000
        }];
        this.two = [{
          "name": "Financial",
          "value": 8940000
        }, {
          "name": "Retail",
          "value": 5000000
        }, {
          "name": "Media",
          "value": 7200000
        }, {
          "name": "Healthcare",
          "value": 5200000
        }, {
          "name": "Telecom",
          "value": 7700000
        }, {
          "name": "Travel & Hospitality",
          "value": 4300000
        }];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.single = this.first;
        }
      }, {
        key: "onSelect",
        value: function onSelect(event) {
          console.log(event);
        }
      }, {
        key: "change",
        value: function change(e) {
          console.log(e);

          if (e == 'Vertical Domain') {
            this.single = this.two;
          } else {
            this.single = this.first;
          }
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/dashboard/dashboard.component.scss")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/data.ts":
  /*!***********************************!*\
    !*** ./src/app/dashboard/data.ts ***!
    \***********************************/

  /*! exports provided: single, multi */

  /***/
  function srcAppDashboardDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "single", function () {
      return single;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "multi", function () {
      return multi;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var single = [{
      "name": "Germany",
      "value": 8940000
    }, {
      "name": "USA",
      "value": 5000000
    }, {
      "name": "France",
      "value": 7200000
    }, {
      "name": "UK",
      "value": 5200000
    }, {
      "name": "Italy",
      "value": 7700000
    }, {
      "name": "Spain",
      "value": 4300000
    }];
    var multi = [{
      "name": "Germany",
      "series": [{
        "name": "1990",
        "value": 62000000
      }, {
        "name": "2010",
        "value": 73000000
      }, {
        "name": "2011",
        "value": 89400000
      }]
    }, {
      "name": "USA",
      "series": [{
        "name": "1990",
        "value": 250000000
      }, {
        "name": "2010",
        "value": 309000000
      }, {
        "name": "2011",
        "value": 311000000
      }]
    }, {
      "name": "France",
      "series": [{
        "name": "1990",
        "value": 58000000
      }, {
        "name": "2010",
        "value": 50000020
      }, {
        "name": "2011",
        "value": 58000000
      }]
    }, {
      "name": "UK",
      "series": [{
        "name": "1990",
        "value": 57000000
      }, {
        "name": "2010",
        "value": 62000000
      }]
    }];
    /***/
  },

  /***/
  "./src/app/even/event/event.component.scss":
  /*!*************************************************!*\
    !*** ./src/app/even/event/event.component.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEvenEventEventComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW4vZXZlbnQvZXZlbnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/even/event/event.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/even/event/event.component.ts ***!
    \***********************************************/

  /*! exports provided: EventComponent */

  /***/
  function srcAppEvenEventEventComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventComponent", function () {
      return EventComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EventComponent =
    /*#__PURE__*/
    function () {
      function EventComponent() {
        _classCallCheck(this, EventComponent);
      }

      _createClass(EventComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EventComponent;
    }();

    EventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-event',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./event.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/even/event/event.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./event.component.scss */
      "./src/app/even/event/event.component.scss")).default]
    })], EventComponent);
    /***/
  },

  /***/
  "./src/app/login/auth.service.ts":
  /*!***************************************!*\
    !*** ./src/app/login/auth.service.ts ***!
    \***************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppLoginAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/http/http.service */
    "./src/app/shared/http/http.service.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(httpClient, myRoute) {
        _classCallCheck(this, AuthService);

        this.httpClient = httpClient;
        this.myRoute = myRoute;
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(data) {
          return this.httpClient.post('auth', data, {});
        }
      }, {
        key: "sendToken",
        value: function sendToken(token, status) {
          sessionStorage.setItem("LoggedInUser", token.email);
          sessionStorage.setItem("LoggedStatus", status);
          sessionStorage.setItem("LoggedInUserData", token.name);
          sessionStorage.setItem("x-auth-token", token.token);
          sessionStorage.setItem("LoggedInUserType", token.type);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return sessionStorage.getItem("LoggedInUserData");
        }
      }, {
        key: "getType",
        value: function getType() {
          return sessionStorage.getItem("LoggedInUserType");
        }
      }, {
        key: "isLoggednIn",
        value: function isLoggednIn() {
          return this.getToken() !== null;
        }
      }, {
        key: "getRole",
        value: function getRole() {
          return sessionStorage.getItem('LoggedInUserType');
        }
      }, {
        key: "logout",
        value: function logout() {
          sessionStorage.removeItem("LoggedInUser");
          sessionStorage.removeItem("LoggedInUserData");
          sessionStorage.removeItem("LoggedStatus");
          sessionStorage.removeItem("LoggedInUserType");
          sessionStorage.removeItem("x-auth-token");
          this.myRoute.navigate(["login"]);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _shared_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/login/login/login.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/login/login/login.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-layout {\n  background: url('bg-2.jpg') no-repeat;\n  height: 100vh;\n  -webkit-box-align: center !important;\n  align-items: center !important;\n  display: -webkit-box;\n  display: flex;\n}\n.login-layout .login-wrapper {\n  width: 100%;\n  max-width: 450px;\n  margin: auto;\n}\n@media (max-width: 576px) {\n  .login-layout .login-wrapper {\n    max-width: 90%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n.login-layout .login-wrapper a {\n  color: #74788d;\n}\n.login-layout .login-wrapper a:hover {\n  color: #5d78ff;\n}\n.login-layout .login-wrapper label {\n  color: #74788d;\n}\n.login-layout .login-wrapper button {\n  font-weight: 500;\n  font-size: \"Poppins\", sans-serif;\n  height: 50px;\n  padding-left: 2.75rem;\n  padding-right: 2.75rem;\n}\n.login-layout .login-account-link {\n  font-size: 1rem;\n  color: #74788d;\n  font-weight: 500;\n}\n.login-layout .login-account-link a {\n  color: #5d78ff;\n}\n.login-layout h3 {\n  font-size: 2rem;\n  color: #67666e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4vQzpcXFVzZXJzXFxwdVxcT25lRHJpdmUgLSBFcHNpbG9uXFxuZXdzbGV0dGVyXFxuZXdzbGV0dGVyL3NyY1xcYXBwXFxsb2dpblxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4vQzpcXFVzZXJzXFxwdVxcT25lRHJpdmUgLSBFcHNpbG9uXFxuZXdzbGV0dGVyXFxuZXdzbGV0dGVyL3NyY1xcc3R5bGluZ3NcXG1lZGlhLXRhZy5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi9DOlxcVXNlcnNcXHB1XFxPbmVEcml2ZSAtIEVwc2lsb25cXG5ld3NsZXR0ZXJcXG5ld3NsZXR0ZXIvc3JjXFxzdHlsaW5nc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRUUscUNBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDRSw4QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0hKO0FES0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDSEo7QUNHRTtFRkhBO0lBS0ksY0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUNESjtBQUNGO0FERUk7RUFDRSxjR2xCVTtBRmtCaEI7QURDTTtFQUNFLGNHbkJLO0FGb0JiO0FERUk7RUFDRSxjR3hCVTtBRndCaEI7QURFSTtFQUNFLGdCQUFBO0VBQ0EsZ0NHL0JRO0VIZ0NSLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDQU47QURLSTtFQUNJLGVHdENJO0VIdUNKLGNHdENRO0VIdUNSLGdCQUFBO0FDSFI7QURJUTtFQUNJLGNHeENDO0FGc0NiO0FES0k7RUFDSSxlQUFBO0VBQ0EsY0c1Q1E7QUZ5Q2hCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJtZWRpYS10YWdcIjtcclxuXHJcbi5sb2dpbi1sYXlvdXR7XHJcblxyXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2JnLTIuanBnJykgbm8tcmVwZWF0O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIC5sb2dpbi13cmFwcGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgQGluY2x1ZGUgc20ge1xyXG4gICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIGF7XHJcbiAgICAgIGNvbG9yOiAkZGVmYXVsdC1jb2xvcjtcclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBjb2xvcjogJGhvdmVyQ29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxhYmVse1xyXG4gICAgICBjb2xvcjogJGRlZmF1bHQtY29sb3I7XHJcbiAgICB9XHJcbiAgICBidXR0b257XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtZmFtaWx5O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMi43NXJlbTtcclxuICAgICAgcGFkZGluZy1yaWdodDogMi43NXJlbTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAgIC5sb2dpbi1hY2NvdW50LWxpbmt7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplO1xyXG4gICAgICAgIGNvbG9yOiAkZGVmYXVsdC1jb2xvcjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkaG92ZXJDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoM3tcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgY29sb3I6ICRoZWFkaW5nLWNvbG9yO1xyXG4gICAgfVxyXG59XHJcbiIsIi5sb2dpbi1sYXlvdXQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmctMi5qcGdcIikgbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMHZoO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5sb2dpbi1sYXlvdXQgLmxvZ2luLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5sb2dpbi1sYXlvdXQgLmxvZ2luLXdyYXBwZXIge1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxufVxuLmxvZ2luLWxheW91dCAubG9naW4td3JhcHBlciBhIHtcbiAgY29sb3I6ICM3NDc4OGQ7XG59XG4ubG9naW4tbGF5b3V0IC5sb2dpbi13cmFwcGVyIGE6aG92ZXIge1xuICBjb2xvcjogIzVkNzhmZjtcbn1cbi5sb2dpbi1sYXlvdXQgLmxvZ2luLXdyYXBwZXIgbGFiZWwge1xuICBjb2xvcjogIzc0Nzg4ZDtcbn1cbi5sb2dpbi1sYXlvdXQgLmxvZ2luLXdyYXBwZXIgYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIuNzVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDIuNzVyZW07XG59XG4ubG9naW4tbGF5b3V0IC5sb2dpbi1hY2NvdW50LWxpbmsge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjNzQ3ODhkO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmxvZ2luLWxheW91dCAubG9naW4tYWNjb3VudC1saW5rIGEge1xuICBjb2xvcjogIzVkNzhmZjtcbn1cbi5sb2dpbi1sYXlvdXQgaDMge1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiAjNjc2NjZlO1xufSIsIi8vIFNtYWxsIHRhYmxldHMgYW5kIGxhcmdlIHNtYXJ0cGhvbmVzIChsYW5kc2NhcGUgdmlldylcclxuJHNjcmVlbi1zbS1taW46IDU3NnB4O1xyXG5cclxuLy8gU21hbGwgdGFibGV0cyAocG9ydHJhaXQgdmlldylcclxuJHNjcmVlbi1tZC1taW46IDc2OHB4O1xyXG5cclxuLy8gVGFibGV0cyBhbmQgc21hbGwgZGVza3RvcHNcclxuJHNjcmVlbi1sZy1taW46IDk5MnB4O1xyXG5cclxuLy8gTGFyZ2UgdGFibGV0cyBhbmQgZGVza3RvcHNcclxuJHNjcmVlbi14bC1taW46IDEyMDBweDtcclxuXHJcbi8vIFNtYWxsIGRldmljZXNcclxuQG1peGluIHNtIHtcclxuICBAbWVkaWEgKG1heC13aWR0aDogI3skc2NyZWVuLXNtLW1pbn0pIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNZWRpdW0gZGV2aWNlc1xyXG5AbWl4aW4gbWQge1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRzY3JlZW4tbWQtbWlufSkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIExhcmdlIGRldmljZXNcclxuQG1peGluIGxnIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLWxnLW1pbn0pIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBFeHRyYSBsYXJnZSBkZXZpY2VzXHJcbkBtaXhpbiB4bCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi14bC1taW59KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iLCIkZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLFxyXG5zYW5zLXNlcmlmO1xyXG4kZm9udC1zaXplOiAxcmVtO1xyXG4kZGVmYXVsdC1jb2xvcjogIzc0Nzg4ZDtcclxuJGhvdmVyQ29sb3I6ICM1ZDc4ZmY7XHJcbiRoZWFkaW5nLWNvbG9yOiAjNjc2NjZlO1xyXG4kYnRuLXByaW1hcnktY29sb3I6ICM1ODY3ZGQ7XHJcbiRidG4tcHJpbWFyeS1jb2xvci1ob3ZlcjogIzM4NGFkNztcclxuJGVycm9yLXJlZDogI2ZkMzk3YTtcclxuJHNpZGViYXItY29sb3I6ICMxZTFlMmQ7XHJcbiRzaWRlYmFyLW1lbnUtY29sb3I6ICNhMmEzYjc7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJHNpZGViYXItbWVudS1jb2xvci1ob3ZlcjogIzFiMWIyODtcclxuJGJvZHktY29sb3I6ICNmMmYzZjg7XHJcbiRoZWFkZXItcHJvZmlsZTogI2Y5ZmFmZTtcclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/login/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/login/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/login/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(fb, authService, myRoute) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.authService = authService;
        this.myRoute = myRoute;
        this.loginForm = this.fb.group({
          email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });

        if (this.authService.isLoggednIn()) {
          this.myRoute.navigate(['dashboard']);
        }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          // TODO: Use EventEmitter with form value
          if (this.loginForm.invalid) {
            console.log('its coming here');
            return;
          } else {
            var data = {
              'email': this.loginForm.value.email,
              'password': this.loginForm.value.password
            };
            console.log('its coming erer');
            this.authService.login(data).subscribe(function (response) {
              _this2.authService.sendToken(response, response['status']);

              var getCurrent = function getCurrent() {
                return _this2.authService.getRole();
              };

              if (getCurrent() === "admin") {
                _this2.myRoute.navigate(['admin']);
              } else {
                _this2.myRoute.navigate(['dashboard']);
              }
            }, function (error) {
              console.log(error);
            });
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login/login.component.scss")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/main/main.module.ts":
  /*!*************************************!*\
    !*** ./src/app/main/main.module.ts ***!
    \*************************************/

  /*! exports provided: MainModule */

  /***/
  function srcAppMainMainModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainModule", function () {
      return MainModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _project_project_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../project/project.module */
    "./src/app/project/project.module.ts");
    /* harmony import */


    var _login_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../login/login/login.component */
    "./src/app/login/login/login.component.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main/main.component.ts");
    /* harmony import */


    var _search_search_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../search/search.module */
    "./src/app/search/search.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! angular-font-awesome */
    "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/fesm2015/swimlane-ngx-charts.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _route_route_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../route/route.module */
    "./src/app/route/route.module.ts");

    var MainModule = function MainModule() {
      _classCallCheck(this, MainModule);
    };

    MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"], _login_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__["AngularFontAwesomeModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_13__["NgxChartsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _route_route_module__WEBPACK_IMPORTED_MODULE_15__["RouteModule"], _project_project_module__WEBPACK_IMPORTED_MODULE_5__["ProjectModule"], _search_search_module__WEBPACK_IMPORTED_MODULE_8__["SearchModule"]],
      exports: [_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"], _login_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]]
    })], MainModule);
    /***/
  },

  /***/
  "./src/app/main/main/main.component.scss":
  /*!***********************************************!*\
    !*** ./src/app/main/main/main.component.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMainMainComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  position: relative;\n  padding-bottom: 100px;\n  min-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluL0M6XFxVc2Vyc1xccHVcXE9uZURyaXZlIC0gRXBzaWxvblxcbmV3c2xldHRlclxcbmV3c2xldHRlci9zcmNcXGFwcFxcbWFpblxcbWFpblxcbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcbiIsIi53cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/main/main.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/main/main/main.component.ts ***!
    \*********************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_login_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/login/auth.service */
    "./src/app/login/auth.service.ts");

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent(auth) {
        _classCallCheck(this, MainComponent);

        this.auth = auth;
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainComponent;
    }();

    MainComponent.ctorParameters = function () {
      return [{
        type: src_app_login_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main/main.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main.component.scss */
      "./src/app/main/main/main.component.scss")).default]
    })], MainComponent);
    /***/
  },

  /***/
  "./src/app/project/add/add.component.scss":
  /*!************************************************!*\
    !*** ./src/app/project/add/add.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectAddAddComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/project/add/add.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/project/add/add.component.ts ***!
    \**********************************************/

  /*! exports provided: AddComponent */

  /***/
  function srcAppProjectAddAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddComponent", function () {
      return AddComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../project.service */
    "./src/app/project/project.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AddComponent =
    /*#__PURE__*/
    function () {
      function AddComponent(projectService, fb) {
        _classCallCheck(this, AddComponent);

        this.projectService = projectService;
        this.fb = fb;
        this.clientkeyword = 'clientName';
        this.oppkeyword = 'oppName';
        this.dxpkeyword = 'name';
        this.srkeyword = 'salesRepresentative';
        this.addForm = this.fb.group({
          clientName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          oppName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          dealValue: [""],
          dxValue: [""],
          oppStatus: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          domain: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          probility: [""],
          dealCloseDate: [""],
          estStartDate: [""],
          salesForceURL: [""],
          dxPursuitLead: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          salesRepresentative: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          statusUpdate: [""]
        });
      }

      _createClass(AddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.projectService.list('').subscribe(function (resp) {
            _this3.lists = resp;
          }, function (err) {
            console.log(err);
          });
          this.projectService.leadList('').subscribe(function (resp) {
            _this3.dxpList = resp;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "selectEvent",
        value: function selectEvent(item) {
          console.log(this.addForm.clientName); // do something with selected item
        }
      }, {
        key: "onChangeSearch",
        value: function onChangeSearch(search) {// fetch remote data from here
          // And reassign the 'data' which is binded to 'data' property.
        }
      }, {
        key: "onFocused",
        value: function onFocused(e) {// do something
        }
      }, {
        key: "onTagsChanged",
        value: function onTagsChanged(event) {
          event.preventDefault();
          console.log(event);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this4 = this;

          console.log(this.addForm.invalid);

          if (this.addForm.invalid) {
            return;
          } else {
            console.log(this.addForm.value);
            var temp = this.addForm.value;
            temp.email = sessionStorage.getItem("LoggedInUser");

            if (this.addForm.value.clientName.clientName) {
              temp.clientName = this.addForm.value.clientName.clientName;
            }

            if (this.addForm.value.oppName.oppName) {
              temp.oppName = this.addForm.value.oppName.oppName;
            }

            if (this.addForm.value.dxPursuitLead.name) {
              temp.dxPursuitLead = this.addForm.value.dxPursuitLead.name;
            }

            if (this.addForm.value.salesRepresentative.salesRepresentative) {
              temp.salesRepresentative = this.addForm.value.salesRepresentative.salesRepresentative;
            }

            console.log(temp);
            this.projectService.add(this.addForm.value).subscribe(function (resp) {
              console.log(resp);
              _this4.successMssg = true; //this.addForm.reset();
            }, function (err) {
              console.log(err);
            });
          }
        }
      }]);

      return AddComponent;
    }();

    AddComponent.ctorParameters = function () {
      return [{
        type: _project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/project/add/add.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add.component.scss */
      "./src/app/project/add/add.component.scss")).default]
    })], AddComponent);
    /***/
  },

  /***/
  "./src/app/project/project.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/project/project.module.ts ***!
    \*******************************************/

  /*! exports provided: ProjectModule */

  /***/
  function srcAppProjectProjectModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectModule", function () {
      return ProjectModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add/add.component */
    "./src/app/project/add/add.component.ts");
    /* harmony import */


    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-ng-autocomplete */
    "./node_modules/angular-ng-autocomplete/fesm2015/angular-ng-autocomplete.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _status_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./status/status.component */
    "./src/app/project/status/status.component.ts");
    /* harmony import */


    var _view_all_view_all_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./view-all/view-all.component */
    "./src/app/project/view-all/view-all.component.ts");
    /* harmony import */


    var _view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./view-detail/view-detail.component */
    "./src/app/project/view-detail/view-detail.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_tags_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-tags-input */
    "./node_modules/ngx-tags-input/fesm2015/ngx-tags-input.js");

    var ProjectModule = function ProjectModule() {
      _classCallCheck(this, ProjectModule);
    };

    ProjectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"], _status_status_component__WEBPACK_IMPORTED_MODULE_7__["StatusComponent"], _view_all_view_all_component__WEBPACK_IMPORTED_MODULE_8__["ViewAllComponent"], _view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_9__["ViewDetailComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_5__["AutocompleteLibModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], ngx_tags_input__WEBPACK_IMPORTED_MODULE_11__["NgxTagsInputModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
      exports: [_add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"], _status_status_component__WEBPACK_IMPORTED_MODULE_7__["StatusComponent"], _view_all_view_all_component__WEBPACK_IMPORTED_MODULE_8__["ViewAllComponent"], _view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_9__["ViewDetailComponent"]]
    })], ProjectModule);
    /***/
  },

  /***/
  "./src/app/project/project.service.ts":
  /*!********************************************!*\
    !*** ./src/app/project/project.service.ts ***!
    \********************************************/

  /*! exports provided: ProjectService */

  /***/
  function srcAppProjectProjectServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectService", function () {
      return ProjectService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/http/http.service */
    "./src/app/shared/http/http.service.ts");

    var ProjectService =
    /*#__PURE__*/
    function () {
      function ProjectService(httpClient) {
        _classCallCheck(this, ProjectService);

        this.httpClient = httpClient;
      }

      _createClass(ProjectService, [{
        key: "list",
        value: function list(data) {
          return this.httpClient.get('project' + data);
        }
      }, {
        key: "leadList",
        value: function leadList(data) {
          return this.httpClient.get('lead' + data);
        }
      }, {
        key: "add",
        value: function add(data) {
          return this.httpClient.post('project', data, {});
        }
      }, {
        key: "update",
        value: function update(url, data) {
          return this.httpClient.put('project/' + url, data, {});
        }
      }]);

      return ProjectService;
    }();

    ProjectService.ctorParameters = function () {
      return [{
        type: _shared_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }];
    };

    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProjectService);
    /***/
  },

  /***/
  "./src/app/project/status/status.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/project/status/status.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectStatusStatusComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3Qvc3RhdHVzL3N0YXR1cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/project/status/status.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/project/status/status.component.ts ***!
    \****************************************************/

  /*! exports provided: StatusComponent */

  /***/
  function srcAppProjectStatusStatusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatusComponent", function () {
      return StatusComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../project.service */
    "./src/app/project/project.service.ts");

    var StatusComponent =
    /*#__PURE__*/
    function () {
      function StatusComponent(fb, projectService) {
        _classCallCheck(this, StatusComponent);

        this.fb = fb;
        this.projectService = projectService;
        this.layoutShow = null;
        this.dxpkeyword = 'name';
        this.srkeyword = 'salesRepresentative';
        this.editForm = this.fb.group({
          clientName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          oppName: [{
            value: "",
            disabled: true
          }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          dealValue: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          dxValue: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          oppStatus: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          domain: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          probility: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          dealCloseDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          estStartDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          salesForceURL: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          dxPursuitLead: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          salesRepresentative: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          statusUpdate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(StatusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.projectService.list('?email=' + sessionStorage.getItem('LoggedInUser')).subscribe(function (resp) {
            _this5.datas = resp;
          }, function (err) {
            console.log(err);
          });
          this.projectService.leadList('').subscribe(function (resp) {
            _this5.dxpList = resp;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "noForm",
        value: function noForm() {
          this.layoutShow = false;
        }
      }, {
        key: "yesForm",
        value: function yesForm() {
          this.layoutShow = true;
        }
      }, {
        key: "setValue",
        value: function setValue(dataValue) {
          console.log(dataValue.history.length);

          if (dataValue.history != 0) {
            var length = dataValue.history.length;
            dataValue.dxValue = dataValue.history[length - 1].dxValue;
            dataValue.dealValue = dataValue.history[length - 1].dealValue;
            dataValue.oppStatus = dataValue.history[length - 1].oppStatus;
            dataValue.domain = dataValue.history[length - 1].domain;
            dataValue.dealStatus = dataValue.history[length - 1].dealStatus;
            dataValue.probility = dataValue.history[length - 1].probility;
            dataValue.salesForceURL = dataValue.history[length - 1].salesForceURL;
            dataValue.dealCloseDate = dataValue.history[length - 1].dealCloseDate;
            dataValue.estStartDate = dataValue.history[length - 1].estStartDate;
            dataValue.dxPursuitLead = dataValue.history[length - 1].dxPursuitLead;
            dataValue.salesRepresentative = dataValue.history[length - 1].salesRepresentative;
            dataValue.statusUpdate = dataValue.history[length - 1].statusUpdate;
          }

          this.editForm.patchValue({
            oppName: dataValue.oppName,
            dxValue: dataValue.dxValue,
            dealValue: dataValue.dealValue,
            oppStatus: dataValue.oppStatus,
            domain: dataValue.domain,
            dealStatus: dataValue.dealStatus,
            probility: dataValue.probility,
            salesForceURL: dataValue.salesForceURL,
            dealCloseDate: dataValue.dealCloseDate,
            estStartDate: dataValue.estStartDate,
            dxPursuitLead: dataValue.dxPursuitLead[0].name,
            salesRepresentative: dataValue.salesRepresentative,
            statusUpdate: dataValue.statusUpdate
          });
        }
      }, {
        key: "populateValue",
        value: function populateValue() {
          this.setValue(this.editForm.value.clientName);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this6 = this;

          console.log(this.editForm);
          var id = this.editForm.value.clientName['_id'];
          var data = this.editForm.value;

          if (this.editForm.value.dxPursuitLead.name) {
            data.dxPursuitLead = this.editForm.value.dxPursuitLead.name;
          }

          if (this.editForm.value.salesRepresentative.salesRepresentative) {
            data.salesRepresentative = this.editForm.value.salesRepresentative.salesRepresentative;
          }

          delete data["clientName"];
          this.projectService.update(id, data).subscribe(function (resp) {
            console.log(resp);
            _this6.successMssg = true;
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return StatusComponent;
    }();

    StatusComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]
      }];
    };

    StatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-status',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./status.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/project/status/status.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./status.component.scss */
      "./src/app/project/status/status.component.scss")).default]
    })], StatusComponent);
    /***/
  },

  /***/
  "./src/app/project/view-all/view-all.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/project/view-all/view-all.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectViewAllViewAllComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3Qvdmlldy1hbGwvdmlldy1hbGwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/project/view-all/view-all.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/project/view-all/view-all.component.ts ***!
    \********************************************************/

  /*! exports provided: ViewAllComponent */

  /***/
  function srcAppProjectViewAllViewAllComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewAllComponent", function () {
      return ViewAllComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../project.service */
    "./src/app/project/project.service.ts");

    var ViewAllComponent =
    /*#__PURE__*/
    function () {
      function ViewAllComponent(projectService) {
        _classCallCheck(this, ViewAllComponent);

        this.projectService = projectService;
      }

      _createClass(ViewAllComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          if (!this.lists) {
            this.projectService.list('').subscribe(function (resp) {
              console.log(resp);
              _this7.lists = resp;
            }, function (err) {
              console.log(err);
            });
          }
        }
      }]);

      return ViewAllComponent;
    }();

    ViewAllComponent.ctorParameters = function () {
      return [{
        type: _project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewAllComponent.prototype, "lists", void 0);
    ViewAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-all',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-all.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/project/view-all/view-all.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-all.component.scss */
      "./src/app/project/view-all/view-all.component.scss")).default]
    })], ViewAllComponent);
    /***/
  },

  /***/
  "./src/app/project/view-detail/view-detail.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/project/view-detail/view-detail.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectViewDetailViewDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".timeline {\n  position: relative;\n}\n.timeline:before {\n  content: \"\";\n  position: absolute;\n  left: 6.85rem;\n  width: 0.214rem;\n  top: 5px;\n  bottom: 5px;\n  height: calc(100% - 5px);\n  background-color: #e7e9f5;\n}\n.timeline .item {\n  display: table;\n  position: relative;\n  margin-bottom: 1.75rem;\n  width: 100%;\n}\n.timeline .item .date {\n  display: table-cell;\n  font-size: 1rem;\n  font-weight: 500;\n  vertical-align: top;\n  position: absolute;\n  padding-top: 0.18rem;\n  color: #74788d;\n}\n.timeline .item .content {\n  display: table-cell;\n  vertical-align: top;\n  font-size: 1rem;\n  padding: 0.35rem 0 0 7rem;\n  color: #74788d;\n}\n.timeline .item .circle {\n  border-radius: 50%;\n  border: 0.89rem solid #fff;\n  z-index: 1;\n  top: 0.2rem;\n  left: 6.12rem;\n  position: relative;\n}\n.timeline .item .circle i {\n  font-size: 1.78rem;\n  top: -0.93rem;\n  left: -0.57rem;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC92aWV3LWRldGFpbC9DOlxcVXNlcnNcXHB1XFxPbmVEcml2ZSAtIEVwc2lsb25cXG5ld3NsZXR0ZXJcXG5ld3NsZXR0ZXIvc3JjXFxhcHBcXHByb2plY3RcXHZpZXctZGV0YWlsXFx2aWV3LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdC92aWV3LWRldGFpbC92aWV3LWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0FDQ0o7QURDRTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0NGO0FEQUU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNFSjtBREFFO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNFSjtBREFFO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRUo7QURESTtFQUNFLGtCQUFBO0VBQ0YsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC92aWV3LWRldGFpbC92aWV3LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lbGluZXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICY6YmVmb3Jle1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA2Ljg1cmVtO1xyXG4gICAgd2lkdGg6IC4yMTRyZW07XHJcbiAgICB0b3A6IDVweDtcclxuICAgIGJvdHRvbTogNXB4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1cHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTlmNTtcclxuICB9XHJcbiAgLml0ZW17XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNzVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLmRhdGV7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nLXRvcDogLjE4cmVtO1xyXG4gICAgY29sb3I6ICM3NDc4OGQ7XHJcbiAgfVxyXG4gIC5jb250ZW50e1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAuMzVyZW0gMCAwIDdyZW07XHJcbiAgICBjb2xvcjogIzc0Nzg4ZDtcclxuICB9XHJcbiAgLmNpcmNsZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogLjg5cmVtIHNvbGlkICNmZmY7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAuMnJlbTtcclxuICAgIGxlZnQ6IDYuMTJyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBpe1xyXG4gICAgICBmb250LXNpemU6IDEuNzhyZW07XHJcbiAgICB0b3A6IC0uOTNyZW07XHJcbiAgICBsZWZ0OiAtLjU3cmVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gIH1cclxuICB9XHJcblxyXG59XHJcbiIsIi50aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50aW1lbGluZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDYuODVyZW07XG4gIHdpZHRoOiAwLjIxNHJlbTtcbiAgdG9wOiA1cHg7XG4gIGJvdHRvbTogNXB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDVweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U5ZjU7XG59XG4udGltZWxpbmUgLml0ZW0ge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxLjc1cmVtO1xuICB3aWR0aDogMTAwJTtcbn1cbi50aW1lbGluZSAuaXRlbSAuZGF0ZSB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLXRvcDogMC4xOHJlbTtcbiAgY29sb3I6ICM3NDc4OGQ7XG59XG4udGltZWxpbmUgLml0ZW0gLmNvbnRlbnQge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmc6IDAuMzVyZW0gMCAwIDdyZW07XG4gIGNvbG9yOiAjNzQ3ODhkO1xufVxuLnRpbWVsaW5lIC5pdGVtIC5jaXJjbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMC44OXJlbSBzb2xpZCAjZmZmO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDAuMnJlbTtcbiAgbGVmdDogNi4xMnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRpbWVsaW5lIC5pdGVtIC5jaXJjbGUgaSB7XG4gIGZvbnQtc2l6ZTogMS43OHJlbTtcbiAgdG9wOiAtMC45M3JlbTtcbiAgbGVmdDogLTAuNTdyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/project/view-detail/view-detail.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/project/view-detail/view-detail.component.ts ***!
    \**************************************************************/

  /*! exports provided: ViewDetailComponent */

  /***/
  function srcAppProjectViewDetailViewDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewDetailComponent", function () {
      return ViewDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../project.service */
    "./src/app/project/project.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ViewDetailComponent =
    /*#__PURE__*/
    function () {
      function ViewDetailComponent(projectService, route) {
        _classCallCheck(this, ViewDetailComponent);

        this.projectService = projectService;
        this.route = route;
      }

      _createClass(ViewDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.projectService.list("?_id=" + this.route.snapshot.params.id).subscribe(function (resp) {
            _this8.detail = resp[0];
            console.log(_this8.detail);
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return ViewDetailComponent;
    }();

    ViewDetailComponent.ctorParameters = function () {
      return [{
        type: _project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ViewDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/project/view-detail/view-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-detail.component.scss */
      "./src/app/project/view-detail/view-detail.component.scss")).default]
    })], ViewDetailComponent);
    /***/
  },

  /***/
  "./src/app/route/route.module.ts":
  /*!***************************************!*\
    !*** ./src/app/route/route.module.ts ***!
    \***************************************/

  /*! exports provided: appRoutes, RouteModule */

  /***/
  function srcAppRouteRouteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appRoutes", function () {
      return appRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteModule", function () {
      return RouteModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _login_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../login/login/login.component */
    "./src/app/login/login/login.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../app-guard/auth.guard */
    "./src/app/app-guard/auth.guard.ts");
    /* harmony import */


    var _project_add_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../project/add/add.component */
    "./src/app/project/add/add.component.ts");
    /* harmony import */


    var _project_status_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../project/status/status.component */
    "./src/app/project/status/status.component.ts");
    /* harmony import */


    var _project_view_all_view_all_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../project/view-all/view-all.component */
    "./src/app/project/view-all/view-all.component.ts");
    /* harmony import */


    var _project_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../project/view-detail/view-detail.component */
    "./src/app/project/view-detail/view-detail.component.ts");
    /* harmony import */


    var _search_result_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../search/result/result.component */
    "./src/app/search/result/result.component.ts");
    /* harmony import */


    var _even_event_event_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../even/event/event.component */
    "./src/app/even/event/event.component.ts");
    /* harmony import */


    var _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../admin/admin-dashboard/admin-dashboard.component */
    "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");

    var appRoutes = [{
      path: 'login',
      component: _login_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
      canActivate: [_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'add',
      component: _project_add_add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"],
      canActivate: [_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'statupdate',
      component: _project_status_status_component__WEBPACK_IMPORTED_MODULE_7__["StatusComponent"],
      canActivate: [_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'projects',
      canActivate: [_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
      children: [{
        path: 'deatil/:id',
        component: _project_view_detail_view_detail_component__WEBPACK_IMPORTED_MODULE_9__["ViewDetailComponent"]
      }, {
        path: '',
        component: _project_view_all_view_all_component__WEBPACK_IMPORTED_MODULE_8__["ViewAllComponent"],
        pathMatch: 'full'
      }]
    }, {
      path: 'search',
      component: _search_result_result_component__WEBPACK_IMPORTED_MODULE_10__["ResultComponent"],
      canActivate: [_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'events',
      component: _even_event_event_component__WEBPACK_IMPORTED_MODULE_11__["EventComponent"],
      canActivate: [_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'admin',
      component: _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["AdminDashboardComponent"],
      canActivate: [_app_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
      data: {
        role: 'admin'
      }
    }, {
      path: '**',
      redirectTo: 'login',
      pathMatch: 'full'
    }];

    var RouteModule = function RouteModule() {
      _classCallCheck(this, RouteModule);
    };

    RouteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], RouteModule);
    /***/
  },

  /***/
  "./src/app/search/result/result.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/search/result/result.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchResultResultComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/search/result/result.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/search/result/result.component.ts ***!
    \***************************************************/

  /*! exports provided: ResultComponent */

  /***/
  function srcAppSearchResultResultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultComponent", function () {
      return ResultComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_project_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/project/project.service */
    "./src/app/project/project.service.ts");
    /* harmony import */


    var _search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../search.service */
    "./src/app/search/search.service.ts");

    var ResultComponent =
    /*#__PURE__*/
    function () {
      function ResultComponent(route, searchService, projectService) {
        _classCallCheck(this, ResultComponent);

        this.route = route;
        this.searchService = searchService;
        this.projectService = projectService;
      }

      _createClass(ResultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.searchService.currentMessage.subscribe(function (message) {
            console.log(message);
            _this9.message = message;
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return ResultComponent;
    }();

    ResultComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"]
      }, {
        type: src_app_project_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]
      }];
    };

    ResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-result',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./result.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search/result/result.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./result.component.scss */
      "./src/app/search/result/result.component.scss")).default]
    })], ResultComponent);
    /***/
  },

  /***/
  "./src/app/search/search.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/search/search.module.ts ***!
    \*****************************************/

  /*! exports provided: SearchModule */

  /***/
  function srcAppSearchSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchModule", function () {
      return SearchModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _result_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./result/result.component */
    "./src/app/search/result/result.component.ts");
    /* harmony import */


    var _project_project_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../project/project.module */
    "./src/app/project/project.module.ts");

    var SearchModule = function SearchModule() {
      _classCallCheck(this, SearchModule);
    };

    SearchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_result_result_component__WEBPACK_IMPORTED_MODULE_3__["ResultComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _project_project_module__WEBPACK_IMPORTED_MODULE_4__["ProjectModule"]],
      exports: [_result_result_component__WEBPACK_IMPORTED_MODULE_3__["ResultComponent"]]
    })], SearchModule);
    /***/
  },

  /***/
  "./src/app/search/search.service.ts":
  /*!******************************************!*\
    !*** ./src/app/search/search.service.ts ***!
    \******************************************/

  /*! exports provided: SearchService */

  /***/
  function srcAppSearchSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchService", function () {
      return SearchService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/http/http.service */
    "./src/app/shared/http/http.service.ts");

    var dataType = [];

    var SearchService =
    /*#__PURE__*/
    function () {
      function SearchService(httpClient) {
        _classCallCheck(this, SearchService);

        this.httpClient = httpClient;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.currentMessage = this.messageSource.asObservable();
      }

      _createClass(SearchService, [{
        key: "changeMessage",
        value: function changeMessage(message) {
          var _this10 = this;

          this.httpClient.get('project?clientName=' + message).subscribe(function (resp) {
            console.log(resp);

            _this10.messageSource.next(resp);
          });
        }
      }]);

      return SearchService;
    }();

    SearchService.ctorParameters = function () {
      return [{
        type: _shared_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }];
    };

    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SearchService);
    /***/
  },

  /***/
  "./src/app/shared/_helpers/custom-validator.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/_helpers/custom-validator.ts ***!
    \*****************************************************/

  /*! exports provided: MustMatch */

  /***/
  function srcAppShared_helpersCustomValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MustMatch", function () {
      return MustMatch;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // custom validator to check that two fields match


    function MustMatch(controlName, matchingControlName) {
      return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
        } // set error on matchingControl if validation fails


        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({
            mustMatch: true
          });
        } else {
          matchingControl.setErrors(null);
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/shared/footer/footer.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/shared/footer/footer.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "footer {\n  background: #1e1e2d;\n  color: #fff;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9DOlxcVXNlcnNcXHB1XFxPbmVEcml2ZSAtIEVwc2lsb25cXG5ld3NsZXR0ZXJcXG5ld3NsZXR0ZXIvc3JjXFxhcHBcXHNoYXJlZFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9mb290ZXIvQzpcXFVzZXJzXFxwdVxcT25lRHJpdmUgLSBFcHNpbG9uXFxuZXdzbGV0dGVyXFxuZXdzbGV0dGVyL3NyY1xcc3R5bGluZ3NcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkNNYztFRExkLFdDT007RUROTixrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FFREYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIm1lZGlhLXRhZ1wiO1xyXG5mb290ZXJ7XHJcbiAgYmFja2dyb3VuZDogJHNpZGViYXItY29sb3I7XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIiRmb250LWZhbWlseTogXCJQb3BwaW5zXCIsXHJcbnNhbnMtc2VyaWY7XHJcbiRmb250LXNpemU6IDFyZW07XHJcbiRkZWZhdWx0LWNvbG9yOiAjNzQ3ODhkO1xyXG4kaG92ZXJDb2xvcjogIzVkNzhmZjtcclxuJGhlYWRpbmctY29sb3I6ICM2NzY2NmU7XHJcbiRidG4tcHJpbWFyeS1jb2xvcjogIzU4NjdkZDtcclxuJGJ0bi1wcmltYXJ5LWNvbG9yLWhvdmVyOiAjMzg0YWQ3O1xyXG4kZXJyb3ItcmVkOiAjZmQzOTdhO1xyXG4kc2lkZWJhci1jb2xvcjogIzFlMWUyZDtcclxuJHNpZGViYXItbWVudS1jb2xvcjogI2EyYTNiNztcclxuJHdoaXRlOiAjZmZmO1xyXG4kc2lkZWJhci1tZW51LWNvbG9yLWhvdmVyOiAjMWIxYjI4O1xyXG4kYm9keS1jb2xvcjogI2YyZjNmODtcclxuJGhlYWRlci1wcm9maWxlOiAjZjlmYWZlO1xyXG4iLCJmb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMWUxZTJkO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/shared/footer/footer.component.scss")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/shared/header/header.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/shared/header/header.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "header {\n  padding: 30px 0;\n}\nheader .logo-img {\n  height: 50px;\n}\nheader .profile-pic {\n  height: 37px;\n  cursor: pointer;\n}\nheader .profile-pic img {\n  max-width: 100%;\n  max-height: 100%;\n  border-radius: 4px;\n}\nheader .dropdown-menu {\n  margin-top: 15px;\n  box-shadow: 0 0 50px 0 rgba(82, 63, 105, 0.15);\n  border: 0;\n  width: 380px;\n  left: -340px !important;\n  border-radius: 0;\n  padding: 0;\n}\nheader .profile-dropdown-detail {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding: 2rem 1rem;\n  background-color: #f9fafe;\n}\nheader .profile-dropdown-detail .profile-avtar img {\n  width: 60px;\n  height: 60px;\n  border-radius: 4px;\n}\nheader .profile-dropdown-detail .profile-drop-name {\n  -webkit-box-flex: 1;\n  flex-grow: 1;\n  color: #595d6e;\n  font-size: 1.3rem;\n  font-weight: 500;\n  padding-left: 1rem;\n}\nheader .profile-dropdown-detail .sign-out span {\n  background-color: rgba(61, 148, 251, 0.1);\n  color: #3d94fb;\n  font-weight: 600;\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n  display: inline;\n  cursor: pointer;\n}\nheader .profile-dropdown-detail .sign-out span:hover {\n  background-color: #3d94fb;\n  color: #fff;\n}\nheader .header-bottom {\n  background: #fff;\n  height: 70px;\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n}\nheader .header-bottom ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: stretch;\n  align-items: stretch;\n}\nheader .header-bottom ul li {\n  display: -webkit-box;\n  display: flex;\n  /* -webkit-box-align: center; */\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0 0.15rem;\n  padding: 0 0.15rem;\n  position: relative;\n}\nheader .header-bottom ul li a {\n  border-radius: 4px;\n  padding: 0.75rem 1.45rem;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n  text-decoration: none;\n  position: relative;\n  /* vertical-align: middle; */\n  -webkit-box-align: stretch;\n  align-items: stretch;\n  outline: 0 !important;\n  text-decoration: none;\n  color: #959eaf;\n  font-weight: 500;\n  font-size: 1rem;\n}\nheader .header-bottom ul li:hover a, header .header-bottom ul li.active a {\n  background-color: #f2f3f8;\n  color: #3d94fb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9DOlxcVXNlcnNcXHB1XFxPbmVEcml2ZSAtIEVwc2lsb25cXG5ld3NsZXR0ZXJcXG5ld3NsZXR0ZXIvc3JjXFxhcHBcXHNoYXJlZFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvaGVhZGVyL0M6XFxVc2Vyc1xccHVcXE9uZURyaXZlIC0gRXBzaWxvblxcbmV3c2xldHRlclxcbmV3c2xldHRlci9zcmNcXHN0eWxpbmdzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxlQUFBO0FDRkY7QURHRTtFQUNFLFlBQUE7QUNESjtBREdFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNESjtBREVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBTjtBREdFO0VBQ0UsZ0JBQUE7RUFFQSw4Q0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNESjtBREdFO0VBQ0Usb0JBQUE7RUFFQSxhQUFBO0VBQ0EseUJBQUE7RUFFQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCRXZCYTtBRHNCakI7QURHTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREtJO0VBQ0UsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0hOO0FES0k7RUFDRSx5Q0FBQTtFQUNGLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNISjtBRElJO0VBQ0UseUJBQUE7RUFDRixXQUFBO0FDRko7QURNRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBRUEsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUVBLG1CQUFBO0VBQ0EseUJBQUE7RUFFQSw4QkFBQTtBQ0pKO0FES0k7RUFDRSxnQkFBQTtFQUNGLFNBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFFQSxhQUFBO0VBQ0EsMEJBQUE7RUFFQSxvQkFBQTtBQ0hKO0FESU07RUFDRSxvQkFBQTtFQUVBLGFBQUE7RUFDQSwrQkFBQTtFQUVBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNGUjtBREdRO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFFQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFFQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRFY7QURJVTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0ZaIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJtZWRpYS10YWdcIjtcclxuXHJcbmhlYWRlcntcclxuICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgLmxvZ28taW1ne1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICAucHJvZmlsZS1waWN7XHJcbiAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpbWd7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZHJvcGRvd24tbWVudXtcclxuICAgIG1hcmdpbi10b3A6MTVweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDUwcHggMCByZ2JhKDgyLDYzLDEwNSwuMTUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDUwcHggMCByZ2JhKDgyLDYzLDEwNSwuMTUpO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgd2lkdGg6IDM4MHB4O1xyXG4gICAgbGVmdDogLTM0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLnByb2ZpbGUtZHJvcGRvd24tZGV0YWlse1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXItcHJvZmlsZTtcclxuICAgIC5wcm9maWxlLWF2dGFye1xyXG4gICAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC5wcm9maWxlLWRyb3AtbmFtZXtcclxuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgY29sb3I6ICM1OTVkNmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICB9XHJcbiAgICAuc2lnbi1vdXQgc3BhbntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MSwxNDgsMjUxLC4xKTtcclxuICAgIGNvbG9yOiAjM2Q5NGZiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcbiAgICBmb250LXNpemU6IC44NzVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjJyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q5NGZiO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5oZWFkZXItYm90dG9te1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHVse1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0cmV0Y2g7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogc3RyZXRjaDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgICBsaXtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC8qIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7ICovXHJcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgLjE1cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgLjE1cmVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogLjc1cmVtIDEuNDVyZW07XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgLyogdmVydGljYWwtYWxpZ246IG1pZGRsZTsgKi9cclxuICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBzdHJldGNoO1xyXG4gICAgICAgICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgICAgIG91dGxpbmU6IDAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICM5NTllYWY7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyLCAmLmFjdGl2ZXtcclxuICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjM2Q5NGZiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJoZWFkZXIge1xuICBwYWRkaW5nOiAzMHB4IDA7XG59XG5oZWFkZXIgLmxvZ28taW1nIHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuaGVhZGVyIC5wcm9maWxlLXBpYyB7XG4gIGhlaWdodDogMzdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaGVhZGVyIC5wcm9maWxlLXBpYyBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbmhlYWRlciAuZHJvcGRvd24tbWVudSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDUwcHggMCByZ2JhKDgyLCA2MywgMTA1LCAwLjE1KTtcbiAgYm94LXNoYWRvdzogMCAwIDUwcHggMCByZ2JhKDgyLCA2MywgMTA1LCAwLjE1KTtcbiAgYm9yZGVyOiAwO1xuICB3aWR0aDogMzgwcHg7XG4gIGxlZnQ6IC0zNDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuaGVhZGVyIC5wcm9maWxlLWRyb3Bkb3duLWRldGFpbCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZlO1xufVxuaGVhZGVyIC5wcm9maWxlLWRyb3Bkb3duLWRldGFpbCAucHJvZmlsZS1hdnRhciBpbWcge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5oZWFkZXIgLnByb2ZpbGUtZHJvcGRvd24tZGV0YWlsIC5wcm9maWxlLWRyb3AtbmFtZSB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuICBmbGV4LWdyb3c6IDE7XG4gIGNvbG9yOiAjNTk1ZDZlO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xufVxuaGVhZGVyIC5wcm9maWxlLWRyb3Bkb3duLWRldGFpbCAuc2lnbi1vdXQgc3BhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjEsIDE0OCwgMjUxLCAwLjEpO1xuICBjb2xvcjogIzNkOTRmYjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgZGlzcGxheTogaW5saW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5oZWFkZXIgLnByb2ZpbGUtZHJvcGRvd24tZGV0YWlsIC5zaWduLW91dCBzcGFuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkOTRmYjtcbiAgY29sb3I6ICNmZmY7XG59XG5oZWFkZXIgLmhlYWRlci1ib3R0b20ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDcwcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmhlYWRlciAuaGVhZGVyLWJvdHRvbSB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbjogc3RyZXRjaDtcbiAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuaGVhZGVyIC5oZWFkZXItYm90dG9tIHVsIGxpIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyOyAqL1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDAuMTVyZW07XG4gIHBhZGRpbmc6IDAgMC4xNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaGVhZGVyIC5oZWFkZXItYm90dG9tIHVsIGxpIGEge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS40NXJlbTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICovXG4gIC13ZWJraXQtYm94LWFsaWduOiBzdHJldGNoO1xuICAtbXMtZmxleC1hbGlnbjogc3RyZXRjaDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzk1OWVhZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuaGVhZGVyIC5oZWFkZXItYm90dG9tIHVsIGxpOmhvdmVyIGEsIGhlYWRlciAuaGVhZGVyLWJvdHRvbSB1bCBsaS5hY3RpdmUgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjg7XG4gIGNvbG9yOiAjM2Q5NGZiO1xufSIsIiRmb250LWZhbWlseTogXCJQb3BwaW5zXCIsXHJcbnNhbnMtc2VyaWY7XHJcbiRmb250LXNpemU6IDFyZW07XHJcbiRkZWZhdWx0LWNvbG9yOiAjNzQ3ODhkO1xyXG4kaG92ZXJDb2xvcjogIzVkNzhmZjtcclxuJGhlYWRpbmctY29sb3I6ICM2NzY2NmU7XHJcbiRidG4tcHJpbWFyeS1jb2xvcjogIzU4NjdkZDtcclxuJGJ0bi1wcmltYXJ5LWNvbG9yLWhvdmVyOiAjMzg0YWQ3O1xyXG4kZXJyb3ItcmVkOiAjZmQzOTdhO1xyXG4kc2lkZWJhci1jb2xvcjogIzFlMWUyZDtcclxuJHNpZGViYXItbWVudS1jb2xvcjogI2EyYTNiNztcclxuJHdoaXRlOiAjZmZmO1xyXG4kc2lkZWJhci1tZW51LWNvbG9yLWhvdmVyOiAjMWIxYjI4O1xyXG4kYm9keS1jb2xvcjogI2YyZjNmODtcclxuJGhlYWRlci1wcm9maWxlOiAjZjlmYWZlO1xyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_login_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/login/auth.service */
    "./src/app/login/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_search_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/search/search.service */
    "./src/app/search/search.service.ts");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(authSerive, router, fb, searchService) {
        _classCallCheck(this, HeaderComponent);

        this.authSerive = authSerive;
        this.router = router;
        this.fb = fb;
        this.searchService = searchService;
        this.searchForm = this.fb.group({
          searchText: ['']
        });
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signOut",
        value: function signOut() {
          this.authSerive.logout();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.router.navigate(['search'], {
            queryParams: {
              search: this.searchForm.value.searchText
            }
          });
          this.searchService.changeMessage(this.searchForm.value.searchText);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: src_app_login_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: src_app_search_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/shared/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/http/http.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/http/http.service.ts ***!
    \*********************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppSharedHttpHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var HttpService =
    /*#__PURE__*/
    function () {
      function HttpService(http) {
        _classCallCheck(this, HttpService);

        this.http = http;
        this.endpoint = 'http://15.188.201.140:4000/api/';
      }

      _createClass(HttpService, [{
        key: "createAuthorizationHeader",
        value: function createAuthorizationHeader(headers) {
          headers.append('Authorization', 'Basic lskdjfluweiowuri');
        }
      }, {
        key: "post",
        value: function post(url, body, options) {
          return this.http.post(this.endpoint + url, body, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.parseData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "get",
        value: function get(url) {
          console.log(this.endpoint + url);
          return this.http.get(this.endpoint + url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "put",
        value: function put(url, body, options) {
          return this.http.put(this.endpoint + url, body, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.parseData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "parseData",
        value: function parseData(response) {
          return response;
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          var errorMessage;
          errorMessage = error.error ? error.error : error.toString();
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }
      }]);

      return HttpService;
    }();

    HttpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HttpService);
    /***/
  },

  /***/
  "./src/app/shared/interceptor.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/interceptor.service.ts ***!
    \***********************************************/

  /*! exports provided: InterceptorService */

  /***/
  function srcAppSharedInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InterceptorService", function () {
      return InterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var InterceptorService =
    /*#__PURE__*/
    function () {
      function InterceptorService() {
        _classCallCheck(this, InterceptorService);
      }

      _createClass(InterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          //you may wish to modify the request
          console.log('going to the http server now...'); // return next.handle(req).do(evt => {
          //   if (evt instanceof HttpResponse) {
          //     console.log('came back from server now...')
          //   }
          // });

          var token = sessionStorage.getItem('x-auth-token');

          if (!token) {
            return next.handle(req);
          }

          var newReq = req.clone({
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'x-auth-token': token
            })
          });
          return next.handle(newReq);
        }
      }]);

      return InterceptorService;
    }();

    InterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], InterceptorService);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/shared/sidebar/sidebar.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./interceptor.service */
    "./src/app/shared/interceptor.service.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]],
      exports: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
        useClass: _interceptor_service__WEBPACK_IMPORTED_MODULE_11__["InterceptorService"],
        multi: true
      }]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/shared/sidebar/sidebar.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/shared/sidebar/sidebar.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSidebarSidebarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidebar {\n  position: fixed;\n  background: #1e1e2d;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  bottom: 0;\n}\n.sidebar ul {\n  margin: 0;\n  padding: 0;\n}\n.sidebar ul li {\n  list-style: none;\n  position: relative;\n  display: block;\n}\n.sidebar ul li a {\n  padding: 9px 25px;\n  color: #a2a3b7;\n  display: block;\n  -webkit-transition: background-color 0.3s;\n  transition: background-color 0.3s;\n}\n.sidebar ul li a:after {\n  content: none;\n}\n.sidebar ul li a:hover {\n  color: #fff;\n  background: #1b1b28;\n}\n.sidebar ul li a .subIcon {\n  position: absolute;\n  right: 25px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.sidebar ul li:not(.true) a .subIcon {\n  -webkit-transform: rotate(0);\n          transform: rotate(0);\n}\n.sidebar ul li:not(.true) ul {\n  display: none;\n  overflow: hidden;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n  -webkit-transform: scaleY(0);\n          transform: scaleY(0);\n}\n.sidebar ul li ul {\n  -webkit-transform: scaleY(1);\n          transform: scaleY(1);\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n}\n.sidebar ul li ul li a {\n  padding-left: 60px;\n}\n.sidebar ul li ul li a:after {\n  width: 5px;\n  height: 1px;\n  background-color: #5c5e81;\n  content: \"\";\n  top: 50%;\n  left: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGViYXIvQzpcXFVzZXJzXFxwdVxcT25lRHJpdmUgLSBFcHNpbG9uXFxuZXdzbGV0dGVyXFxuZXdzbGV0dGVyL3NyY1xcYXBwXFxzaGFyZWRcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zaWRlYmFyL0M6XFxVc2Vyc1xccHVcXE9uZURyaXZlIC0gRXBzaWxvblxcbmV3c2xldHRlclxcbmV3c2xldHRlci9zcmNcXHN0eWxpbmdzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxlQUFBO0VBQ0EsbUJDSWM7RURIZCxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FFRkY7QUZJRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FFRko7QUZJSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FFRk47QUZJTTtFQUNFLGlCQUFBO0VBQ0EsY0NaYTtFRGFiLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0FFRlI7QUZJUTtFQUNFLGFBQUE7QUVGVjtBRktRO0VBQ0UsV0NyQkY7RURzQkUsbUJDckJpQjtBQ2tCM0I7QUZNUTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FFSlY7QUZXVTtFQUNFLDRCQUFBO1VBQUEsb0JBQUE7QUVUWjtBRmFRO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFBQSxnQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0FFWFY7QUZlTTtFQUNFLDRCQUFBO1VBQUEsb0JBQUE7RUFDQSx3Q0FBQTtFQUFBLGdDQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBRWJSO0FGZ0JVO0VBQ0Usa0JBQUE7QUVkWjtBRmlCVTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUVmWiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJtZWRpYS10YWdcIjtcclxuXHJcbi5zaWRlYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZDogJHNpZGViYXItY29sb3I7XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcblxyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgcGFkZGluZzogOXB4IDI1cHg7XHJcbiAgICAgICAgY29sb3I6ICRzaWRlYmFyLW1lbnUtY29sb3I7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG5cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkc2lkZWJhci1tZW51LWNvbG9yLWhvdmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN1Ykljb24ge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC50cnVlKSB7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgLnN1Ykljb24ge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhOmFmdGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1YzVlODE7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIixcclxuc2Fucy1zZXJpZjtcclxuJGZvbnQtc2l6ZTogMXJlbTtcclxuJGRlZmF1bHQtY29sb3I6ICM3NDc4OGQ7XHJcbiRob3ZlckNvbG9yOiAjNWQ3OGZmO1xyXG4kaGVhZGluZy1jb2xvcjogIzY3NjY2ZTtcclxuJGJ0bi1wcmltYXJ5LWNvbG9yOiAjNTg2N2RkO1xyXG4kYnRuLXByaW1hcnktY29sb3ItaG92ZXI6ICMzODRhZDc7XHJcbiRlcnJvci1yZWQ6ICNmZDM5N2E7XHJcbiRzaWRlYmFyLWNvbG9yOiAjMWUxZTJkO1xyXG4kc2lkZWJhci1tZW51LWNvbG9yOiAjYTJhM2I3O1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRzaWRlYmFyLW1lbnUtY29sb3ItaG92ZXI6ICMxYjFiMjg7XHJcbiRib2R5LWNvbG9yOiAjZjJmM2Y4O1xyXG4kaGVhZGVyLXByb2ZpbGU6ICNmOWZhZmU7XHJcbiIsIi5zaWRlYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiAjMWUxZTJkO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbi5zaWRlYmFyIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLnNpZGViYXIgdWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNpZGViYXIgdWwgbGkgYSB7XG4gIHBhZGRpbmc6IDlweCAyNXB4O1xuICBjb2xvcjogI2EyYTNiNztcbiAgZGlzcGxheTogYmxvY2s7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG59XG4uc2lkZWJhciB1bCBsaSBhOmFmdGVyIHtcbiAgY29udGVudDogbm9uZTtcbn1cbi5zaWRlYmFyIHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzFiMWIyODtcbn1cbi5zaWRlYmFyIHVsIGxpIGEgLnN1Ykljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyNXB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5zaWRlYmFyIHVsIGxpOm5vdCgudHJ1ZSkgYSAuc3ViSWNvbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDApO1xufVxuLnNpZGViYXIgdWwgbGk6bm90KC50cnVlKSB1bCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG59XG4uc2lkZWJhciB1bCBsaSB1bCB7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG59XG4uc2lkZWJhciB1bCBsaSB1bCBsaSBhIHtcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xufVxuLnNpZGViYXIgdWwgbGkgdWwgbGkgYTphZnRlciB7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM1ZTgxO1xuICBjb250ZW50OiBcIlwiO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/sidebar/sidebar.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
    \*****************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSharedSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var src_app_login_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/login/auth.service */
    "./src/app/login/auth.service.ts");

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent(authSerive) {
        _classCallCheck(this, SidebarComponent);

        this.authSerive = authSerive;
        this.faCoffee = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCoffee"];
        this.faAngleDoubleDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faAngleDoubleDown"];
        this.faAngleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faAngleRight"];
        this.menus = [{
          name: "Front-end",
          iconName: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCoffee"],
          iconLeft: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faAngleRight"],
          active: true,
          submenu: [{
            name: "Option 1"
          }, {
            name: "Option 2"
          }, {
            name: "Option 3"
          }]
        }, {
          name: "Dashboard",
          iconName: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCoffee"],
          active: false,
          iconLeft: ''
        }, {
          name: "Sample ",
          iconName: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCoffee"],
          iconLeft: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faAngleRight"],
          active: false,
          submenu: [{
            name: "Option 1"
          }, {
            name: "Option 2"
          }, {
            name: "Option 3"
          }]
        }, {
          name: "New Sample",
          iconName: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCoffee"],
          active: false,
          iconLeft: ''
        }];
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggle",
        value: function toggle(index) {
          this.menus.filter(function (menu, i) {
            return i !== index && menu.active;
          }).forEach(function (menu) {
            return menu.active = !menu.active;
          });
          this.menus[index].active = !this.menus[index].active;
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ctorParameters = function () {
      return [{
        type: src_app_login_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.scss */
      "./src/app/shared/sidebar/sidebar.component.scss")).default]
    })], SidebarComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\pu\OneDrive - Epsilon\newsletter\newsletter\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map