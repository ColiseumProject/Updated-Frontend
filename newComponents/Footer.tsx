import logo from '../public/logs.png'

function Footer(){
    return(
        <section className="bg-[#141315] h-fit w-screen flex flex-col items-center justify-start">
            <img src={logo.src} className=' aspect-square w-20 md:w-36 my-10 md:my-16' alt="" />
            <div className='flex flex-row items-center justify-center gap-4 md:gap-10 px-6 flex-wrap w-full mb-6 md:mb-10'>
                <h5 className='text-white montreal text-2xl md:text-2xl'>Trade</h5>
                <h5 className='text-white montreal text-2xl md:text-2xl'>Stake</h5>
                <h5 className='text-white montreal text-2xl md:text-2xl'>About</h5>
                <h5 className='text-white montreal text-2xl md:text-2xl'>Contact Us</h5>
                <h5 className='text-white montreal text-2xl md:text-2xl'>Profile</h5>
                
            </div>
            
            
        </section>
    )
}

export default Footer;