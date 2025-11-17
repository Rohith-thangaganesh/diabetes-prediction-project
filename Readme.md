🚀  Diabetes Prediction Using Machine Learning:

        A fast, full-stack ML application that predicts diabetes risk from key health metrics. This project delivers a clean, end-to-end pipeline — from data science to live API deployment — wrapped in a sleek web interface.

⚡ End-to-End Diabetes Predictor — Full-Stack ML at Work:
        This project brings machine learning to life with a high-impact diabetes prediction system. Built using the PIMA Indians Diabetes Dataset, it moves beyond simple modelling to deliver a fully deployable solution.

        Starting with deep exploratory data analysis, the workflow advances into feature engineering, model training, and hyperparameter tuning using XGBoost. The final model is deployed through a robust Flask REST API, enabling real-time predictions from any client.

        To complete the experience, a responsive and interactive web interface (HTML + JavaScript) connects directly to the API — letting users input health data and instantly see their diabetes risk with confidence scores.

        This is a production-style ML project designed to look sharp, run fast, and hit hard — the kind of project that makes your portfolio stand out.



<!-- Optional: Add a GIF or Screenshot of your web app in action here! -->

<!-- !\[Demo GIF](./demo.gif) -->


## Features

-   **Exploratory Data Analysis (EDA):** Performed an in-depth analysis of the PIMA Indians Diabetes Database, using libraries like `pandas`, `matplotlib`, and `seaborn` to uncover insights, visualize feature distributions, and analyze the correlation matrix.

-   **Robust Data Preprocessing:** Implemented a data cleaning strategy to handle physiologically impossible zero-values by replacing them with `NaN`. Standardized numerical features using `StandardScaler` to prepare the data for optimal model performance.

-   **Multi-Model Evaluation:** Trained and rigorously evaluated four different classification algorithms: Logistic Regression, K-Nearest Neighbors (k-NN), Random Forest, and XGBoost, establishing a comprehensive performance baseline.

-   **Advanced Model Training & Tuning:** Identified XGBoost as the top-performing model and systematically optimized its performance by tuning its hyperparameters using `GridSearchCV`.

-   **Reusable Machine Learning Pipeline:** Encapsulated the entire workflow—from missing value imputation and feature scaling to the final prediction—into a single, robust, and reusable `scikit-learn` Pipeline. This ensures consistency and prevents data leakage.

-   **REST API Development:** Deployed the trained pipeline as a production-ready RESTful API using **Flask**. The API exposes a `/predict` endpoint that processes incoming JSON data and returns predictions in real-time.

-   **Interactive Web Interface:** Built a clean and user-friendly front-end with **HTML** and **JavaScript**. The interface features a form that allows users to input patient data and uses the `fetch()` API to communicate with the Flask back-end, displaying the prediction dynamically without a page reload.

---

\## Technology Stack



\-   \*\*Backend:\*\* Python, Flask

\-   \*\*Machine Learning:\*\* Scikit-learn, Pandas, NumPy, XGBoost

\-   \*\*Data Visualization:\*\* Matplotlib, Seaborn

\-   \*\*Frontend:\*\* HTML, CSS, JavaScript (with Fetch API)

\-   \*\*Development Environment:\*\* Jupyter Notebook, Git



---

## Setup and Installation

To get a local copy of this project up and running, please follow these simple steps.

### Prerequisites

You need to have `git` and `Python 3.8+` installed on your system.

### Steps

1.  **Clone the Repository**

    First, clone this repository to your local machine using git. You will need to replace `your-username` and `your-repo-name` with your actual GitHub details once you've pushed the project.
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Create and Activate a Virtual Environment**

    It is a strong best practice to create a virtual environment to keep the project's dependencies isolated from your system's global Python environment.

    *   On **macOS/Linux**:
        ```bash
        python3 -m venv venv
        source venv/bin/activate
        ```
    *   On **Windows**:
        ```bash
        python -m venv venv
        .\\venv\\Scripts\\activate
        ```
    Once activated, you will see `(venv)` at the beginning of your terminal prompt.

3.  **Install Required Dependencies**

    All the necessary Python libraries for this project are listed in the `requirements.txt` file. Install them all with a single command using `pip`:
    ```bash
    pip install -r requirements.txt
    ```
    This command reads the file and installs the exact versions of `Flask`, `scikit-learn`, `pandas`, `xgboost`, and other libraries required to run the application successfully.

---



---

## How to Run

With the environment set up and dependencies installed, you can launch the application by starting the back-end API server and then opening the front-end web interface.

1.  **Start the Flask API Server**

    Ensure your virtual environment is still activated. In your terminal, run the `app.py` script to start the Flask development server.

    ```bash
    python app.py
    ```

    The server will start, and you should see output in your terminal indicating that it is running and listening for connections. It will look something like this:

    ```
    Model pipeline from 'diabetes_pipeline.joblib' loaded successfully.
     * Serving Flask app 'app'
     * Debug mode: on
     * Running on http://127.0.0.1:5000
    Press CTRL+C to quit
    ```
    **Leave this terminal window open.** This server must remain running to handle prediction requests from the web interface.

2.  **Launch the Web Interface**

    Now, open the `index.html` file in your favorite web browser. You can typically do this by navigating to your project folder in your file explorer and double-clicking the `index.html` file.

    The web page will load, presenting you with the "Diabetes Prediction Form." You can now fill in the patient data and click the "Predict" button to get a real-time prediction from your running model!

---



---

## API Endpoint Details

The application's core prediction logic is exposed via a single RESTful API endpoint. This allows for easy integration with other services and applications.

-   **URL:** `/predict`
-   **Method:** `POST`
-   **Description:** Accepts a JSON object containing patient health data and returns a diabetes prediction along with confidence scores.

### Request Payload

The API expects a JSON object with the following eight keys, corresponding to the features the model was trained on. All values should be numerical.

**Example Request Body:**
```json
{
    "Pregnancies": 6,
    "Glucose": 148,
    "BloodPressure": 72,
    "SkinThickness": 35,
    "Insulin": 0,
    "BMI": 33.6,
    "DiabetesPedigreeFunction": 0.627,
    "Age": 50
}

Example Success Response:

{

&nbsp;   "prediction\_class": 1,

&nbsp;   "prediction\_label": "Diabetic",

&nbsp;   "confidence\_scores": {

&nbsp;       "Non-Diabetic": 0.152,

&nbsp;       "Diabetic": 0.848

&nbsp;   }

}

