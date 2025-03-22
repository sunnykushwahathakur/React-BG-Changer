import { useState } from 'react'

function App() {
  const [color, setColor] = useState('#242424');

  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button className='bg-red-500 px-2 py-1 rounded-full text-white cursor-pointer' onClick={() => setColor("red")} >Red</button>
            <button className='bg-blue-500 px-2 py-1 rounded-full text-white cursor-pointer' onClick={() => setColor("blue")} >Blue</button>
            <button className='bg-green-500 px-2 py-1 rounded-full text-white cursor-pointer' onClick={() => setColor("green")} >Green</button>
            <button className='bg-yellow-500 px-2 py-1 rounded-full text-white cursor-pointer' onClick={() => setColor("yellow")} >Yellow</button>
            <button className='bg-pink-500 px-2 py-1 rounded-full text-white cursor-pointer' onClick={() => setColor("pink")} >Pink</button>
            <button className='bg-purple-500 px-2 py-1 rounded-full text-white cursor-pointer' onClick={() => setColor("purple")} >Purple</button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
