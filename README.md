## For running react frontend
``
npm install ``

``
npm run dev
``

## For FAST backend
``
cd backend``

``
python app.py
``
# Batch AI Optimisation

AI-driven optimisation system for industrial batch processes.  
This project combines **a web-based frontend interface** and **a machine learning backend** to collect batch parameters, run predictive models, and generate optimized configurations.

The system allows users to input manufacturing parameters through a UI form or structured JSON and uses AI models such as **NSGA-II optimization and XGBoost regression** to analyze performance, quality, and energy efficiency.

---

# Project Overview

Industrial batch processes often require balancing multiple objectives such as:

- Product **quality**
- **Energy consumption**
- **Carbon emissions**
- Process **efficiency**

Manual tuning of process parameters is time-consuming and inefficient.  
This project provides an **AI-assisted decision system** that:

1. Accepts process parameters through a **web UI or JSON input**
2. Runs **machine learning predictions**
3. Uses **multi-objective optimisation** to find the best parameter combinations
4. Returns optimized results and predicted performance metrics.

---

# System Architecture
```
Frontend (User Interface)
│
│ Form Input / JSON Parameters
▼
Backend API Server
│
│ Data Processing
▼
Machine Learning Models
├── XGBoost Prediction Models
└── NSGA-II Multi-Objective Optimisation
│
▼
Optimized Batch Parameters + Predictions
│
▼
Results Returned to Frontend
```



---

# Key Features

- Web-based **parameter input interface**
- Support for **structured JSON input**
- **Machine learning predictions** for batch outputs
- **Multi-objective optimisation**
- Data-driven insights for process improvement
- Easy integration with manufacturing datasets

---

# Input Methods

The system supports **two types of input**:

## 1. Form-based UI Input

Users enter batch parameters using a frontend form.

Example parameters:

- Temperature  
- Pressure  
- Mixing Speed  
- Batch Duration  
- Raw Material Ratios  

These inputs are sent to the backend API for prediction and optimisation.

---

## 2. JSON Input

Advanced users can directly provide structured JSON.

Example:

```json
{
  "temperature": 180,
  "pressure": 3.2,
  "mixing_speed": 120,
  "batch_time": 45,
  "material_ratio_A": 0.6,
  "material_ratio_B": 0.4
}