## Git Cheatsheet (VS Code + Terminal)
1. Navigating folders
Check where you are
pwd
Shows your current folder.
Example:
/Users/name/Desktop/programming/RPG

⸻

### See files in the current folder
ls
Example:
app.js
index.html
modules
README.md

⸻

### Enter a folder
cd folderName
Example:
cd modules
Now you are inside modules.

⸻

### Go back one folder
cd ..
Example:
Before:
RPG/modules
After:
RPG

⸻

### Go to a folder with spaces
Use quotes:
cd "RPG Project"

⸻

2. Checking your Git project
### Check if Git is active
git status
Example:
On branch main
Your branch is up to date with 'origin/main'.

⸻

### See hidden Git files
ls -la
A Git project usually contains:
.git
The .git folder stores Git information.
Do not delete it.

⸻

3. Saving changes
### Git works in three stages:
Your files
    |
    v
git add
    |
    v
Staging area
    |
    v
git commit
    |
    v
GitHub

⸻

### Check changed files
git status
Examples:
M app.js
M README.md
Meaning:
M = Modified
Other symbols:
A = Added
D = Deleted
?? = New file not tracked yet

⸻

### Add changes
Add everything:
git add .
Add one file:
git add README.md

⸻

### Create a save point
git commit -m "Description of changes"
Example:
git commit -m "Fixed battle logic"
A commit is like a checkpoint.

⸻

4. Upload changes to GitHub
### After committing:
git push
This uploads your changes.
Typical workflow:
git add .
git commit -m "Updated inventory system"
git push

⸻

5. Getting changes from GitHub
### Download the latest version:
git pull
Useful if you changed something on GitHub or another computer.

⸻

6. Creating a backup checkpoint
### Before risky changes:
git add .
git commit -m "Working version before changes"
git push
Now you can always return to this version.

⸻

7. Looking at past versions
### See commit history:
git log
Short version:
git log --oneline
Example:
a83fd21 Fixed imports
91bc420 Added inventory

⸻

8. Undoing mistakes
### Undo changes that are not committed
Restore everything:
git restore .
Restore one file:
git restore app.js
Warning:This removes changes since the last commit.

⸻

9. ### Common mistakes
“No such file or directory”
You are probably in the wrong folder.
Check:
pwd
ls

⸻

### “Git is not a repository”
You are not inside a Git project.
Go into the correct folder:
cd yourProject

⸻

### Accidentally deleted files
Check:
git status
If they were committed before:
git restore .
can recover them.

⸻


