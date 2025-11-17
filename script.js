document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('prediction-form');
  const resultDiv = document.getElementById('result');
  const predictBtn = document.getElementById('predict-btn');

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    predictBtn.disabled = true;
    resultDiv.hidden = false;
    resultDiv.style.color = '';
    resultDiv.innerHTML = 'Predicting...';

    // Gather inputs (note: keys are lowercase - server maps them)
    const payload = {
      Pregnancies: Number(document.getElementById('pregnancies').value),
      Glucose: Number(document.getElementById('glucose').value),
      BloodPressure: Number(document.getElementById('blood_pressure').value),
      SkinThickness: Number(document.getElementById('skin_thickness').value),
      Insulin: Number(document.getElementById('insulin').value),
      BMI: Number(document.getElementById('bmi').value),
      DiabetesPedigreeFunction: Number(document.getElementById('diabetes_pedigree_function').value),
      Age: Number(document.getElementById('age').value)
    };

    try {
      const resp = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!resp.ok) {
        // try to read server JSON error if any
        let text = await resp.text();
        throw new Error(`Server responded with an error: ${resp.status} - ${text}`);
      }

      const data = await resp.json();
      const label = data.prediction_label || 'Unknown';
      const non = (data.confidence_scores && data.confidence_scores['Non-Diabetic']) ? (data.confidence_scores['Non-Diabetic'] * 100).toFixed(2) : 'N/A';
      const dia = (data.confidence_scores && data.confidence_scores['Diabetic']) ? (data.confidence_scores['Diabetic'] * 100).toFixed(2) : 'N/A';

      resultDiv.innerHTML = `<strong>Outcome:</strong> ${label}<br><strong>Confidence:</strong><br>Non-Diabetic: ${non}%<br>Diabetic: ${dia}%`;
      resultDiv.style.color = (label === 'Diabetic') ? '#b00020' : '#0b7a3f';
    } catch (err) {
      console.error("Error communicating with API:", err);
      resultDiv.innerHTML = `<span style="color:#b00020;"><strong>Error:</strong> ${err.message}</span>`;
    } finally {
      predictBtn.disabled = false;
    }
  });
});
