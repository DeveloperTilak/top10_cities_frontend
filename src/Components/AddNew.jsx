import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  
  function AddNew(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    
    const [formData, setFormData] = useState({
        name:"",
        description:"",
        img:""
    }) 

    const handleChange =(e)=>{
        const {name, value}  = e.target

        setFormData({...formData, [name]: value})
    }
    const handleSubmit = (e) => {
      e.preventDefault();
       console.log(formData);
       console.log("click");
    };
  
    return (
      <>
        <Button onClick={onOpen}>Add New City</Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>New City</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel>City name</FormLabel>
                  <Input name="city"  placeholder="City name" onChange={handleChange} required />
                </FormControl>
  
                <FormControl mt={4}>
                  <FormLabel>Description</FormLabel>
                  <Input name="description"  placeholder="Description" onChange={handleChange} required />
                </FormControl>
  
                <FormControl mt={4}>
                  <FormLabel>Image</FormLabel>
                  <Input name="img" placeholder="Image URL" onChange={handleChange} required />
                </FormControl>
              </form>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  
  export default AddNew;
  