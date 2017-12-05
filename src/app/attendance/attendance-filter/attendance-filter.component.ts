import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-attendance-filter',
  templateUrl: './attendance-filter.component.html',
  styleUrls: ['./attendance-filter.component.css']
})
export class AttendanceFilterComponent implements OnInit {

  /* filter: any = {
    empId: "",
    attDate: ""
  }; */

  /* filterForm = new FormGroup ({
    empId: new FormControl()
  }); */

  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.filterForm = this.fb.group({
      empId: ['', [Validators.required, Validators.minLength(4)] ]
    });
  }
  

  ngOnInit() {
  }

  search(){

  }

  

}
