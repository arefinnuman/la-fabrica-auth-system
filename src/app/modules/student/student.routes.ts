import express from 'express';

const router = express.Router();

router.get('/:id', StudentController.getSingleStudents);

router.get('/', StudentController.getAllStudents);

router.delete('/:id', StudentController.deleteStudent);

export const StudentRoutes = router;
