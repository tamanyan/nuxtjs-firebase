<template>
  <section class="container">
    <div>
      <app-logo/>
      <user-profile v-if="profile.isReady" :name="fullName" :email="email" />
    </div>
  </section>
</template>

<script lang="ts">
import AppLogo from '~/components/AppLogo.vue';
import UserProfile from '~/components/UserProfile.vue';
import { State, Action, Getter } from 'vuex-class';
import { Component, Vue } from 'nuxt-property-decorator';
import { ProfileState, User } from '~/store/profile/types';

const namespace: string = 'profile';

@Component({
  components: {
    AppLogo,
    UserProfile
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
    const { user } = this.profile;

    return user.email;
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

</style>

