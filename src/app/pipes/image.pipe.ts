import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const URL =  'https://image.tmdb.org/t/p';


@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {


  transform( img: string, size: string = 'w500' ): string {

    if(!img) {

      return;

    }

    const imgUrl = `${ URL }/${ size }/${img}`;
    console.log(imgUrl);
    return imgUrl;

    

  }

}
