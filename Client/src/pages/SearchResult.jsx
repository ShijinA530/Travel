import React from 'react';
import img from '../assets/travel1.png'
import App from './../App';

export default function SearchResult({ results, origin, destination }) {
  // Log the results for debugging
  console.log(results);

  return (
    <div className='mt-24'>
      <section className='grid gap-8 md:grid-cols-2 items-center'>
        {
          results && results.length > 0 ? (
            results.map((result, index) => (
              <div key={index} className='pt-6 pb-6 rounded-lg items-center w-full md:max-w-[70%] bg-green-800'>
                <img className='w-24 h-24 mx-auto' src={img} alt="logo" />
                <h2 className='text-3xl p-2'>{result.partner_program}</h2>
                <h4 className='text-lg'>{origin} &rarr; {destination }</h4>
                <h4 className='pb-2'>{`${result.startDate || "2024-07-09"} - ${result.endDate || "2024/10/07"}`}</h4>
  
                <div className='pt-2 flex items-baseline justify-center'>
                  <h1 className='text-4xl font-bold p-1'>{result.min_business_miles ? result.min_business_miles : "N/A"}</h1>
                  <h4 className='text-lg font-normal'>{result.min_business_tax ? `+ $${result.min_business_tax}` : ""}</h4>
                </div>
                <h6 className='pb-5'>Min Business Miles</h6>
  
                <div className='pt-2 flex items-baseline justify-center'>
                  <h1 className='font-bold text-4xl text-center'>{result.min_economy_miles ? result.min_economy_miles : "N/A"}</h1>
                  <h4 className='text-lg font-normal'>{result.min_economy_tax ? `+ $${result.min_economy_tax}` : ""}</h4>
                </div>
                <h6 className='pb-6'>Min Economy Miles</h6>
                
                <div className='pt-2 flex items-baseline justify-center'>
                  <h1 className='font-bold text-4xl text-center'>{result.min_first_miles ? result.min_first_miles : "N/A"}</h1>
                  <h4 className='text-lg font-normal'>{result.min_first_tax ? `+ $${result.min_first_tax}` : ""}</h4>
                </div>
                <h6 className='pb-6'>Min First Miles</h6>
              </div>

            ))
          ) : (
            <div className='text-center text-white'>
              <h1 className='text-2xl font-semibold'>Try another search route.</h1>
              </div>
          )
        }
      </section>
    </div>
  );
}
