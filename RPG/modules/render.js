// render.js
// renders everything you see on screen.

import { playerState } from "./player.js";
import { enemyState, battleState } from "./battle.js";
import { inventory, equipItem, equippedItems, useItem } from "./inventory.js";

const inventoryList = document.getElementById("inventoryList");

const playerHealthText = document.getElementById("playerHealthText");

const enemyHealthText = document.getElementById("enemyHealthText");

const goldCounter = document.getElementById("goldCounter");

const xpCounter = document.getElementById("xpCounter");

const timingResult = document.getElementById("timingResult");

const levelCounter = document.getElementById("levelCounter");

const battleStatus = document.getElementById("battleStatus");
const equippedWeaponText = document.getElementById("equippedWeaponText");
const equippedDefenseText = document.getElementById("equippedDefenseText");
const equippedConsumableText = document.getElementById("equippedConsumableText");


export function renderStats() {
  // renders HTML, not actual logic
  playerHealthText.textContent = `Health: ${playerState.health}`;
  enemyHealthText.textContent = `Enemy health: ${enemyState.health}`;
  goldCounter.textContent = `Gold: ${playerState.gold}`;
  xpCounter.textContent = `XP: ${playerState.xp}`;
  levelCounter.textContent = `Level: ${playerState.level}`
  timingResult.textContent = `Result: You clicked in ${battleState.timingAccuracy} ms!`;
  battleStatus.textContent = `Battling?: ${battleState.isBattling}`;

 
  renderEquippedItems();
}
export function renderEquippedItems() {

  if (equippedItems.weapon !== null) {
    equippedWeaponText.textContent = `Equipped weapon: ${equippedItems.weapon.name}`;
  }
  if (equippedItems.defense !== null) {
    equippedDefenseText.textContent = `Equipped defense: ${equippedItems.defense.name}`;
  }
  if (equippedItems.consumable !== null) {
    equippedConsumableText.textContent = `Equipped consumable: ${equippedItems.consumable.name}`;
  }

}

export function renderLi() {
  inventoryList.innerHTML = "";

  for (let i = 0; i < inventory.length; i++) {
    let equippedItem = inventory[i];
    const li = document.createElement("li");

    const equipButton = document.createElement("button");
    const useButton = document.createElement("button")
    equipButton.textContent = "Equip";
    useButton.textContent = "Use";
    li.textContent = inventory[i].name;

    if (inventory[i].type === "consumable") {
 li.appendChild(useButton);
    useButton.addEventListener("click", function () {
      console.log("used consumable");
      useItem(equippedItem)
    });
  } 

    li.appendChild(equipButton);
    equipButton.addEventListener("click", function () {
      console.log("equipped item");
      equipItem(equippedItem);
    });
    inventoryList.appendChild(li);
  }
}
