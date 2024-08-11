import { Stack, Text, Title } from "@mantine/core";
import { Suspense, lazy } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const Loading = lazy(() => import("src/app/shared/components/Loading"));
const NavigationBar = lazy(() => import("src/app/common/NavigationBar"));

interface ErrorProps {
  readonly message?: string | undefined;
}

function ErrorText(props: ErrorProps) {
  return (
    <>
      <Title order={1}>Oops!</Title>
      <br />
      <Text size="xl">
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

      <Stack justify="center" align="center" flex={1} gap="xs">
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
