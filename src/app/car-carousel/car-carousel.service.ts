import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface CarImage {
  url : string;
  title : string;
}

export type CarImages = CarImage[];

@Injectable( {
  providedIn : 'root'
} )
export class CarByCategoryService {

  private imagesSubject : BehaviorSubject<CarImages> = new BehaviorSubject<CarImages>( [] );
  public images$ : Observable<CarImages> = this.imagesSubject.asObservable();

  constructor() {
    this.imagesSubject.next( [
      {
        url : 'assets/images/am-car-bmw.png',
        title : 'BMW Series 5',
      },
      {
        url : 'assets/images/am-car-chevrolett.png',
        title : 'Chevrolett Express Cargo',
      },
      {
        url : 'assets/images/am-car-ford.png',
        title : 'Ford F-150',
      },
      {
        url : 'assets/images/am-car-honda-civic.png',
        title : 'Honda Civic Hatchback',
      },
      {
        url : 'assets/images/am-car-mustang.png',
        title : 'Ford Mustang',
      },
      {
        url : 'assets/images/am-car-f-50.png',
        title : 'Ford F-150',
      },
    ] );
  }

  public getImages() : CarImages {
    return this.imagesSubject.getValue();
  }

}
