import { $axios } from '@/shared/api';
import { LoginDto } from '../model/types';

class UserApi {
  async login(dto: LoginDto) {
    return $axios.post('/auth_tokentoken/login/', {
      phone_number: dto.phone,
      password: dto.password,
    });
  }

  async logout() {
    return $axios.post('/auth_tokentoken/logout/');
  }
}

const UserService = new UserApi();

export default UserService;
