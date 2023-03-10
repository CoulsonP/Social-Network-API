const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  addReaction,
  removeReaction,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController.js');

// /api/courses
router.route('/').get(getThought).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);
router.route("/:thoughtId/reactions").post(addReaction)
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction)
module.exports = router;
