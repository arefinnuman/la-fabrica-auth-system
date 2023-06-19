export type IAdmin = {
  id: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  gender: string;
  permanentAddress: string;
  presentAddress: string;
  bloodGroup?: string;
  managementDepartment: string;
  designation: string;
  profileImage?: string;
  createdAt: Date;
  updatedAt: Date;
};
