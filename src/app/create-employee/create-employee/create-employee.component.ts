import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      fullName : [""],
      email: [""],

      //skill form group
      skillsFormGroup : this.fb.group({
        skillName : [""],
        experienceInYears : [""],
        proficiency : [""]
      })
    });
  }

  onSubmit(): void {
    console.log(this.employeeForm.value);
  }

  onLoadDataClick(): void {
    this.employeeForm.setValue({
      fullName : "Sandhya",
      email: "abc@gmail.com",
      skillsFormGroup : {
        skillName : "Tech",
        experienceInYears : "2",
        proficiency: "Advanced"        
      }
    });
  }
}
