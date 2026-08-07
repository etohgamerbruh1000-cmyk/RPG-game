// inventory.js
// Handles items, drops, and inventory
// allItems contains every possible item.
//It is seperate from inventory because the player does not own all items.

import { renderLi, renderStats } from "./render.js";
import { enemyState } from "./battle.js";
import { playerState } from "./player.js"

export let inventory = [
  {
    name: "Wooden Sword",
    damage: 0.2,
    type: "weapon",
  },
  {
    name: "Cardboard Shield",
    defense: 0.1,
    type: "defense",
  },
];

export let equippedItems = {
  weapon: null,
  defense: null,
  consumable: null,
};

export let allItems = [
  {
    name: "Iron Sword",
    damage: 0.5,
    tier: 1,
    chance: 25,
    rarity: 1,
    type: "weapon",
  },

  {
    name: "Cardboard Armor",
    tier: 1,
    type: "defense",
    defense: 0.3,
    chance: 10,
    rarity: 2,
  },
  {
name: "Healing potion",
tier: 1, 
heal: 30,
chance: 40,
rarity: 1,
type: "consumable"
  },
    {
name: "Rejuvenation Potion",
tier: 1, 
heal: 100,
chance: 7,
rarity: 1,
type: "consumable"
  },
];

export function addItem(item) {
const alreadyOwned = inventory.some((invItem) => invItem.name === item.name)

if (alreadyOwned) {

  return;
}
inventory.push(item);
    item.found = true;
    renderLi();
    console.log("Dropped:", item.name);
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
  console.log(item.name);
  //
  equippedItems[item.type] = item;
  console.log(equippedItems);
  renderStats();
}

export function useItem(equippedItem) {

// heals the player, make this better later like dynamic type :)

  playerState.health += equippedItems.consumable.heal
  if (playerState.health >= playerState.maxHealth) {

    playerState.health = playerState.maxHealth
  }
  console.log("Item:", equippedItem)
  renderStats()
}
