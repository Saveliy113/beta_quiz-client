import { FC, MouseEventHandler } from 'react';
import { formatTimer } from '@/shared/lib/formatTimer';

interface FormResendBlockProps {
  attempt: number;
  timerState: number;
  resendButtonHandler: MouseEventHandler<HTMLButtonElement>;
}

const FormResendBlock: FC<FormResendBlockProps> = ({
  attempt,
  timerState,
  resendButtonHandler,
}) => {
  return timerState === 0 && attempt <= 3 ? (
    <button onClick={resendButtonHandler} className="buttonLink">
      Отправить заново
    </button>
  ) : (
    <p
      className="subtext"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 5,
      }}
    >
      Не пришел код? Отправить заново через{'  '}
      <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
        {formatTimer(timerState)}
      </span>
    </p>
  );
};

export default FormResendBlock;
