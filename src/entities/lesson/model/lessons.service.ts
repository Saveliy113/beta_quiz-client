import { $axios } from '@/shared/api';
import { GetLessonsDto } from './types';

class LessonsApi {
  async getLessons(dto: GetLessonsDto) {
    return $axios.post('/alfa_requests/lessons/get_teacher_lessons', {
      ...dto,
      teacher_id: dto.teacher,
      date_from: dto.startDate,
      date_to: dto.endDate,
    });
  }
}

const LessonsService = new LessonsApi();

export default LessonsService;
