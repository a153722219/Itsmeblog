import {Component, OnInit,Input,OnChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService} from "../utility/service/http.service";

@Component({
  selector: 'storeNews',
  templateUrl: './news.component.html',
  styleUrls:['assets/style/style.css']
})

export class newsComponent implements OnInit,OnChanges {
  id:string="news";
  pno:number=1;
  maxPage:number=1;
  aList:Array<any>=[];

  constructor( private rs:ActivatedRoute ,private http:HttpService) {
  }
  ngOnChanges(){
    this.getAritle(this.pno);
  }

  ngOnInit() {
    this.rs.params.subscribe((result:any)=>{
      if(result.id){
        this.id=result.id;
        console.log(this.id)
      }
      this.getAritle(this.pno);
    });

  }

  getAritle(pno:number){
    this.http.sendRequest("http://localhost/blog/getAritle.php?id="+this.id+"&pno="+pno)
      .subscribe((data:any)=>{
        console.log(data);
        this.aList=data.data;
        this.pno=parseInt(data.pno);
        this.maxPage=parseInt(data.maxPage);
      });
  }
}
