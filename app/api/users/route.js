// This acts like a API backend route 
// rout.js is a special file name

// Next js supports the following HTTP methods
// 1. *GET*: Retrieves data or resources from the server.
// 2. *POST*: Submits data to the server to create a new resource.
// 3. *PUT*: Updates or replaces an existing resource on the server.
// 4. *PATCH*: Partially updates an existing resource on the server.
// 5. *DELETE*: Removes a specific resource from the server.
// 6. *HEAD*: Retrieves the headers of a resource without fetching its body.
// 7. *OPTIONS Retrieves the supported HTTP methods and other communication options for a resource.


// http://localhost:3000/api/users

export async function GET(request){

    const user_data = [
        {id: 1, name: "User 1"},
        {id: 2, name: "User 2"},
        {id: 3, name: "User 3"},
        {id: 4, name: "User 4"}

    ]

    return new Response(JSON.stringify(user_data))
}