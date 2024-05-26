
import Image from 'next/image'

function Cards({content ,src , ind}) {
  return (
    <>
      <div className='flex flex-col p-[4vw] bg-white rounded-[3vw] h-[35vw] w-[32vw] opacity-80 relative mobile:h-[50vh] mobile:w-[90vw] mobile:rounded-[3vh]'>
        <div className='absolute top-[5%] left-[5%] text-zinc-800 opacity-90 text-[1vw] mobile:text-[2vh]'>
          <p>{ind}</p>
        </div>
        <div className='w-[70%] h-[70%] absolute top-[-12%] right-[5%] mobile:top-[10%] mobile:left-[15%]'>
          <Image src={src} alt='cardimage' width={500} height={500} loading="lazy"/>
        </div>
        <div className='absolute top-[70%] pe-[2vw] mobile:top-[80%]'>
            <p className='text-zinc-950 font-Instrument text-[2.5vw] leading-[1.1] mobile:text-[2.6vh]'>
             {content}
            </p>
        </div>
      </div>
    </>
  )
}

export default Cards
