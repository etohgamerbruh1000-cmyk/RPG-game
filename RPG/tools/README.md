
# RPG Game

Goal for this session: (18:46-xx;xx) 

calling spawnEnemy twice

Steps:
[] fix


## Debugging notes

Enemy HP was resetting after attacks.

Cause:
checkEnemyDeath() was called after every attack and always reset enemy HP after death.

Lesson:
When debugging changing values, check not only direct assignments but also functions that are called afterward.

later:
Inventory GUI working

Steps:
1. [x] create <ul> 
2. [x] Loop through inventory
3. [x] create one <li> per item
4. [/] Display item name
5. [] display damage if exists

# Goals:

TODAY:
[x] Create functions reconstructed version didn't have

TOMORROW:
[x] Create detailed and helpful comments

NEXT WEEK:
[] Create Git, commit and publish

English logic:

### ul + li system

Upon startup,
Create an ul
For every item in inventory,
Create a li element
For every item in inventory * allProperties,
change li.textContent to stoneSword.damage (example)
Nest the ul inside li,
Display in HTMl

### Inventory system

When the enemy dies:
Loop through every item.
If enemy tier is high enough
Roll a random number
If successful, add item to inventory

### Recommended RPG workflow
Before coding:
git status
After finishing a feature:
git add .
git commit -m "Added feature name"
git push
Example:
git add .
git commit -m "Added inventory GUI"
git push
Small commits are easier to recover than one huge commit.