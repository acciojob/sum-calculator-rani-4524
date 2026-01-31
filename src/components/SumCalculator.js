import React, { useEffect, useState } from 'react'

const SumCalculator = () => {
    const [numbers , setNumbers] = useState([]);
    
    const [sum , setSum ] = useState(0);
   

    useEffect(() =>{
        setTimeout(() => {
            const total = numbers.reduce((acc, num) => acc + num, 0);
            setSum(total); 
        }, 0);
    } , [numbers]);

    const handleChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value)) {
            setNumbers((prev) => [...prev, value]);
        }
    };

  return (
    <div>
        <h1>Sum Calculator</h1>
      <input type='number' onChange={handleChange}  />
      <p>Sum: {sum}</p>
    </div>
  )
}

export default SumCalculator
