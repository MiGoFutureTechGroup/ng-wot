import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private session: SessionService,
  ) { }

  ngOnInit() {
    this.logout();
  }

  logout(): void {
    let url: string = '/api/logout/';
    let body: any = {
      'data': {}
    };

    body = JSON.stringify(body);
    this.http.post<any>(url, body).subscribe((response) => {
      this.session.isLoggedIn = false;
    });
    // TODO handle ajax response
  }

}
