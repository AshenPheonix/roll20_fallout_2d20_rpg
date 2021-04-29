var FalloutDieRoller = FalloutDieRoller || {};

FalloutDieRoller.damage = (person, count, tag) => {
    let die = [1,2,0,0,3,3];
    let damage = 0;
    let effect = 0;
    let location = '';
    for (let i = 0; i < count; i++) {
        const roll = _.random(6);
        const onDie = die[roll];
        switch (onDie) {
            case 1:
                damage++;
                break;
            case 2:
                damage+=2;
            case 3:
                damage++;
                effect++;
            case 0:
            default:
                break;
        }
    }
    const locRoll = _.random(20);
    if (locRoll <= 2) {
        location = 'Head/Optics';
    } else if (locRoll <= 8 ) {
        location = 'Torso/Body';
    } else if (locRoll <= 11) {
        location = 'Left Arm/Arm 1';
    } else if (locRoll <= 14) {
        location = 'Right Arm/Arm 2';
    } else if (locRoll <= 17) {
        location = 'Left Leg/Arm 3';
    } else if (locRoll <= 20){
        location = 'Right Leg/Thruster';
    }
    sendChat(person, `&{template:default} {{name=Damage Rolled}} {{Damage Dealt = [[${damage}]]}} {{Effect Triggers = [[${effect}]]}} {{Random Hit Location = ${location}}}`);
}