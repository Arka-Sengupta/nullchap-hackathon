# Backend API Specification

## Base URL
```
http://localhost:8000/api
```

## Endpoints

### 1. Prediction Endpoint
**POST** `/api/predict`

**Request Body:**
```json
{
  "binder": 0.8,
  "drying_temperature": 70,
  "compression_force": 15
}
```

**Response:**
```json
{
  "hardness": 85.2,
  "dissolution": 92.8,
  "success_probability": 0.87
}
```

### 2. Recommendations Endpoint
**GET** `/api/recommendations/{batch_id}`

**Response:**
```json
{
  "recommendations": [
    "Increase drying temperature by 5°C for better hardness",
    "Reduce binder content to 0.75 for optimal dissolution",
    "Monitor motor speed - current range is acceptable",
    "Consider increasing compression force to 16 kN"
  ]
}
```

## Example Flask Backend

```python
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.get_json()
    
    # Your ML model prediction logic here
    # For now, return mock data
    return jsonify({
        "hardness": 85.2,
        "dissolution": 92.8,
        "success_probability": 0.87
    })

@app.route('/api/recommendations/<batch_id>', methods=['GET'])
def get_recommendations(batch_id):
    # Your recommendation engine logic here
    # For now, return mock recommendations
    return jsonify({
        "recommendations": [
            "Increase drying temperature by 5°C for better hardness",
            "Reduce binder content to 0.75 for optimal dissolution",
            "Monitor motor speed - current range is acceptable",
            "Consider increasing compression force to 16 kN"
        ]
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
```

## Frontend Integration Status

✅ **API endpoints configured** - Ready for real backend
✅ **Error handling implemented** - Shows connection errors
✅ **Loading states maintained** - UI shows loading during API calls
✅ **Mock data removed** - No fake responses anymore

## Next Steps

1. Create your Flask/FastAPI backend
2. Train your ML model
3. Replace mock logic with real predictions
4. Start backend server on port 8000
5. Frontend will automatically connect to real API
