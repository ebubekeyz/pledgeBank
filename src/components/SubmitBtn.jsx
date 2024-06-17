import { useNavigation } from 'react-router-dom';
import Wrapper from '../assets/SubmitBtn';

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <button className="btn form-btn" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <span className="loading"></span>sending...
          </>
        ) : (
          text || 'submit'
        )}
      </button>
    </Wrapper>
  );
};
export default SubmitBtn;
