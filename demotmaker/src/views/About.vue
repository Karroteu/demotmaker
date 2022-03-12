<template>
  <div class="about">
    <h1>O nas</h1>
    <p>demotmaker.com.pl is gone</p>
    <img alt="🦀🦀🦀" src="https://c.tenor.com/3CIbJomibvYAAAAj/crab-rave.gif"><img alt="🦀🦀🦀" src="https://c.tenor.com/3CIbJomibvYAAAAj/crab-rave.gif"><img alt="🦀🦀🦀" src="https://c.tenor.com/3CIbJomibvYAAAAj/crab-rave.gif">
    <h2>Informacje</h2>
    <button class="about__pseudo-button" @click="showPrivacyPolicy = !showPrivacyPolicy">Polityka prywatności</button>
    <div class="about__section" v-if="showPrivacyPolicy"><p>Serwis nie gromadzi żadnych danych o użytkownikach</p><p>Wszelkie pliki cookies występujące na stronie są zarządzane przez Google, bądź inne podmioty</p></div>
    <a class="about__pseudo-button" href="mailto:kontakt@demotmaker.pl">Kontakt</a>
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      showPrivacyPolicy: false
    }
  }
}
</script>

<style lang="scss" scoped>
$color-dark: #011627;
$color-primary: #FF3366;
$color-secondary: #ff5983;
$color-light: #F6F7F8;

.about__pseudo-button {
  background-image: linear-gradient(30deg, $color-primary, $color-secondary);
  transition: 125ms;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12rem;
  height: 3rem;
  border: 0.125rem solid;
  border-color: $color-primary;
  font-weight: bold;
  color: $color-light;
  text-decoration: none;
  font-size: 1rem;
  margin: 1rem auto;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
    font-size: 0.95rem;
  }
}

.about__section {
  border: 0.125rem solid;
  border-color: $color-primary;
  border-radius: 2rem;
  width: fit-content;
  margin: 1rem auto;
  padding: 1rem
}
</style>