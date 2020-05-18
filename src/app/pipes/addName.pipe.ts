import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
    name:'addName'
})
export class AddName implements PipeTransform{
    transform(value: any) {
        return value+' Pipe Name';
    }

}