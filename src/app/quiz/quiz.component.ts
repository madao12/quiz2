import { Component, OnInit, ViewChild } from '@angular/core';
import { SELECTED } from '../selected-list';
import { QUESTIONS } from '../question-list';
import { QuestionClass } from '../question';

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  selected = SELECTED;
  numberOfQuestions=this.selected.length;
  i=0;
  question=this.selected[this.i];
  choices=this.question.choices;
  correctOption=0;
  correct=0;
  wrongOption=0;



  numToLetter(k:number) {
    return String.fromCharCode(65 + k);
  }
  
  correctChoice(){
    this.correctOption++;
  }
  wrongChoice(){
    this.wrongOption++;
  }

  onClick(isTrue:boolean,element: HTMLInputElement)
  {
    //when checking
    if (element.checked){
      if(isTrue==true){
        this.correctChoice();
      }else{
        this.wrongChoice();
      }
    }
    //when unchecking
    else
    {
      if(isTrue==true){
        this.correctOption--;
      }else{
      this.wrongOption--;
      }
    }

  }
  
  onSubmit(f: NgForm) {
    if (this.correctOption===this.question.numberOfAnswers && this.wrongOption==0)
    {
      this.correct++;
    }
    this.i++;
    this.question=this.selected[this.i];
    this.choices=this.selected[this.i].choices;
    this.correctOption=0;
    this.wrongOption=0;

  }
  

  constructor() {
   
    
   }

  ngOnInit() {
    
  }

}
