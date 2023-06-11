from pydantic import BaseModel

class t_Users(BaseModel):
    f_name : str
    l_name : str
    email : str
    password : str    
