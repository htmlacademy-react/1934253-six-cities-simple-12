// import { useAppSelector } from '../../hooks';
// import { getError } from '../../store/data/data.selector';
import './error-message.css';

const error = null;

const ErrorMessage = (): JSX.Element | null =>
// const error = useAppSelector(getError);

  (error)
    ? <div className='error-message'>{error}</div>
    : null;


export default ErrorMessage;
