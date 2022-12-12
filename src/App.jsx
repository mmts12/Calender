import './App.css';
import { useEffect, useState } from 'react';
import { calenderServise } from './services/calenderService';



function App() {


  const [daysInMonthArray, setDaysInMonthArray] = useState(calenderServise.daysInMonth());
  const [daysInWeek, setDaysInWeek] = useState(calenderServise.daysInWeek());

  useEffect(() => {
    createDays();
  }, [])

  const createDays = () => {
    const d = [...Array(Number(daysInMonthArray[new Date().getMonth()])).keys()]
    d.shift()
    setDaysInMonthArray(d);
  }


  const getDaysNumberInMonth = () => {
    // const getDays = (year, month) => new Date(year, month, 0).getDate()
    // const month = new Date().getMonth()
  }

  const getFirstDayInMonth = () => {

  }

  return (
    <div className="App">
      {console.log(new Date().getDay())}
      <h1>Calender</h1>
      <div className='calender-container'>
      
          <div className='header-days'> {daysInWeek.map((day) => <div className='calender-header-day' key={day}>{day}</div>)}</div>
          <div className='days-in-month'>{daysInMonthArray.map((day, index) => <div className='day' key={index}>{day}</div>)} </div>
       

      </div>
    </div>
  );
}

export default App;
