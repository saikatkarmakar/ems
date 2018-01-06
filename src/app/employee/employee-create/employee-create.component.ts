import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
  providers: [EmployeeService]
})
export class EmployeeCreateComponent implements OnInit {
  createEmployee: FormGroup;

  constructor(private fb: FormBuilder, private _employeeService: EmployeeService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.createEmployee = this.fb.group({ // <-- the parent FormGroup
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      emailId: ['', [Validators.required, Validators.email]],
      /* address: this.fb.group({ // <-- the child FormGroup
        street: '',
        city: '',
        state: '',
        zip: ''
      }),
      status: '', */
    });
  };

  create(){
    var req = this.createEmployee.value;
    this._employeeService.create(req);
  }

  logThis(){
    console.log(this.createEmployee);
  }

}
