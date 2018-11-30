import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/helloworld/HelloWorld.vue'
import Chat from '@/components/chat/Chat.vue'
Vue.use(Router);

export default new Router ({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/chat/:cname',
      name: 'Chat',
      component: Chat
    }
  ]
})
