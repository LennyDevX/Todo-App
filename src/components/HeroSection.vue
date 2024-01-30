<!-- HeroSection.vue -->
<template>
    <v-row class="custom-row">
        <v-col cols="12" md="6">
            <div class="hero-section-content">
                <h1>Gestor de Tareas TodoApp</h1>
                <p>
                    Bienvenido a TodoApp, tu solución definitiva para la gestión de tareas. Nuestra aplicación es intuitiva y fácil de usar, permitiéndote organizar tus tareas de manera eficiente. Con TodoApp, puedes crear, editar y eliminar tareas con facilidad. 
                    Además, nuestra interfaz amigable y las funcionalidades avanzadas te permitirán priorizar tus tareas y mantener un seguimiento de tu progreso. Empieza a usar TodoApp hoy y lleva tu productividad al siguiente nivel.
                </p>
                <v-btn color="primary" @click="$emit('open-dialog')">Agregar Tarea</v-btn>
            </div>
        </v-col>
        <v-col cols="12" md="6" class="hero-section-content">
            <v-img :src="image" aspect-ratio="1.7"></v-img>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            image: '/todoLogo.png',
        };
    },
};
</script>

<style scoped>
h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
}

p {
    font-size: 1.2em;
    color: #000000;
}

.hero-section-content {
    margin-top: 75px; /* Añade un margen superior para separar del navbar */
}
</style>