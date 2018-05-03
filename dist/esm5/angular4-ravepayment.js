import { Component, Input, EventEmitter, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RavepaymentComponent = /** @class */ (function () {
    function RavepaymentComponent() {
        this.callback = new EventEmitter();
        this.close = new EventEmitter();
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
    { type: Component, args: [{
                selector: 'rave-pay-button',
                template: "<button\n    class=\"paystack-pay-button\"\n    [ngStyle]=\"style\"\n    [ngClass]=\"className\"\n    (click)=\"madePayment()\">\n        {{text || 'Pay'}}\n</button>",
                styles: ["h1{\n    color:red;\n}"]
            },] },
];
/** @nocollapse */
RavepaymentComponent.ctorParameters = function () { return []; };
RavepaymentComponent.propDecorators = {
    "text": [{ type: Input },],
    "style": [{ type: Input },],
    "className": [{ type: Input },],
    "callback": [{ type: Output },],
    "close": [{ type: Output },],
    "key": [{ type: Input },],
    "email": [{ type: Input },],
    "amount": [{ type: Input },],
    "reference": [{ type: Input },],
    "meta": [{ type: Input },],
    "currency": [{ type: Input },],
    "country": [{ type: Input },],
    "customer_firstname": [{ type: Input },],
    "customer_lastname": [{ type: Input },],
    "custom_title": [{ type: Input },],
    "custom_description": [{ type: Input },],
    "custom_logo": [{ type: Input },],
    "payment_method": [{type: Input },],
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
    { type: NgModule, args: [{
                imports: [
                    CommonModule
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
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */
export { RavepaymentModule, RavepaymentComponent as ɵa };
//# sourceMappingURL=angular4-ravepayment.js.map
