import { MYSnackbar } from './style';

type SnackbarProps = {
  open?: boolean;
  message?: string;
  type?: 'error' | 'success';
  icon?: React.ReactNode | string;
  readonly handleClose?: () => void;
};

const Snackbar: React.FC<SnackbarProps> = ({ message, type, open, icon }) => {
  return (
    <>
      <MYSnackbar open={open} type={type}>
        <span className="icon"> {icon} </span>
        <span>{message}</span>
      </MYSnackbar>
    </>
  );
};

export default Snackbar;
