import styled from "@emotion/styled";
import Typography from "@mui/joy/Typography";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorContainer = styled.div`
  font-family: "Overpass Variable";
`;

export function ErrorElement(): React.ReactNode {
  const error = useRouteError();

  if (import.meta.env.DEV) {
    console.error(error);
  }

  if (isRouteErrorResponse(error)) {
    return (
      <ErrorContainer>
        <Typography level="h1">Oops!</Typography>
        <br />
        <Typography level="body-lg">
          Sorry, an unexpected error has occurred.
        </Typography>
        <br />
        <Typography level="body-md">
          <i>
            {error.status} {error.statusText}
          </i>
        </Typography>
      </ErrorContainer>
    );
  } else {
    return (
      <ErrorContainer>
        <Typography level="h1">Oops!</Typography>
        <br />
        <Typography level="body-lg">
          Sorry, an unexpected error has occurred.
        </Typography>
      </ErrorContainer>
    );
  }
}
