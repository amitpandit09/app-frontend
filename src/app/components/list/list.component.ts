import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material';
import {Student} from '../../student.model';

import { StudentService} from '../../student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {




  students : Student[];
  displayedColumns = ['email','name','semester','favMovie','courseReason','program','SImeaning','concentration','proficiency','database','cloudservices','technologies','degree','goals','actions'];

  constructor(private studentService: StudentService,private router:Router) {

  }

  ngOnInit() {
  this.fetchStudents();
  }

  fetchStudents(){
  this.studentService
  .getStudents()
  .subscribe((data: Student[]) => {
  this.students = data;
  console.log('Data requested....');
  console.log(this.students);
  });
  }

  editStudent(id){
  	this.router.navigate([`/edit/${id}`]);
  }

  deleteStudent(id){
  	this.studentService.deleteStudent(id).subscribe(() =>{
  		this.fetchStudents();
  	});
  }

  deleteAllStudents(){ 
  this.studentService.deleteAllStudents().subscribe(val =>{
   if(val == true){
        this.fetchStudents();
        this.router.navigate(['/list']);
      }
      else{
        alert("unable to delete !");
        this.router.navigate(['/list']);
      }
  });
  }

}
