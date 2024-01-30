import styles from './about.module.css';
import { GetStaticProps } from 'next';

/* eslint-disable-next-line */
export interface AboutProps {
  name: string;

}

export default function About(props: AboutProps) {
  return (
   <div className={styles['container']}>
      <h1>Welcome to About!{props.name}</h1>
    </div>
  );
}
export const getStaticProps: GetStaticProps<AboutProps> = async (context) => {
  return {
    props: {
      name: 'Team'
    },
  };
};