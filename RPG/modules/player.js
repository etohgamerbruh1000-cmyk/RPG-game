// player.js
// Stores player data and player-related logic

import { renderStats } from "./render.js";
import { enemyState } from "./battle.js";

export const playerState = {
  name: "person",
  health: 100,
  maxHealth: 150,
  baseHealth: undefined,

  attack: 60,
  
  attackMult: 1,
  levelStatIncrease: 0,

  level: 1,
  xp: 0,
  gold: 0,

  dead: false,
};

export function checkDefeatPlayer() {
  if (playerState.health <= 0) {
    defeatPlayer();
  }
}

export function defeatPlayer() {

  playerState.dead = true;
  console.log("You died, lost 50% of gold..");
  playerState.gold *= 0.5;

  setTimeout(() => {
    playerState.health = playerState.maxHealth / 1.5;
    console.log("Respawned!");
    playerState.dead = false

 
    renderStats();
  }, 3000);
}

export function calculateLevel(XP) {
  // * calculates cumulative cost of all levels and fetches the current level

  let cumulativeCost = 0;
  let level = 0;
  while (XP > cumulativeCost) {
    level++;

    // formula ((level^2) * 100) + 100
    let cost = level ** 2 * 100 + 100;

    cumulativeCost += cost;

    if (XP <= cumulativeCost) {
      
    calculateLevelStats(level)
      return level;
    }
  }

  return playerState.level;
}

export function calculateLevelStats(level) {
  playerState.levelStatIncrease = level * 0.05
  updateHP()

}

export function updateHP() {
  if (playerState.baseHealth === undefined) {

    playerState.baseHealth = playerState.maxHealth
  }

playerState.maxHealth = playerState.baseHealth * (1 + playerState.levelStatIncrease)

}