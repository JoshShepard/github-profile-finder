# 🔎 GitHub Profile Finder


A responsive React application that allows users to search for GitHub profiles and instantly explore their repositories.  
Built with **React, JavaScript (ES6+), and the GitHub REST API**, this project demonstrates API integration, state management, and modern front-end development practices.

---

## 🚀 Features
- Search GitHub users by username  
- Display profile details: avatar, name, bio, location, followers/following  
- List all public repositories with names, links, and descriptions  
- Loading and error handling states for a smooth user experience  
- Responsive design for mobile, tablet, and desktop

---

## 🛠️ Technologies Used
- **React** (with Hooks: `useState`, `useEffect`)  
- **JavaScript (ES6+)**  
- **CSS Modules** for component-scoped styling  
- **GitHub REST API**

---

## 📸 Demo
![Demo Screenshot](src/assets/GitHub-Homepage.png)
![Demo Screenshot](./src/assets/GitHub-UserProfilepage.png)

---

## ⚡ How It Works
1. User enters a GitHub username in the search bar.  
2. App fetches user details and repositories via the GitHub REST API.  
3. Results are displayed dynamically with conditional rendering:  
   - Hero screen (default state)  
   - Loading state  
   - Error message (e.g., invalid username)  
   - Profile + repositories



  
