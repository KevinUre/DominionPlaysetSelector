import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { CardListDebugComponent } from "./pages/card-list-debug/card-list-debug.component";
import { CardDetailsDebugComponent } from "./pages/card-details-debug/card-details-debug.component";

const routes: Routes = [
    { path: "", redirectTo: "/cardListDebug", pathMatch: "full" },
    { path: "cardListDebug", component: CardListDebugComponent },
    { path: "cardViewDebug/:id", component: CardDetailsDebugComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
