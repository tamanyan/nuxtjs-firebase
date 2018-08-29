<template>
  <div class="profile">
    <div class="name">Username: {{ name }}</div>
    <div class="email">Email {{ email }}</div>
  </div>
</template>

<script lang="ts">

import { Component, Inject, Model, Prop, Vue, Watch } from 'nuxt-property-decorator'

@Component({})
export default class UserProfile extends Vue {

  @Prop({ default: 'Guest' })
  name: string

  @Prop()
  email: string
}
</script>

<style scoped>

.profile {
  padding: 10px;
}

.name {
  font-weight: bold;
  font-size: 1.2em;
}

.email {
  font-weight: bold;
}

</style>

