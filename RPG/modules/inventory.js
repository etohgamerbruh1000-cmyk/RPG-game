// inventory.js
// Handles items, drops, and inventory

import { renderLi } from "./render.js";
import { enemyState } from "./battle.js";

export let inventory = [
  {
    name: "Wooden Sword",
    damage: 1,
    type: "weapon",
    found: true,
  },
  {
    name: "Cardboard Shield",
    defense: 1.1,
    type: "defense",
    found: true,
  },
];

export let equippedItems = {

weapon: null,
defense: null,
consumable: null,
}

export let allItems = [
  {
    name: "Iron Sword",
    damage: 1.5,
    tier: 1,
    chance: 25,
    rarity: 1,
    type: "weapon",
    found: false,
  },

  {
    name: "Cardboard Armor",
    tier: 1,
    type: "defense",
    defense: 1.3,
    chance: 10,
    rarity: 2,
    found: false,
  },
];

export function addItem(item) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === item.name) {
      
      return;
    } else item.found = true;
  }

  if (item.found === true) {
    console.log("BEFORE PUSH:", inventory)
    inventory.push(item);
      console.log("AFTER PUSH:", inventory)
    item.found = true;
    renderLi();
    console.log("AFTER RENDER")
    console.log("Dropped:", item.name);
  }
}

function rollChance(item) {
  // Rolls numbers, chooses which item to add
  let roll = Math.floor(Math.random() * 100) + 1;

  console.log("Rolled:", roll, "Needed:", item.chance);

  if (roll <= item.chance) {
    addItem(item);
  }
}

function canDrop(item, enemyTier) {
  if (enemyTier >= item.tier) {
    rollChance(item);
    console.log(allItems);
  }
}

// recursive function, calls one after another
// * Discovery: parameters are just labels;
// * what is being called does not have to be the parameter
export function checkLoot(enemyTier) {
  for (let i = 0; i < allItems.length; i++) {
    let item = allItems[i];

    canDrop(item, enemyState.tier);
  }
}
export function equipItem(item) {

  equippedItems
}
