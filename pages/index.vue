<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxtjs-portfolio
      </h1>
      <div class="links">
        <a
          href="https://devahoy.com/guides/nuxtjs-fundamental/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          อ่านบทความ
        </a>
        <a
          href="https://www.youtube.com/watch?v=Ml5TwG7QDGc"
          target="_blank"
          rel="noopener noreferrer"
          class="button--red"
        >
          ดูบน Youtube
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
