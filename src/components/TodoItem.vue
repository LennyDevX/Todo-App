<template>
  <div>
    <!-- Diálogo para agregar tareas -->
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Nueva Tarea</span>
        </v-card-title>

        <v-card-text class="headline">
          <v-container >
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="newTask.title" label="Título" required></v-text-field>
                <v-text-field v-model="newTask.text" label="Texto" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Cerrar</v-btn>
          <v-btn color="blue darken-1" text @click="addTask">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Diálogo para editar tareas -->
    <v-dialog v-model="editDialog" max-width="600px" class="headline">
      <v-card>
        <v-card-title>
          <span class="headline">Editar Tarea</span>
        </v-card-title>

        <v-card-text class="headline">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="editedTask.title" label="Título" required></v-text-field>
                <v-text-field v-model="editedTask.text" label="Texto" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="editDialog = false">Cerrar</v-btn>
          <v-btn color="blue darken-1" text @click="updateTask">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Tareas -->
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(task, index) in tasks" :key="index">
        <v-card color="black" class="d-flex flex-column">
          <div class="d-flex justify-space-between align-center">
            <v-card-title class="flex-grow-1">
              {{ task.title }}
            </v-card-title>
            <v-btn class="buttonCloseTask" icon small  @click="deleteTask(index)">
              <v-icon small>mdi-close</v-icon>
            </v-btn>
          </div>
          <v-card-text class="flex-grow-1">
            {{ task.text }}
          </v-card-text>
          <v-card-actions>
            <v-btn text color="white" outlined @click="openEditDialog(task, index)">Editar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

><script src="./TodoItemLogic">

</script>

<style scoped>
.v-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.v-card-title {
  margin-right: 10px;
  color: white;
}

.v-card-text {
  color: white;
}

.v-card-actions {
  margin-top: auto;
}

.headline {
  font-size: 1.2em;
  font-weight: bold;
  color: black;
}

.buttonCloseTask {
  margin-left: auto;
  font-size: small;
  background-color: transparent;
  transition: 0.5s;
  &:hover {
    background-color: rgba(214, 17, 17, 0.836);
    transition: 0.5s ease-in-out;
    transform: scale(0.7);
    
  }
}

</style>