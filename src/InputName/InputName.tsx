import { useState } from "react"

function NameInput() {
    const [name, setName] = useState<string>('');
    return (
    <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>Hello {name}!</p>
    </div>
    )
}

export default NameInput;