# Importing libraries
import uvicorn
import pickle
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Model and Dataprocessing
from ProcessData import processData
from Model import FlightInput
import pandas as pd


# Initializing the fast API server
app = FastAPI()

origins = [
       "http://localhost.tiangolo.com",
       "https://localhost.tiangolo.com",
       "http://localhost",
       "http://localhost:8080",
       "http://localhost:3000",
]

app.add_middleware(
       CORSMiddleware, 
       allow_origins=origins, 
       allow_credentials=True, 
       allow_methods=["*"], 
       allow_headers=["*"]
)

# Loading prediction file
with open('flight_rf.pkl', 'rb') as file:
    model = pickle.load(file)


# Home route
@app.get("/")
async def index():
    return {
           'data': 'Welcome to the Flight Price Predictor'
       }


# Predict route
@app.post("/predict")
async def prediction(data : FlightInput):
       # Form data
       print(f'''
              dep_time      = {data.dep_time}
              arrival_time  = {data.arrival_time}
              airline       = {data.airline}
              destination   = {data.destination}
              source        = {data.source}
              stops         = {data.stops}
              cabin_class   = {data.cabin_class}

              ''')
       oPD = processData()
       input_data = oPD.process(data)
       print(input_data)

       # Making predictions
       prediction=model.predict([input_data])[0]

       return {
           "data": {
               "prediction" : round(prediction, 2)
           }
       }
              

if __name__=="__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
