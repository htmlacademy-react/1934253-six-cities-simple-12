import {useAppSelector} from '../../hooks';
import { getError } from '../../store/data/data.selector';
import './error-message.css';

const ErrorMessage = (): JSX.Element | null => {
  const error = useAppSelector(getError);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;

};

export default ErrorMessage;
