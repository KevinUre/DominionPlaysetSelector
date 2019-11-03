import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { DominionCard, AllCards } from "../models/card";

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    card: DominionCard;

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params.id;
        this.card = AllCards.find(c => c.Name === id);
    }
}
