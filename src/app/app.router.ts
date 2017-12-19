import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { newsComponent } from './news/news.component';
import { ContextComponent } from './context/context.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './utility/notFound/404.component';
import { PublishComponent } from './publish/publish.component';
const routes: Routes = [
  {path: '', redirectTo:'/index',pathMatch:'full'},
  //{path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'index', component: IndexComponent,
    children:[
      {path:'',component:newsComponent},
      {path:'news',component:newsComponent},
      {path:'publish',component:PublishComponent},
      {path: 'about', component: AboutComponent},
      {path:'**',component:NotFoundComponent},
    ]
  },
  {path: 'context', component: ContextComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

