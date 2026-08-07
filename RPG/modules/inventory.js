// inventory.js
// Handles items, drops, and inventory

import { renderLi } from "./render.js"
import { enemyState } from "./battle.js"

export let inventory = [
  {
    name: "Wooden Sword",
    damage: 15,
    type: "weapon",
  },
  {
    name: "Cardboard Shield",
    defense: 0.05,
    type: "defense",
  },
];

export let allItems = [
  {
    name: "Iron Sword",
    tier: 1,
    chance: 25,
    rarity: 1,
  },

  {
    name: "Cardboard Armor",
    tier: 1,
    chance: 10,
    rarity: 2,
  },
];

export function addItem(item) {
  inventory.push(item);
}

function rollChance(item) {
  let roll = Math.floor(Math.random() * 100) + 1;

  console.log("Rolled:", roll, "Needed:", item.chance);

  if (roll <= item.chance) {
    addItem(item);
    console.log("Dropped:", item.name);
  }
}

function canDrop(item, enemyTier) {
  if (enemyTier >= item.tier) {
    rollChance(item);
    renderLi()
    console.log(allItems)
  }
}

export function checkLoot(enemyTier) {
  for (let i = 0; i < allItems.length; i++) {
    let item = allItems[i];

    canDrop(item, enemyState.tier);
  }
}
