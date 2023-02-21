import { Box, Button, Modal } from "@mui/material";
import { useState} from 'react';


function CreateModal(props) {

    const [nameValue, setNameValue] = useState('');
    const [numberValue, setNumberValue] = useState('');



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 150,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal open={true}  aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
            <Box sx={style}>
            <span>
          <div>
            <span> Name </span>{" "}
            <span>
              {" "}
              <input onChange={(e) => setNameValue(e.target.value) } />
            </span>
          </div>
          <div>
            <span> Number</span>{" "}
            <span>
              {" "}
              <input onChange={(e) => setNumberValue(e.target.value) }   />{" "}
            </span>
          </div>
          <Button onClick={() => props.onSubmit({ name: nameValue, number: numberValue}) }>Submit</Button> <Button onClick={() => props.onCancel()}>Cancel</Button>
        </span>
            </Box>
        
      </Modal>
    </>
  );
}

export default CreateModal;
