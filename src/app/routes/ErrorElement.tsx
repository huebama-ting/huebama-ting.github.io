import { Stack, Text, Title } from "@mantine/core";
import { Suspense, lazy } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import styles from "src/app/shared/styles/layout.module.css";

const Loading = lazy(() => import("src/app/shared/components/Loading"));
const NavigationBar = lazy(() => import("src/app/common/NavigationBar"));
const Page = lazy(() => import("src/app/shared/components/Layout"));

interface ErrorProps {
  readonly message?: string | undefined;
}

function ErrorText(props: ErrorProps) {
  return (
    <>
      <Title size="h1">Oops!</Title>
      <Text size="xl">
        Sorry, an unexpected error has occurred.
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

      <Stack className={styles["appContainer"]}>
        <Page>
          {isRouteErrorResponse(error) ? (
            <>
              <ErrorText />
              <Text size="md">
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
              <Text size="md">
                <em>
                  You seem to be offline. Try reloading this page again once you
                  are online.
                </em>
              </Text>
            </>
          ) : (
            <ErrorText message={props.message} />
          )}
        </Page>
      </Stack>
    </>
  );
}

export default ErrorElement;
