import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Names = ({ formData, setForm, navigation }) => {
  const { Name, About, Skills } = formData;

  return (
    <Container maxWidth="xs">
      <h3>Basic Information</h3>
      <TextField
        // label="First Name"
        placeholder="Name"
        name="Name"
        value={Name}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        placeholder="About"
        // label="Last Name"
        name="About"
        value={About}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        placeholder="Skills"
        // label="Nick Name"
        name="Skills"
        value={Skills}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={() => navigation.next()}
      >
        Next
      </Button>
    </Container>
  );
};
