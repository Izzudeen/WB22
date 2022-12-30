import React, { useState } from 'react';
import Schedule from './Schedule';
import { Grid, Row } from 'react-grid-system';


function ToDoList() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');
  const [timeAndDate, setTimeAndDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [schedule, setSchedule] = useState([]);


  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) {
      return;
    }
    setItems([
      ...items,
      { text, timeAndDate: new Date(), startTime, endTime },
    ]);    
    setText('');
    setSchedule([...schedule, { startTime, endTime, text }]);
    setStartTime(new Date());
    setEndTime(new Date());
  }
  function handleRemove(index) {
    setItems(items.filter((item, i) => i !== index));
  }
  return (
    
    <div>
Copy code
<Row>
<form onSubmit={handleSubmit}>
  <input onChange={handleChange} value={text} />
  <input
    type="datetime-local"
    value={startTime.toISOString().substr(0, 16)}
    onChange={(e) => setStartTime(new Date(e.target.value))}
  />
  <input
    type="datetime-local"
    value={endTime.toISOString().substr(0, 16)}
    onChange={(e) => setEndTime(new Date(e.target.value))}
  />
  <button type="submit">Add To-Do</button>
</form>
  <ul>
    {items.map((item, index) => (
      <li key={index}>
        {item.text} (Added on {item.timeAndDate.toLocaleString()})
        <br />
        Start time: {item.startTime.toLocaleString()}
        <br />
        End time: {item.endTime.toLocaleString()}
        <button type="button" onClick={() => handleRemove(index)}>
          Remove
        </button>
      </li>
    ))}
  </ul>
</Row>
<Grid>
  <Row xs={12} md={6}>
    {/* Form and list of to-do items */}
  </Row>
  <Row xs={12} md={6}>
    <Schedule schedule={schedule} />
  </Row>
</Grid>
    </div>
    
  );
}

export default ToDoList;

