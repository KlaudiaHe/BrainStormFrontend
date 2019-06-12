<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="indigo"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          BRAINSTORM
          <div slot="subtitle">Full of quizzes</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-blue-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>WHERE TO</q-list-header>
        <q-item @click.native="openURL('https://brainstormquizzes.herokuapp.com/#/')">
          <q-item-side icon="code" />
          <q-item-main label="Homepage" sublabel="Back to the homepage" />
        </q-item>
        <q-item @click.native="openURL('https://brainstormquizzes.herokuapp.com/#/choosequiz/')">
          <q-item-side icon="code" />
          <q-item-main label="Choose a quiz" sublabel="And have some fun" />
        </q-item>
        <q-item @click.native="openURL('https://brainstormquizzes.herokuapp.com/#/randomquiz/')">
          <q-item-side icon="code" />
          <q-item-main label="Random quiz" sublabel="Feeling adventurous?" />
        </q-item>
        <q-item @click.native="openURL('https://brainstormquizzes.herokuapp.com/#/addquiz/')">
          <q-item-side icon="code" />
          <q-item-main label="Add a quiz" sublabel="Make some fun!" />
        </q-item>
        <q-item @click.native="openURL('https://brainstormquizzes.herokuapp.com/#/contact')">
          <q-item-side icon="code" />
          <q-item-main label="Contact us" sublabel="If you want :)" />
        </q-item>
      </q-list>
    </q-layout-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
