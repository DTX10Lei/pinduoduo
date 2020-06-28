import { Component } from '@angular/core';

interface TopMenu {
  title: String;
  link?: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pinduoduo';
  selectedIndex = -1;
  menus: TopMenu[] = [
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

  ];
}
