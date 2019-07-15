<template>
  <q-page>
<!-- chyba wyszukiwanie powinno być po author.id, ale podaje jako null.  !-->
    <ul v-for="author in authors" :key="author.name">
      <li>Author's name: {{author.name}}</li>
      <li>Author's surname: {{author.surname}}</li>
      <li>Author's email: {{author.email}}</li>
      <li>Number of Author's quizes: {{author.quizListSize}}</li>
    </ul>
   <q-btn color="indigo" class="q-ma-md" label="Coloured button to get Authors" @click="getAuthors()" />
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      authors: []
    }
  },
  methods: {
    getAuthors () {
      fetch('https://brainstormquiz.herokuapp.com/author/listOfAll', {
        method: 'GET'
      }).then(response => response.json())
        .then(authors => {
          this.authors = authors
          console.log(this.authors)
        })
    }
  }
}
</script>
