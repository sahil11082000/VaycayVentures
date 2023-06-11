from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

# App Object
app = FastAPI()

from database import *

origins = [
       "https://localhost:3000",
]

app.add_middleware(
       CORSMiddleware, 
       allow_origins=origins, 
       allow_credentials=True, 
       allow_methods=["*"], 
       allow_headers=["*"]
)

@app.get('/')
def read_root():
    return {'ping': 'Pong'}

@app.post("/register/", response_model=t_Users)
async def createUser(user: t_Users):
    response = await create_user(user.dict())
    if response:
        return response
    raise HTTPException(400, 'Something went wrong!')


@app.put('/update_profile{email}/', response_model=t_Users)
async def update_userInfo(email: str, firstName: str, lastName: str):
    response = await update_user(email, firstName, lastName)
    if response:
        return response
    raise HTTPException(400, 'Something went wrong!')
    
