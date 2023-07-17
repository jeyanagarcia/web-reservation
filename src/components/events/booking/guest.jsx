import React, {useState} from 'react'

const Guest = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [residency, setResidency] = useState(false);

  return (
    <section style={{ width: '100%' }}>
      <h1>Attendee Information</h1>
      <div className="mt-2">
        <div className="flex flex-col py-1">
          <label htmlFor="attendeeName" className="block font-medium ml-32">
            Attendee Name:
          </label>
          <input
            id="attendeeName"
            className="border-black border-opacity-40 p-1 rounded-full pl-8 border w-full bg-transparent ml-32"
            type="text"
            placeholder="Enter attendee name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col py-1">
          <label htmlFor="attendeeEmail" className="block font-medium ml-32">
            Attendee Email:
          </label>
          <input
            id="attendeeEmail"
            className="border-black border-opacity-40 p-1 rounded-full pl-8 border w-full bg-transparent  ml-32"
            type="email"
            placeholder="Enter attendee email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col py-1">
          <label htmlFor="attendeeAge" className="block font-medium ml-32">
            Attendee Age:
          </label>
          <input
            id="attendeeAge"
            className="border-black border-opacity-40 p-1 rounded-full pl-8 border w-full bg-transparent ml-32"
            type="text"
            placeholder="Enter attendee age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="flex flex-col mt-1">
          <p className='ml-32'>Resident of Binan?</p>
          <div className="flex gap-2 mt-1">
            <div className="flex items-center ml-40">
              <input
                id="yesCheckbox"
                type="checkbox"
                checked={residency === true}
                onChange={() => setResidency(true)}
              />
              <label htmlFor="yesCheckbox" className="ml-1">
                Yes
              </label>
            </div>
            <div className="flex items-center ml-8">
              <input
                id="noCheckbox"
                type="checkbox"
                checked={residency === false}
                onChange={() => setResidency(false)}
              />
              <label htmlFor="noCheckbox" className="ml-1">
                No
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <button className="w-32 h-10 ml-52 rounded-full shadow-shadowOne flex items-center justify-center bg-gradient-to-r from-bodyColor to-[#73d081] group hover:bg-gradient-to-b hover:from-green-200 hover:to-green-300 transition-colors duration-1000 text-black mr-4">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Guest;
