import React from 'react'

const Workflow = () => {
  return (
    <div className='relative bg-black  text-white h-screen flex  justify-center items-center overflow-hidden'>
{/* bg shadow */}
<div
        className=" absolute   w-screen h-screen bg-no-repeat  bg-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/workflow-shade.png')`,
        }}
      ></div>

{/* bg graphic*/}
<div
        className=" absolute   w-[400px] h-[400px] bg-no-repeat  bg-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/workflow-graphic.png')`,
        }}
      ></div>



<div className='relative z-10 flex flex-col gap-y-4 justify-center items-center '>
    <h2 className='text-7xl font-sans text-center capitalize leading-22'>But I must explain to you how <br />all this mistaken idea</h2>
    <p className='text-lg font-sans text-center font-extralight tracking-wider max-w-[800px]'>From expected surges and urgent projects to unexpected demands, we’ve got your back. Access elite talent instantly, scale down seamlessly.</p>
    <button className=' text-black text-sm px-10 py-3 rounded-full capitalize' style={{
                backgroundImage: 'linear-gradient(to bottom, #D8BD62, #726434)',
              }}>
                explore more
            </button>
</div>
    </div>
  )
}

export default Workflow