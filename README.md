# POS-transaction-dashboard

Welcome to the POS Dashboard repository!

### ✅ Please only work in your assigned `feature/*` branch.

---

## 👥 Team Roles and Responsibilities

| Intern | Role               | Tasks                                                  | Branch                    |
|--------|--------------------|--------------------------------------------------------|---------------------------|
| 1      | Authentication Lead| Login, registration, account management                | `feature/auth`            |
| 2      | Visualization Lead | Dashboard layout, charts, data visualization           | `feature/visualization`   |
| 3      | Reporting Lead     | Filters, search, reports, data exports                 | `feature/filters-reports` |

---

## 🗂️ Folder and File Responsibilities

### 📁 Intern 1 – Authentication Lead
- `pages/auth/login.html`
- `pages/auth/register.html`
- `assets/css/auth.css`
- `assets/js/auth/login.js`
- `assets/js/auth/user-management.js`
- (May reference `firebase-config.js`)

---

### 📁 Intern 2 – Visualization Lead
- `pages/dashboard/index.html`
- `pages/dashboard/terminals.html`
- `assets/css/dashboard.css`
- `assets/js/dashboard/charts.js`
- `assets/js/dashboard/terminal-status.js`
- `assets/js/utils/data-processor.js`

---

### 📁 Intern 3 – Reporting Lead
- `pages/dashboard/reports.html`
- `assets/js/dashboard/filters.js`
- `assets/js/utils/data-processor.js` (shared)
- (May update `dashboard.css` for reports)

---
## 🔄 How to Commit from `development` to Your `feature/*` Branch (GitHub Desktop)

If you're working on a new feature, start from the `development` branch and switch to your assigned feature branch:

### 🔁 Step-by-Step (Using GitHub Desktop)

1. **Open GitHub Desktop**

2. **Switch to the `development` branch**:
   - Click the **“Current Branch”** dropdown
   - Select `development`
   - Click **“Fetch origin”** to make sure you have the latest version

3. **Create or switch to your `feature/*` branch**:
   - Click **“Current Branch”**
   - Click **“New Branch”**
     - Name it exactly as assigned (e.g. `feature/auth`)
     - Base it on: `development`
   - Click **“Create Branch”**
   - Then click **“Publish Branch”** to push it online

4. **Work on your assigned files**
   - Edit the files you're responsible for only
   - Save your changes

5. **Commit your changes**:
   - In GitHub Desktop, you’ll see changed files
   - Write a clear commit message (e.g. `Added login form layout`)
   - Click **“Commit to feature/auth”**

6. **Push your work to GitHub**:
   - Click **“Push origin”** (top bar)

✅ Done! You’ve committed your code safely to your feature branch.

---

### 💡 Notes

- You only merge your feature branch into `development` when your work is complete.
- Always make sure you're on the correct branch before editing.
- Ask before touching shared files or folders.


---
## 📌 Important Notes
- Don’t touch the `main` or `development` branches directly.
- Communicate before making changes to shared files like `firebase-config.js` or `data-processor.js`
- If you're unsure, ask!

Happy coding 🚀
