<template>
  <div class="container mt-4">
    <h1 class="title">Blog</h1>
    <div class="columns is-multiple">
      <div class="column is-4" v-for="post in posts" :key="post.slug">
        <div class="card">
          <div class="card-content">
            <nuxt-link :to="`/blog/${post.slug}`">
              {{ post.title }}
            </nuxt-link>

            <p>{{ post.description }}</p>

            <p>Created At : {{ post.createdAt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('blog').sortBy('createdAt', 'desc').fetch()

    return { posts }
  },
}
</script>

<style></style>
