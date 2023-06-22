/* eslint-disable prefer-template */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
/* eslint-disable default-case */
import controls from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
    let figterHealth = [firstFighter.health, secondFighter.health];
    return new Promise(resolve => {
        let pressedKeys = [];
        document.querySelector('body').addEventListener('keypress', event => {
            pressedKeys.push(event.code);
            if (JSON.stringify(pressedKeys) === JSON.stringify(controls.PlayerOneCriticalHitCombination)) {
                secondFighter.health -= firstFighter.attack * 2;
                pressedKeys = [];
            }
            if (JSON.stringify(pressedKeys) === JSON.stringify(controls.PlayerTwoCriticalHitCombination)) {
                firstFighter.health -= secondFighter.attack * 2;
                pressedKeys = [];
            } else {
                switch (event.code) {
                    case controls.PlayerOneAttack:
                        secondFighter.health -= getDamage(firstFighter, secondFighter);
                        break;
                    case controls.PlayerTwoAttack:
                        firstFighter.health -= getDamage(secondFighter, firstFighter);
                        break;
                    case controls.PlayerOneBlock:
                        break;
                    case controls.PlayerTwoBlock:
                        break;
                }
            }

            document.getElementById('right-fighter-indicator').style.width =
                (secondFighter.health * 100.0) / figterHealth[1] + '%';
            document.getElementById('left-fighter-indicator').style.width = `${
                (firstFighter.health * 100.0) / figterHealth[0]
            }%`;
            if (firstFighter.health <= 0) resolve(secondFighter);
            if (secondFighter.health <= 0) resolve(firstFighter);
        });

        // resolve the promise with the winner when fight is over
    });
}

export function getDamage(attacker, defender) {
    // return damage
    const hitPower = getHitPower(defender);
    const blockPower = getBlockPower(attacker);
    let damage = hitPower - blockPower;
    return damage > 0 ? damage : 0;
}

export function getHitPower(fighter) {
    // return hit
    let criticalHitChance = Math.random() * 2 + 1;
    if (criticalHitChance > 2) {
        criticalHitChance = 2;
    }
    let hit = fighter.attack * criticalHitChance;
    return hit;
}

export function getBlockPower(fighter) {
    // return block power
    let dodgeChance = Math.random() * 2 + 1;
    if (dodgeChance > 2) {
        dodgeChance = 2;
    }
    let power = fighter.defense * dodgeChance;
    return power;
}
