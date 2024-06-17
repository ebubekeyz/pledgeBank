import { useEffect } from 'react';
import Wrapper from '../assets/FormSelect';

const FormSelect = ({
  label,
  id,
  list,
  defaultValue,
  onChange,
  onClick,
  value,
}) => {
  return (
    <Wrapper>
      {' '}
      <div className="custom-select">
        <label htmlFor={name} className="label">
          <span
            className="label-text"
            style={{
              color: 'var(--clr-grey-8)',
              fontWeight: '700',
              fontSize: '1rem',
            }}
          >
            {label}
          </span>
        </label>
        <select
          name={name}
          id={id}
          defaultValue={defaultValue}
          onChange={onChange}
          onClick={onClick}
          value={value}
        >
          {list.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </Wrapper>
  );
};
export default FormSelect;
