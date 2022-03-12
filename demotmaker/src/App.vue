<template>
  <div id="nav">
    <router-link to="/"><svg xmlns="http://www.w3.org/2000/svg" fill="#F6F7F8" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z"/></svg></router-link>
    <router-link to="/create"><svg xmlns="http://www.w3.org/2000/svg" fill="#F6F7F8" width="24" height="24" viewBox="0 0 24 24"><path d="M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z"/></svg></router-link>
    <router-link to="/about"><svg xmlns="http://www.w3.org/2000/svg" fill="#F6F7F8" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.431-3.468.573-.544 1.025-.975.962-1.821-.058-.805-.73-1.226-1.365-1.226-.709 0-1.538.527-1.538 2.013h-2.01c0-2.4 1.409-3.95 3.59-3.95 1.036 0 1.942.339 2.55.955.57.578.865 1.372.854 2.298-.016 1.383-.857 2.291-1.534 3.021z"/></svg></router-link>
  </div>
  <router-view/>
  <div id="footer">
    <a class="footer__ig" href="https://www.instagram.com/demotmaker/" target="blank"><svg xmlns="http://www.w3.org/2000/svg" fill="#F6F7F8" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg><span class="decal__bgtext">demotmaker</span></a>
  </div>
</template>

<script>
import postscribe from 'postscribe'

export default {
  mounted() {
    //eslint-disable-next-line
    postscribe('#footer', `<script>kofiwidget2.init('Support Me on Ko-fi', '#29abe0', 'B0B372791');kofiwidget2.draw();<\/script>`);
  }
}
</script>

<style lang="scss">
$color-dark: #011627;
$color-primary: #FF3366;
$color-secondary: #ff5983;
$color-light: #F6F7F8;

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;600&display=swap');

body {
  margin: 0;
  background-color: $color-dark;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-light;
  margin-bottom: 3.5rem;
  display: flex;
  flex-direction: column;
}

#footer {
  background-color: $color-dark;
  border-top: 0.125rem solid $color-secondary;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  bottom: 0;
  position: fixed;
  width: 100vw;

  .footer__ig {
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    color: $color-light;
    text-decoration: none;
    gap: 0.5rem;

    @media screen and (min-width: 350px) {
      font-size: 1rem;
    }
  }
}

#nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  a {
    transition: 125ms;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 3rem;
    border: 0.125rem solid;
    border-color: $color-primary;
    font-weight: bold;
    color: $color-primary;
    text-decoration: none;
    box-shadow: inset 0 0 0.25rem $color-secondary;

    &:hover {
      opacity: 0.75;
    }

    &.router-link-exact-active {
      color: $color-dark;
      background-image: linear-gradient(30deg, $color-primary, $color-secondary);
    }
  }
}
</style>
