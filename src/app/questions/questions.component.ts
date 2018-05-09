import { Component, OnInit } from '@angular/core';
import { QuestionClass } from '../question';
import { QUESTIONS } from '../question-list';
import { SELECTED } from '../selected-list';



@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions = QUESTIONS;
  selected = SELECTED;
  selectedQuestion:QuestionClass;
  
  
  onSelect(question: QuestionClass): void{
    const index: number = this.questions.indexOf(question);
    this.questions.splice(index,1);
    this.selectedQuestion = question;
    this.selected.push({
      id: this.selectedQuestion.id,
      numberOfAnswers: this.selectedQuestion.numberOfAnswers,
      name: this.selectedQuestion.name, 
      explanation: this.selectedQuestion.explanation,
      choices: this.selectedQuestion.choices
    });

  }
 
  
  constructor() { }

  ngOnInit() {
  }

}
