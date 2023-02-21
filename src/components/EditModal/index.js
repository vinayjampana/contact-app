import { Box, Button, Modal } from "@mui/material";
import { useState, useEffect } from "react";

function EditModal(props) {
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");

  const [indexValue, setIndexValue] = useState("");

  useEffect(() => {

        setNameValue(props.editData.name)
        setNumberValue(props.editData.number)
        setIndexValue(props.editData.index)

  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 150,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <span>
            <div>
              <span> Name </span>{" "}
              <span>
                {" "}
                <input value={nameValue} onChange={(e) => setNameValue(e.target.value)} />
              </span>
            </div>
            <div>
              <span> Number</span>{" "}
              <span>
                {" "}
                <input value={numberValue} onChange={(e) => setNumberValue(e.target.value)} />{" "}
              </span>
            </div>
            <Button
              
              onClick={() =>
                props.onSubmit({ name: nameValue, number: numberValue, index: indexValue })
              }
            >
              Submit
            </Button>{" "}
            <Button onClick={() => props.onCancel()}>Cancel</Button>
          </span>
        </Box>
      </Modal>
    </>
  );
}

export default EditModal;
