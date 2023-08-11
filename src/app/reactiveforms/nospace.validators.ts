import { AbstractControl,ValidationErrors } from "@angular/forms";

export class nospace{
    static nospacevalidation (control:AbstractControl):ValidationErrors | null{
        let controlvalue=control.value as string;
        if(controlvalue.indexOf(' ')>=0){
            return {nospacevalidators:true};
        }
        else{
            return null;
        }
    }
}