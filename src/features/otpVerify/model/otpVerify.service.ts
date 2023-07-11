import { $axios } from '@/shared/api';

class otpApi {
  async sendOtp(dto: { phone: string }) {
    return $axios.post('/verify/verify_phone/');
  }

  async verifyOtp(dto: { phone: string; otp: string }) {
    return $axios.post('/verify/verify_phone_number/', dto);
  }
}

const otpService = new otpApi();
