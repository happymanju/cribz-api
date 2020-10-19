#Cribz API

## Endpoints and HTTP methods

### GET: /api/babies
(TODO)
returns json of all babies in database.

### POST: /api/babies/add/:params
Use this endpoint to add babies to the database. Pass a parameter object in JSON format. optional params in [brackets].
{first_name: string, last_name: string, gender: string, birthday: "yyyy-mm-dd HH:MM:SS", [last_feeding: timestamp], [last_diaper: timestamp]}

### PATCH /api/babies/:idOrName
This endpoint is for updating parameters on babies exsisting in the database. You can modify the same paramters as in the POST endpoint.

### DELETE /api/babies/:idOrName
Remove a baby entry from the database by id or name.