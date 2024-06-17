import Wrapper from '../assets/DashboardWrapper/TextAreaInput';

const TextAreaInput = ({ name, id, text, placeholder }) => {
  return (
    <>
      <Wrapper>
        <div className="text-area">
          <textarea
            id={id}
            className="textarea "
            name={name}
            placeholder={placeholder}
          >
            {text}
          </textarea>
        </div>
      </Wrapper>
    </>
  );
};
export default TextAreaInput;
