// battle.js
// Handles enemies, combat, and timing

import { playerState } from "./player.js";
import {renderStats} from "./render.js"

export let enemyState = {
  name: "Skeleton",

  health: 100,
  maxHealth: 100,

  attack: 5,

  tier: 1,

  xpReward: 10,
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
  checkEnemyDeath();
}

export function checkEnemyDeath() {
  if (enemyState.health <= 0) {
    enemyState.dead = true;
    giveEnemyRewards();

    enemyState.health = enemyState.maxHealth;
  }
  enemyState.dead = false;

}
export function giveEnemyRewards() {
  playerState.gold += enemyState.goldReward;
  playerState.xp += enemyState.xpReward;
  playerState.health -= enemyState.attack;
  renderStats()
}
export function calculateTime() {
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
  enemyState.health -= playerState.attack * playerState.attackMult;

  checkEnemyDeath();
}

