import React from 'react';

function Schedule({ schedule }) {
  return (
    <ul>
      {schedule.map((task, index) => (
        <li key={index}>
          {task.startTime.toLocaleString()} - {task.endTime.toLocaleString()}: {task.text}
        </li>
      ))}
    </ul>
  );
}

export default Schedule;