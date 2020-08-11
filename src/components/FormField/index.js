import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label`
`;

Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 60px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }

  &:focus:not([type="color"]) + span {
    transform: scale(.6) translateY(-10px);
  }

  ${({ hasValue }) => hasValue && css`
      &:not([type="color"]) + span {
        transform: scale(.6) translateY(-10px);
      }
  `};
  
`;

function FormField({
  label, type, name, value, onChange, options,
}) {
  const fieldId = `id_${name}`;
  let tag = '';

  switch (type) {
    case 'textarea':
      tag = 'textarea';
      break;
    case 'combobox':
      tag = 'select';
      break;
    default:
      tag = 'input';
  }

  const hasValue = value.length > 0;
  const hasOptions = options.length > 0;

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        {type !== 'combobox'
        && (
        <Input
          as={tag}
          type={type}
          name={name}
          value={value}
          hasValue={hasValue}
          onChange={onChange}
        />
        )}
        {type === 'combobox'
        && (
        <Input
          as={tag}
          type={type}
          name={name}
          value={value}
          hasValue={hasValue}
          onChange={onChange}
        >
          {
            (hasOptions && type === 'combobox') && (
              options.map((option) => (
                <option value={option.id} key={`combobox_option_${option.id}`}>
                  {option.value}
                </option>
              ))
            )
          }
        </Input>
        )}
        <Label.Text>
          {label}
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  options: [
    { id: '', value: '' },
    { id: 1, value: 'Teste1' },
    { id: 2, value: 'Teste2' },
  ],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
};

export default FormField;
