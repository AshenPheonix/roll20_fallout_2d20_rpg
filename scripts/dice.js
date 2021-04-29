var FalloutDieRoller = FalloutDieRoller || {};

FalloutDieRoller.toHit = (person, tag, hit, complication=20, rolls=2) => {
    const hits = [];
    const complications = 0;
    for (let count = 0; count < rolls; count++) {
        const roll = _.random(20);
        if (tag>0 && roll<tag) {
            hits.push(2);
        } else if (roll<hit) {
            hits.push(1);
        } else if (roll >= complication){
            complications++;
            hits.push(0);
        } else {
            hits.push(0);
        }
    }
    sendChat(person, `&{template} {{name=To Hit}} {{Rolls = ${hits.join(' ')}}} {{Total Hits = ${hits.reduce((acc,val)=>acc+val,0)}}}`)
}