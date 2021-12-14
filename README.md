# HTML Setup

## List page
- divs to hold the single plants
  - each plant should be a link to its detail page (anchor tag)
- big div to hold the list of all plants

### Events
- on load
  - get plants from the database
  - display those plants (loop, render, and append)

### Detail page
- div to hold the plant details

### Events
- on load
  - figure out which plant to go fetch . . .
  - get THIS SINGLE plant from the database
  - display THIS SIGNLE plant (render, and append)

## Stretch goal ideas
- Sort <thing>s by their name.
- Add an input that lets the user filter <thing>s on the list page.
- Add additional UI that lets the user sort <thing>s on the list page by different properties.
- For practice, make a second supabase table with another <thing> and add a second list to the list page. If you did <candies>, now do <candy-shops>, for example. Then, make a separate detail page for just that <thing>. Keep all the features from the original app as well.
- If you're feeling ambitious, see if you can get it working so that when you click on an item, it deletes from supabase then re-renders the list
- If you're feeling EVEN MORE ambitious, see if you can figure out how to let users create a <thing> in supabase and render it to the page.
- If you are mega-ultra final-form ambitious: see if you can figure out letting a user update a thing from the detail page.

## Make a supabase table with a few rows based on the <thing> of your choosing :)
  - <thing>s should have at least 4 properties.

| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed pages on GitHub pages, with link in the About section of the Github repo|        2 |


| Events                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On load on the home page, see a list of <thing>s, fetched from supabase                               |        4 |
| On clicking a <thing>, user should be taken to that <thing>'s detail page.  | 2 |
| Detail page should get the id from the URL and use that id to fetch that <thing> from supabase.                                      |        2 |
| Detail page should show the user details about the <thing> with more details than on the list page|     2 |

| Functions                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| PURE: `render<Thing>Card(dog)` : return DOM node |2|
| PURE: `render<ThingDetail(dog)` : return DOM node |2|
| ASYNC: `fetch<Things>()` : return array of <things> from supabase |2|
| ASYNC: `fetch<Thing>(id)` : return single <thing> from supabase |2|
