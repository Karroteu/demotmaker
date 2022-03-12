<template>
  <div class="create">
    <Logo label="demotmaker.pl"/>
    <ImageSettings msg="Stwórz własny demotywator"/>
  </div>
</template>

<script>
import ImageSettings from '@/components/ImageSettings.vue'
import Logo from '@/components/Logo.vue'

export default {
  name: 'Home',
  components: {
    ImageSettings, Logo
  }
}
</script>

<style lang="scss">
.create {
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 100vw;
  margin: 0 auto;
  max-width: 800px;
}
</style>