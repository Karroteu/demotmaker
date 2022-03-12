<template>
  <div class="logo">
    <div class="decal__group">
      <h1 class="decal__name-1">{{ label }}</h1>
      <h1 class="decal__name-2">{{ label }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    label: String
  }
}
</script>

<style scoped lang="scss">
$color-dark: #011627;
$color-primary: #FF3366;
$color-secondary: #ff5983;
$color-light: #F6F7F8;

.decal__group {
  display: flex;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 0;

  .decal__name-2 {
    color: $color-primary;
    font-size: 2rem;
    text-shadow: $color-light 0.1rem -0.1rem;
    position: absolute;
    margin-top: 0;
    margin-bottom: 0;
  }

  .decal__name-1 {
    color: $color-primary;
    font-size: 2rem;
    text-shadow: $color-secondary 0.2rem -0.2rem;
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>
