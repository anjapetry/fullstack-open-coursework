import { useState } from 'react';


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [newName, setNewName] = useState('');

  const handleAddPerson  = (event) => {
    event.preventDefault()
    console.log('added', event.target)
    const personObject = {
      name: newName
    }

  setPersons(persons.concat(personObject));
  setNewName('');
  }

  const handleNameChange = (event) => {
    console.log('Name changed', event.target)
    setNewName(event.target.value);
  }

  return (
    <main>
      <h2>Phone Book</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          name:
          <input
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
     <ul>
      {persons.map(person => <li key={person.name}>{person.name}</li>
        )}
     </ul>
    <div>debug: {newName}</div>
    </main>
  )
}

export default App;