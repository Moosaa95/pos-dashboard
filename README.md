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

## 📌 Important Notes
- Don’t touch the `main` or `development` branches directly.
- Communicate before making changes to shared files like `firebase-config.js` or `data-processor.js`
- If you're unsure, ask!

Happy coding 🚀
