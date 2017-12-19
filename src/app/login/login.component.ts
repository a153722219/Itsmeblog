import {Component, OnInit} from '@angular/core';
import{ HttpService } from '../utility/service/http.service';
import { commService} from "../utility/service/comm.service";

@Component({
  selector: 'storeLogin',
  templateUrl: './login.component.html',
  styleUrls:['assets/style/style.css']
})

export class LoginComponent implements OnInit {

  isLogin:boolean = false;
  private power:string="user";
  uName:string="";
  private upwd:string="";

  constructor( private http:HttpService,private ms:commService) {
  }

  ngOnInit() {
      // //向服务器端发起请求
      this.http.sendRequest('http://localhost/blog/isLogin.php').subscribe((data:any)=>{
        if(data.code==1){
          this.isLogin=true;
          this.power=data.power;
          this.uName=data.uname;
          this.ms.isLogin=true;
          this.ms.uId=data.Id;
          this.ms.uname=data.uname;
        }
      });
  }

  myLogin(){
    console.log(123);
    this.http.postData(
      "http://localhost/blog/login.php",
      `uname=${this.uName}&upwd=${this.upwd}`).subscribe((data:any)=>{
          console.log(data);
          if(data.code==1){
              this.isLogin=true;
              this.power=data.power;
              this.ms.isLogin=true;
              this.ms.uId=data.Id;
             this.ms.uname=data.uname;
          }else{
              alert("Login fail");
          }
    });
  }

  logout(){
    this.http.sendRequest('http://localhost/blog/logout.php').subscribe((data:any)=>{
      if(data.code==1){
        this.isLogin=false;
        this.power="user";
        this.uName="";
        this.ms.uname="";
        this.upwd="";
        this.ms.uId=-1;
        this.ms.isLogin=false;
      }
    });
  }
}
