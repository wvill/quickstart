"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var angular2_modal_1 = require("angular2-modal");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var home_components_1 = require("./home.components");
var MODAL_PROVIDERS = [
    bootstrap_1.Modal,
    angular2_modal_1.Overlay,
    { provide: angular2_modal_1.OverlayRenderer, useClass: angular2_modal_1.DOMOverlayRenderer }
];
var HomesModule = (function () {
    function HomesModule() {
    }
    return HomesModule;
}());
HomesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            forms_1.FormsModule,
            angular2_modal_1.ModalModule.forRoot(),
            bootstrap_1.BootstrapModalModule,
        ],
        declarations: [home_components_1.HOME_COMPONENTS],
        exports: [home_components_1.HOME_COMPONENTS],
        entryComponents: [],
        providers: [MODAL_PROVIDERS]
    })
], HomesModule);
exports.HomesModule = HomesModule;
//# sourceMappingURL=home.module.js.map