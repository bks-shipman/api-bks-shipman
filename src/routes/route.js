import { Router } from "express";
import multer from 'multer';
import * as aboutUsController from '../controllers/aboutUs.controller.js';
import * as companyController from '../controllers/company.controller.js';
import * as coreValueController from '../controllers/coreValue.controller.js';
import * as exhibitionController from '../controllers/exhibition.controller.js';
import * as missionController from '../controllers/mission.controller.js';
import * as serviceController from '../controllers/service.controller.js';
import * as userController from '../controllers/user.controller.js';
import * as vesselController from '../controllers/vessel.controller.js';
import * as vesselTypeController from '../controllers/vesselType.controller.js';
import * as visionController from '../controllers/vision.controller.js';
import * as landingPageController from '../controllers/landingPage.controller.js';

const route = Router();
const upload = multer({ storage: multer.memoryStorage() });

// Route Landing Page
route.get('/landing-page', landingPageController.getLandingPageData);


// Route BackOffice

// Route About Us
route.get('/about-us', aboutUsController.getAboutUs);
route.post('/about-us', aboutUsController.createOrUpdateAboutUs);

// Route Company
route.get('/company', companyController.getCompany);
route.post('/company', companyController.createOrUpdateCompany);

// Route Core Value
route.get('/core-values', coreValueController.getCoreValues);
route.post('/core-values', coreValueController.createCoreValue);
route.put('/core-values/:id', coreValueController.updateCoreValue);
route.delete('/core-values', coreValueController.deleteCoreValue);

// Route Exhibition
route.get('/exhibitions', exhibitionController.getExhibitions);
route.post('/exhibitions', upload.single("photo"), exhibitionController.createExhibition);
route.put('/exhibitions/:id', upload.single("photo"), exhibitionController.updateExhibition);
route.delete('/exhibitions', exhibitionController.deleteExhibition);

// Route Mission
route.get('/mission', missionController.getMission);
route.post('/mission', missionController.createOrUpdateMission);

// Route Service
route.get('/services', serviceController.getServices);
route.post('/services', serviceController.createService);
route.put('/services/:id', serviceController.updateService);
route.delete('/services', serviceController.deleteService);

// Route User
route.get('/users', userController.getAdmins);
route.post('/users', userController.createAdmin);
route.put('/users/:id', userController.updateAdmin);
route.patch('/users-suspend/:id', userController.suspendAdmin);
route.delete('/users', userController.deleteAdmin);

// Route Vessel
route.get('/vessels', vesselController.getVessels);
route.post('/vessels', upload.single("photo"), vesselController.createVessel);
route.put('/vessels/:id', upload.single("photo"), vesselController.updateVessel);
route.delete('/vessels', vesselController.deleteVessel);

// Route Vessel Type
route.get('/vessel-types', vesselTypeController.getVesselTypes);
route.post('/vessel-types', vesselTypeController.createVesselType);
route.put('/vessel-types/:id', vesselTypeController.updateVesselType);
route.delete('/vessel-types/:id', vesselTypeController.deleteVesselType);

// Route Vision
route.get('/vision', visionController.getVision);
route.post('/vision', visionController.createOrUpdateVision);

export default route;