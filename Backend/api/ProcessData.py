import pandas as pd;
class processData:
    def __init__(self):
        pass
    
    def process(self, data):
        # form data
        dep_time      = data.dep_time
        arrival_time  = data.arrival_time
        airline       = data.airline
        destination   = data.destination
        source        = data.source
        stops         = data.stops
        cabin_class   = data.cabin_class

        # Date_of_Journey
        date_dep = dep_time
        Journey_day = int((date_dep.split('-')[2]).split('T')[0])
        Journey_month = int(date_dep.split('-')[1])


        # Departure
        dep_hour = int(pd.to_datetime(date_dep, format ="%Y-%m-%dT%H:%M").hour)
        dep_min = int(pd.to_datetime(date_dep, format ="%Y-%m-%dT%H:%M").minute)
        #      # # print("Departure : ",Dep_hour, Dep_min)

        # Arrival
        date_arr = arrival_time
        arrival_hour = int(pd.to_datetime(date_arr, format ="%Y-%m-%dT%H:%M").hour)
        arrival_min = int(pd.to_datetime(date_arr, format ="%Y-%m-%dT%H:%M").minute)


        # Calculating Duration column
        total_start_minutes = dep_hour * 60 + dep_min
        total_end_minutes = arrival_hour * 60 + arrival_min
        if total_end_minutes < total_start_minutes:
                total_end_minutes += 24 * 60 # Adjust for the end time being on the next day
        
        duration = total_end_minutes - total_start_minutes

        # Airline formating
        airline = airline
        if airline == "Jet Airways":
                airline = 8
        elif airline == "IndiGo":
                airline = 3
        elif airline == "Air India":
                airline = 6
        elif airline == "Multiple carriers":
                airline = 7
        elif airline == "SpiceJet":
                airline = 1
        elif airline == "Vistara":
                airline = 5
        elif airline == "Air Asia":
                airline = 2
        elif airline == "GoAir":
                airline = 4
        elif airline == "Trujet":
                airline = 0
        
        # Source column formatting
        source = source
        if source == "Delhi":
                source = 4
        elif source == "Kolkata":
                source = 3
        elif source == "Banglore":
                source = 2
        elif source == "Mumbai":
                source = 1
        elif source == "Chennai":
                source = 0
        

        # Destination column formatting
        destination = destination
        if destination == "Delhi":
                destination = 1
        elif destination == "Kolkata":
                destination = 0
        elif destination == "Banglore":
                destination = 3
        elif destination == "Cochin":
                destination = 4
        elif destination == "Hyderabad":
                destination = 2
        elif destination == "New Delhi":
                destination = 5


        # Cabin_class column formatting
        cabin_class = cabin_class
        if cabin_class == "Economy":
                cabin_class = 0
        elif cabin_class == "Premium Economy":
                cabin_class = 1
        elif cabin_class == "Business":
                cabin_class = 2

        return [ airline, cabin_class, source, destination, duration, stops, Journey_day, Journey_month, dep_hour, dep_min, arrival_hour, arrival_min ]
