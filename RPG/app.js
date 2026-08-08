import { playerState } from "./modules/player.js";
import {
  startBattle,
  calculateTime,
  attackEnemy,
  spawnEnemy,
  enemyState,
  playerHit,
} from "./modules/battle.js";

import { equippedItems, equipItem, inventory } from "./modules/inventory.js";

import { renderStats, renderLi } from "./modules/render.js";

console.log("app loaded 11:16");

const startAttackBtn = document.getElementById("startAttackBtn");

const attackBtn = document.getElementById("attackBtn");

startAttackBtn.addEventListener("click", () => {
  startBattle();
});

//
attackBtn.addEventListener("click", () => {
  if (playerState.dead === false) {
  calculateTime();

  attackEnemy();
  playerHit()
  // equippedItems.defense.defense
  if (enemyState.health <= 0) {
    spawnEnemy();
  }
  console.log(playerState);
  renderStats();
}});

renderStats();
//? fix glitch
renderLi();

equipItem(inventory.find(i => i.type === "weapon"))
equipItem(inventory.find(i => i.type === "defense"))
