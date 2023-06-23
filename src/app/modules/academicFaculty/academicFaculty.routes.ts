import express from 'express';
import auth from '../../middlewares/authorization';
import validateRequest from '../../middlewares/validateRequest';
import { ENUM_USER_ROLE } from '../user/user.enum';
import { AcademicFacultyController } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

router.post(
  '/create-faculty',
  validateRequest(AcademicFacultyValidation.createAcademicFacultyZodSchema),
  AcademicFacultyController.createFaculty
);

router.get('/:id', AcademicFacultyController.getSingleFaculty);

router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidation.updateAcademicFacultyZodSchema),
  AcademicFacultyController.updateFaculty
);

router.delete('/:id', AcademicFacultyController.deleteFaculty);

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.STUDENT, ENUM_USER_ROLE.FACULTY),
  AcademicFacultyController.getAllFaculty
);

export const AcademicFacultyRoutes = router;
