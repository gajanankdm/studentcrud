import { Component, ElementRef, ViewChild} from '@angular/core';
import { Istudents } from '../../models/student';
import { students } from '../../const/student';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  constructor(private snackBar:MatSnackBar) { }

studentArr:Array<Istudents>=students

isInEditMode:boolean=false;
editId!:string;
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

  onEdit(st: Istudents): void {
    this.fname.nativeElement.value = st.fname;
    this.lname.nativeElement.value = st.lname;
    this.email.nativeElement.value = st.email;
    this.contact.nativeElement.value = st.contact;
    this.editId = st.id;
    this.isInEditMode = true
  }

  onUpdatestudent(): void {
    if(this.fname.nativeElement.value.length===0) return
    let update_std: Istudents = {
      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value,
      id: this.editId
    }
    let getIndex = this.studentArr.findIndex(s => s.id === update_std.id);
    this.studentArr[getIndex] = update_std;
    this.isInEditMode = false;
    this.fname.nativeElement.value = ''
    this.lname.nativeElement.value = ''
    this.email.nativeElement.value = ''
    this.contact.nativeElement.value = ''
    this.snackBar.open(`STUDENT ARE UPDATED SUCCESSFULLY`, 'close', {
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }
  onremove(id:string){

    let getIndex=this.studentArr.findIndex(a=>a.id===id)
    this.studentArr.splice(getIndex,1)
     this.snackBar.open(`STUDENT IS DELETED SUCCESSFULLY`, 'Close', {
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
