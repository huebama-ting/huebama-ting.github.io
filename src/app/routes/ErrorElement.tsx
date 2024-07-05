import styled from "@emotion/styled";
import Typography from "@mui/joy/Typography";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

interface ErrorProps {
  message?: string | undefined;
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
  font-family: "Overpass Variable";
  text-align: center;
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

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorContainer>
        <ErrorText />
        <br />
        <Typography level="body-md">
          <em>
            {error.status} {error.statusText}
            {error.data ? `: ${error.data}` : ""}
          </em>
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
          <ErrorText message={props.message} />
        </ErrorContainer>
      );
    }
  }
}

export default ErrorElement;
