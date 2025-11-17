# ----------------------------
# IMPORTS
# ----------------------------
from flask import Flask, request, jsonify
from flask_cors import CORS            # <-- FIXES YOUR CORS ERROR
import joblib
import pandas as pd
import numpy as np

# ----------------------------
# LOAD MODEL
# ----------------------------
pipeline_path = 'diabetes_pipeline.joblib'
loaded_pipeline = joblib.load(pipeline_path)
print(f"Model pipeline from '{pipeline_path}' loaded successfully.")

# ----------------------------
# CREATE FLASK APP + ENABLE CORS
# ----------------------------
app = Flask(__name__)
CORS(app)   # <-- MOST IMPORTANT LINE FOR YOUR FRONTEND

# ----------------------------
# HOME ROUTE
# ----------------------------
@app.route('/', methods=['GET'])
def home():
    return jsonify({
        "message": "Diabetes Prediction API is running!",
        "usage": "POST JSON to /predict"
    })

# ----------------------------
# PREDICT ROUTE
# ----------------------------
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        if data is None:
            return jsonify({"error": "No JSON data received"}), 400

        input_df = pd.DataFrame([data])

        prediction = loaded_pipeline.predict(input_df)
        prediction_probabilities = loaded_pipeline.predict_proba(input_df)

        final_prediction_class = int(prediction[0])
        probabilities = prediction_probabilities[0]

        prediction_label = "Diabetic" if final_prediction_class == 1 else "Non-Diabetic"

        response_data = {
            "prediction_class": final_prediction_class,
            "prediction_label": prediction_label,
            "confidence_scores": {
                "Non-Diabetic": float(probabilities[0]),
                "Diabetic": float(probabilities[1])
            }
        }

        return jsonify(response_data)

    except Exception as e:
        return jsonify({"error": f"Error during prediction: {str(e)}"}), 500


# ----------------------------
# RUN SERVER
# ----------------------------
if __name__ == '__main__':
    app.run(debug=True)
