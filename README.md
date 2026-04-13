# 🛰️ Satellite Tracking & Geospatial Explorer

A full-stack geospatial application that enables users to interact with maps, select coordinates, and calculate real-time satellite distance and overpass timing using live orbital data.

---

## 🚀 Live Demo

🔗(https://spectra-mappers-project.vercel.app/)

## 💻 Repository

🔗(https://github.com/Sa3dMustafa/spectra-mappers-Project)

---

## 📌 Overview

This project bridges the gap between **complex satellite computations** and **user-friendly web interfaces**.

Users can click anywhere on the map, select a satellite, and instantly:

* Calculate the distance between Earth and the satellite
* Predict the next satellite overpass

All powered by real-time orbital data.

---

## 🎯 Key Features

* 🗺️ Interactive Map (Leaflet.js)
* 📍 Click-to-select coordinates
* 🛰️ Real-time satellite tracking
* 📏 Distance calculation between user location & satellite
* ⏳ Satellite overpass prediction (next 24 hours)
* 🌐 Live TLE data from Celestrak
* 🔐 Authentication system (Login / Signup)
* ⚛️ Context API for global state
* 🧠 Custom hooks for map logic
* 🔄 React Query for async data handling

---

## 🛠️ Tech Stack

### Frontend

* React
* Leaflet.js
* Context API
* React Query
* Custom Hooks

### Backend

* Flask (Python)
* Skyfield (Satellite calculations)
* REST API

### APIs & Data

* Celestrak TLE Data
* MapTiler API

---

## 📂 Architecture Highlights

* **Custom Hook (`useMap`)**

  * Handles map initialization
  * Manages click events & markers
  * Controls popup UI

* **Context API**

  * Global user data
  * Authentication token handling

* **Flask Backend**

  * `/distance` → calculates satellite distance
  * `/overpass` → predicts next satellite pass

---

## 📈 What I Learned

* Integrating frontend maps with real-world geospatial data
* Working with satellite orbital mechanics using Skyfield
* Designing full-stack systems (React + Flask)
* Managing async data with React Query
* Building scalable architecture using hooks & context

---

## 🧠 Challenges

* Handling real-time satellite data (TLE parsing)
* Synchronizing frontend map interactions with backend calculations
* Managing map lifecycle and cleanup correctly
* Designing intuitive UX for complex scientific data

---

## ⚙️ Getting Started

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
pip install flask flask-cors skyfield
python app.py
```

---

## 🔮 Future Improvements

* 🌍 Add multiple satellite selection
* 📊 Visualize satellite trajectory on map
* ☁️ Add cloud coverage filtering (Landsat enhancement)
* 📅 Timeline slider for historical data

---
