import React, { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
width = 100%;
height = 100%;
`;
const Label = styled.label`
width = 90%;
height = 30px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid black;
`;
const Border = styled.div`
display: flex;
justify-content:spase-between;
align-items: center;
height: 100%;
width: 100%;
border: 1px solid black;
border-radius: 15px;

`;
const Input = styled.input`
padding: 10px;
margin: 10px;
border: 1px solid black;
border-radius: 15px;
width: 80%;
`;
const Button = styled.button`
border: 1px solid black;
border-radius: 15px;
padding: 10px;
margin: 10px;
width: 20%;
`;
const ListW = styled.ul`
width: 100%;
border-radius: 15px;
margin-top: 20px;
`;
const Li = styled.li`
list-style: none;
padding: 10px;
`;
const Tbody = styled.tbody`
width: 100%;
padding: 10px;
justify-content: spase-between;

gap: 10px;
display: flex;
flex-direction: column;
`;
const Thead = styled.td`
padding: 10px;

`;
const Th = styled.th`
padding: 10px;
`;



const Todo = () => {
const data = [
  {
    id: 1,
    title: 'Todo 1',
    completed: false
  },
  {
    id: 2,
    title: 'Todo 2',
    completed: false  
  },
  {
    id: 3,
    title: 'Todo 3',
    completed: false
  }

]
;

const users = [
  { "id":1,"age":10,"first_name":"Fifi","last_name":"Tincknell","email":"ftincknell0@wufoo.com","gender":"Female"},
  { "id":2,"age":22,"first_name":"Susannah","last_name":"Ivancevic","email":"sivancevic1@surveymonkey.com","gender":"Genderqueer"},
  { "id":3,"age":35,"first_name":"Janet","last_name":"Cope","email":"jcope2@thetimes.co.uk","gender":"Female"},
  { "id":4,"age":46,"first_name":"Kendal","last_name":"Siggins","email":"ksiggins3@state.tx.us","gender":"Male"},
  { "id":5,"age":52,"first_name":"Nolly","last_name":"Frizell","email":"nfrizell4@java.com","gender":"Male"},
  { "id":6,"age":62,"first_name":"Sebastiano","last_name":"Losemann","email":"slosemann5@howstuffworks.com","gender":"Male"},
  { "id":7,"age":71,"first_name":"Roseanna","last_name":"O'Looney","email":"rolooney6@archive.org","gender":"Female"},
  { "id":8,"age":80,"first_name":"Rina","last_name":"Foote","email":"rfoote7@tmall.com","gender":"Female"},
  { "id":9,"age":19,"first_name":"Abner","last_name":"Grinaugh","email":"agrinaugh8@constantcontact.com","gender":"Non-binary"},
  { "id":10,"age":10,"first_name":"Patrica","last_name":"Fratson","email":"pfratson9@w3.org","gender":"Female"},
  { "id":11,"age":11,"first_name":"Cletus","last_name":"Dye","email":"cdyea@miitbeian.gov.cn","gender":"Male"},
  { "id":12,"age":12,"first_name":"Anna","last_name":"Pactat","email":"apactatb@craigslist.org","gender":"Female"},
  { "id":13,"age":13,"first_name":"Vernen","last_name":"Larby","email":"vlarbyc@businessinsider.com","gender":"Agender"},
  { "id":14,"age":14,"first_name":"Joly","last_name":"Onians","email":"joniansd@shareasale.com","gender":"Genderqueer"},
  { "id":15,"age":15,"first_name":"Marjorie","last_name":"Tyres","email":"mtyrese@simplemachines.org","gender":"Female"},
  { "id":16,"age":16,"first_name":"Arnie","last_name":"Samwaye","email":"asamwayef@google.de","gender":"Male"},
  { "id":17,"age":17,"first_name":"Carlotta","last_name":"Ismirnioglou","email":"cismirniogloug@webnode.com","gender":"Female"},
  { "id":18,"age":18,"first_name":"Christel","last_name":"Tatersale","email":"ctatersaleh@disqus.com","gender":"Female"},
  { "id":19,"age":19,"first_name":"Flin","last_name":"Renowden","email":"frenowdeni@irs.gov","gender":"Male"},
  { "id":20,"age":20,"first_name":"Trula","last_name":"Gerhartz","email":"tgerhartzj@shareasale.com","gender":"Female"},
  { "id":21,"age":21,"first_name":"Pam","last_name":"Tuxell","email":"ptuxellk@webnode.com","gender":"Female"},
  { "id":22,"age":22,"first_name":"Glynnis","last_name":"Lisamore","email":"glisamorel@samsung.com","gender":"Female"},
  { "id":23,"age":23,"first_name":"Sigrid","last_name":"Durgan","email":"sdurganm@sfgate.com","gender":"Female"},
  { "id":24,"age":24,"first_name":"Alphonse","last_name":"Micklem","email":"amicklemn@bravesites.com","gender":"Male"},
  { "id":25,"age":25,"first_name":"Lissa","last_name":"Giacomuzzi","email":"lgiacomuzzio@drupal.org","gender":"Female"},
  { "id":26,"age":26,"first_name":"Langsdon","last_name":"Cammiemile","email":"lcammiemilep@typepad.com","gender":"Genderqueer"},
  { "id":27,"age":27,"first_name":"Benedikt","last_name":"Lundon","email":"blundonq@umn.edu","gender":"Male"},
  { "id":28,"age":28,"first_name":"Lexi","last_name":"Houchen","email":"lhouchenr@parallels.com","gender":"Female"},
  { "id":29,"age":29,"first_name":"Flinn","last_name":"Wickson","email":"fwicksons@studiopress.com","gender":"Agender"},
  { "id":30,"age":30,"first_name":"Darrick","last_name":"MacRedmond","email":"dmacredmondt@wired.com","gender":"Polygender"}
]

const [addTodos, setAddTodos] = useState('')
const addTodo = (e)=>{
  e.preventDefault()
  setAddTodos(e.target.value)
console.log(e.target.value)
}


  return (
    <Border>
<Form onSubmit={addTodo} action="submit">
 <Label htmlFor="todo">
  <Input style={{
  

    display: 'flex',
    justifyContent: 'flrex-start',
    alignItems: 'flex-start',

  }} type="text" name="todo" placeholder="Add Todo" onChange={(e)=>(e.target.value)}/>
<Button

align="flex-end"
type="submit" onClick={addTodo}>Add</Button>
  </Label> 
  <div style={{
    display: 'flex',
    justifyContent: 'flrex-start',
    alignItems: 'flex-start',
  }}>
  < ListW>{data.map((todo)=>{
    return <Li key={todo.id}>{todo.title}</Li>
  })}
  </ListW>
  <ListW>
{
  users.map((user)=>{
    return <Li key={user.id} >{user.first_name}</Li>
  })
}

  </ListW>
  <ListW>
{
  users.map((user)=>{
    return <Li key={user.id} >{user.last_name}</Li>
  })
}
  </ListW>


  <Tbody>
    
    <tr>
      <Th>Age</Th>
      <Th>First Name</Th>
      <Th>Last Name</Th>
      <Th>Gender</Th>
      <Th>Email</Th>
      <Th>ID</Th>
    </tr>
    {users.map((user)=>
  {
    return  <tr key={user.id}>
       
 
      <Thead>{user.id}</Thead>
      <Thead>{user.age}</Thead>
      <Thead>{user.first_name}</Thead>
      <Thead>{user.last_name}</Thead>
      <Thead>{user.gender}</Thead>
      <Thead>{user.email}</Thead>
      </tr>
    })}</Tbody>
  </div>
</Form>
      
    </Border>
  )
}

export default Todo
