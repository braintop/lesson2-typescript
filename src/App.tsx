import { useState } from 'react';
import './App.css'
import UserCard from './UserCard/UserCard'

type UserType = {
  id: number;
  name: string;
  email: string;
}
function App() {
  const [users, setUsers] = useState([{id: 1, name: "John Doe", email: "john.doe@example.com"},
     {id: 2, name: "Jane Doe", email: "jane.doe@example.com"}, {id: 3, name: "Jim Doe", email: "jim.doe@example.com"},
     {id: 4, name: "Jill Doe", email: "jill.doe@example.com"}, {id: 5, name: "Jack Doe", email: "jack.doe@example.com"},
     {id: 6, name: "Jill Doe", email: "jill.doe@example.com"}, {id: 7, name: "Jack Doe", email: "jack.doe@example.com"},
     {id: 8, name: "Jill Doe", email: "jill.doe@example.com"}, {id: 9, name: "Jack Doe", email: "jack.doe@example.com"},
     {id: 10, name: "Jill Doe", email: "jill.doe@example.com"}]);
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
     }
     const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
     }
    const deleteUser = (id: number) => {
      setUsers(users.filter((user) => user.id !== id));
    }
    const onEdit = (id: number) => {
      setUsers(users.map((user) => user.id === id ? {...user, name: name, email: email} : user));
    }
    const addUser = (user: UserType) => {
      setUsers([...users, user]);
    }
  return (
    <>
    {/* <UserCard id={1} name="John Doe" email="john.doe@example.com" /> */}
    {users.map((user) => (
      <UserCard key={user.id}
       id={user.id} 
       name={user.name} 
       email={user.email} 
       onDelete={() => deleteUser(user.id)}
       onEdit={() => onEdit(user.id)} />
    ))}
    <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
    <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} /> 
    <button onClick={() => addUser({id: users.length + 1, name: name, email: email})}>Add User</button>
    </>
  )
}

export default App
