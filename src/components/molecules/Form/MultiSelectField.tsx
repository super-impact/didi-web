import React, { HTMLProps, useCallback } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const GenericTypeReactMemo: <T>(c: T) => T = React.memo;
type Options<T> = { label: string; value: T }[];

interface Props<T> extends HTMLProps<HTMLSelectElement> {
  options: Options<T>;
  onChange: (value: Options<T> | React.ChangeEvent<any>) => void;
}

const MultiSelectField = <T extends Object>(props: Props<T>) => {
  const { options, placeholder, onChange, ref, as, ...restProps } = props;

  const handleChange = useCallback(
    (selectValues: Options<T> | null | undefined) => {
      if (selectValues === null) {
        props.onChange([]);
      }

      if (selectValues) {
        props.onChange(selectValues);
      }
    },
    [props]
  );

  return (
    <StyledSelectField
      {...restProps}
      classNamePrefix="react-select"
      isMulti
      placeholder={placeholder}
      options={options}
      noOptionsMessage={() => "선택할 항목이 없습니다"}
      onChange={handleChange}
    />
  );
};

export default GenericTypeReactMemo(MultiSelectField);

const StyledSelectField = styled(Select)`
  & .react-select__control {
    border-radius: 3px;
    font-size: 14px;
    outline: none;
    border: 1px solid #eee;
    padding: 6px 10px;

    ::placeholder {
      font-size: 14px;
    }

    :hover {
      border: 1px solid #eee;
    }

    .react-select__menu {
      font-size: 14px;
      border: 1px solid #eee;
      outline: none;
      margin-top: 30px;
    }
  }

  & .react-select__value-container {
    padding: 0;
  }

  &:focus {
    outline: none;
  }

  .react-select__option {
    font-size: 14px;
  }
`;
