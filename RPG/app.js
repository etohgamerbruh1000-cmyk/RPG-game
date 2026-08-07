import { playerState } from "./modules/player.js";
import {
  startBattle,
  calculateTime,
  attackEnemy,
  spawnEnemy,
  enemyState,
} from "./modules/battle.js";

import {renderStats, renderLi} from "./modules/render.js"

console.log("app loaded 11:16")

const startAttackBtn = document.getElementById("startAttackBtn");

const attackBtn = document.getElementById("attackBtn");

startAttackBtn.addEventListener("click", () => {
  startBattle();
});

// 
attackBtn.addEventListener("click", () => {
  calculateTime();

  attackEnemy();
  if (enemyState.health <= 0) {
  spawnEnemy();
}
  console.log(playerState);
  renderStats()
});

renderStats()
//? fix glitch 
renderLi()