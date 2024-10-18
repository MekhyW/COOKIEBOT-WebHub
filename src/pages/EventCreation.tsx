import { useState } from 'react'
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"
// import { Upload } from "lucide-react"

export default function Component() {
  const [eventName, setEventName] = useState("")
  const [eventDescription, setEventDescription] = useState("")
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div 
      className="relative w-[375px] h-[812px] p-4 text-[#3A2601] overflow-y-auto"
      style={{
        backgroundImage: "url('/placeholder.svg?height=812&width=375')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-white">Events</h1>
        
        <div>
          <label htmlFor="event-name" className="text-sm bg-[#FFE9C9] px-1 rounded">Event Name</label>
          <input 
            id="event-name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="mt-1 bg-white border border-[#AA7208] rounded-t-md"
            placeholder="Type the Event Name Here"
          />
        </div>

        <div>
          <label htmlFor="event-description" className="text-sm bg-[#FFE9C9] px-1 rounded">Event Description</label>
          <input 
            id="event-description"
            value={eventDescription}
            onChange={(e:any) => setEventDescription(e.target.value)}
            className="mt-1 bg-white border border-[#AA7208] rounded-t-md"
            placeholder="Type Here the Event Description Here"
          />
        </div>

        <div>
          <label className="text-sm bg-[#FFE9C9] px-1 rounded">Date Settings</label>
          <div className="mt-1 bg-white border border-[#AA7208] rounded-md p-2">
            {/* <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border" */}
            />
          </div>
        </div>

        <button className="w-full bg-[#5E410D] text-white hover:bg-[#3A2601]">
          {/* <Upload className="w-4 h-4 mr-2" />
          Upload Cover for the Event (Optional) */}
        </button>

        <div className="space-y-2">
          <button className="w-full bg-[#FFE9C9] text-[#3A2601] hover:bg-[#FFD699]">
            Save and Divulge Event
          </button>
          <button className="w-full text-[#3A2601]">
            Delete Current Event
          </button>
        </div>
      </div>
    </div>
  )
}