// render.js

import { playerState } from "./player.js";
import { enemyState, battleState } from "./battle.js";
import { inventory, equipItem } from "./inventory.js";

const inventoryList = document.getElementById("inventoryList");

const playerHealthText = document.getElementById("playerHealthText");

const enemyHealthText = document.getElementById("enemyHealthText");

const goldCounter = document.getElementById("goldCounter");

const xpCounter = document.getElementById("xpCounter");

const timingResult = document.getElementById("timingResult");

const battleStatus = document.getElementById("battleStatus");


export function renderStats() {
  // renders HTML, not actual logic
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
    let equippedItem = inventory[i]
    const li = document.createElement("li");

    const button = document.createElement("button")
button.textContent = "Equip"
    li.textContent = inventory[i].name;
li.appendChild(button)
button.addEventListener("click", function () {

  console.log("equipped item")
  equipItem(equippedItem)
})
    inventoryList.appendChild(li);
  }
}
