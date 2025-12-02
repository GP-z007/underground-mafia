import express from 'express';
import {  createPods, getAllPods } from '../controller/podcontroller.js';

const router = express.Router();

//Routes
router.route("/pods").get(getAllPods).post(createPods)


export default router;

