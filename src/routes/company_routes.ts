import { Router } from 'express';
const router = Router();
import * as companyController from './company_controller'

router.get('/companies', companyController.getCompanies);
router.get('/companies/:id', companyController.getCompany);
router.post('/companies', companyController.createCompany);
router.delete('/companies/:id', companyController.deleteCompany);
router.put('/companies/:id', companyController.updateCompany);

export default router;