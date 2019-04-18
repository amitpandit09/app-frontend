import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  uri = 'http://backendstudentprofile-dev.us-east-1.elasticbeanstalk.com';

  constructor(private http: HttpClient) { }

  getStudents(){
  	return this.http.get(`${this.uri}/students`);
  }

  getStudentById(id){
  	return this.http.get(`${this.uri}/students/${id}`);
  }

  addStudent(email,name,semester,favMovie,courseReason,program,SImeaning,concentration,proficiency,database,cloudservices,technologies,degree,goals){
    const student = {
    email:email,
    name: name,
    semester:semester,
    favMovie: favMovie,
    courseReason:courseReason,
    program:program,
    SImeaning:SImeaning,
    concentration:concentration,
    proficiency:proficiency,
    database:database,
    cloudservices:cloudservices,
    technologies:technologies,
    degree: degree,
    goals:goals
    };
    return this.http.post(`${this.uri}/students/add`,student);
  }

   updateStudent(id,name,studentID,favMovie,degree,status){
  	
  	const student = {
  	name: name,
  	studentID: studentID,
  	favMovie: favMovie,
  	degree: degree,
  	status: status
  	};
  	return this.http.post(`${this.uri}/students/update/${id}`,student);
  }

  deleteStudent(id){
  	return this.http.get(`${this.uri}/students/delete/${id}`);
  }

  deleteAllStudents(){
    return this.http.post(`${this.uri}/students/deleteAll`);
  }
}
