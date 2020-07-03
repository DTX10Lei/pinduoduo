import { ImageSliderComponent } from './share/components/image-slider/image-slider.component';
import { Component, ViewChild } from '@angular/core';
import { TopMenu} from './share/components';
import { ImageSlider} from './share/components';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pinduoduo';
  scrollableBackgroundColor = 'red';
  username = '';
  @ViewChild('imageSlider') imageSlider: ImageSliderComponent;
  topMenus: TopMenu[] = [
  {
    title: '热门',
    link: '#1',
  },
  {
    title: '女装',
    link: '#2',
  },
  {
    title: '鞋包',
    link: '#3',
  },
  {
    title: '手机',
    link: '#1',
  },
  {
    title: '食品',
    link: '#2',
  },
  {
    title: '母婴',
    link: '#3',
  },
  {
    title: '百货',
    link: '#1',
  },
  {
    title: '男装',
    link: '#2',
  },
  {
    title: '内衣',
    link: '#3',
  },
  {
    title: '电器',
    link: '#1',
  },
  {
    title: '家纺',
    link: '#2',
  },
  {
    title: '水果',
    link: '#3',
  },
  {
    title: '家具',
    link: '#3',
  },
  {
    title: '美妆',
    link: '#1',
  },
  {
    title: '男装',
    link: '#2',
  },
  {
    title: '运动',
    link: '#3',
  },
  {
    title: '车品',
    link: '#1',
  },
]

imageSliders: ImageSlider[] = [
  {
    imagUrl: './assets/images/ia_100000003.jpg',
    link: '',
    caption: 'recycling society',
},
{
  imagUrl: './assets/images/ia_100000004.jpg',
  link: '',
  caption: 'winter time 1',
},
{
  imagUrl: './assets/images/ia_100000005.jpg',
  link: '',
  caption: 'winter time 2',
},
{
  imagUrl: './assets/images/ia_100000006.jpg',
  link: '',
  caption: 'winter time 3',
}

]

handleTabSelected(topMenu: TopMenu){

}

ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  console.log(this.imageSlider);
}

}
