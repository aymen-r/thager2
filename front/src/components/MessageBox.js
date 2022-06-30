import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
const MessageBox = (props) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity={props.severity || "info"}>{props.children}</Alert>
    </Stack>
  );
};

export default MessageBox;
