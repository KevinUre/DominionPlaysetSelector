import { Component, OnInit } from "@angular/core";

import { DominionCard, AllCards } from "../../models/card";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "ns-card-list-debug",
    templateUrl: "./card-list-debug.component.html"
})
export class CardListDebugComponent implements OnInit {
    cards: DominionCard[];

    constructor() { }

    ngOnInit(): void {
        this.cards = AllCards;
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
