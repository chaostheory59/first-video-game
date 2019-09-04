const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/books"
router.route("/")
  .post(usersController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(usersController.findByName)
  .put(usersController.update)

module.exports = router;