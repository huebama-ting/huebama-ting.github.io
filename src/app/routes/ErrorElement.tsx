import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import { Container } from "src/app/components/Layout";

function ErrorElement() {
  const error = useRouteError();

  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <Container>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>
            {error.status} {error.statusText}
          </i>
        </p>
      </Container>
    );
  } else {
    return (
      <Container>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </Container>
    );
  }
}

export default ErrorElement;
