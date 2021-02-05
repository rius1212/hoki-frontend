<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app class="blue lighten-5" v-if="cekLogin">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
              {{ cekLogin}}
          </v-list-item-title>
          <v-list-item-subtitle>
            Toko Hoki
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-group v-for="item in items" :key="item.title" v-model="item.active" :prepend-icon="item.action"
          no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="child in item.items" :key="child.title" :to="child.link" link>
            <v-list-item-avatar>
              <v-icon>{{ child.action }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logout()">
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app color="blue" v-if="cekLogin">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text">Toko Hoki</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      cekLogin: '',
      drawer: null,
      items: [
        {
          action: 'mdi-ticket',
          items: [
            {
              action: 'mdi-cash',
              title: 'CRUD BankList',
              link: '/'
            }
          ],
          title: 'Data BankList',
        }, 
      ],
    }),
    methods:{
      logout() {
        localStorage.removeItem("apiData")
        location.replace("http://localhost:8081/login")
      },
      cekLoginMethod(){
        if(localStorage.getItem('apiData') === null){
          this.cekLogin = ''
        }else{
          this.cekLogin = localStorage.getItem('apiData')
        }
      }
    },
    mounted(){
      this.cekLoginMethod();
    }
  }
</script>