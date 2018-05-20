import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SessionService } from '../../services/session.service';

@Component({
  template: ``,
})
export class LogoutComponent implements OnInit {

  constructor(
    private session: SessionService,
  ) { }

  ngOnInit() {
    this.session.tryLogout();
  }

}
