
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class Chat extends Vue {
  protected channels: string[] = this.$store.state.chat.channels;
  protected message: string = "test";
  protected messages: string[] = this.$store.state.chat.messages;

  constructor() {
    super();
  }

  created() {
    this.get_channels();
  }

  send_message() {
    this.$store.dispatch('chat/pushMessages', { value: this.message });
    this.message = "";
  }

  get_channels() {
    this.$store.dispatch('chat/fetchChannels', { })
  }
}
