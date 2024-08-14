import { Stack, Text, Title } from "@mantine/core";
import { Suspense, lazy } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import styles from "./styles/error-element.module.css";

const Loading = lazy(() => import("src/app/shared/components/Loading"));
const NavigationBar = lazy(() => import("src/app/common/NavigationBar"));

interface ErrorProps {
  readonly message?: string | undefined;
}

function ErrorText(props: ErrorProps) {
  return (
    <>
      <Title>Oops!</Title>
      <br />
      <Text className={styles["message"]}>
        Sorry, an unexpected error has occurred.
        <br />
        {props.message}
      </Text>
    </>
  );
}

export function ErrorElement(props: ErrorProps): React.ReactNode {
  const error = useRouteError();

  if (import.meta.env.DEV) {
    console.error(error);
  }

  return (
    <>
      <Suspense fallback={<Loading />}>
        <NavigationBar />
      </Suspense>

      <Stack className={styles["error-container"]}>
        {isRouteErrorResponse(error) ? (
          <>
            <ErrorText />
            <br />
            <Text>
              <em>
                {error.status} {error.statusText}
                {error.data ? `: ${error.data}` : ""}
              </em>
            </Text>
          </>
        ) : !navigator.onLine ? (
          <>
            <ErrorText />
            <br />
            <Text>
              <em>
                You seem to be offline. Try reloading this page again once you
                are online.
              </em>
            </Text>
          </>
        ) : (
          <ErrorText message={props.message} />
        )}
      </Stack>
    </>
  );
}

export default ErrorElement;
