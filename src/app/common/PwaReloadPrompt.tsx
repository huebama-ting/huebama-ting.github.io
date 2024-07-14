import Button from "@mui/joy/Button";
import DialogActions from "@mui/joy/DialogActions";
import DialogContent from "@mui/joy/DialogContent";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import { useState } from "react";
import { IoClose, IoReload } from "react-icons/io5";
import { useRegisterSW } from "virtual:pwa-register/react";

export function PwaReloadPrompt() {
  const [open, setOpen] = useState<boolean>(true);
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

  const close = (
    _: Record<string, never>,
    reason: "backdropClick" | "escapeKeyDown" | "closeClick",
  ) => {
    if (reason === "closeClick") {
      setOpen(false);
      setOfflineReady(false);
      setNeedRefresh(false);
    }
  };

  return (
    <>
      {(offlineReady || needRefresh) && (
        <Modal
          open={open}
          onClose={(_, reason) => {
            close(_, reason);
          }}
        >
          <ModalDialog>
            <DialogContent>
              {offlineReady
                ? "App ready to work offline."
                : "New content available. Reload for new content?"}
            </DialogContent>
            <DialogActions>
              {needRefresh && (
                <Button
                  startDecorator={<IoReload className="react-icon" />}
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onClick={() => updateServiceWorker()}
                >
                  Reload
                </Button>
              )}
              <Button
                aria-label="Close dialogue"
                onClick={() => {
                  close({}, "closeClick");
                }}
                startDecorator={<IoClose className="react-icon" />}
              >
                Close
              </Button>
            </DialogActions>
          </ModalDialog>
        </Modal>
      )}
    </>
  );
}

export default PwaReloadPrompt;
