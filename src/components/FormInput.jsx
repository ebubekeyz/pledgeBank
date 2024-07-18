import Wrapper from '../assets/FormInput';

const FormInput = ({
  label,
  name,
  type,
  defaultValue,
  id,
  onChange,
  placeholder,
  value,
  hidden,
}) => {
  return (
    <Wrapper>
      <div className="control">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>

        <input
          id={id}
          name={name}
          defaultValue={defaultValue}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          className="input"
        />
      </div>
    </Wrapper>
  );
};
export default FormInput;
