// this is a file where I will define all functions that talk to the database
// we ask: what do i need from the database? one function for each need

// this comes from the supabase documentation. I copied it into the curriculum for you, but you could have found it by googling around supabase

// this is the URL for my supabase plant database
const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';

// this is the "password" for the supabase plant database
// i'm storing out in the open. i can do that as long as i 'secure' my database against attacks.
// secruing it is basically a button click in supabase.
// we'll do that later
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

// this client eats the URL and the password, and gives us all the functions we need to get plants from the database
// you would neeeeevvverr be able to figure this out without googling
// like, nobody would. not just you
// nobody can do this without googling
// what is this 'supabase' variable? why is it not undefined?
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


// i need all plants for the list page
// scynchronous code happens without having to wait
// asynchronous code is code that you have to wait for
export async function getAllPlants() {
    // i can suck properties out of an object like this by "destructuring" those properties
    // const { data, error } = await client
    
    // what properties does this object have?
    // body: [{…}, {…}, {…}]
    // count: null
    // data: [{…}, {…}, {…}]
    // error: null
    // status: 200
    // statusText: ""
    const response = await client
    // this is the name of the table i made in supabase earlier
        .from('plants')
        .select();

    return response.data;
}

// i need a single plan for the detail page, given an id
export async function getPlant(id) {
    const response = await client
    // this is the name of the table i made in supabase earlier
        .from('plants')
        .select()
        .match({ id: id })
        .single();

    return response.data;

}