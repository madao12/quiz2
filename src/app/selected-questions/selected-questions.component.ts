import { Component, OnInit } from '@angular/core';
import { QuestionClass } from '../question';
import { SELECTED } from '../selected-list';
import { QUESTIONS } from '../question-list';

@Component({
  selector: 'app-selected-questions',
  templateUrl: './selected-questions.component.html',
  styleUrls: ['./selected-questions.component.scss']
})
export class SelectedQuestionsComponent implements OnInit {
  
  questions = QUESTIONS;
  selected = SELECTED;
  
  selectedQuestion:QuestionClass;
  onSelect(question: QuestionClass): void{
    const index: number = this.selected.indexOf(question);
    this.selected.splice(index,1);
    this.selectedQuestion = question;
    this.questions.push({
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
