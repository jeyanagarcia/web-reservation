import React, {useState} from 'react'

const Guest = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [residency, setResidency] = useState(false);

 

  return (
    <section style={{ width: '40%' }}>
    <h1>Attendee Information </h1>
      <div className="mt-4">
        <div className="flex flex-col py-2">
          <label htmlFor="attendeeName" className="block font-medium">
            Attendee Name:
          </label>
          <input
            id="attendeeName"
            className="border-black border-opacity-40 p-2 rounded-full pl-10 border w-full bg-transparent"
            type="text"
            placeholder="Enter attendee name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="attendeeEmail" className="block font-medium">
            Attendee Email:
          </label>
          <input
            id="attendeeEmail"
            className="border-black border-opacity-40 p-2 rounded-full pl-10 border w-full bg-transparent"
            type="email"
            placeholder="Enter attendee email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="attendeeAge" className="block font-medium">
            Attendee Age:
          </label>
          <input
            id="attendeeAge"
            className="border-black border-opacity-40 p-2 rounded-full pl-10 border w-full bg-transparent"
            type="text"
            placeholder="Enter attendee age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <p>Resident of Binan?</p>
          <div className="flex gap-3 mt-1">
            <div className="flex items-center mt-1">
              <input
                id="yesCheckbox"
                type="checkbox"
                checked={residency === true}
                onChange={() => setResidency(true)}
              />
              <label htmlFor="yesCheckbox" className="ml-2">
                Yes
              </label>
            </div>
            <div className="flex items-center mt-1">
              <input
                id="noCheckbox"
                type="checkbox"
                checked={residency === false}
                onChange={() => setResidency(false)}
              />
              <label htmlFor="noCheckbox" className="ml-2">
                No
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="w-40 h-10 rounded-full shadow-shadowOne flex items-center justify-center 
          bg-gradient-to-r from-bodyColor to-[#73d081] group hover:bg-gradient-to-b hover:from-green-200 hover:to-green-300 
          transition-colors duration-1000 text-black mr-4">
          Book Now
        </button>
      </div>
    </section>
  )
}

export default Guest
