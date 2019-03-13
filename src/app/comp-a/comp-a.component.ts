import { Component, OnInit, Input, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit,
AfterViewChecked } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
AfterContentChecked {

  @Input() firstName: string;

  constructor(private parent: AppComponent) {}

  ngOnChanges() {
    console.log('Component A ngOnChanges');
  }

  ngOnInit() {
    // this.parent.firstName = "Shan"
    this.parent.title = "Welcome to React"
    console.log('Component A ngOnInit');
  }

  ngDoCheck() {
    console.log('Component A ngDoCheck');
  }
  
  ngAfterContentInit() {
    
    console.log('Component A ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Component A ngAfterContentChecked');
  }

}
