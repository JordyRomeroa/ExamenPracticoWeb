export class FormUtils {
  static isInvalid(form: any, control: string) {
    const field = form.get(control);
    return field && field.touched && field.invalid;
  }

  static getErrorMessage(form: any, control: string) {
    const field = form.get(control);

    if (field?.errors?.['required']) return 'Este campo es obligatorio';
    if (field?.errors?.['email']) return 'Formato de email inválido';
    if (field?.errors?.['minlength'])
      return `Debe tener mínimo ${field.errors['minlength'].requiredLength} caracteres`;

    return '';
  }
}
