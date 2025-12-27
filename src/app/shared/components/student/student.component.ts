import { Component, ElementRef, ViewChild} from '@angular/core';
import { Istudents } from '../../models/student';
import { students } from '../../const/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  constructor() { }

studentArr:Array<Istudents>=students

@ViewChild('fname')fname!:ElementRef
@ViewChild('lname')lname!:ElementRef
@ViewChild('email')email!:ElementRef
@ViewChild('contact')contact!:ElementRef

onaddstudent(){

  if(this.fname.nativeElement.value.length===0) return
  let obj:Istudents={
    id:Date.now().toString(),
    fname: this.fname.nativeElement.value,
    lname: this.lname.nativeElement.value,
    email: this.email.nativeElement.value,
    contact: this.contact.nativeElement.value
  }
  
  this.studentArr.unshift(obj)

    this.fname.nativeElement.value=''
    this.lname.nativeElement.value=''
  this.email.nativeElement.value=''
    this.contact.nativeElement.value=''

}



}
