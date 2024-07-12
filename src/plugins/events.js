import mitt from 'mitt';

const mit = mitt();
export default mit;

import { onMounted, onUnmounted } from 'vue';

export function eventListen(eventName, handler) {
  onMounted(() => {
    mit.on(eventName, handler);
  });

  onUnmounted(() => {
    mit.off(eventName, handler);
  });
}

export function eventEmit(eventName, data) {
  mit.emit(eventName, data);
}
