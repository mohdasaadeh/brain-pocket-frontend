import * as React from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert
        severity="error"
        action={
          <Button color="inherit" size="small" onClick={resetErrorBoundary}>
            TRY AGAIN
          </Button>
        }
      >
        {error.message}
      </Alert>
    </Stack>
  );
}

export default ErrorFallback;
