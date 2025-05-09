import React from 'react'

const Workflow = () => {
  return (
    <div className='relative bg-black  text-white lg:h-screen flex  justify-center items-center overflow-hidden'>
      {/* bg shadow */}
      <div
        className=" absolute  inset-0  bg-center   lg:h-screen bg-no-repeat   bg-cover z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/workflow-shade.png')`,
        }}
      ></div>

      {/* bg graphic*/}
      <div
        className=" absolute   lg:w-[400px] lg:h-[400px] w-[200px] h-[200px] bg-no-repeat opacity-30  bg-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/workflow-graphic.png')`,
        }}
      ></div>



      <div className='relative z-10 flex flex-col gap-y-3 justify-center items-center py-20 lg:py-0 '>
        <h2 className='lg:text-6xl text-3xl font-sans font-medium text-center capitalize lg:leading-20 leading-10'>But I must explain to <br className='block lg:hidden' /> you how <br className='lg:block hidden'/>all this <br className='lg:hidden block'/>mistaken idea</h2>
        <p className=' font-sans text-center font-extralight tracking-wider text-xs lg:text-base lg:max-w-[700px] max-w-[300px]'>From expected surges and urgent projects to unexpected demands, we’ve got your back. Access elite talent instantly, scale down seamlessly.</p>
        <button className=' text-black lg:text-sm text-xs lg:px-10 px-4  lg:py-3 py-2 cursor-pointer rounded-full capitalize' style={{
          backgroundImage: 'linear-gradient(to bottom, #D8BD62, #726434)',
        }}>
          speak to an expert
        </button>
      </div>
    </div>
  )
}

export default Workflow