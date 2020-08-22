<template>
  <div class="container has-text-centered">
    <h2 class="title">My Profile</h2>

    <img class="avatar" :src="user.avatar_url" alt="User Avatar" />

    <p>Bio : {{ user.bio }}</p>
    <p>Location : {{ user.location }}</p>

    <div class="columns is-multiline">
      <div class="column is-3" v-for="repo in repos" :key="repo.id">
        <div class="card">
          <div class="card-content">
            <a
              :href="repo.html_url"
              target="_blank"
              rel="noopener noreferrer"
              >{{ repo.name }}</a
            >

            <p>Star : {{ repo.stargazers_count }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  head() {
    return {
      title: this.title,
    }
  },
  async asyncData({ $axios }) {
    const baseURL = 'https://api.github.com'

    // Not send Authoriazation for github api
    $axios.setHeader('Authorization', null)

    const [user, repos] = await Promise.all([
      $axios.$get(`${baseURL}/users/phonbopit`),
      $axios.$get(`${baseURL}/users/phonbopit/repos`),
    ])

    const name = user.name

    return { user, repos, title: name }
  },
}
</script>

<style scoped>
.avatar {
  width: 128px;
  height: 128px;
}
</style>
