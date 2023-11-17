import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'

const Create = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);


const postData=()=>{
 axios.post = (`https://crud-5c880-default-rtdb.firebaseio.com/users.json`,{
    firstName,
    lastName,
    checkbox
})
    console.log(firstName);
    console.log(lastName);
    console.log(checkbox);
}

return(
    <>
    <Form className="create-form">
        <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name'  onChange={(e) => setLastName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
        </Form.Field>
        <Button type='submit' onClick={postData}>Submit</Button>
    </Form>
    
    </>
)
}


export default Create;