import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService} from '../../student.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  createForm FormGroup;

  selectedCourseChoice: string;
  coursesChoices: string[] = ['I am interested in this topic', 'Mandatory course for my program', 'Not really interested but giving it a try', 'This just fits my schedule','Other'];

  selectedProgramChoice: string;
  programChoices: string[] = ['Information Techology','Computer Science','Any other major'];

  selectedConcentrationChoice: string;
  concentrationChoices: string[] = ['Datascience','Machine learning /AI','Robotics','HCI','Game design','Cyber security','Full stack developer','Web developement','Other'];

  selectedJavaScriptProficiencyChoice: string;
  javaScriptProficiencyChoices: string[] = ['Beginner','Intermediate','Advanced','Expert'];

  selectedDatabaseChoice: string;
  databaseChoices: string[] = ['MYSQL','NOSQL','Advanced','No DB background','Other'];

  selectedCloudServiceChoice: string;
  cloudServiceChoices: string[] = ['Yes','No'];

  constructor(private studentService: StudentService,private fb: FormBuilder, private router: Router) { 
  this.createForm = this.fb.group({

    email:'',
    name: ['',Validators.required],
    semester:'',
    favMovie: '',
    courseReason:'',
    program:'',
    SImeaning:'',
    concentration:'',
    proficiency:'',
    database:'',
    cloudservices:'',
    technologies:'',
    degree: '',
    goals:''
  });

  }

addStudent(email,name,semester,favMovie,courseReason,program,SImeaning,concentration,proficiency,database,cloudservices,technologies,degree,goals){

courseReason = this.selectedCourseChoice;
program = this.selectedProgramChoice;
concentration = this.selectedConcentrationChoice;
proficiency = this.selectedJavaScriptProficiencyChoice;
database = this.selectedDatabaseChoice;
cloudservices = this.selectedDatabaseChoice;

  this.studentService.addStudent(email,name,semester,favMovie,courseReason,program,SImeaning,concentration,proficiency,database,cloudservices,technologies,degree,goals).subscribe(() =>{
    this.router.navigate(['/list']);
  });

}


  ngOnInit() {
    
  }
}
