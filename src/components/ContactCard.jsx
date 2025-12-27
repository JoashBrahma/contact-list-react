import { CircleUserRound, X } from "lucide-react"

const ContactCard = ({ id, name, email, onDelete }) => {
  return (
    <div className="bg-[#222] p-4 flex items-center gap-4">
      <div>
        <CircleUserRound className="w-10 h-10" />
      </div>
      <div>
        <p className="text-2xl leading-[1em] mb-1">{name}</p>
        <p className="text-xl leading-[1em]">{email}</p>
      </div>
      <div className="ml-auto flex items-center">
        <button className="hover:cursor-pointer" onClick={() => onDelete(id)}><X className="w-6 h-6 pointer-events-none" /></button>
      </div>
    </div>
  )
}

export default ContactCard
