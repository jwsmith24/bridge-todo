## Frontend Testing

Get vs Find vs Query

`getBy` returns the matching node and throws a descriptive error if either no elements are found 
or multiple (use `getAllBy` for multiple nodes)

`getAllBy' will return an array of all matching nodes or throw an error if nothing is found

`queryBy` returns the matching node for a query or null if something doesn't match. **Can be used 
to assert an element is not present.** Throws an error if more than one thing is found (use 
`queryAllBy` if that's the goal)

`queryAllBy` returns an array of all matching nodes or an empty array if nothing is ofund

`findBy` returns a promise that resolves when an element is found that matches a given query. 
Promise is rejected if no element is found or if more than one element is found . (`findAllBy` 
for multiple nodes)

`findAllBy` returns a promise that resolves to an array of elements


Can convert from NPM to Yarn in a project by just deleting the package-lock.json file


--
Set up a React application with Tailwind and Vitest plus React Testing Library. Modeled a basic 
todo item and created components for a todo list and the todo items. 

Wrote tests to ensure the correct content appears on the screen using `findByRole` matchers and 
tested that the appropriate event handler fires when a user clicks the checkbox with the 
user-event library and mock functions from vitest.

Modeled the data for the backend to practice working with more complex relationships.
The system will track individual users. Each user can have multiple todo lists (shopping lists vs 
daily work tasks, etc). Todo lists have many todo items.

Wrote the DDL to initialize the table in a Flyway migration file and wired up matching entities. 


## Part 2
`toBeVisible()` over `toBeInDocument()` so we know it's actually being rendered on the page

Expanded the Todo type to include an option assignee and have a point value