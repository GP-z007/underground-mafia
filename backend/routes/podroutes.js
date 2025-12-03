import express from 'express';
import {  createPods, deletePod, getAllPods, getSinglePod, updatePod } from '../controller/podcontroller.js';

const router = express.Router();

//Routes
router.route("/pods").get(getAllPods).post(createPods)
router.route("/pod/:id").put(updatePod).delete(deletePod).get(getSinglePod);


export default router;

