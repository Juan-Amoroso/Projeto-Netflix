import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-list-titles',
  templateUrl: './list-titles.component.html',
  styleUrls: ['./list-titles.component.css']
})
export class ListTitlesComponent implements OnInit {

  @Input() title: string;
  @Input() list: any

  constructor() {

    this.title = "";

   }
  


  ngOnInit()  {
  }

}
