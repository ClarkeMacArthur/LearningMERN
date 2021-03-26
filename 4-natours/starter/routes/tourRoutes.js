const express = require('express');
const tourController = require('./../controllers/tourController');
const fs = require('fs');

const router = express.Router();

router.param('id', tourController.checkID);

//  Create a checkBody middleware function
// check if body contains the name and price property
// if not, send back 400 (bad request)
// add it to the post handler stack

router
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.checkBody, tourController.createTour);

router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);

module.exports = router;
