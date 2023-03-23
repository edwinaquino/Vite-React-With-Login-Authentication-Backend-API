



import React, { useState } from "react";

function Dashboard(props) {
  const [startDate, setStartDate] = useState(new Date());
  const tasks = [
    'I Followed instructions the first time.',
    'I stayed on task.',
    'I kept a calm body.',
    'I tried not to distract my peers.',

  ]

  return (
    <div>
      <h1>Dahsboard</h1>
      <p>This is views/Dahsboard.jsx. You can add anything you want here. The user is logged in! Cool!</p>
    </div>
  )
}

export default Dashboard
