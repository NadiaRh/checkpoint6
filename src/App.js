import React from 'react';
import Student from './Student'

function App() {
  const nadia = new Student()
  nadia.name = "Moez"
  nadia.getJob("Web Dev")
  nadia.leaveJob()
  nadia.learnNewSkill("React")
  nadia.learnNewSkill("Node")
  nadia.forgetSkill()
  return (
    <div>
      <h1>Name: {nadia.name}</h1>
      <h1>Job: {nadia.job}</h1>
      <h1>skill:</h1>{nadia.skills.map(el => <p>{el}</p>)}
      
    </div>
  );
}

export default App;
