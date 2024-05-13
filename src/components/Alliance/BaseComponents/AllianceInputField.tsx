import React, { InputHTMLAttributes } from 'react';
import * as styles from './AllianceInputField.module.scss';

interface AllianceInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  description?: string;
  required?: boolean;
}

const AllianceInputField = ({ title, description, required = true, ...props }: AllianceInputFieldProps) => {
  return (
    <div className={styles.AllianceInputFieldWrapper}>
      <div className={styles.AllianceInputFieldHeader}>
        <div className={styles.AllianceInputFieldTitle}>{title}</div>
        {required && <div className={styles.AllianceInputFieldRequire}>*</div>}
      </div>
      <input {...props} className={styles.AllianceInputField} />
      {description && <div className={styles.AllianceInputFieldDescription}>{description}</div>}
    </div>
  );
};

export default AllianceInputField;
