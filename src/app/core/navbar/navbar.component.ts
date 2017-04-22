import { Component, OnInit } from '@angular/core';

import { AngularFire, 
         AuthProviders, 
         AuthMethods,
         FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


    ngOnInit() { }
}