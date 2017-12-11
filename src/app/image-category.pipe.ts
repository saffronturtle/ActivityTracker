import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageCategory'
})
export class ImageCategoryPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    switch ( value ) {
			case "productivity" {
				return "https://lorempixel.com/100/100/business"; }
			case "exercise" {
				return "https://lorempixel.com/100/100/sports"; }
  }

}
