## Frontend Testing

Get vs Find vs Query

`getBy` returns the matching node and throws a descriptive error if either no elements are found 
or multiple (use `getAllBy` for multiple nodes)

`getAllBy' will return an array of all matching nodes or throw an error if nothing is found

`queryBy` returns the matching node for a query or null if something doesn't match. Can be used 
to assert an element is not present. Throws an error if more than one thing is found (use 
`queryAllBy` if that's the goal)

`queryAllBy` returns an array of all matching nodes or an empty array if nothing is ofund

`findBy` returns a promise that resolves when an element is found that matches a given query. 
Promise is rejected if no element is found or if more than one element is found . (`findAllBy` 
for multiple nodes)

`findAllBy` returns a promise that resolves to an array of elements


