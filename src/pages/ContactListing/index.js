import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import CreateModal from "../../components/CreateModal";
import EditModal from "../../components/EditModal";
import "./styles.css";

function ContactListing() {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [editData, setEditData] = useState({});
    const [modalAction, setModalAction] = useState('create');


  const handleEditSubmit = (data) => {
    let contactListData = localStorage.getItem("contactList");
    console.log(contactListData);

    if (typeof contactListData === "string") {
      contactListData = JSON.parse(contactListData);
    }
    contactListData.splice(data.index, 1, {
      name: data.name,
      number: data.number,
    });
    localStorage.setItem("contactList", JSON.stringify(contactListData));
    setOpenCreateModal(false);
  };

  const handleSubmit = (data) => {
    let contactListData = localStorage.getItem("contactList");
    console.log(contactListData);

    if (typeof contactListData === "string") {
      contactListData = JSON.parse(contactListData);
    } else {
      contactListData = [];
    }
    contactListData.push({ name: data.name, number: data.number });
    localStorage.setItem("contactList", JSON.stringify(contactListData));
    setOpenCreateModal(false);
  };

  let contactList = [];

  if (localStorage.getItem("contactList")) {
    contactList = JSON.parse(localStorage.getItem("contactList"));
  }

  return (
    <div className="contactListingWrapper">
      <h1> CONTACT LIST</h1>
      <button
        style={{
          borderStyle: "solid",
          borderColor: "#64ffdb",
          backgroundColor: "#001f40",
          color: "#cdd8f3",
          borderRadius: "3px",
        }}
        onClick={() => {
          setModalAction('create')
          setOpenCreateModal(true)}}
      >
        {" "}
        Create
      </button>

      {contactList.map((item, i) => {
        return (
          <div className="itemWrapper">
            <div className="itemNumber">
              <h2>{i + 1}</h2>
            </div>
            <div className="itemContent">
              <div className="itemName"> Name: {item.name} </div>
              <div className="itemPhone">Number : {item.number}</div>
            </div>
            <div className="itemEditButton">
              <Button
                onClick={() => {
                  setEditData({
                    name: item.name,
                    number: item.number,
                    index: i,
                  });
                  setOpenCreateModal(true);
                  setModalAction('edit')
                }}
              >
                {" "}
                Edit{" "}
              </Button>
            </div>
          </div>
        );
      })}

      {openCreateModal && (
        <CreateModal
          editData={editData}
          modalAction={modalAction}
          onCancel={() => setOpenCreateModal(false)}
          onSubmit={(data, action) => {
            console.log(action)
            if (action === "create") {
              handleSubmit(data);
            } else {
              handleEditSubmit(data);
            }
          }}
        />
      )}

    </div>
  );
}

export default ContactListing;
