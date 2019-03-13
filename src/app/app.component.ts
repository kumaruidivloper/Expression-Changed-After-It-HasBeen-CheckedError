import { Component, OnInit, Input, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, 
AfterContentChecked {
  title = 'Welcome to Angular World!';
  firstName = 'Kumar';

  ngOnInit() {
    console.log('Component App Oninit');
  }

  ngDoCheck() {
    console.log('Component App DoCheck');
  }

  ngAfterContentInit() {
    console.log('Component App AfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Component App AfterContentChecked');
  }
}
