import React, {useState} from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Address = ({ formData, setForm, navigation, listed }) => {
  const { languages, city, state, Pin } = formData;

  var [s,setvalue] = useState([]);
  return (
  
  
    <Container maxWidth="xs">
      <h3>More Details</h3>
      <TextField
        // label="Address"
        placeholder="Languages Known"
        name="languages"
        value={languages}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        // label="City"
        placeholder="City"
        name="city"
        value={city}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        // label="State"
        placeholder="State"
        name="state"
        value={state}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        // label="Zip"
        placeholder="Pin Code"
        name="Pin"
        type="number"
        value={Pin}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {navigation.next();
            setvalue(...s,languages)
            setvalue(...s,city)
            setvalue(...s,state)
            setvalue(...s,Pin)
            listed(s)
          }
          }
        >
          Next
        </Button>
      </div>
    </Container>
  );
};
