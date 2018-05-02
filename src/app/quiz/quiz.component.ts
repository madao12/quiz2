import { Component, OnInit } from '@angular/core';
import { SELECTED } from '../selected-list';
import { QUESTIONS } from '../question-list';
import { QuestionClass } from '../question';

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions = QUESTIONS;
  selected = SELECTED;
  numberOfQuestions=this.selected.length;
  i=0;
  question=this.selected[this.i];
  choices=this.question.choices;
  correctOption=0;
  correct=0;
  wrongFlag=0;

  onClick(isTrue:boolean,element: HTMLInputElement){

    if (element.checked){
      if(isTrue==true){
        this.correctOption++;
      }else{
        this.wrongFlag++;
      }
    }
    else//when uncheck
    {
      if(isTrue==true){
        this.correctOption--;
      }else{
      this.wrongFlag--;
      }
    }

  }
  
  onSubmit(f: NgForm) {
    if (this.correctOption===this.question.numberOfAnswers && this.wrongFlag==0){
      this.correct++;
    }
    this.i++;
    this.question=this.selected[this.i];
    this.choices=this.selected[this.i].choices;
    this.correctOption=0;
    this.wrongFlag=0;

  }
  




  



  constructor() {
   
    
   }

  ngOnInit() {
  }

}
