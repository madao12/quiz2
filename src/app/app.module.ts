import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { SelectedQuestionsComponent } from './selected-questions/selected-questions.component';
import { QuizComponent } from './quiz/quiz.component';
import { AppRoutingModule } from './/app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe} from './filter.pipe';
import { QuestionService } from './question.service';


@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    SelectedQuestionsComponent,
    QuizComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
