import { $axios } from '@/shared/api';

export type CheckTeacherDto = {
  domain: string;
  phone_number: string;
};

type SendOtpDto = {
  phoneNumber: string;
};

type CheckOtpDto = {
  phoneNumber: string;
  otp: string;
};

class SignUpApi {
  async checkTeacher(dto: CheckTeacherDto) {
    return $axios.post('/teachers/check_teacher_alfa', dto);
  }
}

const SignUpService = new SignUpApi();

export default SignUpService;