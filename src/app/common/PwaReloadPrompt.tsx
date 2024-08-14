import { Button, Group, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconReload, IconX } from "@tabler/icons-react";
import { useRegisterSW } from "virtual:pwa-register/react";

import styles from "./styles/pwa-reload-prompt.module.css";

export function PwaReloadPrompt() {
  const [opened, { close }] = useDisclosure(true, {
    onClose: () => {
      setOfflineReady(false);
      setNeedRefresh(false);
    },
  });
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW() {
      console.log("Service worker registered.");
    },
    onRegisterError(error) {
      console.error("Service worker registration error", error);
    },
  });

  return (
    <>
      {(offlineReady || needRefresh) && (
        <Modal
          opened={opened}
          onClose={close}
          title={offlineReady ? "Offline Ready" : "Update Available"}
          closeOnClickOutside={false}
          closeOnEscape={false}
          closeButtonProps={{ "aria-label": "Close modal" }}
          centered
        >
          <Text className={styles["modal-text"]}>
            {offlineReady
              ? "App ready to work offline."
              : "New content available. Reload for new content?"}
          </Text>

          <Group className={styles["button-container"]}>
            {needRefresh && (
              <Button
                aria-label="Reload content"
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={() => updateServiceWorker()}
                leftSection={<IconReload />}
              >
                Reload
              </Button>
            )}
            <Button
              aria-label="Close modal"
              onClick={close}
              leftSection={<IconX />}
            >
              Close
            </Button>
          </Group>
        </Modal>
      )}
    </>
  );
}

export default PwaReloadPrompt;
