import { ExpansionSet, CardType, ActionEconomy, Draws, MiscAbilities } from "../constants/card-attributes";
import { Relationship } from './relationship'
export class DominionCard {
    public constructor (
        public Name: string,
        public Set: ExpansionSet,
        public Cost: number,
        public CardTypes: CardType[],
        public ActionEconomy: ActionEconomy,
        public Effects: string[],
        public Relationships: Relationship[] = [],
        public BaseInterestWeight: number = 1
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

    public get AllAttributes(): string[] {
        let workingSet: string[] = [];
        workingSet.push(this.Name);
        this.CardTypes.forEach((t) => { workingSet.push(t)});
        workingSet.push(this.ActionEconomy);
        this.Effects.forEach((e) => { workingSet.push(e)});
        return workingSet;
    }
}



export const AllCards: DominionCard[] = [
    new DominionCard(
        "Name:Cellar",
        ExpansionSet.Base,
        2,
        [CardType.Action],
        ActionEconomy.Sustaining,
        [Draws.ReplaceSeveral],
        [ new Relationship([MiscAbilities.WhenDiscardedAbility]) ]
    ),
    new DominionCard(
        "Name:Chapel",
        ExpansionSet.Base,
        2,
        [CardType.Action],
        ActionEconomy.Terminating,
        [MiscAbilities.Trash],
        [],
        -1
    ),
    new DominionCard(
        "Name:Moat",
        ExpansionSet.Base,
        2,
        [CardType.Action, CardType.Reaction],
        ActionEconomy.Terminating,
        [Draws.AddSeveral],
        [
            new Relationship([CardType.Attack]),
            new Relationship([ActionEconomy.Propagating]),
        ]
    ),
    new DominionCard(
        "Name:Harbinger",
        ExpansionSet.Base,
        3,
        [CardType.Action],
        ActionEconomy.Sustaining,
        [Draws.ReplaceSelf, MiscAbilities.OrganizeDeck],
        [ new Relationship([Draws.Any]) ]
    ),
    new DominionCard(
        "Name:Merchant",
        ExpansionSet.Base,
        3,
        [CardType.Action],
        ActionEconomy.Sustaining,
        [Draws.ReplaceSelf, MiscAbilities.GainMoney]
    ),
    new DominionCard(
        "Name:Vassal",
        ExpansionSet.Base,
        3,
        [CardType.Action],
        ActionEconomy.Terminating,
        [MiscAbilities.GainMoney]
    ),
    new DominionCard(
        "Name:Village",
        ExpansionSet.Base,
        3,
        [CardType.Action],
        ActionEconomy.Propagating,
        [Draws.ReplaceSelf]
    ),
    new DominionCard(
        "Name:Workshop",
        ExpansionSet.Base,
        3,
        [CardType.Action],
        ActionEconomy.Terminating,
        [MiscAbilities.Buys, MiscAbilities.GainMoney]
    ),
    new DominionCard(
        "Name:Bureaucrat",
        ExpansionSet.Base,
        4,
        [CardType.Action, CardType.Attack],
        ActionEconomy.Terminating,
        [MiscAbilities.GainACard]
    ),
    new DominionCard(
        "Name:Gardens",
        ExpansionSet.Base,
        4,
        [CardType.Victory],
        ActionEconomy.NotAnAction,
        []
    ),
    new DominionCard(
        "Name:Militia",
        ExpansionSet.Base,
        4,
        [CardType.Action, CardType.Attack],
        ActionEconomy.Terminating,
        [MiscAbilities.GainMoney]
    ),
    new DominionCard(
        "Name:Moneylender",
        ExpansionSet.Base,
        4,
        [CardType.Action, CardType.Attack],
        ActionEconomy.Terminating,
        [MiscAbilities.Trash, MiscAbilities.GainMoney]
    ),
    new DominionCard(
        "Name:Poacher",
        ExpansionSet.Base,
        4,
        [CardType.Action],
        ActionEconomy.Sustaining,
        [Draws.ReplaceSelf, MiscAbilities.GainMoney, MiscAbilities.DiscardFromHand]
    ),
    new DominionCard(
        "Name:Remodel",
        ExpansionSet.Base,
        4,
        [CardType.Action],
        ActionEconomy.Terminating,
        [MiscAbilities.Trash, MiscAbilities.GainACard]
    ),
    new DominionCard(
        "Name:Smithy",
        ExpansionSet.Base,
        4,
        [CardType.Action],
        ActionEconomy.Terminating,
        [Draws.AddSeveral]
    ),
    new DominionCard(
        "Name:ThroneRoom",
        ExpansionSet.Base,
        4,
        [CardType.Action],
        ActionEconomy.Terminating,
        []
    ),
    new DominionCard(
        "Name:Bandit",
        ExpansionSet.Base,
        5,
        [CardType.Action, CardType.Attack],
        ActionEconomy.Terminating,
        [MiscAbilities.GainACard]
    ),
    new DominionCard(
        "Name:CouncilRoom",
        ExpansionSet.Base,
        5,
        [CardType.Action],
        ActionEconomy.Terminating,
        [Draws.AddSeveral, MiscAbilities.Buys]
    ),
    new DominionCard(
        "Name:Festival",
        ExpansionSet.Base,
        5,
        [CardType.Action],
        ActionEconomy.Propagating,
        [MiscAbilities.Buys, MiscAbilities.GainMoney]
    ),
    new DominionCard(
        "Name:Laboratory",
        ExpansionSet.Base,
        5,
        [CardType.Action],
        ActionEconomy.Sustaining,
        [Draws.AddSeveral]
    ),
    new DominionCard(
        "Name:Library",
        ExpansionSet.Base,
        5,
        [CardType.Action],
        ActionEconomy.Terminating,
        [Draws.AddSeveral]
    ),
    new DominionCard(
        "Name:Market",
        ExpansionSet.Base,
        5,
        [CardType.Action],
        ActionEconomy.Sustaining,
        [Draws.ReplaceSelf, MiscAbilities.Buys, MiscAbilities.GainMoney]
    ),
    new DominionCard(
        "Name:Mine",
        ExpansionSet.Base,
        5,
        [CardType.Action],
        ActionEconomy.Terminating,
        [MiscAbilities.Trash, MiscAbilities.GainACard]
    ),
    new DominionCard(
        "Name:Sentry",
        ExpansionSet.Base,
        5,
        [CardType.Action],
        ActionEconomy.Sustaining,
        [Draws.ReplaceSelf, MiscAbilities.OrganizeDeck]
    ),
    new DominionCard(
        "Name:Witch",
        ExpansionSet.Base,
        5,
        [CardType.Action, CardType.Attack],
        ActionEconomy.Terminating,
        [Draws.AddSeveral]
    ),
    new DominionCard(
        "Name:Artisan",
        ExpansionSet.Base,
        6,
        [CardType.Action],
        ActionEconomy.Terminating,
        [MiscAbilities.GainACard, MiscAbilities.OrganizeDeck]
    ),
]
