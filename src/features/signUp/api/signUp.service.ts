import { $axios } from '@/shared/api';
import { CheckTeacherDto, CreateTeacherDto } from '../model/types';

class SignUpApi {
  async checkTeacher(dto: CheckTeacherDto) {
    return $axios.post('/teachers/check_teacher_alfa', dto);
  }

  async createTeacher(dto: CreateTeacherDto) {
    return $axios.post<CreateTeacherDto, CreateTeacherDto>(
      '/teachers/teacher/',
      {
        domain: dto.domain,
        phone_number: dto.phone,
        password: dto.password,
      }
    );
  }
}

const SignUpService = new SignUpApi();

export default SignUpService;
