import { Component, OnInit } from '@angular/core';
import { StudentService} from '../../student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

}
