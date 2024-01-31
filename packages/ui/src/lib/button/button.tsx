// import styles from './button.module.css';


// export interface ButtonProps {}

// export function Button(props: ButtonProps) {
//   return (
//     <div className={styles['container']}>
//       <h1>Welcome to Button!</h1>
//       <button className={styles['container']}>testing</button>
//     </div>
//   );
// }


import React from 'react';
import styles from './button.module.css';

export function Button({ children, variant = 'primary', onClick ,size }: { children: React.ReactNode; variant?: string; onClick?: () => void; size?: string; }) {
  return (
    <button className={`${styles.button} ${styles[variant]} ${size && styles[size]}`} onClick={onClick}>
      {children}
    </button>
  );
}

 export default Button;
