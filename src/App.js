import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * Uses Tailwind CSS for styling
 * Tailwind file is imported in App.css
 */

export default function App() {
  return (
    <div className='app min-h-screen text-blue-200 flex items-center flex-col p-20'>
      <div className='mb-10 grid grid-cols-4 grid-rows-2 w-1/2 mx-auto'>
        <img className='opacity-25' src={logo} alt='React Logo' width='300' />
        <img
          className='col-span-2 row-span-3 animate-spin m-auto'
          style={{ animationDuration: '30s' }}
          src={logo}
          alt='React Logo'
          width='300'
        />
        <img className='opacity-25' src={logo} alt='React Logo' width='300' />
        <img className='opacity-25' src={logo} alt='React Logo' width='300' />
        <img className='opacity-25' src={logo} alt='React Logo' width='300' />
      </div>

      <h1 className='text-2xl lg:text-5xl mb-10 text-right'>
        Development is a Crucible
        <span className='block text-lg text-blue-400'>Flavio Espinoza</span>
      </h1>

      <div className='grid grid-cols-2 grid-rows-2 gap-4'>
        <Button
          text='The Event Loop'
          url='https://iflavio.dev/#/event-loop'
        />
        <Button
          text='UI Design'
          url='https://www.coroflot.com/flavioespinoza/stream'
        />
      </div>

      <div>
        <p class='p-12'>Hello, I am Flavio :)</p>
        <br />
        <p>
          I am a rare combination of talent and commitment with an intuitive
          understanding of graphic visual communication and a propensity for
          creative problem-solving, forged in the crucibles of design and
          development for the past decade.
        </p>
        <br />
        <p class='p-12'>I've developed web applications for clients:</p>
        <br />
        <ul>
          <li>Nike</li>
          <li>eBay</li>
          <li>Vivint Solar</li>
          <li>SolarCity</li>
          <li>Apple</li>
        </ul>
        <br />
        <p class='p-12'>
          I'm interested in how I can help you get done what you need doing -- let's chat :)
        </p>
      </div>
    </div>
  );
}

function Button({ className, text, url = '#' }) {
  return (
    <a
      href={url}
      className={`${className} py-3 px-6 bg-purple-400 hover:bg-purple-300 text-purple-800 hover:text-purple-900 block rounded text-center shadow flex items-center justify-center leading-snug text-xs transition ease-in duration-150`}
    >
      {text}
    </a>
  );
}
