import { Form } from '@/shared/ui/Form/Form';
import CustomOtpInput from '@/shared/ui/OtpInput/CustomOtpInput';
import React from 'react';

type Props = {};

const OtpVerify = (props: Props) => {
  return (
    <div className="otp_container">
      <CustomOtpInput />;
    </div>
  );
};

export default OtpVerify;
