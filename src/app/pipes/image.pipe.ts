import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const URL =  environment.imgPatg;


@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {


  transform( img: string, size: string = 'w500' ): any {

    if(!img) {
      return '';
    }
    

    const imgUrl = `${ URL }/${ size }${img}`;
    return imgUrl;

  }

}
