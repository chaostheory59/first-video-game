const router = require("express").Router();
// const User = require("../../models");
const usersController = require("../../controllers/usersController");

// router.get("/", (req, res) => res.json([]));

// router.post("/", (req, res) => {
//   const userData = req.body;
//   User.create(userData)
//     .then((result) => res.json(result))
//     .catch(e => console.log(e));
// });

// Matches with "/api/books"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(usersController.findById)
  .put(usersController.update);

router.route("/game/highscore")
  .get(usersController.findAll);

module.exports = router;