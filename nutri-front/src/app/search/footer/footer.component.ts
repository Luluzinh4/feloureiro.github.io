import { LoginDialogComponent } from './../login-dialog/login-dialog.component';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
    this.modalService.open(LoginDialogComponent);
  }

}