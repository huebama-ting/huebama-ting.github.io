import styled from "@emotion/styled";
import Typography from "@mui/joy/Typography";
import { Suspense, lazy } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import { AppContainer } from "src/app/shared/Layout";

const Loading = lazy(() => import("src/app/shared/Loading"));
const NavigationBar = lazy(() => import("src/app/common/NavigationBar"));

interface ErrorProps {
  readonly message?: string | undefined;
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function ErrorText(props: ErrorProps) {
  return (
    <>
      <Typography level="h1">Oops!</Typography>
      <br />
      <Typography level="body-lg">
        Sorry, an unexpected error has occurred.
        <br />
        {props.message}
      </Typography>
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

      <AppContainer>
        <ErrorContainer>
          {isRouteErrorResponse(error) ? (
            <>
              <ErrorText />
              <br />
              <Typography level="body-md">
                <em>
                  {error.status} {error.statusText}
                  {error.data ? `: ${error.data}` : ""}
                </em>
              </Typography>
            </>
          ) : !navigator.onLine ? (
            <>
              <ErrorText />
              <br />
              <Typography level="body-md">
                <em>
                  You seem to be offline. Try reloading this page again once you
                  are online.
                </em>
              </Typography>
            </>
          ) : (
            <ErrorText message={props.message} />
          )}
        </ErrorContainer>
      </AppContainer>
    </>
  );
}

export default ErrorElement;
