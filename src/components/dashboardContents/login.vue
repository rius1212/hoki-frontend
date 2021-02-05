<template>
    <v-app id="bg-test">
        <v-main>
            <v-container fill-height fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-card>
                            <v-toolbar dark flat>
                                <v-spacer></v-spacer>
                                <v-toolbar-title class="headline">Login</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field single-line outlined dense class="title" :rules="[rules.required]"
                                        :label="username1" name="login" prepend-icon="mdi-account" type="text"
                                        v-model="username" />

                                    <v-text-field single-line outlined dense class="title" :rules="[rules.required]"
                                        id="password" v-on:keyup.enter="login" :label="password1" name="password"
                                        prepend-icon="mdi-lock-alert" type="password" v-model="password" />
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn @click="login" class="subtitle-1 grey darken-3 white--text" block>{{buttonLogin}}
                                </v-btn><br>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <v-snackbar v-model="snackbar" :color="color" :timeout="6000">
                {{ text }}

                <template v-slot:action="{ attrs }">
                    <v-btn dark text v-bind="attrs" @click="snackbar = false">
                        Close
                    </v-btn>
                </template>
            </v-snackbar>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            username1: "Nama Pengguna",
            password1: "Kata Sandi",
            valid: false,
            password: '',
            rules: {
                required: value => !!value || 'Required.',
            },
            username: '',
            source: String,
            snackbar: false,
            color: null,
            text: '',
            buttonLogin: "Masuk",
        }),
        methods: {
            login: function () {
                if (this.username == 'admin' && this.password === 'admin') {
                    localStorage.setItem("apiData", 'admin');
                    location.replace("http://localhost:8081/");
                } else if (this.username == 'user' && this.password === 'user') {
                    localStorage.setItem("apiData", 'user');
                    location.replace("http://localhost:8081/")
                } else {
                    this.snackbar = true;
                    this.text = 'Try Again';
                    this.color = 'red';
                }
            }
        }
    }
</script>
<style>
    #bg-test {
        background-color: #1976D2;
    }
</style>