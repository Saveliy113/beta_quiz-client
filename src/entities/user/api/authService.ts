import { $axios } from '@/shared/api';
import { LoginDto } from './types';

class AuthService {
  async login(dto: LoginDto) {
    const { data } = await $axios.post('/auth_tokentoken/login/', dto);

    return data;
  }
}

export default new AuthService();
