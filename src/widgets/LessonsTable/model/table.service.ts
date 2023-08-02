import { $axios } from '@/shared/api';
import { GetGroupsDto } from './types';

class LessonsApi {
  async getGroups(dto: GetGroupsDto) {
    return $axios.post('/alfa_requests/groups/get_teacher_groups', {
      ...dto,
      teacher_id: dto.teacher,
    });
  }
}

const TableService = new LessonsApi();
export default TableService;
