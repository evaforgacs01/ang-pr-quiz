import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizEditorComponent } from './pages/quiz-editor/quiz-editor.component';
import { QuestionEditorComponent } from './pages/question-editor/question-editor.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    QuizComponent,
    QuizEditorComponent,
    QuestionEditorComponent,
    HomeComponent,
    NavigationComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
