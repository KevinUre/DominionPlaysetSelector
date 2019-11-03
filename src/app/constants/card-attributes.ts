export const enum ActionEconomy {
    NotAnAction = "Action:NotAnAction",
    Terminating = "Action:Terminating",
    Sustaining = "Action:Sustaining",
    Propagating  = "Action:Propagating",
}

export const enum CardType {
    Action = "Type:Action",
    Treasure = "Type:Treasure",
    Reaction = "Type:Reaction",
    Attack = "Type:Attack",
    Victory = "Type:Victory",
}

export const enum ExpansionSet {
    Base = "Set:Base",
    Intrigue = "Set:Intrigue",
    Seaside = "Set:Seaside",
    Prosperity = "Set:Prosperity",
    Cornucopia = "Set:Cornucopia",
    Hinterlands = "Set:Hinterlands",
    DarkAges = "Set:DarkAges",
}

export const enum Draws {
    ReplaceSelf = "Draw:ReplaceSelf",
    AddSeveral = "Draw:AddSeveral",
    ReplaceSeveral = "Draw:ReplaceSeveral",
}

export const enum MiscAbilities {
    DiscardFromHand = "Ability:DiscardFromHand",
    Trash = "Ability:Trash",
    Buys = "Ability:Buys",
    WhenDiscardedAbility = "Ability:WhenDiscardedAbility",
    WhenTrashedAbility = "Ability:WhenTrashedAbility",
    GainACard = "Ability:GainACard",
    GainMoney = "Ability:GainMoney",
    GainVictoryTokens = "Ability:GainVictoryTokens",
    OrganizeDeck = "Ability:OrganizeDeck"
}
