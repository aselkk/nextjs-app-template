
import styles from './BaseTemplate.module.css';

export interface BaseTemplateProps {
  sampleTextProp: string;
}

export const BaseTemplate: React.FC<BaseTemplateProps> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{ sampleTextProp }</div>;
};



