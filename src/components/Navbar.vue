<template>
    <v-app-bar app color="black">
        <v-img
            class="mx-2"
            src="/todoLogo.png"
            max-height="35"
            max-width="35"
            alt="Logo"
        ></v-img>
        <v-toolbar-title class="white--text">TODO APP</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text>
                Texto 1
            </v-btn>
            <v-btn text>
                Texto 2
            </v-btn>
            <v-btn text>
                Texto 3
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>