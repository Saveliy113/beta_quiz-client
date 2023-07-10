import toast, { Toast } from 'react-hot-toast';

type useNotifyOptions = {
  success?: boolean;
  error?: boolean;
  message: string;
};

const useNotify = () => {
  const notify = ({ error, success, message }: useNotifyOptions) => {
    if (success) {
      toast.success(`${message}`, {
        duration: 4000,
        style: {
          width: '250px',
          backgroundColor: '#b9f6ca',
          padding: '20px',
        },
        position: 'top-center',
      });
    }

    if (error) {
      toast.error(`${message}`, {
        duration: 4000,
        style: {
          width: '250px',
          backgroundColor: '#fbe9e7',
          padding: '20px',
        },
        position: 'top-center',
      });
    }
  };

  return { notify };
};

export default useNotify;
