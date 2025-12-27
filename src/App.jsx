import { useState } from 'react'
import ContactCard from "./components/ContactCard.jsx"

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [contacts, setContacts] = useState([{ id: Date.now(), name: "Coco Melon", email: "cocomelon@melon.co" }])

  const submitHandler = (e) => {
    e.preventDefault()
    setContacts([...contacts, { id: Date.now(), name, email }])
    setName("")
    setEmail("")
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  return (
    <div className="h-screen flex flex-col px-4">
      <h1 className="text-center text-4xl py-4 my-2">
        Contact List
      </h1>

      <div className="max-w-100 w-full mx-auto bg-[#111] border border-[#333] mb-8">
        <form className="flex flex-col gap-2 p-4" onSubmit={submitHandler}>
          <input
            className="text-lg border border-[#333] p-2 outline-0"
            type="text"
            placeholder="Enter name"
            autoComplete="off"
            spellCheck={false}
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="text-lg border border-[#333] p-2 outline-0"
            type="email"
            placeholder="Enter email"
            autoComplete="off"
            spellCheck={false}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="text-lg bg-green-700 hover:bg-green-800 p-2 cursor-pointer"
            type="submit"
            value="Add"
          />
        </form>
      </div>

      <div className="max-w-100 w-full mx-auto flex flex-col gap-4 overflow-y-auto pb-8">
        {
          contacts.map(({ id, name, email }, idx) => <ContactCard key={idx} id={id} name={name} email={email} onDelete={deleteContact} />)
        }
      </div>
    </div>
  )
}

export default App
