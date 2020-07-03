import { Component, OnInit, AfterViewInit, Input, ViewChild, ViewChildren, ElementRef, QueryList, Renderer2,
  OnDestroy} from '@angular/core';

export interface ImageSlider{
  imagUrl: string;
  link: string;
  caption: string;

}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})


export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @Input() intervalBySeconds = 2;
  selectedIndex = 0;
  intervalId;
  @ViewChild('imageSlider', {static: true }) imageSlider: ElementRef;
  @ViewChildren('img') imgs: QueryList<ElementRef>;

  constructor( private rd2: Renderer2) { }

  ngOnInit() {
    // console.log('ngOnInit', this.imageSlider);

    // this.imageSlider.nativeElement.innerHTML = '<span> Hello! </span>';
  }

  ngAfterViewInit(): void {

    // this.imgs.forEach(item => item.nativeElement.style.height = '100px');
    // this.imgs.forEach(item => {this.rd2.setStyle (item.nativeElement, 'height', '100px')});

    this.intervalId = setInterval(() => {
      this.rd2.setProperty(this.imageSlider.nativeElement, 'scrollLeft',
    ((this.getIndex( ++this.selectedIndex) ) * this.imageSlider.nativeElement.scrollWidth) / this.sliders.length); }
    , this.intervalBySeconds * 1000);

   }
   getIndex(index: number): number {

    return index > 0 ? index % this.sliders.length : this.sliders.length - (Math.abs(index) % this.sliders.length);
   }

   handleScroll(ev){
    const ratio = (ev.target.scrollLeft * this.sliders.length) / ev.target.scrollWidth;
    this.selectedIndex = Math.round(ratio);
   }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    clearInterval(this.intervalId);

  }
}
