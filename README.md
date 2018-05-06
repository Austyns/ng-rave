# Rave Payment Component for Angular 2 and ionic2

#### Original project can be found here: https://github.com/iamraphson/angular4-ravepayment


### Get Started

This AngularJS library provides a wrapper to add RavePay Payment to your AngularJS application

### Install
```bash
npm install git+https://git@github.com/Austyns/ng-rave.git --save
```

reference rave script in your index.html file 

```bash
  <script src="//rave-api-v2.herokuapp.com/flwv3-pug/getpaidx/api/flwpbf-inline.js"></script>
```


### Usage

import moddule to app.module.ts file
```bash
...
import { RavepaymentModule } from 'angular4-ravepayment';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...,
    RavepaymentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

Use in required component 

```bash
  
    <rave-pay-button
        [text]="'Pay with Rave'"
        [className]="'pay_button'"
        (callback)="paymentDone($event)"
        (close)="paymentCancel()"
        [key]="'FLWPUBK-whatever-your-key-is-X'"
        [reference]="topup.trans_id"
        [amount]="topup.topup_amount"
        [email]="agentInfo.email"
        [class]="'pay_button'"
        [payment_method]="'account'"
        [custom_title]="'Transaction Fullfilment'"
    ></rave-pay-button >

```
checkout https://flutterwavedevelopers.readme.io for more


@austyns
Austine Iyke.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
