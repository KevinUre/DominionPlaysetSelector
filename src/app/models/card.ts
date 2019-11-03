import { CardType } from '../constants/card-type'
import { ExpansionSet } from '../constants/sets';

export class DominionCard {
    public constructor (
        public Name: string,
        public Set: ExpansionSet,
        public Cost: number,
        public CardTypes: CardType[],
    ) {}

    public get DisplayName(): string {
        let pascalCase:string = this.Name.split(':')[1];
        let withSpaces = pascalCase.replace(/([A-Z])/, ' $1');
        return withSpaces.trim();
    }

    public get DisplayTypes(): string[] {
        return this.CardTypes.map<string>( (type) => {
            let pascalCase:string = type.split(':')[1];
            let withSpaces = pascalCase.replace(/([A-Z])/g, ' $1');
            return withSpaces.trim();
        });
    }

    public get DisplaySet(): string {
        let pascalCase:string = this.Set.split(':')[1];
        let withSpaces = pascalCase.replace(/([A-Z])/, ' $1');
        return withSpaces.trim() + ' Set';
    }
}

export const AllCards: DominionCard[] = [
    new DominionCard(
        "Name:Cellar",
        ExpansionSet.Base,
        2,
        [CardType.Action]
    ),
    new DominionCard(
        "Name:Chapel",
        ExpansionSet.Base,
        2,
        [CardType.Action]
    ),
    new DominionCard(
        "Name:Moat",
        ExpansionSet.Base,
        2,
        [CardType.Action, CardType.Reaction]
    ),
    new DominionCard(
        "Name:Harbinger",
        ExpansionSet.Base,
        3,
        [CardType.Action]
    ),
    new DominionCard(
        "Name:Merchant",
        ExpansionSet.Base,
        3,
        [CardType.Action]
    ),
    new DominionCard(
        "Name:Vassal",
        ExpansionSet.Base,
        3,
        [CardType.Action]
    ),
    new DominionCard(
        "Name:Village",
        ExpansionSet.Base,
        3,
        [CardType.Action]
    ),
    new DominionCard(
        "Name:Workshop",
        ExpansionSet.Base,
        3,
        [CardType.Action]
    ),
    new DominionCard(
        "Name:Bureaucrat",
        ExpansionSet.Base,
        4,
        [CardType.Action, CardType.Attack]
    ),
    new DominionCard(
        "Name:Gardens",
        ExpansionSet.Base,
        4,
        [CardType.Victory]
    ),
    new DominionCard(
        "Name:Militia",
        ExpansionSet.Base,
        4,
        [CardType.Action, CardType.Attack]
    ),
    new DominionCard(
        "Name:Moneylender",
        ExpansionSet.Base,
        4,
        [CardType.Action, CardType.Attack]
    ),
    new DominionCard(
        "Name:Poacher",
        ExpansionSet.Base,
        4,
        [CardType.Action]
    ),
    new DominionCard(
        "Name:Remodel",
        ExpansionSet.Base,
        4,
        [CardType.Action]
    ),
    new DominionCard(
        "Name:Smithy",
        ExpansionSet.Base,
        4,
        [CardType.Action]
    ),
    new DominionCard(
        "Name:ThroneRoom",
        ExpansionSet.Base,
        4,
        [CardType.Action]
    ),
    new DominionCard(
        "Name:Bandit",
        ExpansionSet.Base,
        5,
        [CardType.Action, CardType.Attack]
    ),
    new DominionCard(
        "Name:CouncilRoom",
        ExpansionSet.Base,
        5,
        [CardType.Action]
    ),
    new DominionCard(
        "Name:Festival",
        ExpansionSet.Base,
        5,
        [CardType.Action]
    ),
    new DominionCard(
        "Name:Laboratory",
        ExpansionSet.Base,
        5,
        [CardType.Action]
    ),
    new DominionCard(
        "Name:Library",
        ExpansionSet.Base,
        5,
        [CardType.Action]
    ),
    new DominionCard(
        "Name:Market",
        ExpansionSet.Base,
        5,
        [CardType.Action]
    ),
    new DominionCard(
        "Name:Mine",
        ExpansionSet.Base,
        5,
        [CardType.Action]
    ),
    new DominionCard(
        "Name:Sentry",
        ExpansionSet.Base,
        5,
        [CardType.Action]
    ),
    new DominionCard(
        "Name:Witch",
        ExpansionSet.Base,
        5,
        [CardType.Action, CardType.Attack]
    ),
    new DominionCard(
        "Name:Artisan",
        ExpansionSet.Base,
        6,
        [CardType.Action]
    ),
]
