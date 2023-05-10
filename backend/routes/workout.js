const express = require("express");
const router = express.Router();
const {
  getWorkouts,
  setWorkout,
  updateWorkout,
  deleteWorkout,
  getWorkout,
} = require("../controllers/workout");
const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);

router.route("/").get(getWorkouts).post(setWorkout);
router.route("/:id").get(getWorkout).patch(updateWorkout).delete(deleteWorkout);

module.exports = router;
