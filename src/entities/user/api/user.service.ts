import { $axios } from '@/shared/api';

class UserApi {
  async logout() {
    return $axios.post('/auth_tokentoken/logout/');
  }
}
