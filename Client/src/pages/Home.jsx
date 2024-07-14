import React, { useState } from 'react';
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [cabin, setCabin] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selection = { origin, destination, cabinSelection: [cabin] };

    try {
      console.log(JSON.stringify(selection));

      // Make the API call
      const response = await axios.post('http://localhost:3000/update-request', JSON.stringify(selection));
      console.log('Response:', response.data);

      // Navigate to search results page
      navigate('/searchresult');
    } catch (error) {
      console.log('error:', error);
    }
  };

  const originOptions = ["JFK", "DEL", "SYD", "BOM", "BNE", "BLR"];
  const destinationOptions = ["JFK", "DEL", "SYD", "LHR", "CDG", "DOH", "SIN"];
  const cabinOptions = ["Economy", "Business", "First"];

  return (
    <div className='mb-20'>
      <h4 className="sm:text-lg text-lg font-semibold my-6 text-white">Choose Origin & Destination Airports:</h4>
      <form onSubmit={handleSubmit}>
        <Input title="Origin" options={originOptions} bg={false} setFunction={setOrigin} />
        <Input title="Destination" options={destinationOptions} bg={false} setFunction={setDestination} />
        <Input title="Cabin Selection" options={cabinOptions} bg={true} setFunction={setCabin} />
        <button type='submit' className='float-left bg-green-500 text-white p-2 rounded-md'>Search</button>
      </form>
    </div>
  );
}
