import React from 'react';
import * as styles from './AllianceInputField.module.scss';

type AllianceInputFieldProps = {
  title: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<string>;
  description?: string;
  required?: boolean;
};

const AllianceInputField = ({
  title,
  placeholder,
  value,
  setValue,
  description,
  required = true,
}: AllianceInputFieldProps) => {
  return (
    <div className={styles.AllianceInputFieldWrapper}>
      <div className={styles.AllianceInputFieldHeader}>
        <div className={styles.AllianceInputFieldTitle}>{title}</div>
        {required && <div className={styles.AllianceInputFieldRequire}>*</div>}
      </div>
      <input
        className={styles.AllianceInputField}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      {description && <div className={styles.AllianceInputFieldDescription}>{description}</div>}
    </div>
  );
};

export default AllianceInputField;
