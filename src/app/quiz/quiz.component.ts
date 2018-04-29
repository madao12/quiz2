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
  q1=this.selected[0];
  choice='';
  correct=0; 
 /*
  onSelect(question: QuestionClass): void{
    this.choice=form.controls['choice'].value;
    this.questions.push({id: this.selected[0].id, name: this.selected[0].name, ans1: this.selected[0].ans1, ans2: this.selected[0].ans2, correctAns: this.selected[0].correctAns});
    this.selected.splice(0,1);
    this.q1=this.selected[0];
    
  }*/

  onSubmit(f: NgForm) {
    this.choice=f.controls['choice'].value;
      
    if (this.choice==this.selected[0].correctAns){
      this.correct++;
    }
    




    this.questions.push({id: this.selected[0].id, name: this.selected[0].name, ans1: this.selected[0].ans1, ans2: this.selected[0].ans2, correctAns: this.selected[0].correctAns});
    this.selected.splice(0,1);
    this.q1=this.selected[0];

  }

  constructor() {
    
   }

  ngOnInit() {
  }

}
