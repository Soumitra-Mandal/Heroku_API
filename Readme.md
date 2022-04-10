# Node Js API
This is a simple Node Js API hosted on heroku. You can call the API using  - 
https://murmuring-fjord-01092.herokuapp.com/users/

It will return a list of Json Objects(Users) of the following schema - 
{
    id: Number,
    name: String, // String is shorthand for {type: String}
    work: String,
    dialogue: String,
    superhero: Boolean
}

To fetch a specific user, use - 
https://murmuring-fjord-01092.herokuapp.com/users/{id}

***Note****: This API has only 12 users as of now. More will be updated later.*