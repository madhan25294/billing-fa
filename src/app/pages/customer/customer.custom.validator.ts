import { AbstractControl } from '@angular/forms';
import { ConstantService } from '../../shared/constant.service'

export function validateEmailList(control: AbstractControl) {
    let constService = new ConstantService();
    let emails = control.value.split(',')
    let invalid = false;
    if (emails.length > 4) {
        invalid = true;
    } else {
        let regex = new RegExp(constService.EMAIL_PATTERN);
        for (var i = 0; i < emails.length; i++) {
            if (!regex.test(emails[i].trim())) {
                
                invalid = true;
            }
        }
    }
    return {
        invalid
    };
}