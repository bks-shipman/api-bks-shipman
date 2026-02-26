import { Router } from "express";
import multer from 'multer';
import * as aboutUsController from '../controllers/aboutUs.controller.js';
import * as captainController from '../controllers/captain.controller.js';
import * as careerController from '../controllers/career.controller.js';
import * as companyController from '../controllers/company.controller.js';
import * as coreValueController from '../controllers/coreValue.controller.js';
import * as exhibitionController from '../controllers/exhibition.controller.js';
import * as missionController from '../controllers/mission.controller.js';
import * as serviceController from '../controllers/service.controller.js';
import * as titleController from '../controllers/title.controller.js';
import * as userController from '../controllers/user.controller.js';
import * as vesselController from '../controllers/vessel.controller.js';
import * as vesselTypeController from '../controllers/vesselType.controller.js';
import * as visionController from '../controllers/vision.controller.js';
import * as landingPageController from '../controllers/landingPage.controller.js';
import * as authController from '../controllers/auth.controller.js';
import * as dashboardController from '../controllers/dashboard.controller.js';
import { auth } from '../middleware/auth.js';
import { authorize } from '../middleware/auth.js';

const route = Router();
const upload = multer({ storage: multer.memoryStorage() });


// Auth Route
route.post('/login', authController.login);

// Route Landing Page
route.get('/landing-page', landingPageController.getLandingPageData);
route.get('/about-page', landingPageController.getAboutUsData);
route.get('/vessel-page', landingPageController.getVesselData);
route.get('/exhibition-page', landingPageController.getExhibitionData);
route.get('/career-page', landingPageController.getCareerData);
route.get('/footer-page', landingPageController.getFooterData);

// Route BackOffice

// Route Dashboard
route.get('/dashboard', auth, authorize("SUPERADMIN", "ADMIN"), dashboardController.getDashboardData);

// Route About Us
route.get('/about-us', auth, authorize("SUPERADMIN", "ADMIN"), aboutUsController.getAboutUs);
route.post('/about-us', auth, authorize("ADMIN"), aboutUsController.createOrUpdateAboutUs);

// Route Captain
route.get('/captain', auth, authorize("SUPERADMIN", "ADMIN"), captainController.getCaptain);
route.post('/captain', upload.single("photo"), authorize("ADMIN"), auth, captainController.createOrUpdateCaptain);

// Route Career
route.get('/careers', auth, authorize("SUPERADMIN", "ADMIN"), careerController.getCareers);
route.post('/careers', auth, authorize("ADMIN"), careerController.createCareer);
route.put('/careers/:id', auth, authorize("ADMIN"), careerController.updateCareer);
route.delete('/careers', auth, authorize("ADMIN"), careerController.deleteCareer);

// Route Company
route.get('/company', auth, authorize("SUPERADMIN", "ADMIN"), companyController.getCompany);
route.post('/company', auth, authorize("ADMIN"), companyController.createOrUpdateCompany);

// Route Core Value
route.get('/core-values', auth, authorize("SUPERADMIN", "ADMIN"), coreValueController.getCoreValues);
route.post('/core-values', auth, authorize("ADMIN"), coreValueController.createCoreValue);
route.put('/core-values/:id', auth, authorize("ADMIN"), coreValueController.updateCoreValue);
route.delete('/core-values/:id', auth, authorize("ADMIN"), coreValueController.deleteCoreValue);

// Route Exhibition
route.get('/exhibitions', auth, authorize("SUPERADMIN", "ADMIN"), exhibitionController.getExhibitions);
route.post('/exhibitions', auth, authorize("ADMIN"), upload.single("photo"), exhibitionController.createExhibition);
route.put('/exhibitions/:id', auth, authorize("ADMIN"), upload.single("photo"), exhibitionController.updateExhibition);
route.delete('/exhibitions', auth, authorize("ADMIN"), exhibitionController.deleteExhibition);

// Route Mission
route.get('/mission', auth, authorize("SUPERADMIN", "ADMIN"), missionController.getMission);
route.post('/mission', auth, authorize("ADMIN"), missionController.createOrUpdateMission);

// Route Service
route.get('/services', auth, authorize("SUPERADMIN", "ADMIN"), serviceController.getServices);
route.post('/services', auth, authorize("ADMIN"), serviceController.createService);
route.put('/services/:id', auth, authorize("ADMIN"), serviceController.updateService);
route.delete('/services', auth, authorize("ADMIN"), serviceController.deleteService);

// Route Title
route.get('/titles', auth, authorize("SUPERADMIN", "ADMIN"), titleController.getTitles);
route.post('/titles', auth, authorize("ADMIN"), titleController.createTitle);
route.put('/titles/:id', auth, authorize("ADMIN"), titleController.updateTitle);
route.delete('/titles', auth, authorize("ADMIN"), titleController.deleteTitle);

// Route User
route.get('/users', auth, authorize("SUPERADMIN", "ADMIN"), userController.getAdmins);
route.post('/users', auth, authorize("ADMIN"), userController.createAdmin);
route.put('/users/:id', auth, authorize("ADMIN"), userController.updateAdmin);
route.delete('/users', auth, authorize("ADMIN"), userController.deleteAdmin);
route.patch('/user-password', auth, authorize("SUPERADMIN", "ADMIN"), userController.changePassword);
route.patch('/user-suspend/:id', auth, authorize("ADMIN"), userController.suspendAdmin);

// Route Vessel
route.get('/vessels', auth, authorize("SUPERADMIN", "ADMIN"), vesselController.getVessels);
route.post('/vessels', auth, authorize("ADMIN"), upload.single("photo"), vesselController.createVessel);
route.put('/vessels/:id', auth, authorize("ADMIN"), upload.single("photo"), vesselController.updateVessel);
route.delete('/vessels', auth, authorize("ADMIN"), vesselController.deleteVessel);

// Route Vessel Type
route.get('/vessel-types', auth, authorize("SUPERADMIN", "ADMIN"), vesselTypeController.getVesselTypes);
route.post('/vessel-types', auth, authorize("ADMIN"), vesselTypeController.createVesselType);
route.put('/vessel-types/:id', auth, authorize("ADMIN"), vesselTypeController.updateVesselType);
route.delete('/vessel-types/:id', auth, authorize("ADMIN"), vesselTypeController.deleteVesselType);

// Route Vision
route.get('/vision', auth, authorize("SUPERADMIN", "ADMIN"), visionController.getVision);
route.post('/vision', auth, authorize("ADMIN"), visionController.createOrUpdateVision);

export default route;