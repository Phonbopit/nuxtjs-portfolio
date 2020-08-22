<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Photos</h1>
      <p class="subtitle">Credit : https://picsum.photos</p>
      <div class="columns is-multiline">
        <div class="column is-3" v-for="photo in photos" :key="photo.id">
          <div class="card">
            <div class="card-content">
              <nuxt-link :to="`/photos/${photo.id}`">
                <p>{{ photo.id }}</p>
                <p>By {{ photo.author }}</p>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const photos = await $axios.$get(`https://picsum.photos/v2/list`)

    return { photos }
  },
}
</script>

<style></style>
