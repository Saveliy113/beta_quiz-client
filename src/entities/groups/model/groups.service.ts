import { $axios } from '@/shared/api';
import { GetGroupsDto } from './types';

class GroupsApi {
  async getGroups(dto: GetGroupsDto) {
    return $axios.post('/alfa_requests/groups/get_teacher_groups', {
      ...dto,
      teacher_id: dto.teacher,
    });
  }
}

const TableService = new GroupsApi();
export default TableService;
