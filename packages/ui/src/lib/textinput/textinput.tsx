import styles from './textinput.module.css';
import React, { useState } from 'react';

/* eslint-disable-next-line */
export interface TextinputProps {
  label: string;
  initialValue?: string;
  onChange?: (value: string) => void;
}

// export function Textinput(props: TextinputProps) {
//   return (
//     <div className={styles['container']}>
//       <h1>Welcome to Textinput!</h1>
//     </div>
//   );
// }

const Textinput: React.FC<TextinputProps> = ({ label, initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div>
      <label htmlFor="input-text">{label}</label> <br />
      <input
        type="text"
        id="input-text"
        value={value}
        onChange={handleChange}
        className={styles.inputText}
        placeholder='Enter a Name'
      />
    </div>
  );
};

export default Textinput;
