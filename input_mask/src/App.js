import React, { useState } from 'react';
import city from './cities.json'
import Input from './Input';

function App() {

   const [hint, sethint] = useState([])

   const handleChange = e => {


      if (e.target.value.length > 0) {

         const regex = new RegExp(e.target.value)
         const filterdata = city.filter(item => item.match(regex))
         sethint(filterdata)
      }
      else {
         sethint([])
      }


   }



   return <div><Input handleChange={handleChange} hint={hint} /></div>
}

export default App;
