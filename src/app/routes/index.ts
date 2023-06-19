import express from 'express';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { FacultyRoutes } from '../modules/faculty/faculty.routes';
import { ManagingDepartmentRoutes } from '../modules/managingDepartment/managingDepartment.routes';
import { StudentRoutes } from '../modules/student/student.routes';
import { UserRoutes } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users/',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters/',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties/',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-departments/',
    route: AcademicDepartmentRoutes,
  },
  {
    path: '/students/',
    route: StudentRoutes,
  },
  {
    path: '/faculties/',
    route: FacultyRoutes,
  },
  {
    path: '/managing-department/',
    route: ManagingDepartmentRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
