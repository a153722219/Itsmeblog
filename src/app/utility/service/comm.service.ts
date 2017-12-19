import {Injectable} from '@angular/core';
//组件通信模块
@Injectable()
export class commService {
  isLogin:boolean=false;
  uId:number=-1;
  uname:string="";
  constructor() {
  }
}
