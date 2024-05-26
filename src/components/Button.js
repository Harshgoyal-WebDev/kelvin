
function Button({className,content}) {
  return (
    <>
          <button className={` group  text-[1vw]  py-4   rounded-full flex justify-center items-center ${className} border-2 buttonhover`}>
            <div className='h-[2vw] overflow-hidden flex flex-col gap-[0.2vw] mobile:h-[3vh]'>
            
            <span data-text={content} className={` h-fit w-fit mobile:text-[2vh]`}>
              {content}
            </span>
            <span data-text={content} className={` h-fit w-fit mobile:text-[2vh]`}>
              {content}
            </span> 
            </div>
          </button>      
    </>
  )
}

export default Button
