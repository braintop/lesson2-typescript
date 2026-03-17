import type { IUser } from '../interfaces/IUser';
function UserCard({ id, name, email, onEdit, onDelete }: IUser) {
  return (<div>
    <h1>{id}</h1>
    <h2>{name}</h2>
    <p>{email}</p>
    <button onClick={onEdit as () => void}>Edit</button> 
    <button onClick={onDelete as () => void}>Delete</button>
  </div>
  )}


export default UserCard;