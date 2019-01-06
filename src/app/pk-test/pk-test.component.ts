// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-pk-test',
//   templateUrl: './pk-test.component.html',
//   styleUrls: ['./pk-test.component.css']
// })
// export class PkTestComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }

import { Component, OnInit } from '@angular/core';
import { pk_model_test } from './pk_model'
import { PkServiceService } from '../pk-service.service';


@Component({
  selector: 'app-pk-test',
  templateUrl: './pk-test.component.html',
  styleUrls: ['./pk-test.component.css']
})
export class PkTestComponent implements OnInit {
form: any;
  powers: string[];
  submitted: boolean = false;
  // name : string = 'prashant'
  // age : number = 18
  name : string = ''
  age : number = 0

  test_res;
  designation
  society_name

  person : pk_model_test = new pk_model_test()
  constructor(private pk_service : PkServiceService) {
    this.test_assign()
   }

  ngOnInit() {
    this.powers = ['Really Smart', 'Turbulent Breeze',
                'Super Hot', 'Weather Changer'];
  }

  // onSubmit(form: any)  {
  //   this.submitted = true;
  //   this.form = form;
  // }
  onSubmit(){
    if (this.validate()){
    console.log(this.name, this.age)
    this.person.name = this.name
    this.person.age = this.age
    console.log(this.person)
    this.pk_service.posting_person(this.person).then(res=>{
      console.log(res)
      // this.test_res = res['data']
      this.designation = res['data'].designation
      this.society_name = res['data'].society_name
    })
  }
    else {
      window.alert('please enter name');
    }
  }
  validate(){
    if (this.name === null || this.name === ''){
      return false;
    }
    else {
      console.log('pks')
      return true;
    }
  }
  // test_assign(){
  //   let t_data = {
  //     name : "pranav"
  //   }
  //   console.log(t_data)
  //   let t2_data = t_data
  //   t2_data.name = "prashant"
  //   console.log(t2_data)
  //   console.log(t_data)
  // }
  test_assign(){
    let t_data = {
      name : "pranav"
    }
    console.log(t_data)
    let t2_data = {
      ...t_data
    }
    t2_data.name = "prashant"
    console.log(t2_data)
    console.log(t_data)
  }
}
