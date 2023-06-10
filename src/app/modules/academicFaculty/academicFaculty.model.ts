import { model, Schema } from 'mongoose';
import {
  AcademicFacultyModel,
  IAcademicFaculty,
} from './academicFaculty.interface';

const AcademicFacultySchema = new Schema<IAcademicFaculty>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
});

export const AcademicFaculty = model<IAcademicFaculty, AcademicFacultyModel>(
  'AcademicFaculty',
  AcademicFacultySchema
);
