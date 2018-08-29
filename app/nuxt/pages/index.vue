<template>
  <section class="container">
    <div>
      <app-logo/>
      <div v-if="profile.user">
        <p>
            Full name: {{ fullName }}
        </p>
        <p>
            Email: {{ email }}
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">

import AppLogo from '~/components/AppLogo.vue';
// import User from '~/components/User.vue';
import { State, Action, Getter } from 'vuex-class';
import { Component, Inject, Model, Prop, Vue, Watch } from 'nuxt-property-decorator'
import { ProfileState, User } from '~/store/profile/types';

const namespace: string = 'profile';

@Component({
  components: {
    AppLogo
  }
})
export default class extends Vue {
  @State('profile') profile: ProfileState;

  @Action('fetchData', { namespace }) fetchData: any;

  @Getter('fullName', { namespace }) fullName: string;

  mounted() {
    this.fetchData();
  }

  // computed variable based on user's email
  get email() {
    const user = this.profile && this.profile.user;
    return (user && user.email) || '';
  }
}

</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

