import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CheckoutComponent } from "./components/checkout/checkout.component";
import { OrderConfirmationComponent } from "./components/order-confirmation/order-confirmation.component";
import { StoreFrontComponent } from "./components/store-front/store-front.component";
import { PopulatedCartRouteGuard } from "./route-gaurds/populated-cart.route-gaurd";

import { MissionComponent } from './components/mission/mission.component';

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot([
            {
                canActivate: [PopulatedCartRouteGuard],
                component: CheckoutComponent,
                path: "checkout"
            },
            {
                canActivate: [PopulatedCartRouteGuard],
                component: OrderConfirmationComponent,
                path: "confirmed"
            },
            {
                component: StoreFrontComponent,
                path: ""
            },
            {
                component: MissionComponent,
                path: "mission"
            },
        ])
    ]
})
export class AppRoutingModule { }
