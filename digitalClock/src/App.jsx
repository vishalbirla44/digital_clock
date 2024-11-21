import React, { useEffect, useState } from 'react'

const App = () => {

  const [currenttime,setcurrenttime] = useState(new Date())


  useEffect(() => {
    const time = setInterval(() => {
      setcurrenttime(new Date())
    },1000)


    return () => clearInterval(time);
  },[])

   const Hours = String(currenttime.getHours()).padStart(2,'0')
   const Minutes = String(currenttime.getMinutes()).padStart(2,'0')
   const Seconds = String(currenttime.getSeconds()).padStart(2,'0')
   const ampm =  Hours >= 12? "PM" : "AM"
   const realhour = Hours < 12 ? Hours : Hours - 12 


   const realtiem = `${realhour} : ${Minutes} : ${Seconds} ${ampm}`
  return (
    <div>{realtiem}</div>
  )
}

export default App