import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appConfirmFields]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmFieldsDirective,
    multi: true
}]
})
export class ConfirmFieldsDirective {

  @Input() appConfirmFields: string;
    validate(control: AbstractControl): { [key: string]: any } | null {
        const controlToCompare = control.parent.get(this.appConfirmFields);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { notEqual: true };
        }

        return null;
    }
  constructor() { }

}
