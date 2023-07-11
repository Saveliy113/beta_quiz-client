import { $axios } from '@/shared/api';

export type SendOtpDto = { phone: string };
export type CheckOtpDto = { phone: string; otp: string };

class otpApi {
  async sendOtp(dto: SendOtpDto) {
    return $axios.post('/verify/verify_phone/', {
      phone_number: dto.phone,
    });
  }

  async verifyOtp(dto: CheckOtpDto) {
    return $axios.post('/verify/verify_phone_number/', {
      phone_number: dto.phone,
      phone_verification_code: dto.otp,
    });
  }
}

const OtpService = new otpApi();

export default OtpService;
