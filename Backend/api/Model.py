from pydantic import BaseModel

class FlightInput(BaseModel):
    dep_time : str
    arrival_time : str 
    source : str
    destination : str
    stops : int
    airline : str
    cabin_class : str
