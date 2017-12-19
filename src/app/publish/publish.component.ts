import {Component, OnInit} from '@angular/core';
import { HttpService} from "../utility/service/http.service";
import { Router } from '@angular/router';
@Component({
  selector: 'storePublish',
  templateUrl: './publish.component.html',
  styleUrls:['assets/style/Art.css']
})

export class PublishComponent implements OnInit {
  title:string="";
  ctx:string="";
  bk:string="1";

  constructor(private http:HttpService,private rt:Router) {
  }

  ngOnInit() {

  }

addArt(){
 let oFile =  <HTMLInputElement>document.getElementById('upimg');

    let fd= new FormData();

    if(this.title.length<6){
      alert("标题不能少于6");
      return;
    }

    if(this.ctx.length<15){
      alert("内容不能少于15个字");
      return;
    }

    if(oFile.files.length==0){
      alert("请选择图片");
      return;
    }
    fd.append("pic",oFile.files[0]);
    fd.append("title",this.title);
    fd.append("ctx",this.ctx);
    fd.append("bk",this.bk);
    this.http.upFile('http://localhost/blog/addArt.php',fd).subscribe((data:any)=>{
          if(data.code==-1){
            alert("请上传图片");
            return;
          }
      if(data.code==0) {
        alert("请输入内容或者标题");
        return;
      }
      if(data.code==-3){
        alert("格式不正确");
        return;
      }
      if(data.code==-2){
        alert("图片大小不正确");
        return;
      }
      if(data.code==-5){
        alert("服务器错误....");
        return;
      }
      if(data.code==1){
        alert("发表成功");
        this.rt.navigateByUrl('/index/news');
      }
    });

  }


}

