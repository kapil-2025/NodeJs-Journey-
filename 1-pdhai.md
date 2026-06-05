<!-- todo http method in express js -->
expressjs supprots various http method to handle different types of client request.mosst ly common yses method in restful apis are
1.get request
fetch to data from server
pass parameters route,query string
2. post request
used to send to the server and a create new source
requires middleware to handle json input express.json()
3.put
update a existing resources
use we req.params4.delete
remove any sourec from our server
// middleware in expressjs
execute before the final request handler
using this modify req and resp and end the request resp cycle &call the next middleware function 
<!-- todo flow client request -->middleware--> route handler--> response to client -->
it ise bery to important for logging authentiacvation\
<!-- noters Types of Middleware in ExpressJS
Type
Description
Example
Application-Level Middleware
Applies to all routes in an app
app.use(loggerMiddleware)
Router-Level Middleware
Applies to specific route groups
router.use(authMiddleware)
Built-in Middleware
Comes with Express (e.g., express.json())
app.use(express.json())
Third-Party Middleware
External libraries for additional functionality
app.use(cors())
Error-Handling Middleware
Handles errors in the request lifecycle
app.use(errorHandler) -->
