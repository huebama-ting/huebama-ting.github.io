// eslint-disable-next-line import/no-unresolved
import { registerSW } from "virtual:pwa-register";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New content available. Reload?")) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-floating-promises
      updateSW(true);
    }
  },
  onOfflineReady() {},
});
