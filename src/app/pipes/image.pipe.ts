import { Pipe, PipeTransform } from '@angular/core';

const URL =  'https://image.tmdb.org/t/p';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {


  transform( img: string, size: string = 'w500' ): any {

    if(!img) {
      return './assets/image/no-image-banner.jpg';
    }
    

    const imgUrl = `${ URL }/${ size }${img}`;
    return imgUrl;

  }

}
