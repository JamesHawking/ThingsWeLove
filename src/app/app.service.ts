import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class FireBaseService {
items: FirebaseListObservable<any>;
name: any;

    constructor(af: AngularFire) {
        this.items = af.database.list('/messages', {
            query: {
                limitToLast: 50
            }
    });
        af.auth.subscribe(auth => {
            if (auth) {
                this.name = auth;
            }
        });
    }
}
