import { playerState } from "./modules/player.js";

import { startBattle, calculateTime, attackEnemy, enemyState } from "./modules/battle.js";

import { inventory, checkLoot } from "./modules/inventory.js";

const startAttackBtn = document.getElementById("startAttackBtn");

const attackBtn = document.getElementById("attackBtn");

startAttackBtn.addEventListener("click", () => {
  startBattle();
});

attackBtn.addEventListener("click", () => {
  calculateTime();

  attackEnemy();

 spawnEnemy()

  console.log(playerState);
});

