<template>
  <div class="view">
    <div class="channel">
      <ul>
        <li v-for="channel in channels" v-bind:key="channel">
          <router-link v-bind:to="{ name: 'Chat', params: { cname: channel }}">{{ channel }}</router-link>
        </li>
      </ul>
    </div>
    <div class="channel-name"> {{ $route.params.cname }} </div>
    <div class="messages">
      <ul>
        <li v-for="msg in messages" v-bind:key="msg.id">
          {{ msg.message }}
        </li>
      </ul>
    </div>
    <div class="form">
      <label>
        <input type="text" v-model="message"/>
        <input type="button" value="SEND" @click="send_message">
      </label>
    </div>
  </div>
</template>

<script lang="ts" src="./Chat.ts"></script>
<style src="./Chat.css" scoped></style>
