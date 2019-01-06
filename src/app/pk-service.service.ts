import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PkServiceService {

  constructor(private https: HttpClient) {
    console.log('pkspsksk')
  }
  posting_person(person) {
    console.log(person)
    let pks_var = {
      "mobile_number": person.name,
      "password": person.age
    }
    return this.https.post('login_url', pks_var).toPromise().then(res => {
console.log(res);
return res
    })
  }
}
