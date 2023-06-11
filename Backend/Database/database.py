import motor.motor_asyncio as mot
from models import t_Users
import urllib.parse as ulb

username = ulb.quote_plus('admin')
password = ulb.quote_plus('Devil@0011')
uri = "mongodb+srv://%s:%s@vaycayventures.x8hxtiq.mongodb.net/?retryWrites=true&w=majority" % (username, password)

client = mot.AsyncIOMotorClient(uri)

database = client.Vaycay_Ventures_db
collection = database.users


async def create_user(user):
    document = user
    result = await collection.insert_one(document)

    return document


async def update_user(email, f_name, l_name):
    await collection.update_one({'email': email}, {"$set":{
        'f_name' : f_name,
        'l_name' : l_name}})
    
    document = await collection.find_one({'email': email})
    return document