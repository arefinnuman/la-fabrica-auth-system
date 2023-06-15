import express from 'express';
import { FacultyController } from './faculty.controller';

const router = express.Router();

router.patch('/:id', FacultyController.updateFaculty);

router.delete('/:id', FacultyController.deleteFaculty);

router.get('/:id', FacultyController.getSingleFaculty);

router.get('/', FacultyController.getAllFaculties);

export const FacultyRoutes = router;
