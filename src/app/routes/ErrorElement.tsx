import styled from "@emotion/styled";
import Typography from "@mui/joy/Typography";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Overpass Variable";
`;

function ErrorText() {
  return (
    <>
      <Typography level="h1">Oops!</Typography>
      <br />
      <Typography level="body-lg">
        Sorry, an unexpected error has occurred.
      </Typography>
    </>
  );
}

export function ErrorElement(): React.ReactNode {
  const error = useRouteError();

  if (import.meta.env.DEV) {
    console.error(error);
  }

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorContainer>
        <ErrorText />
        <br />
        <Typography level="body-md">
          <i>
            {error.status} {error.statusText}
          </i>
        </Typography>
      </ErrorContainer>
    );
  } else {
    if (!navigator.onLine) {
      return (
        <ErrorContainer>
          <ErrorText />
          <br />
          <Typography level="body-md">
            <i>
              You seem to be offline. Try reloading this page again once you are
              online.
            </i>
          </Typography>
        </ErrorContainer>
      );
    } else {
      return (
        <ErrorContainer>
          <ErrorText />
        </ErrorContainer>
      );
    }
  }
}
