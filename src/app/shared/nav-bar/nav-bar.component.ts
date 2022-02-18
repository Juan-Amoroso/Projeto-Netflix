import { EventEmitter, OnInit, Output, Input } from "@angular/core"; // este método será chamado toda vez que o componente for inicializado
import { Component } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {


    @Output() menuToggle: EventEmitter<boolean> = new EventEmitter();
    @Input() opened = false;

    constructor() {

    }

    ngOnInit(): void {
        
    }

    toggle() {

        this.opened = (this.opened === true) ? false : true 
        this.menuToggle.emit(this.opened);
    }


}