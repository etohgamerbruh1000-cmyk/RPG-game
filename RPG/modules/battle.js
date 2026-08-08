// battle.js
// Handles enemies, combat, and timing
// Rewarding the player, 

import { playerState, calculateLevel, checkDefeatPlayer } from "./player.js";
import { renderStats } from "./render.js"
import { checkLoot, equippedItems } from "./inventory.js"

export let enemyState = {
  name: "Skeleton",

  health: 100,
  maxHealth: 100,

  attack: 5,

  tier: 1,

  xpReward: 30,
  goldReward: 5,

  dead: false,
};

export let battleState = {
  isBattling: false,

  battleStartTimestamp: null,

  perfectTarget: null,

  clickTimestamp: null,

  timingAccuracy: null,
};

export function startBattle() {
  battleState.isBattling = true;
  battleState.battleStartTimestamp = Date.now();
  battleState.perfectTarget = Math.floor(Math.random() * 1000) + 2000;
}
export function spawnEnemy() {


enemyState.health = enemyState.maxHealth

renderStats()
checkLoot(enemyState.tier)
enemyState.dead = false
}

export function checkEnemyDeath() {
  if (enemyState.health <= 0) {

    giveEnemyRewards();
    playerState.level = calculateLevel(playerState.xp)

    enemyState.dead = true
  }


}
export function giveEnemyRewards() {
  playerState.gold += enemyState.goldReward;
  playerState.xp += enemyState.xpReward;
  renderStats()
}
export function calculateTime() {

//player damage changes depending on the target window

  battleState.clickTimestamp = Date.now();
  let difference = battleState.clickTimestamp - battleState.battleStartTimestamp;

  battleState.timingAccuracy = Math.abs(difference - battleState.perfectTarget);

  if (battleState.timingAccuracy <= 100) {
    playerState.attackMult = 1.75;
  } else if (battleState.timingAccuracy <= 200) {
    playerState.attackMult = 1;
  } else {
    playerState.attackMult = 0.5;
  }
}

export function attackEnemy() {
  enemyState.health -= playerState.attack * playerState.attackMult * (1 + equippedItems.weapon.damage) * (1 + playerState.levelStatIncrease)
renderStats()
  checkEnemyDeath();

}
export function playerHit() {

  playerState.health -= Math.round(enemyState.attack / (1 + equippedItems.defense.defense))
  checkDefeatPlayer()
  renderStats()
}


