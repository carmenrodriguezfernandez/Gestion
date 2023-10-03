import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppTareaComponent } from './appTarea.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
    { path: '', component: AppComponent },
    { path: 'task', component: AppTareaComponent },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
