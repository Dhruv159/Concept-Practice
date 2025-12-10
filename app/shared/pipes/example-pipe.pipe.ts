import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'examplePipe',
    pure: false
})
export class ExamplePipe implements PipeTransform {

    transform(value: string, gender: string) {
        if(gender == 'male') return `Mr. ${value}`;
        if(gender == 'female') return `Mrs. ${value}`;
        return value;
    }
    
}