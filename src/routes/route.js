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
import * as authController from '../controllers/auth.controller.js';
import { auth } from '../middleware/auth.js';

const route = Router();
const upload = multer({ storage: multer.memoryStorage() });


// Auth Route
route.post('/login', authController.login);

// Route Landing Page
route.get('/landing-page', landingPageController.getLandingPageData);

// Route BackOffice

// Route About Us
route.get('/about-us', auth, aboutUsController.getAboutUs);
route.post('/about-us', auth, aboutUsController.createOrUpdateAboutUs);

// Route Company
route.get('/company', auth, companyController.getCompany);
route.post('/company', auth, companyController.createOrUpdateCompany);

// Route Core Value
route.get('/core-values', auth, coreValueController.getCoreValues);
route.post('/core-values', auth, coreValueController.createCoreValue);
route.put('/core-values/:id', auth, coreValueController.updateCoreValue);
route.delete('/core-values', auth, coreValueController.deleteCoreValue);

// Route Exhibition
route.get('/exhibitions', auth, exhibitionController.getExhibitions);
route.post('/exhibitions', auth, upload.single("photo"), exhibitionController.createExhibition);
route.put('/exhibitions/:id', auth, upload.single("photo"), exhibitionController.updateExhibition);
route.delete('/exhibitions', auth, exhibitionController.deleteExhibition);

// Route Mission
route.get('/mission', auth, missionController.getMission);
route.post('/mission', auth, missionController.createOrUpdateMission);

// Route Service
route.get('/services', auth, serviceController.getServices);
route.post('/services', auth, serviceController.createService);
route.put('/services/:id', auth, serviceController.updateService);
route.delete('/services', auth, serviceController.deleteService);

// Route User
route.get('/users', auth, userController.getAdmins);
route.post('/users', auth, userController.createAdmin);
route.put('/users/:id', auth, userController.updateAdmin);
route.patch('/users-suspend/:id', auth, userController.suspendAdmin);
route.delete('/users', auth, userController.deleteAdmin);

// Route Vessel
route.get('/vessels', auth, vesselController.getVessels);
route.post('/vessels', auth, upload.single("photo"), vesselController.createVessel);
route.put('/vessels/:id', auth, upload.single("photo"), vesselController.updateVessel);
route.delete('/vessels', auth, vesselController.deleteVessel);

// Route Vessel Type
route.get('/vessel-types', auth, vesselTypeController.getVesselTypes);
route.post('/vessel-types', auth, vesselTypeController.createVesselType);
route.put('/vessel-types/:id', auth, vesselTypeController.updateVesselType);
route.delete('/vessel-types/:id', auth, vesselTypeController.deleteVesselType);

// Route Vision
route.get('/vision', auth, visionController.getVision);
route.post('/vision', auth, visionController.createOrUpdateVision);

export default route;