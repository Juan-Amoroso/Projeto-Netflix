import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  
  @Input() title: any;
  @ViewChild('trailer', { static: true }) trailer: ElementRef<HTMLVideoElement>;

  constructor() {

   

   }

  ngOnInit()  {

    
  }

  playVideo() {

    this.trailer.nativeElement.play();

  }

  stopVideo() {


  }

}
