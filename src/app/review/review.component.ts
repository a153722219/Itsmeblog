import {Component, OnInit,Input} from '@angular/core';
import { HttpService } from "../utility/service/http.service";
import { commService } from "../utility/service/comm.service";

@Component({
  selector: 'storeReview',
  templateUrl: './review.component.html',
  styleUrls:['assets/style/style.css']
})

export class ReviewComponent implements OnInit {
  @Input() sId:string = "";
  private pList:Array<any>=[{Id:1,pl_user:"管理员大大",pl_ctx:"暂时没有评论哦  快来做第一个沙发吧"}];
  ctx:string="";
  constructor( private http:HttpService,private ms:commService) {
  }

  ngOnInit() {
    this.getReview();
  }


  getReview(){
    this.http.sendRequest('http://localhost/blog/getReview.php?Id='+this.sId)
      .subscribe((data:any)=>{
        console.log(data);
        this.pList=data;
      })
  }


  addReview(){
    if(this.ms.isLogin==false){
      alert("请先登录");
      return;
    }else if(this.ms.uId==-1){
      alert("请先登录");
      return;
    }


    this.http.postData(
      'http://localhost/blog/addReview.php',
      'ctx='+this.ctx+'&id='+this.sId+'&uname='+this.ms.uname)
      .subscribe((data:any)=>{
        if(data.code==-1){
          alert("请先登录");
        }else if(data.code==-2){
          alert("评论内容长度必须大于6");
        }else if(data.code==-3){
          alert("服务器错误...");
        }else if(data.code==1){
          alert("发表成功");
          this.getReview();
        }
      })

  }

}
