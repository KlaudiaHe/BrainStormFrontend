<template>
<q-page>
  <q-page padding>
    <q-stepper ref="stepper">
      <q-step default title="Create author">
        <h1 class="text-center text-bold">Add your own quiz</h1>
        <h3 class="caption text-center">Please introduce yourself first:</h3>
        <q-input v-model="author.name" float-label="Name" />
        <q-input v-model="author.surname" float-label="Surname" />
        <q-input v-model="author.email" float-label="Email" />
        <q-btn color="indigo" class="q-ma-md" label="Submit" @click="addAuthor()" />
      </q-step>

      <q-step title="Name quiz">
        <h1 class="text-center text-bold">Add your own quiz</h1>
        <h3 class="caption text-center">Name your quiz:</h3>
        <q-input v-model="quiz.name" float-label="Name of your quiz"/>
        <q-btn color="indigo" class="q-ma-md" label="Submit Name of Quiz" @click="addQuiz()" />
      </q-step>

      <q-step title="Add question">
        <h1 class="text-center text-bold">Add your own quiz</h1>
        <h3 class="caption text-center">Add your first question:</h3>
        <h5 class="caption text-center">Note: Each question must have four answers and only one correct answer.</h5>
        <q-input v-model="question.content" float-label="First question" placeholder="e.g. Which bear is best?"/>
        <q-input v-model="question.answer.answerA" float-label="Answer A" prefix="A."/>
        <q-input v-model="question.answer.answerB" float-label="Answer B" prefix="B."/>
        <q-input v-model="question.answer.answerC" float-label="Answer C" prefix="C."/>
        <q-input v-model="question.answer.answerD" float-label="Answer D" prefix="D."/>
        <h3 class="caption text-center">Choose one correct answer to your question</h3>
        <q-checkbox color="indigo" class="q-ma-md" label="A." v-model="question.answer.aCorrect" />
        <q-checkbox color="indigo" class="q-ma-md" label="B." v-model="question.answer.bCorrect" />
        <q-checkbox color="indigo" class="q-ma-md" label="C." v-model="question.answer.cCorrect" />
        <q-checkbox color="indigo" class="q-ma-md" label="D." v-model="question.answer.dCorrect" />
        <q-btn color="indigo" class="q-ma-md" label="Submit question" @click="addQuestion()" />
      </q-step>
      <q-step title="Next steps">
        <h1 class="text-center text-bold">Add your own quiz</h1>
        <h3 class="caption text-center">Please choose from the options below:</h3>
        <q-btn  color="indigo" class="q-ma-md" label="Add next question" @click="$refs.stepper.previous()"/>
        <q-btn color="indigo" class="q-ma-md" label="Quiz is complete" @click="$refs.stepper.next()"/>
        </q-step>
      <q-step title="Congratz!">
      <h1 class="text-center text-bold">Congratz! Your quiz is submitted!</h1>
      <h3 class="caption text-center">What would you like to do next?</h3>
        <q-btn color="indigo" class="q-ma-md" label="Play my Quiz" to="/quiz.name"/>
        <q-btn color="indigo" class="q-ma-md" label="Check out all quizzes" to="/choosequiz"/>
        </q-step>
    </q-stepper>
</q-page>
</q-page>
</template>

<style>
</style>

<script>
export default {
  data () {
    return {
      author: {
        id: '',
        name: '',
        surname: '',
        email: '',
        quizList: [],
        quizListSize: 0
      },
      quiz: {
        name: '',
        questionsList: []
      },
      question: {
        content: '',
        answer: {
          answerA: '',
          answerB: '',
          answerC: '',
          answerD: '',
          aCorrect: false,
          bCorrect: false,
          cCorrect: false,
          dCorrect: false,
          answerFromUser: ''
        }
      }
    }
  },
  watch: {
    question: {
      handler: function (newValue) {
        console.log(newValue)
      },
      deep: true
    }
  },
  methods: {
    addAuthor () {
      fetch('https://brainstormquiz.herokuapp.com/author/add', {
        method: 'POST',
        body: JSON.stringify(this.author),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
        .then(author => {
          this.author = author
          this.$refs.stepper.next()
        })
    },
    addQuiz () {
      fetch(`https://brainstormquiz.herokuapp.com/quiz/addQuiz/${this.author.email}`, {
        method: 'POST',
        body: JSON.stringify(this.quiz),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
        .then(author => {
          this.author = author
          this.$refs.stepper.next()
        })
    },
    addQuestion () {
      fetch(`https://brainstormquiz.herokuapp.com/quiz/editQuiz/email/${this.author.email}/quiz/${this.quiz.name}`, {
        method: 'PUT',
        body: JSON.stringify(this.question),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
        .then(question => {
          this.question = {
            content: '',
            answer: {
              answerA: '',
              answerB: '',
              answerC: '',
              answerD: '',
              aCorrect: false,
              bCorrect: false,
              cCorrect: false,
              dCorrect: false,
              answerFromUser: ''
            }
          }
          this.$refs.stepper.next()
        })
    }
  }
}
</script>
