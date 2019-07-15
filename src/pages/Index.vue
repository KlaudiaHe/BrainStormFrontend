<template>
  <q-page>
    <q-page padding>
    <div class="fixed-center text-center">
    <h1 class="text-center text-bold">Welcome to BRAINSTORM</h1>
    <h2 class="caption text-center">Answer or create a quiz:</h2>
    <p></p>
    <q-btn class="flex inline shadow-box flex-center text-bold" @click="$router.push('/randomquiz')">Play random quiz</q-btn>
    <q-btn class="flex inline shadow-box flex-center text-bold" @click="$router.push('/addquiz')">Add a quiz</q-btn>
    <q-btn class="flex inline shadow-box flex-center text-bold" @click="$router.push('/choosequiz')">Choose quiz</q-btn>
  </div>
    </q-page>
    </q-page>
</template>

<style lang="stylus">
@import '~variables'
.shadow-box
  width 220px
  height 220px
  margin 20px
  border-radius 50%
  font-size 24px
</style>
