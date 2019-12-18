# Unsplash Photo Url API 
REST API for unsplash photos since unsplash has API rate limiting      

JavaScript API using Express framwork hosted on Heroku to access a Postgres database    

# Random photo
Returns a random photo url, photographer, and location (if available)
## Example Request  
`https://homepagephoto.herokuapp.com/photo`
## Example Response 
``` json
{
  "url":"https://images.unsplash.com/photo-1557178584-b5c3f5bde8b8?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjkwNjcxfQ",
  "name":"Miltiadis Fragkidis",
  "location":"London, U.K"
}
```
  
Based off of https://www.taniarascia.com/node-express-postgresql-heroku/ tutorial
