import { Component, OnInit } from "@angular/core";
import { ListView, ItemEventData } from "tns-core-modules/ui/list-view";

import { DominionCard, AllCards } from "../../models/card";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-card-list-debug",
    templateUrl: "./card-list-debug.component.html"
})
export class CardListDebugComponent implements OnInit {
    cards: DominionCard[];

    constructor(
        private routerExtensions: RouterExtensions) { }

    ngOnInit(): void {
        this.cards = AllCards;
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    itemTapped(args: ItemEventData): void {
        this.routerExtensions.navigate(['/cardViewDebug', this.cards[args.index].Name]);
    }
}
