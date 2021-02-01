import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CarByCategoryService, CarImages } from 'src/app/car-carousel/car-carousel.service';

@Component( {
  selector : 'am-car-carousel',
  templateUrl : './car-carousel.component.html',
  styleUrls : [ './car-carousel.component.scss' ]
} )
export class CarCarouselComponent implements OnInit {
  public readonly maxNumberOfImagesInView : number = 5;
  public currentScrollPosIndex : number = this.maxNumberOfImagesInView - 1;

  public carImages : CarImages = [];

  @ViewChildren( 'imageList', { read : ElementRef } ) public imageList : QueryList<ElementRef> | undefined;

  constructor(
    public carByCategoryService : CarByCategoryService,
  ) {
    this.carImages = this.carByCategoryService.getImages();
  }

  public get lastItemIndex() : number {
    return this.carImages.length - 1;
  }

  public ngOnInit() : void {
  }

  public goBackward() : void {
    const previewWindowEndItemIndex : number = this.currentScrollPosIndex - this.maxNumberOfImagesInView;
    const previewWindowStartItemIndex : number = Math.max( previewWindowEndItemIndex - ( this.maxNumberOfImagesInView - 1 ), 0 );
    this.currentScrollPosIndex = Math.max( previewWindowEndItemIndex, this.maxNumberOfImagesInView - 1 );
    this.scrollTo( previewWindowStartItemIndex );
  }

  public goForward() : void {
    this.currentScrollPosIndex = Math.min(
      this.currentScrollPosIndex + this.maxNumberOfImagesInView,
      this.lastItemIndex,
    );
    this.scrollTo( this.currentScrollPosIndex );
  }

  private scrollTo( imageIndex : number ) : void {
    const image : ElementRef | undefined = this.imageList?.find( ( el : ElementRef, index : number ) => {
      return imageIndex === index;
    } );
    if( image ) {
      image.nativeElement.scrollIntoView( { center : 'center', behavior : 'smooth' } );
    }
  }

}
