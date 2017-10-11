webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Local Market</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li><a [routerLink]=\"['/products', 'buy']\"></a></li>\n        <li><a [routerLink]=\"['/products']\">Products</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!user\"><a [routerLink]=\"['/login']\">Login</a></li>\n        <li *ngIf=\"!user\"><a [routerLink]=\"['/signup']\">Signup</a></li>\n        <li *ngIf=\"user\" class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Profile<span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a [routerLink]=\"['/user']\">User Profile</a></li>\n            <li><a (click)=\"logout()\">Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.title = 'Local Maket';
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    AppComponent.prototype.logout = function () {
        this.auth.logout()
            .subscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shoppingcart_service__ = __webpack_require__("../../../../../src/app/services/shoppingcart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_datepicker__ = __webpack_require__("../../../../ng2-datepicker/bundles/ng2-datepicker.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_datepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_datepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__loginform_loginform_component__ = __webpack_require__("../../../../../src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_isLoggedIn_canactivate_service__ = __webpack_require__("../../../../../src/app/services/isLoggedIn.canactivate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__signupform_signupform_component__ = __webpack_require__("../../../../../src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_truncate_pipe__ = __webpack_require__("../../../../../src/app/pipes/truncate.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_filter_pipe__ = __webpack_require__("../../../../../src/app/pipes/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__products_product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/products/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__userprofile_user_details_user_details_component__ = __webpack_require__("../../../../../src/app/userprofile/user-details/user-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__products_product_edit_product_edit_component__ = __webpack_require__("../../../../../src/app/products/product-edit/product-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__products_product_new_product_new_component__ = __webpack_require__("../../../../../src/app/products/product-new/product-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shopping_cart_shopping_cart_component__ = __webpack_require__("../../../../../src/app/shopping-cart/shopping-cart.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__loginform_loginform_component__["a" /* LoginformComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__userprofile_userprofile_component__["a" /* UserprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__signupform_signupform_component__["a" /* SignupformComponent */],
            __WEBPACK_IMPORTED_MODULE_17__pipes_truncate_pipe__["a" /* TruncatePipe */],
            __WEBPACK_IMPORTED_MODULE_18__pipes_filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_19__products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__products_product_detail_product_detail_component__["a" /* ProductDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_21__userprofile_user_details_user_details_component__["a" /* UserDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_22__products_product_edit_product_edit_component__["a" /* ProductEditComponent */],
            __WEBPACK_IMPORTED_MODULE_23__products_product_new_product_new_component__["a" /* ProductNewComponent */],
            __WEBPACK_IMPORTED_MODULE_24__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1_ng2_datepicker__["NgDatepickerModule"],
            __WEBPACK_IMPORTED_MODULE_13__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__routes__["a" /* routes */])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_14__services_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */],
            __WEBPACK_IMPORTED_MODULE_3__services_products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__services_shoppingcart_service__["a" /* ShoppingcartService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to {{title}}!</h1>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.title = 'Local Market';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-2\"></div>\n  <div class=\"col-sm-8\">\n    <div *ngIf=\"message\" class=\"alert alert-danger\" role=\"alert\">\n      <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Error:</span>\n      {{message}}\n    </div>\n    <form class=\"form-horizontal\">\n      <div class=\"form-group\">\n        <label for=\"username\" class=\"col-sm-2 control-label\">User name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"formInfo.username\" name=\"username\" placeholder=\"User name\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\" class=\"col-sm-2 control-label\">Password</label>\n        <div class=\"col-sm-10\">\n          <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\" placeholder=\"Password\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <button type=\"submit\" class=\"btn btn-default\" (click)=\"login()\">Sign in</button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"col-sm-2\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginformComponent = (function () {
    function LoginformComponent(auth) {
        this.auth = auth;
        this.formInfo = {
            username: '',
            password: ''
        };
    }
    LoginformComponent.prototype.ngOnInit = function () {
    };
    LoginformComponent.prototype.login = function () {
        var _this = this;
        var _a = this.formInfo, username = _a.username, password = _a.password;
        if (username !== '' && password !== '') {
            this.auth.login(username, password)
                .map(function () { })
                .subscribe(function () { }, function (err) {
                _this.message = err;
                _this.formInfo = { username: '', password: '' };
            });
        }
        else {
            this.message = 'You must set a username and a password';
        }
    };
    return LoginformComponent;
}());
LoginformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loginform',
        template: __webpack_require__("../../../../../src/app/loginform/loginform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loginform/loginform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], LoginformComponent);

var _a;
//# sourceMappingURL=loginform.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, field, value) {
        if (!items) {
            return [];
        }
        if (!value) {
            return items;
        }
        var patter = new RegExp(value, 'i');
        return items.filter(function (it) { return it[field].match(patter); });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/truncate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args.length > 0 ? parseInt(args[0], 40) : 40;
        var trail = args.length > 1 ? args[1] : '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    return TruncatePipe;
}());
TruncatePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'truncate'
    })
], TruncatePipe);

//# sourceMappingURL=truncate.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/products/product-detail/product-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-body\">\n      <h2>{{product.name}}</h2>\n    </div>\n    <div class=\"panel-footer\">\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <p>{{product.description}}</p>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"col-sm-6\">\n            <p>\n              <b>Producer: </b>\n              <i>{{product.producer.username}}</i>\n            </p>\n            <p>Price: {{product.price}} &euro; </p>\n          </div>\n          <div class=\"col-sm-6\">\n            <p *ngIf=\"product.ecological\">\n              <b>Ecological product</b>\n            </p>\n            <p *ngIf=\"!product.ecological\">\n              <b>Non ecological product</b>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"user._id === product.producer._id\" class=\"edit\">\n    <a class=\"btn btn-primary\" [routerLink]=\"['/products', product._id, 'edit']\">Edit Product</a>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/products']\">Back to Products</a>\n  </div>\n\n  <div *ngIf=\"user._id !== product.producer._id\" class=\"edit\">\n    <a class=\"btn btn-primary\" (click)=\"addShoppingItem()\" [routerLink]=\"['/products', product._id, 'buy']\">Buy Product</a>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/products']\">Back to Products</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/products/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shoppingcart_service__ = __webpack_require__("../../../../../src/app/services/shoppingcart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductDetailComponent = (function () {
    function ProductDetailComponent(productService, routes, auth, shoppingCart) {
        var _this = this;
        this.productService = productService;
        this.routes = routes;
        this.auth = auth;
        this.shoppingCart = shoppingCart;
        this.auth.isLoggedIn()
            .subscribe(function (user) { return _this.user = user; });
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routes.params.subscribe(function (params) {
            _this.getProductDetails(params['id']);
        });
    };
    ProductDetailComponent.prototype.getProductDetails = function (id) {
        var _this = this;
        this.productService.getOne(id)
            .subscribe(function (product) { return _this.product = product; });
    };
    ProductDetailComponent.prototype.addShoppingItem = function () {
        this.shoppingCart.addProduct(this.product);
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-product-detail',
        template: __webpack_require__("../../../../../src/app/products/product-detail/product-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/product-detail/product-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_shoppingcart_service__["a" /* ShoppingcartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_shoppingcart_service__["a" /* ShoppingcartService */]) === "function" && _d || Object])
], ProductDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=product-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/product-edit/product-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-btn {\n  margin: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-edit/product-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <div *ngIf=\"editProduct\">\n    <div class=\"row\">\n      <div class=\"col-sm-2\"></div>\n      <div class=\"col-sm-8\">\n        <form>\n          <div class=\"form-group\">\n            <label for=\"productname\">Product name</label>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"editProduct.name\" id=\"productname\" name=\"name\">\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"producer\">Producer</label>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"editProduct.producer\" id=\"producer\" name=\"producername\" disabled>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <label for=\"ecological\">Ecological</label>\n                <select name=\"usertype\" [(ngModel)]=\"editProduct.ecological\" class=\"form-control\">\n                  <option value=\"true\">Ecological</option>\n                  <option value=\"false\">Non Ecological</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"price\">Price</label>\n            <input class=\"form-control\" type=\"text\" id=\"price\" [(ngModel)]=\"editProduct.price\"  name=\"price\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"description\">Description</label>\n            <textarea class=\"form-control\" id=\"description\" rows=\"5\" [(ngModel)]=\"editProduct.description\" name=\"description\"></textarea>\n          </div>\n        </form>\n      </div>\n      <div class=\"col-sm-2\">\n        <a class=\"btn btn-primary form-btn\" (click)=\"saveChanges()\">Save Changes</a>\n        <a class=\"btn btn-danger form-btn\" (click)=\"deleteProduct()\">Delete Product</a>\n        <a class=\"btn btn-primary form-btn\" [routerLink]=\"['/products', product]\">Product Details</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/products/product-edit/product-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductEditComponent = (function () {
    function ProductEditComponent(productService, routes, router, auth) {
        var _this = this;
        this.productService = productService;
        this.routes = routes;
        this.router = router;
        this.auth = auth;
        this.editProduct = {
            name: '',
            producer: '',
            price: 0,
            ecological: false,
            description: '',
            image: ''
        };
        this.auth.isLoggedIn()
            .subscribe(function (user) { return _this.user = user; });
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routes.params.subscribe(function (params) {
            _this.getProductDetails(params['id']);
        });
    };
    ProductEditComponent.prototype.getProductDetails = function (id) {
        var _this = this;
        this.productService.getOne(id)
            .subscribe(function (product) {
            _this.product = product._id;
            _this.editProduct = {
                name: product.name,
                producer: product.producer.username,
                price: product.price,
                ecological: product.ecological,
                description: product.description,
                image: product.image
            };
        });
    };
    ProductEditComponent.prototype.saveChanges = function () {
        var _this = this;
        this.productService.updateProduct(this.product, this.editProduct)
            .subscribe(function () {
            _this.router.navigate(['/products', _this.product]);
        });
    };
    ProductEditComponent.prototype.deleteProduct = function () {
        var _this = this;
        this.productService.deleteProduct(this.product)
            .subscribe(function () {
            _this.router.navigate(['/products']);
        });
    };
    return ProductEditComponent;
}());
ProductEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-product-edit',
        template: __webpack_require__("../../../../../src/app/products/product-edit/product-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/product-edit/product-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], ProductEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=product-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/product-new/product-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".save-btn{\n  margin: 10px;\n}\n\n.prof-btn{\n  margin: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-new/product-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" >\n  <div class=\"row\">\n    <div class=\"col-sm-2\"></div>\n    <div class=\"col-sm-8\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"productname\">Product Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"productname\" [(ngModel)]=\"newProduct.name\" name=\"productname\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"price\">Price</label>\n          <input type=\"text\" class=\"form-control\" id=\"price\" [(ngModel)]=\"newProduct.price\" name=\"price\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"ecological\">Ecological</label>\n          <select class=\"form-control\" name=\"ecological\" id=\"ecological\" [(ngModel)]=\"newProduct.ecological\">\n              <option value=\"\" disabled>-- Select an option --</option>\n              <option value=\"true\">Ecological</option>\n            <option value=\"false\">Non ecological</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"description\">Description</label>\n          <textarea class=\"form-control\" name=\"description\" id=\"description\" cols=\"30\" rows=\"10\" [(ngModel)]=\"newProduct.description\"></textarea>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-sm-2\">\n        <a class=\"btn btn-primary save-btn\" (click)=\"saveChanges()\">Save Changes</a>\n        <a class=\"btn btn-primary prof-btn\" [routerLink]=\"['/products']\">Back to Products</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/products/product-new/product-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductNewComponent = (function () {
    function ProductNewComponent(productService, authService, router) {
        this.productService = productService;
        this.authService = authService;
        this.router = router;
        this.newProduct = {};
    }
    ProductNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.getUser();
        this.authService.isLoggedIn()
            .subscribe(function (user) {
            _this.user = user;
            _this.newProduct = { producer: _this.user._id };
        });
    };
    ProductNewComponent.prototype.saveChanges = function () {
        var _this = this;
        this.productService.createNewProduct(this.newProduct)
            .subscribe(function () {
            _this.router.navigate(['/products']);
        });
    };
    return ProductNewComponent;
}());
ProductNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-product-new',
        template: __webpack_require__("../../../../../src/app/products/product-new/product-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/product-new/product-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ProductNewComponent);

var _a, _b, _c;
//# sourceMappingURL=product-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search{\n  width: 600px;\n}\n.card {\n  position: relative;\n  float: left;\n  /* width: 30%;\n  height: 100%; */\n  border: 2px solid #337ab7;\n  border-radius: 25px;\n  margin: 15px;\n  padding: 20px;\n}\n\n.incomplete {\n  text-align: center;\n}\n\n.new-product{\n  margin: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <div class=\"search-container\">\n    <div class=\"row\">\n      <div class=\"col-sm-2\"></div>\n      <div class=\"col-sm-8\">\n        <div *ngIf=\"user\" class=\"input-group\">\n          <div *ngIf=\"!user.userType\" class=\"alert alert-danger incomplete\" role=\"alert\">\n            <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n            User profile is incomplete\n          </div>\n          <div class=\"nav\">\n            <ul class=\"nav nav-tabs\">\n              <li role=\"presentation\">\n                <a [routerLink]=\"['/products']\">All products</a>\n              </li>\n              <li *ngIf=\"user.userType === 'provider'\" role=\"presentation\">\n                <a href=\"#\">My products</a>\n              </li>\n            </ul>\n          </div>\n          <input class=\"search form-control\" [(ngModel)]=\"searchInput\" placeholder=\"Search...\">\n        </div>\n      </div>\n      <div class=\"col-sm-2\">\n        <a *ngIf=\"user.userType === 'provider'\" [routerLink]=\"['/products', 'new']\" class=\"btn btn-primary new-product\">New Product</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"products\" *ngFor=\"let product of products | filter:'name':searchInput\">\n    <div class=\"col-sm-3\">\n        <div class=\"card-group\">\n            <div class=\"card\">\n              <div class=\"card-block\">\n                <img class=\"card-img-top\" src=\"http://4vector.com/i/free-vector-wheat-pattern-02-vector_022936_2.jpg\" alt=\"Product Image\"\n                  height=\"100\" width=\"100\">\n                <h4 class=\"card-title\">{{product.name}}</h4>\n                <p class=\"card-text\">{{product.description | truncate : 40}}</p>\n                <p class=\"card-text\">Producer: {{product.producer.username}}</p>\n                <p class=\"card-text\">Price: {{product.price}} &euro;</p>\n                <a class=\"btn btn-primary\" [routerLink]=\"['/products', product._id]\">Details</a>\n              </div>\n            </div>\n          </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsComponent = (function () {
    function ProductsComponent(productService, authService) {
        this.productService = productService;
        this.authService = authService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.getUser();
        this.authService.isLoggedIn()
            .subscribe(function (user) {
            _this.user = user;
            _this.productService.getList()
                .subscribe(function (p) { return _this.products = p; });
        });
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-products',
        template: __webpack_require__("../../../../../src/app/products/products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/products.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], ProductsComponent);

var _a, _b;
//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shopping_cart_shopping_cart_component__ = __webpack_require__("../../../../../src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_product_new_product_new_component__ = __webpack_require__("../../../../../src/app/products/product-new/product-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_product_edit_product_edit_component__ = __webpack_require__("../../../../../src/app/products/product-edit/product-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userprofile_user_details_user_details_component__ = __webpack_require__("../../../../../src/app/userprofile/user-details/user-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/products/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loginform_loginform_component__ = __webpack_require__("../../../../../src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signupform_signupform_component__ = __webpack_require__("../../../../../src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_isLoggedIn_canactivate_service__ = __webpack_require__("../../../../../src/app/services/isLoggedIn.canactivate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });











var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_7__userprofile_userprofile_component__["a" /* UserprofileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */]] },
    { path: 'user/profile', component: __WEBPACK_IMPORTED_MODULE_3__userprofile_user_details_user_details_component__["a" /* UserDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__loginform_loginform_component__["a" /* LoginformComponent */], },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_9__signupform_signupform_component__["a" /* SignupformComponent */], },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_5__products_products_component__["a" /* ProductsComponent */] },
    { path: 'products/new', component: __WEBPACK_IMPORTED_MODULE_1__products_product_new_product_new_component__["a" /* ProductNewComponent */] },
    { path: 'products/:id', component: __WEBPACK_IMPORTED_MODULE_4__products_product_detail_product_detail_component__["a" /* ProductDetailComponent */] },
    { path: 'products/:id/buy', component: __WEBPACK_IMPORTED_MODULE_0__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */] },
    { path: 'products/:id/edit', component: __WEBPACK_IMPORTED_MODULE_2__products_product_edit_product_edit_component__["a" /* ProductEditComponent */] },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BASEURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].BASEURL;
var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.userLoginEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.options = { withCredentials: true };
        this.isLoggedIn().subscribe();
    }
    AuthService.prototype.getLoginEventEmitter = function () {
        return this.userLoginEvent;
    };
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    AuthService.prototype.emitUserLoginEvent = function (user) {
        this.user = user;
        this.userLoginEvent.emit(user);
        return user;
    };
    AuthService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    AuthService.prototype.signup = function (username, password) {
        var _this = this;
        return this.http.post(BASEURL + "/signup", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .map(function () { return _this.router.navigate(['']); })
            .catch(this.handleError);
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(BASEURL + "/login", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .map(function () { return _this.router.navigate(['']); })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.router.navigate(['']);
        return this.http.get(BASEURL + "/logout", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(null); })
            .map(function () { return _this.router.navigate(['']); })
            .catch(this.handleError);
    };
    AuthService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.http.get(BASEURL + "/loggedin", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/isLoggedIn.canactivate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsLoggedInService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var timeout = function (nS) { return new Promise(function (resolve) { return setTimeout(resolve, nS * 1000); }); };
var IsLoggedInService = (function () {
    function IsLoggedInService(auth) {
        this.auth = auth;
    }
    IsLoggedInService.prototype.canActivate = function () {
        // return timeout(5).then(() => true);
        // return this.auth.isLoggedIn().map(user => true)
        return this.auth.getUser() ? true : false;
        // return false;
    };
    return IsLoggedInService;
}());
IsLoggedInService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], IsLoggedInService);

var _a;
//# sourceMappingURL=isLoggedIn.canactivate.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BASEURL = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].BASEURL + '/products';
var ProductsService = (function () {
    function ProductsService(http) {
        this.http = http;
    }
    ProductsService.prototype.getList = function () {
        return this.http.get(BASEURL + "/")
            .map(function (res) { return res.json(); });
    };
    ProductsService.prototype.getOne = function (id) {
        return this.http.get(BASEURL + "/" + id)
            .map(function (res) { return res.json(); });
    };
    ProductsService.prototype.createNewProduct = function (product) {
        return this.http.post(BASEURL + "/new", product)
            .map(function (res) { return res.json(); });
    };
    ProductsService.prototype.updateProduct = function (id, product) {
        return this.http.put(BASEURL + "/" + id + "/edit", product)
            .map(function (res) { return res.json(); });
    };
    ProductsService.prototype.deleteProduct = function (id) {
        return this.http.delete(BASEURL + "/" + id + "/delete")
            .map(function (res) { return res.json(); });
    };
    return ProductsService;
}());
ProductsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProductsService);

var _a;
//# sourceMappingURL=products.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/shoppingcart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingcartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BASEURL = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].BASEURL;
var ShoppingcartService = (function () {
    function ShoppingcartService(http) {
        this.http = http;
        this.shoppingCart = [];
        this.totAmount = 0;
    }
    ShoppingcartService.prototype.addProduct = function (product) {
        var _this = this;
        this.totAmount = 0;
        this.shoppingCart.push({
            product: product,
            quantity: 1
        });
        this.shoppingCart.forEach(function (e) {
            _this.totAmount += e.product.price * e.quantity;
        });
    };
    ShoppingcartService.prototype.getAmount = function () {
        return this.totAmount;
    };
    ShoppingcartService.prototype.getShoppingCard = function () {
        return this.shoppingCart;
    };
    ShoppingcartService.prototype.clear = function () {
        this.shoppingCart = [];
    };
    ShoppingcartService.prototype.deleteItem = function (id) {
        this.shoppingCart.splice(this.shoppingCart.map(function (e) { return e.product._id; }).indexOf(id), 1);
    };
    ShoppingcartService.prototype.saveShoppingCard = function () {
    };
    return ShoppingcartService;
}());
ShoppingcartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ShoppingcartService);

var _a;
//# sourceMappingURL=shoppingcart.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BASEURL = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].BASEURL + '/users';
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.editUser = function (id, user) {
        return this.http.put(BASEURL + "/" + id + "/edit", user)
            .map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/shopping-cart/shopping-cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bt {\n  width: 100%;\n  text-align: center;\n  margin: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping-cart/shopping-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"shoppingCartService.getShoppingCard().length > 0\">\n  <div class=\"row\">\n    <div class=\"col-sm-2\">\n      <h4>\n        <b>Total</b>: {{shoppingCartService.getAmount() | number:'1.2'}} &euro;</h4>\n    </div>\n    <div class=\"col-sm-8\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Product</th>\n            <th>Producer</th>\n            <th>Price</th>\n            <th>Quantity</th>\n            <th>Total</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let cart of shoppingCartService.getShoppingCard(); let i=index\">\n            <th>{{i + 1}}</th>\n            <th>{{cart.product.name}}</th>\n            <th>{{cart.product.producer.username}}</th>\n            <th>{{cart.product.price}} &euro;</th>\n            <th>\n              <input type=\"number\" [(ngModel)]=\"cart.quantity\"> &euro;\n            </th>\n            <th>{{cart.product.price * cart.quantity | number:'1.2'}} &euro;</th>\n            <th>\n              <button class=\"btn btn-danger\" (click)=\"shoppingCartService.deleteItem(cart.product._id)\">Delete</button>\n            </th>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"col-sm-2\">\n      <a class=\"btn btn-primary bt\" [routerLink]=\"['/']\">Buy</a>\n      <button (click)=\"clear()\" class=\"btn btn-warning bt\">Clear list</button>      \n      <a class=\"btn btn-primary bt\" [routerLink]=\"['/products']\">Product list</a>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"shoppingCartService.getShoppingCard().length == 0\">\n  <div class=\"col-sm-2\"></div>\n  <div class=\"col-sm-8\">\n    <h2>Your shopping card is empty</h2>\n  </div>\n  <div class=\"col-sm-2\">  \n    <a class=\"btn btn-primary\" [routerLink]=\"['/products']\">Product list</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shopping-cart/shopping-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shoppingcart_service__ = __webpack_require__("../../../../../src/app/services/shoppingcart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShoppingCartComponent = (function () {
    function ShoppingCartComponent(productService, routes, shoppingCartService, router) {
        this.productService = productService;
        this.routes = routes;
        this.shoppingCartService = shoppingCartService;
        this.router = router;
        this.amount = 0;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shoppingCartService.getAmount();
        this.routes.params.subscribe(function (params) {
            _this.getProductDetails(params['id']);
        });
    };
    ShoppingCartComponent.prototype.getProductDetails = function (id) {
        var _this = this;
        this.productService.getOne(id)
            .subscribe(function (product) {
            _this.product = product;
        });
    };
    ShoppingCartComponent.prototype.clear = function () {
        this.shoppingCartService.clear();
    };
    return ShoppingCartComponent;
}());
ShoppingCartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-shopping-cart',
        template: __webpack_require__("../../../../../src/app/shopping-cart/shopping-cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping-cart/shopping-cart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_shoppingcart_service__["a" /* ShoppingcartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_shoppingcart_service__["a" /* ShoppingcartService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ShoppingCartComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=shopping-cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-2\"></div>\n    <div class=\"col-sm-8\">\n      <div *ngIf=\"message\" class=\"alert alert-danger\" role=\"alert\">\n        <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Error:</span>\n        {{message}}\n      </div>\n      <form class=\"form-horizontal\">\n        <div class=\"form-group\">\n          <label for=\"username\" class=\"col-sm-2 control-label\">User name</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"formInfo.username\" name=\"username\" placeholder=\"User name\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\" class=\"col-sm-2 control-label\">Password</label>\n          <div class=\"col-sm-10\">\n            <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\" placeholder=\"Password\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-sm-offset-2 col-sm-10\">\n            <button type=\"submit\" class=\"btn btn-default\" (click)=\"signup()\"> Signup</button>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-sm-2\"></div>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupformComponent = (function () {
    function SignupformComponent(auth) {
        this.auth = auth;
        this.formInfo = {
            username: "",
            password: ""
        };
    }
    SignupformComponent.prototype.ngOnInit = function () {
    };
    SignupformComponent.prototype.signup = function () {
        var _a = this.formInfo, username = _a.username, password = _a.password;
        if (username != "" && password != "") {
            console.log("Signup with " + username + " " + password);
            this.auth.signup(username, password)
                .map(function (user) { return console.log(user); })
                .subscribe();
        }
        else {
            console.log("You must set a username and a password");
        }
    };
    return SignupformComponent;
}());
SignupformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signupform',
        template: __webpack_require__("../../../../../src/app/signupform/signupform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signupform/signupform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], SignupformComponent);

var _a;
//# sourceMappingURL=signupform.component.js.map

/***/ }),

/***/ "../../../../../src/app/userprofile/user-details/user-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".save-btn{\n  margin: 10px;\n}\n\n.prof-btn{\n  margin: 10px;\n}\n\n.edit-user {\n  margin-top: 25px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userprofile/user-details/user-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!user\">\n  <h2>No user logged in</h2>\n</div>\n\n<div *ngIf=\"user\">\n  <div class=\"row edit-user\">\n    <div class=\"col-sm-2\">\n      <img class=\"img-circle\" src=\"{{user.image}}\" alt=\"Profile image not found\"  height=\"150\" width=\"150\">\n      <hr>\n      <h4><b>Username</b> {{ user.username }}</h4>\n    </div>\n    <div class=\"col-sm-8\">\n      <form novalidate>\n        <div class=\"form-group\">\n          <label>Username</label>\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"editUser.username\" name=\"username\" required>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label>First Name</label>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"editUser.firstName\" name=\"firstname\" required>\n          </div>\n          <div class=\"form-group\">\n            <label>Email</label>\n            <input class=\"form-control\" type=\"email\" [(ngModel)]=\"editUser.email\" name=\"email\" required>\n          </div>\n          <div class=\"form-group\">\n            <label>Phone number</label>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"editUser.phoneNumber\" name=\"phonenumber\" required>\n          </div>\n          <div class=\"form-group\">\n            <label>Company Name</label>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"editUser.companyName\" name=\"companyname\"  required>\n          </div>\n          <div *ngIf=\"user.userType === 'provider'\" class=\"form-group\">\n            <label>Season Starts</label>\n            <input class=\"form-control\" type=\"date\" [(ngModel)]=\"editUser.seasonStarts\" name=\"seasonstarts\">\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"form-group\">\n            <label>Last Name</label>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"editUser.lastName\" name=\"lastName\"  required>\n          </div>\n          <div class=\"form-group\">\n            <label>Address</label>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"editUser.address\" name=\"address\"  required>\n          </div>\n          <div class=\"form-group\">\n            <label>User Type</label>\n            <select name=\"usertype\" [(ngModel)]=\"editUser.userType\" class=\"form-control\">\n              <option value=\"provider\" disabled>User Type: {{user.userType}}</option>\n              <option value=\"provider\">Provider</option>\n              <option value=\"client\">Client</option>\n            </select>\n          </div>\n          <div *ngIf=\"user.userType == 'provider'\" class=\"form-group\">\n            <label>Production Type</label>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"editUser.productionType\" name=\"productionType\"  required>\n          </div>\n          <div *ngIf=\"user.userType === 'provider'\" class=\"form-group\">\n            <label>Season Ends</label>\n            <input class=\"form-control\" type=\"date\" [(ngModel)]=\"editUser.seasonEnds\" name=\"seasonends\">\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-sm-2\">\n      <a class=\"btn btn-primary bt\" (click)=\"saveChanges()\">Save Changes</a>\n      <a class=\"btn btn-primary bt\" [routerLink]=\"['/user']\">Back to Profile</a>      \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/userprofile/user-details/user-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDetailsComponent = (function () {
    function UserDetailsComponent(auth, usrService, router) {
        this.auth = auth;
        this.usrService = usrService;
        this.router = router;
        this.editUser = {
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            phoneNumber: 0,
            companyName: '',
            productionType: '',
            userType: '',
            seasonStarts: '',
            seasonEnds: ''
        };
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.getUser();
        this.auth.isLoggedIn()
            .subscribe(function (user) {
            _this.editUser = {
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                address: user.address,
                phoneNumber: user.phoneNumber,
                companyName: user.companyName,
                productionType: user.productionType,
                userType: user.userType,
                seasonStarts: user.seasonStarts,
                seasonEnds: user.seasonEnds
            };
        });
    };
    UserDetailsComponent.prototype.saveChanges = function () {
        var _this = this;
        this.usrService.editUser(this.user._id, this.editUser)
            .subscribe(function () {
            _this.router.navigate(['/user']);
        });
    };
    return UserDetailsComponent;
}());
UserDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-user-details',
        template: __webpack_require__("../../../../../src/app/userprofile/user-details/user-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userprofile/user-details/user-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object])
], UserDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=user-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n  font-size: 20px !important;\n}\n\n.user-perf{\n  margin: 20px;\n}\n\n.prof-btn{\n  margin: 10px;\n}\n\n/* .panel-footer {\n  text-align: center !important;\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!user\">\n  <h2>No user logged in</h2>\n</div>\n\n<div *ngIf=\"user\">\n  <div class=\"row user-perf\">\n    <div class=\"col-sm-2\">\n      <img class=\"img-circle\" src=\"{{user.image}}\" alt=\"Profile image not found\" height=\"150\" width=\"150\">\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-body\">\n          <h2>User \n            <b>{{user.username}}</b>\n          </h2>\n        </div>\n        <div class=\"panel-footer\">\n          <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <p *ngIf=\"user.firstName && user.lastName\"><b>Name</b> {{user.firstName}} {{user.lastName}}</p>\n                <p *ngIf=\"!user.firstName && !user.lastName\"><b>Name</b> Not specified</p>\n                <p *ngIf=\"user.phoneNumber\"><b>Phone Number</b> {{user.phoneNumber}}</p>\n                <p *ngIf=\"!user.phoneNumber\"><b>Phone Number</b> Not specified</p>\n                <p *ngIf=\"user.productionType && user.userType === 'provider'\"><b>Production Type</b> {{user.productionType}}</p>\n                <p *ngIf=\"!user.productionType && user.userType === 'provider'\"><b>Production Type</b> Not specified</p>                \n            </div>\n            <div class=\"col-sm-4\">\n              <p *ngIf=\"user.email\"><b>Email</b> {{user.email}}</p>\n              <p *ngIf=\"!user.email\"><b>Email</b> Not specified</p>\n              <p *ngIf=\"user.userType\"><b>User Type</b> {{user.userType}}</p>\n              <p *ngIf=\"!user.userType\"><b>User Type</b> Not specified</p>\n              <p *ngIf=\"user.seasonStarts && user.userType === 'provider'\"><b>Season Starts</b> {{user.seasonStarts | date:'shortDate' }}</p>\n              <p *ngIf=\"!user.seasonStarts && user.userType === 'provider'\"><b>Season Starts</b> Not specified</p>\n            </div>\n            <div class=\"col-sm-4\">\n              <p *ngIf=\"user.address\"><b>Address </b> {{user.address}}</p>\n              <p *ngIf=\"!user.address\"><b>Address </b> Not specified</p>\n              <p *ngIf=\"user.companyName\"><b>Company Name</b> {{user.companyName}}</p>\n              <p *ngIf=\"!user.companyName\"><b>Company Name</b> Not specified</p>\n              <p *ngIf=\"user.seasonEnds && user.userType === 'provider'\"><b>Season Ends</b> {{user.seasonEnds | date:'shortDate' }}</p>\n              <p *ngIf=\"!user.seasonEnds && user.userType === 'provider'\"><b>Season Ends</b> Not specified</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-2\">\n      <a class=\"btn btn-primary bt\" [routerLink]=\"['/user', 'profile']\">User profile</a>\n      <a class=\"btn btn-primary bt\" [routerLink]=\"['']\">Back to Home</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserprofileComponent = (function () {
    function UserprofileComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.auth.isLoggedIn()
            .subscribe(function (user) { return _this.user = user; });
    }
    UserprofileComponent.prototype.ngOnInit = function () {
    };
    return UserprofileComponent;
}());
UserprofileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userprofile',
        template: __webpack_require__("../../../../../src/app/userprofile/userprofile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userprofile/userprofile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], UserprofileComponent);

var _a;
//# sourceMappingURL=userprofile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    BASEURL: 'http://localhost:3000/api'
};
// export const environment = {
//   production: true,
//   BASEURL: ''
// };
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map