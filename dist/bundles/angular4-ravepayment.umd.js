(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['angular4-ravepayment'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RavepaymentComponent = /** @class */ (function () {
    function RavepaymentComponent() {
        this.callback = new core.EventEmitter();
        this.close = new core.EventEmitter();
    }
    /**
     * @return {?}
     */
    RavepaymentComponent.prototype.ngOnInit = function () { };
    /**
     * @return {?}
     */
    RavepaymentComponent.prototype.madePayment = function () {
        this.prepRaveOptions();
        window.getpaidSetup(this.raveOptions);
    };
    /**
     * @return {?}
     */
    RavepaymentComponent.prototype.prepRaveOptions = function () {
        var _this = this;
        this.raveOptions = {
            PBFPubKey: this.key,
            txref: this.reference,
            amount: this.amount,
            customer_email: this.email,
            onclose: function () { return _this.close.emit(); },
            callback: function (response) { return _this.callback.emit(response); },
            currency: this.currency || 'NGN',
            country: this.country || 'NG',
            customer_firstname: this.customer_firstname || '',
            customer_lastname: this.customer_lastname || '',
            custom_title: this.custom_title || '',
            custom_description: this.custom_description || '',
            custom_logo: this.custom_logo || '',
            meta: this.meta || {},
            payment_method: this.payment_method || 'both'
        };
    };
    return RavepaymentComponent;
}());
RavepaymentComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'rave-pay-button',
                template: "<button\n    class=\"paystack-pay-button\"\n    [ngStyle]=\"style\"\n    [ngClass]=\"className\"\n    (click)=\"madePayment()\">\n        {{text || 'Pay'}}\n</button>",
                styles: ["h1{\n    color:red;\n}"]
            },] },
];
/** @nocollapse */
RavepaymentComponent.ctorParameters = function () { return []; };
RavepaymentComponent.propDecorators = {
    "text": [{ type: core.Input },],
    "style": [{ type: core.Input },],
    "className": [{ type: core.Input },],
    "callback": [{ type: core.Output },],
    "close": [{ type: core.Output },],
    "key": [{ type: core.Input },],
    "email": [{ type: core.Input },],
    "amount": [{ type: core.Input },],
    "reference": [{ type: core.Input },],
    "meta": [{ type: core.Input },],
    "currency": [{ type: core.Input },],
    "country": [{ type: core.Input },],
    "customer_firstname": [{ type: core.Input },],
    "customer_lastname": [{ type: core.Input },],
    "custom_title": [{ type: core.Input },],
    "custom_description": [{ type: core.Input },],
    "custom_logo": [{ type: core.Input },],
    "payment_method": [{type: core.Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RavepaymentModule = /** @class */ (function () {
    function RavepaymentModule() {
    }
    return RavepaymentModule;
}());
RavepaymentModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    RavepaymentComponent
                ],
                exports: [
                    RavepaymentComponent
                ]
            },] },
];
/** @nocollapse */
RavepaymentModule.ctorParameters = function () { return []; };

exports.RavepaymentModule = RavepaymentModule;
exports.ɵa = RavepaymentComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular4-ravepayment.umd.js.map
