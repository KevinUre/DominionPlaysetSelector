import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { CardListDebugComponent } from "./pages/card-list-debug/card-list-debug.component";
import { CardDetailsDebugComponent } from "./pages/card-details-debug/card-details-debug.component";
import { GeneratorComponent } from "./pages/generator/generator.component";

const routes: Routes = [
    { path: "", redirectTo: "/generator", pathMatch: "full" },
    { path: "cardListDebug", component: CardListDebugComponent },
    { path: "generator", component: GeneratorComponent },
    { path: "cardViewDebug/:id", component: CardDetailsDebugComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
