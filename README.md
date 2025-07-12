# 🛍️ Luxora - E-Shop UI

Luxora is a sleek and modern e-shop user interface where customers can browse a premium collection of products filtered by category, sub-category, or name. Built with a dark silver theme, the UI focuses on elegance, clarity, and usability.

---

## ✨ Features

- 🔍 **Live Filtering** (by Type, Subtype, or Product Name)
- 🖼️ **Full-Screen Product Modal** with image and details
- 💬 **Contact Form** connected to backend (via Flask)
- 🎨 **Black & Silver Modern UI** for a platinum-class look
- 📱 Fully responsive (mobile-friendly)

---

## 🗂 Folder Structure

e-shop-ui/
├── assets/
│ └── images/ # Product images
├── css/
│ └── style.css # UI styling
├── js/
│ ├── main.js # Modal logic
│ ├── filter.js # Filter functionality
│ └── contact.js # Form handler
├── data/
│ └── products.json # Product data
├── backend/
│ └── app.py # Flask backend for queries
├── index.html # Main UI page
├── contact.html # Optional contact page
└── README.md # You're reading it!

---

## ⚙️ How to Run

### 💻 Frontend (Live Server)

1. Open `index.html` using **Live Server** (VS Code recommended)
2. Ensure images load from `assets/images/`
3. Filter, click product, or test contact button

### ⚙️ Backend (Flask)

```bash
cd backend
pip install flask flask-cors
python app.py

📬 Contact Setup
Queries submitted through the form are emailed to the admin via SMTP.

Edit these lines in app.py:

python
Copy
Edit
ADMIN_EMAIL = "your_email@gmail.com"
APP_PASSWORD = "your_generated_app_password"
Enable "App Passwords" in your Google Account


---

## 🚀 Now Push It

Once you've saved the file, run:

```bash
git add README.md
git commit -m "Add project README file"
git push origin main
