
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import CreateModal from "../../components/CreateModal";
import EditModal from "../../components/EditModal";

function ContactListing() {

    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [editData, setEditData] = useState({});
    const [indexValue, setIndexValue] = useState({});




    // useEffect(() => {
    //     localStorage.setItem('contactList', JSON.stringify([ ]))
    // },[])


  const handleEditSubmit = ( data) => {

    let contactListData = localStorage.getItem('contactList') 
    console.log(contactListData)

    if(typeof contactListData === 'string'){
        contactListData = JSON.parse(contactListData)
    }
    contactListData.splice( data.index, 1 ,{ name: data.name, number: data.number });
    localStorage.setItem('contactList', JSON.stringify(contactListData))
    setOpenEditModal(false);

  }

    const handleSubmit = ( data ) => {
        let contactListData = localStorage.getItem('contactList') 
        console.log(contactListData)

        if(typeof contactListData === 'string'){
            contactListData = JSON.parse(contactListData)
        }
        contactListData.push({ name: data.name, number: data.number });
        localStorage.setItem('contactList', JSON.stringify(contactListData))
        setOpenCreateModal(false);
    }





    let contactList = [];

    if(localStorage.getItem('contactList')){
        contactList = JSON.parse(localStorage.getItem('contactList'))
    }


    
    return (<> 
    <h1> CONTACT LIST</h1>
            <button onClick={() => setOpenCreateModal(true)}>  Create</button> 

            {contactList.map((item,i) => {
                return <> 
                <div>
                  <h2>{i+1}</h2>  name: {item.name}
                </div>
                <div>
                    number : {item.number}
                </div>
                <Button onClick={() => {
                    
                    setEditData({ name: item.name, number: item.number, index: i})
                    setOpenEditModal(true) }}> Edit </Button>
                 </>
            })

            }


          {openCreateModal &&
           <CreateModal onCancel={() => setOpenCreateModal(false)} onSubmit={(data) => handleSubmit(data) } />
            }  

            { 
            openEditModal && 
            <EditModal editData = {editData} onCancel={() => setOpenEditModal(false)}  onSubmit={(data) => handleEditSubmit(data)}  />

            }

    
    </>)
}

export default ContactListing;