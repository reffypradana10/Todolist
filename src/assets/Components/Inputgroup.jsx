import React from "react";
// Bootstrap
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Inputgroup = () => {
  return (
    <InputGroup className="mb-2 mt-5">
      <Form.Control placeholder="Masukkan Daftar ..." />
      <Button variant="outline-primary" id="button-addon1">
        Button
      </Button>
    </InputGroup>
  );
};

export default Inputgroup;
