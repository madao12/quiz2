import { Injectable } from '@angular/core';
import { QUESTIONS } from './question-list';
import { QuestionClass } from './question';

@Injectable()
export class QuestionService {
  private questions = QUESTIONS;

  constructor() { }

  getAllQuestions() {
    return this.questions;
  }

  getQuestionById(id: String) {

    //to-do search algo
    for (let question of this.questions) {
      if (question.id === id) {
        return question;
      }
    }
  }
}
