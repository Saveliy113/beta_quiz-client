import { $axios } from '@/shared/api';
import { LoginDto } from './types';

class SignInApi {
  async login(dto: LoginDto) {
    return $axios.post('/auth_tokentoken/login/', {
      phone_number: dto.phone,
      password: dto.password,
    });
  }
}

const SignInService = new SignInApi();

export default SignInService;
