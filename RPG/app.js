import { playerState } from "./modules/player.js";

import {
  startBattle,
  calculateTime,
  attackEnemy,
  enemyState,
  spawnEnemy,
} from "./modules/battle.js";

import { inventory, checkLoot } from "./modules/inventory.js";
import {renderStats} from "./modules/render.js"

console.log("app loaded 07:58")

const startAttackBtn = document.getElementById("startAttackBtn");

const attackBtn = document.getElementById("attackBtn");

startAttackBtn.addEventListener("click", () => {
  startBattle();
});

attackBtn.addEventListener("click", () => {
  calculateTime();

  attackEnemy();

  spawnEnemy();

  console.log(playerState);
  renderStats()
});

renderStats()
renderLi()