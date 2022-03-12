<template>
  <Logo label="demotmaker.pl"/>
  <div class="home">
    <router-link class="home__option" id="o1" to="/create">Stwórz własny demotywator</router-link>
    <a href="https://www.instagram.com/demotmaker/" class="home__option" id="o2" target="blank">Odkryj najlepsze demotywatory (nie)</a>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  name: 'Home',
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
$color-dark: #011627;
$color-primary: #FF3366;
$color-secondary: #ff5983;
$color-light: #F6F7F8;

.home {
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
}

.home__option {
  color: $color-light;
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
  text-align: left;
  padding: 0 0.625rem;
  width: calc(100vw - 1.25rem);
  height: 30vh;
}

#o1 {
  background-color: $color-primary;
  background-image: url('../assets/bg1.svg');
  background-size: 35%;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: soft-light;
  height: calc(50vh - 2rem - 3.5rem);

  @media screen and (min-width: 800px) {
    height: calc(100vh - 7.5rem - 3.5rem);
    font-size: 4rem;
  }
}

#o2 {
  background-color: $color-secondary;
  background-image: url('../assets/bg2.svg');
  background-size: 35%;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: soft-light;
  height: calc(50vh - 2rem - 3.5rem);

  @media screen and (min-width: 800px) {
    height: calc(100vh - 7.5rem - 3.5rem);
    font-size: 4rem;
  }
}
</style>