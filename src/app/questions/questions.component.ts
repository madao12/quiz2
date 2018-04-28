import { Component, OnInit } from '@angular/core';
import { QuestionClass } from '../question';
import { QUESTIONS } from '../question-list';
import { SELECTED } from '../selected-list';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions = QUESTIONS;
  selected = SELECTED;
  selectedQuestion:QuestionClass;

  
  onSelect(question: QuestionClass): void{
    const index: number = this.questions.indexOf(question);
    this.questions.splice(index,1);
    this.selectedQuestion = question;
    this.selected.push({id: this.selectedQuestion.id, name: this.selectedQuestion.name, ans1: this.selectedQuestion.ans1, ans2: this.selectedQuestion.ans2, correctAns: this.selectedQuestion.correctAns});

  }
 
  
  constructor() { }

  ngOnInit() {
  }

}
