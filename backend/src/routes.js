const { Router } = require("express");
const DevController = require("./controller/DevController");
const SearchController = require("./controller/SearchController");

const routes = Router();

// Parameter Types

// Query Params: accessible with req.query, example - http://localhost:xxxx/users?search=Test
// Route Params: accessible with request.params (used to identify a resource for an update or delete
// for instance) example - http://localhost:xxxx/users/1
// Body: accessible with request.body (create or update data)

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);

routes.get("/search", SearchController.index);

module.exports = routes;
