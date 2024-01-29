// utils/toast.ts
import toast from 'react-hot-toast';

export const showSuccessToast = (message: string) => {
  toast.success(message, {
    style: {
      border: '1px solid #green',
      padding: '16px',
      color: 'green',
    },
    iconTheme: {
      primary: 'green',
      secondary: '#FFFAEE',
    },
  });
};

export const showErrorToast = (message: string) => {
  toast.error(message, {
    style: {
      border: '1px solid #red',
      padding: '16px',
      color: 'red',
    },
    iconTheme: {
      primary: 'red',
      secondary: '#FFFAEE',
    },
  });
};
