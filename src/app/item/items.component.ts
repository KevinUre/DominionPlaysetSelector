import { Component, OnInit } from "@angular/core";

import { ItemService } from "./item.service";
import { DominionCard, AllCards } from "../models/card";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
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
