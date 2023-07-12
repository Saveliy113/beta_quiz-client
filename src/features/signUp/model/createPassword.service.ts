import { $axios } from '@/shared/api';

export type CreateTeacherDto = {
  domain: string;
  phone: string;
  password: string;
};

class CreatePasswordApi {
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

const CreatePasswordService = new CreatePasswordApi();

export default CreatePasswordService;
