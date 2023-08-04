import { $axios } from '@/shared/api';
import { GetGroupsDto, GetLessonsDto } from '../model/types';

class LessonsApi {
  async getLessons(dto: GetLessonsDto) {
    return $axios.post('/alfa_requests/lessons/get_teacher_lessons', {
      domain: dto.domain,
      teacher_id: dto.teacher,
      date_from: dto.startDate,
      date_to: dto.endDate,
      page: dto.page,
    });
  }

  async getGroups(dto: GetGroupsDto) {
    return $axios.post('/alfa_requests/groups/get_teacher_groups', {
      ...dto,
      teacher_id: dto.teacher,
    });
  }
}

const LessonsService = new LessonsApi();

export default LessonsService;
