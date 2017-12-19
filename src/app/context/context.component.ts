import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  {HttpService} from "../utility/service/http.service";

@Component({
  selector: 'storeContext',
  templateUrl: './context.component.html',
  styleUrls:['assets/style/style.css']
})

export class ContextComponent implements OnInit {
  Id:string="1";
  art:Object={art_img:""};
  constructor(private rs:ActivatedRoute,private http:HttpService) {
    this.rs.params.subscribe((result:any)=>{
      if(result.Id){
        this.Id=result.Id;
        console.log(this.Id)
      }
      this.getAritleById();
    });
  }

  ngOnInit() {
  }
  getAritleById(){
    this.http.sendRequest("http://localhost/blog/getArtbyId.php?Id="+this.Id)
      .subscribe((data:any)=>{
        console.log(data);
        this.art=data;
      });
  }
}
