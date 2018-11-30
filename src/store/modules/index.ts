import { createChatStore } from "./chat";

export function createModules() {
  const chat = createChatStore();

  return {
    chat
  }
}
