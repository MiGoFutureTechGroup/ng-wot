import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
  }

  login(): void {
    let url: string = '/api/login/';
    let body: any = {
      'data': {
        'username': this.username,
        'password': this.password
      }
    };
    console.log('Login attempt:', url, body);

    body = JSON.stringify(body);
    this.http.post<any>(url, body).subscribe((res) => {
      console.log('Response:', res);
    });
    // TODO handle ajax response
  }

}
