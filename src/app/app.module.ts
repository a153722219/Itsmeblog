import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.router';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// 引入组件
import { HeaderComponent } from './utility/header/header.component';
import { FooterComponent } from './utility/footer/footer.component';
import { NotFoundComponent } from './utility/notFound/404.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { newsComponent } from './news/news.component';
import { ContextComponent } from './context/context.component';
import { AboutComponent } from './about/about.component';
import { ReviewComponent } from './review/review.component';
import { PublishComponent } from './publish/publish.component';
//引入服务
import { HttpService } from './utility/service/http.service';
import { commService } from "./utility/service/comm.service";

@NgModule({
  providers:[HttpService,commService],
  imports:[ BrowserModule, AppRoutingModule, FormsModule, HttpModule ],
  declarations: [
    PublishComponent,
    ReviewComponent,
    AboutComponent,
    ContextComponent,
    newsComponent,
    RegisterComponent,
    LoginComponent,
    IndexComponent,
    NotFoundComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
