# 📺 my-Youtube - - https://my-89c15.web.app/

A **YouTube Clone** built with **React.js**, **Redux Toolkit**, and **Tailwind CSS**, featuring real-time data from **YouTube Data API v3**, live chat functionality.

## 🚀 Features

### 🔹 UI & Styling
- **Tailwind CSS** for fast and efficient styling
- **Fixed Header** for easy access to the search bar and navigation
- **Sidebar Toggle** functionality to show/hide the sidebar
- **ButtonList Scrolling** for category filters

### 🔹 Video Functionality
- **Video Playback on Hover** (autoplay preview)
- **Watch Video Page** with video player
- **Live YouTube Data** using **YouTube Data API v3**
- **Real Comments** under the video
- **Live Chat** feature with **real-time messages** fetching

### 🔹 Search & Caching
- **Search Bar with Caching** (Redux stores past searches to avoid API calls)
- **Trending Videos** loaded dynamically
- **Optimized API Calls** using caching to improve performance

### 🔹 State Management
- **Redux Toolkit** for global state management
- **Redux Store** manages:
  - Videos
  - Sidebar state (open/close)
  - Search suggestions
  - Live chat messages (limited to the latest 300 messages to prevent memory bloat)

### 🔹 Live Chat Feature
- Fetches **real-time live chat** messages using API polling
- Displays messages dynamically in a scrollable container
- **Limits live chat messages to 300** (older messages are discarded)

### 🔹 Backend & API Integrations
- **YouTube Data API v3** for fetching:
  - Trending videos
  - Video details
  - Live chat messages
  - Comments
  - Search results
- **Firebase Cloud Functions** to securely fetch YouTube API tokens
- **Firebase Hosting** for deploying the application

### 🔹 Hosting & Deployment
- **Hosted on Firebase**
- **Environment Variables** for API keys and sensitive data

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **React.js** | Frontend library |
| **Redux Toolkit** | State management |
| **Tailwind CSS** | Styling |
| **React Router DOM** | Client-side routing |
| **YouTube Data API v3** | Fetching video, search, comments, and live chat data |
| **Firebase Functions** | Secure API token fetching |
| **Firebase Hosting** | Deployment |

---

## 📂 Project Structure
```
my-Youtube
│── functions
│── public
│── src
│   ├── components
│   │   ├── Body.jsx
│   │   ├── Button.jsx
│   │   ├── ButtonList.jsx
│   │   ├── Comment.jsx
│   │   ├── CommentContainer.jsx
│   │   ├── Head.jsx
|   |   ├── LiveChat.jsx
|   |   ├── LiveChatMessage.jsx
|   |   ├── MainContainer.jsx
|   |   ├── Shimmer.jsx
|   |   ├── SideBar.jsx
|   |   ├── VideoCard.jsx
|   |   ├── VideoContainer.jsx
|   |   ├── WatchVideo.jsx
│   ├── utils
│   │   ├── constants.js
│   │   ├── fetchAccessToken.js
│   │   ├── FetchVideos.js
│   │   ├── LiveChat.js
│   │   ├── store.js
│   |   ├── redux
│   |   │   ├── store.js
│   |   │   ├── appSlice.js
│   |   │   ├── videoSlice.js
│   |   │   ├── liveChatSlice.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│── .firebaserc
│── firebase.json
│── index.html
│── package-lock.json
│── package.json
│── README.md
│── vite.config.js
```

---

## 📸 Screenshots
### 🎬 Home Page
<img src="https://github.com/user-attachments/assets/a6b58e6d-eae9-44de-87d5-41df6a219088" width="400" />

### 📺 Watch Video Page
<img src="https://github.com/user-attachments/assets/b7489430-8f00-4efb-bfd8-e847e2ea08bd" width="400" />

---

## 🏗️ Setup & Installation

### 🔧 Prerequisites
- Node.js installed
- Firebase CLI set up

### 📥 Clone the Repository
```
git clone https://github.com/sho4516/my-Youtube.git
cd my-Youtube
```
### 📦 Install Dependencies
```
npm install
```

### 🚀 Start Development Server
```
npm run dev
```
---

## ⚡ API Endpoints Used
| Api | Purpose |
|-----|---------|
| /videos?chart=mostPopular&maxResults=50 | Fetch trending videos |
| /search?part=snippet&q={query} | Search for videos |
| /videos?part=snippet&id={videoId} | Fetch video details |
| /commentThreads?part=snippet&videoId={videoId} | Get comments |
| /liveChat/messages?liveChatId={id} | Fetch live chat messages |
| /youtubesearchapi-u6ni.onrender.com/suggest?q=${searchText} | Get fetch suggestions |

---

## 🚀 Future Improvements

- Infinite scrolling for more videos
- Dark mode toggle
- User authentication (Google OAuth)
- Better mobile responsiveness

---

## 📜 License

This project is open-source and available under the MIT License.

---

## ⭐ Acknowledgments

- YouTube Data API v3 for providing the data
- React & Redux for state management
- Tailwind CSS for styling
- Firebase for hosting & cloud functions

---

### 🔥 What this README Includes:
✅ **Project Overview**  
✅ **Features List** (UI, Video, Live Chat, API Integration, Hosting)  
✅ **Technology Stack**  
✅ **Project Structure**  
✅ **Screenshots (Placeholder)**  
✅ **Setup & Installation Guide**  
✅ **API Endpoints Used**  
✅ **Future Roadmap**  
✅ **License & Credits**  

Let me know if you want any changes or additions! 🚀🔥
