import { Box, Button, Modal } from "@mui/material";
import { useState, useEffect } from "react";
import "./styles.css";

function CreateModal(props) {
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [indexValue, setIndexValue] = useState("");

  useEffect(() => {
    if (props.modalAction === 'edit') {
      setNameValue(props.editData.name);
      setNumberValue(props.editData.number);
      setIndexValue(props.editData.index);
    }
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70vw",
    bgcolor: "#001f40",
    border: "2px solid #64ffdb",
    color: "#cdd8f3",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal
        open={true}
        className="createModal"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="createModalContent">
          <span>
            <div className="formItem name">
              <span className="formItemLabel"> Name </span>{" "}
              <span className="formItemInput">
                {" "}
                <input
                  value={nameValue}
                  style={{ width: "80%" }}
                  onChange={(e) => setNameValue(e.target.value)}
                />
              </span>
            </div>
            <div className="formItem number">
              <span className="formItemLabel"> Number</span>{" "}
              <span className="formItemInput">
                {" "}
                <input
                  value={numberValue}
                  style={{ width: "80%" }}
                  onChange={(e) => {
                    if (!isNaN(e.target.value)) {
                      setNumberValue(e.target.value);
                    }
                  }}
                />{" "}
              </span>
            </div>
            <span className="formActionsWrapper">
              <Button
                onClick={() => {
                  if (numberValue.length !== 10) {
                    alert("Phone number should be 10 Digits");
                  } else {
                    if (props.modalAction === 'create') {
                      props.onSubmit(
                        { name: nameValue, number: numberValue },
                        props.modalAction
                      );
                    } else {
                      props.onSubmit(
                        { name: nameValue, number: numberValue, index: indexValue },
                        props.modalAction
                      );
                    }
                  }
                }}
                // disabled={isSubmitDisabled}
              >
                Submit
              </Button>{" "}
              <Button onClick={() => props.onCancel()}>Cancel</Button>
            </span>
          </span>
        </Box>
      </Modal>
    </>
  );
}

export default CreateModal;
