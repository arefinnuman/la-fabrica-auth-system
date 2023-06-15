import { Schema, model } from 'mongoose';
import { bloodGroup, designation, gender } from './faculty.constant';
import { FacultyModel, IFaculty } from './faculty.interface';

export const FacultySchema = new Schema<IFaculty, FacultyModel>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      middleName: String,
    },
    required: true,
  },
  gender: {
    type: String,
    enum: gender,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: bloodGroup,
  },
  designation: {
    type: String,
    enum: designation,
    required: true,
  },
  academicFaculty: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicFaculty',
    required: true,
  },
  academicDepartment: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicDepartment',
    required: true,
  },
});

export const Faculty = model<IFaculty, FacultyModel>('Faculty', FacultySchema);
