import { Component, OnInit } from "@angular/core";

import { ItemService } from "./item.service";
import { DominionCard, AllCards } from "../models/card";

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
}
