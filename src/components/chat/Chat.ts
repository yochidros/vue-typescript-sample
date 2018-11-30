
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class Chat extends Vue {
   protected channels: string[] = ["general", "random"];
   protected message: string = "test";
   protected messages: string[] = [];

   constructor() {
     super();
     this.messages = [];
   }

  send_message() {
    this.$store.dispatch('chat/pushMessages', { value: this.message });
    this.messages = this.$store.state.chat.messages;
    this.message = "";
  }
}
