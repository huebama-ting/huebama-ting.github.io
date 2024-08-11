import { Button, Group, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IoClose, IoReload } from "react-icons/io5";
import { useRegisterSW } from "virtual:pwa-register/react";

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
          centered
        >
          <Text my="xs">
            {offlineReady
              ? "App ready to work offline."
              : "New content available. Reload for new content?"}
          </Text>

          <Group mt="xl" justify="flex-end">
            {needRefresh && (
              <Button
                aria-label="Reload content"
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={() => updateServiceWorker()}
                leftSection={<IoReload />}
              >
                Reload
              </Button>
            )}
            <Button
              aria-label="Close modal"
              onClick={close}
              leftSection={<IoClose />}
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
