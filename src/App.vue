<template>
  <v-app class="custom-body">
    <Navbar /> <!-- Aquí se agrega el componente Navbar -->
    <v-container >
      <HeroSection @open-dialog="openDialog" />
      <TodoItem ref="todoItemRef" />
    </v-container>
  </v-app>
</template>

<script>
import HeroSection from './components/HeroSection.vue';
import TodoItem from './components/TodoItem.vue';
import Navbar from './components/Navbar.vue'; // Importa el componente Navbar

export default {
  components: {
    HeroSection,
    TodoItem,
    Navbar // Añade Navbar a la lista de componentes
  },
  methods: {
    openDialog() {
      this.$refs.todoItemRef.dialog = true;
    }
  }
};
</script>

<style>
.custom-body {
  background-color: rgba(179, 182, 182, 0.639);
}
</style>