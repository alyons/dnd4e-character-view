const blinded = {
    name: 'Blinded',
    effects: [
        'You grant combat advantage.',
        'You can\'t see any target (your targets have total concealment).',
        'You take a -10 penalty to Perception checks.',
        'You can\'t flank an enemy.'
    ]
};
const dazed = {
    name: 'Dazed',
    effects: [
        'You grant combat advantage.',
        'You can take either a standard action, a move action, or a minor action on your turn (you can also take free actions). You can\'t take imeediate actions or opportunity actions.',
        'You can\'t flank the enemy.'
    ]
};
const deafened = {
    name: 'Deafened',
    effects: [
        'You can\'t hear anything',
        'You take a -10 penalty to Perception checks'
    ]
};
const dominated = {
    name: 'Dominated',
    effects: [
        'You can\'t take actions. Instead, the dominator chooses a single action for you to take on your turn (standard, move, minor or free). The dominator may only choose powers or game features that can be used at-will, such as at-will powers. Anything with a limited used once per encounter or once per day doesn\'t qualify.',
        'You grant combat advantage.',
        'You can\'t flank.',
        'Despite this condition, the dominated creature\'s allies remain allies, and its enemies remain enemies.',
        'If the dominator tries to force the creature into a pit or other hindering terrain, the creature gets a saving throw to avoid entering the terrain.'
    ]
};
const dying = {
    name: 'Dying',
    effects: [
        'The creature is unconscious.',
        'The creature makes a death saving throw every round. Failing three death saving throws before a rest results in death, as does reaching the negative bloodied value in hit points.',
        'The condition ends as soon as the creature receives healing. (The character is conscious, but remains prone.)'
    ]
};
const grabbed = {
    name: 'Dazed',
    effects: []
};
const helpless = {
    name: 'Dazed',
    effects: []
};
const immobilized = {
    name: 'Dazed',
    effects: []
};
const marked = {
    name: 'Dazed',
    effects: []
};
const petrified = {
    name: 'Dazed',
    effects: []
};
const prone = {
    name: 'Dazed',
    effects: []
};
const removedFromPlay = {
    name: 'Dazed',
    effects: []
};
const restrained = {
    name: 'Dazed',
    effects: []
};
const slowed = {
    name: 'Dazed',
    effects: []
};
const stunned = {
    name: 'Stunned',
    effects: [
        'You grant combat advantage',
        'You can\'t take actions',
        'You can\'t flank an enemy',
        'You fall if you are flying, unless you can hover'
    ]
};
const suprised = {
    name: 'Dazed',
    effects: []
};
const unconscious = {
    name: 'Dazed',
    effects: []
};
const weakened = {
    name: 'Dazed',
    effects: []
};


module.exports = [
    blinded,
    dazed,
    deafened,
    dominated,
    dying,
    stunned
];
