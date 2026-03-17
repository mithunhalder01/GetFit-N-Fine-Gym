# 🏋️ Get Fit N Fine Gym — Full Gym Website

A complete, production-ready gym website with Admin Panel + WhatsApp Festival Sender.

---

## ⚡ Quick Start

```bash
# 1. Go to project folder
cd gym


# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
http://localhost:5173
```

---

## 📁 Project Structure

```
src/
├── App.jsx                    ← Main router (8 public + 5 admin routes)
├── data.js                    ← All gym data, member storage, helpers
├── main.jsx
├── index.css
│
├── components/
│   ├── Navbar.jsx             ← Sticky nav, dark mode toggle, mobile menu
│   ├── Footer.jsx             ← Full footer with links
│   ├── WhatsAppFloat.jsx      ← Floating WhatsApp button
│   └── UI.jsx                 ← FadeIn, SectionHeader, BMI, Modal, AdminSidebar, etc.
│
├── pages/
│   ├── Home.jsx               ← Hero, stats, about, programs preview, BMI, testimonials
│   ├── Programs.jsx           ← All 8 programs + filterable schedule
│   ├── Trainers.jsx           ← 6 trainer profiles with specialties
│   ├── Pricing.jsx            ← 3 plans, annual toggle, FAQ accordion
│   ├── Gallery.jsx            ← Photo grid (replace with real images)
│   ├── Blog.jsx               ← 6 articles with category filters
│   ├── Contact.jsx            ← Contact form → opens WhatsApp
│   └── PublicPages.jsx        ← All public pages in one file
│
└── pages/admin/
    ├── AdminLogin.jsx          ← Login (admin / gym123)
    ├── AdminDashboard.jsx      ← Stats, birthday alerts, fee alerts
    ├── AdminMembers.jsx        ← Full CRUD, search, filter, export CSV
    ├── AdminSchedule.jsx       ← Add/edit/delete class schedule
    └── AdminFestival.jsx       ← 🎉 STAR FEATURE: WhatsApp bulk sender
```

---

## 🎉 WhatsApp Festival Sender

**How it works:**
1. Go to `/admin/festival`
2. Select festival (Holi, Diwali, Eid, Birthday, etc.)
3. Optionally add a banner image URL
4. Select which members to send to (default: all active)
5. Click "Send to X Members via WhatsApp"
6. System opens each member's WhatsApp with personalized message (1.2s delay between each)

**No paid API needed. Works on any device with WhatsApp.**

---

## 👤 Admin Login

- **URL:** `/admin/login`
- **Username:** `admin`
- **Password:** `gym123`

> ⚠️ Change password in `AdminLogin.jsx` before deploying!

---

## ✏️ Customize Gym Info

Edit `src/data.js`:
```js
export const GYM = {
  name: "Your Gym Name",
  phone: "+91XXXXXXXXXX",
  email: "you@yourgym.com",
  address: "Your Address",
  whatsapp: "91XXXXXXXXXX",  // ← no + sign for wa.me links
};
```

---

## 👥 Adding Real Members

1. Login to admin → Members tab
2. Click **"+ Add Member"**
3. Fill in: Name, Phone, Plan, Fee amount, Due date, Birthday
4. Data saved in **localStorage** (no backend needed)
5. Export to CSV anytime

---

## 🖼️ Adding Real Photos

In `src/pages/Gallery.jsx`, replace the gradient divs with:
```jsx
<img src="/photos/gym-floor.jpg" alt="Gym floor" className="aspect-video object-cover rounded-xl" />
```

Put photos in `public/photos/` folder.

---

## 🚀 Deploy to Vercel (Free)

```bash
npm run build
# Then drag the 'dist' folder to vercel.com
# OR connect GitHub repo for auto-deploy
```

---

## 🚀 Deploy to GitHub Pages (Free)

```bash
npm i          # Install gh-pages
npm run deploy # Builds + deploys to gh-pages branch
```

**Live URL:** https://mithunhalder01.github.io/GetFit-N-Fine-Gym/


**Note:** Update `vite.config.js` base to '/YOUR_REPO_NAME/' if different.

---

## 🔧 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool |
| Tailwind CSS | Styling |
| React Router v6 | Multi-page routing |
| localStorage | Data storage (no backend) |
| WhatsApp Web API | Festival + contact messages |

---

## 📋 Features Checklist

### Public Website
- [x] Home page with hero, stats, programs, trainers, BMI calculator, testimonials
- [x] Programs page with all 8 programs + filterable schedule
- [x] Trainers page with 6 trainer profiles
- [x] Pricing page with monthly/annual toggle + FAQ
- [x] Gallery page
- [x] Blog page with 6 articles
- [x] Contact page → WhatsApp redirect
- [x] Dark/Light mode toggle
- [x] Sticky navbar + mobile hamburger
- [x] Floating WhatsApp button
- [x] Scroll animations (fade-in on scroll)
- [x] BMI Calculator
- [x] Fully responsive (mobile-first)

### Admin Panel
- [x] Password-protected login
- [x] Dashboard with stats + birthday/fee alerts
- [x] Members CRUD (add, edit, delete, deactivate)
- [x] Search + filter members
- [x] Fee status tracking (paid/overdue/due soon)
- [x] Birthday detector → 1-click WhatsApp wish
- [x] Fee reminder via WhatsApp
- [x] Export members to CSV
- [x] Class schedule manager (add/edit/delete)
- [x] 🎉 Festival WhatsApp Bulk Sender (8 templates)
- [x] Banner image URL support in messages
- [x] Progress bar during sending
- [x] Attendance marking

---

Built with ❤️ | Get Fit N Fine Gym 2025
# GetFit-N-Fine-Gym
