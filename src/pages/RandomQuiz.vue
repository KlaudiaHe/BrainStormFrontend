<template>
  <q-page padding>
    <q-stepper ref="stepper">
    <q-step default title="Choose a quiz">
      <h1 class="text-center text-bold">{{quiz.name}}</h1>
    <h3 class="caption text-center">Good luck!</h3>
      <ul v-for="quiz in quizzes" :key="quiz.name"><li>{{quiz.name}}<q-btn color="indigo" class="q-ma-md" label="Play this quiz" @click ="getQuiz(quiz.name)"/></li></ul>
    </q-step>
    <q-step default title="Play">
      <h1 class="text-center text-bold">Play</h1>
      <h3 class="caption text-center">Good luck</h3>
      <h4>{{quiz.name}}</h4>
      <div v-for="question in quiz.questionsList" :key="question.content">
       <h4> {{question.content}} </h4>
       <div>
        <p>A. {{question.answer.answerA}}</p>
        <p>B. {{question.answer.answerB}}</p>
        <p>C. {{question.answer.answerC}}</p>
        <p>D. {{question.answer.answerD}}</p>
        </div>
        <q-btn :color="question.answer.answerFromUser === 'A' ? 'red' : 'indigo'" class="q-ma-md" label="A" @click="sendUserAnswer('A', question.answer)" />
        <q-btn :color="question.answer.answerFromUser === 'B' ? 'red' : 'indigo'" class="q-ma-md" label="B." @click="sendUserAnswer('B', question.answer)" />
        <q-btn :color="question.answer.answerFromUser === 'C' ? 'red' : 'indigo'" class="q-ma-md" label="C." @click="sendUserAnswer('C', question.answer)" />
        <q-btn :color="question.answer.answerFromUser === 'D' ? 'red' : 'indigo'" class="q-ma-md" label="D." @click="sendUserAnswer('D', question.answer)" />
      </div>
      <q-btn color="indigo" class="q-ma-md" label="Get score" @click="getScore()" />
    </q-step>
      <q-step title="Check your score">
      <h1 class="text-center text-bold">Check out your score: </h1>
      <h1 class="text-center text-bold">{{totalScore}} </h1>
      <h3 class="caption text-center">Would you like to play another quiz?</h3>
      <q-btn color="indigo" class="q-ma-md" label="Check out all quizzes" to="/choosequiz"/>
      </q-step>
    </q-stepper>
    </q-page>
    </template>
<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      quizzes: [],
      quiz: {
        name: '',
        questionsList: []
      },
      totalScore: ''
    }
  },
  created () {
    this.getQuiz()
  },
  methods: {
    getQuiz () {
      fetch('https://brainstormquiz.herokuapp.com/quiz/getRandomQuiz', {
        method: 'GET'
      }).then(response => response.json())
        .then(quiz => {
          this.quiz = quiz
          this.$refs.stepper.next()
        })
    },
    getScore () {
      fetch('https://brainstormquiz.herokuapp.com/quiz/totalScore', {
        method: 'POST',
        body: JSON.stringify(this.quiz),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
        .then(totalScore => {
          this.totalScore = totalScore
          this.$refs.stepper.next()
        })
    },
    sendUserAnswer (userAnswer, answer) {
      answer.answerFromUser = userAnswer
    }
  }
}
</script>
