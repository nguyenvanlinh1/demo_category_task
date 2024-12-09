type ValidationRule = {
  field: string; // Tên trường cần validate
  value: any; // Giá trị cần validate
  rules: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (value: any) => string | null; // Hàm custom để kiểm tra riêng
  };
};

type ValidationResult = {
  [key: string]: string | null;
};

export const validate = (validations: ValidationRule[]): ValidationResult => {
  const errors: ValidationResult = {};

  validations.forEach(({ field, value, rules }) => {
    if (rules.required && (!value || value.trim() === "")) {
      errors[field] = `${field} không được để trống.`;
      return;
    }

    if (rules.minLength && value.length < rules.minLength) {
      errors[field] = `${field} phải có ít nhất ${rules.minLength} ký tự.`;
      return;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      errors[field] = `${field} không được vượt quá ${rules.maxLength} ký tự.`;
      return;
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      errors[field] = `${field} không đúng định dạng.`;
      return;
    }

    if (rules.custom) {
      const customError = rules.custom(value);
      if (customError) {
        errors[field] = customError;
        return;
      }
    }
    errors[field] = null;
  });

  return errors;
};
