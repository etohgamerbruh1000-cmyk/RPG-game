// render.js

import { playerState } from "./modules/player.js";
import { enemyState, battleState } from "./modules/battle.js";
import { inventory } from "./modules/inventory.js"

const inventoryList = document.getElementById("inventoryList");

const playerHealthText = document.getElementById("playerHealthText");

const enemyHealthText = document.getElementById("enemyHealthText");

const enemyHealthText = document.getElementById("enemyHealthText");

const goldCounter = document.getElementById("goldCounter");

const xpCounter = document.getElementById("xpCounter");

const timingResult = document.getElementById("timingResult");

const battleStatus = document.getElementById("battleStatus");

export function renderStats() {
  playerHealthText.textContent = `Health: ${playerState.health}`;
  enemyHealthText.textContent = `Enemy health: ${enemyState.health}`;
  goldCounter.textContent = `Gold: ${playerState.gold}`;
  xpCounter.textContent = `XP: ${playerState.xp}`;
  timingResult.textContent = `Result: You clicked in ${battleState.timingAccuracy} ms!`;
  battleStatus.textContent = `Battling?: ${battleState.isBattling}`;
}

export function renderLi() {
  inventoryList.innerHTML = "";

  for (let i = 0; i < inventory.length; i++) {
    const li = document.createElement("li");

    li.textContent = inventory[i].name;

    inventoryList.appendChild(li);
  }
}
