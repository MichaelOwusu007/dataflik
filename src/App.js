
import { FaGithub } from 'react-icons/fa';

function App() {
  return (
    <div className="">
     <div className=' relative scroll-smooth select-none'>
      <header className='mx-auto  lg:px-10 flex justify-between z-10 px-4 h-[5rem] items-center top-0 '>
        <a href='/'>
        <h2 className='font-bold text-lg sm:text-xl md:text-2xl tracking-wider '>JustAnotherUIKit</h2>
        </a>
        <div className="flex items-center  gap-8 sm:gap-10 ">
                        <nav className="flex gap-x-8 text-[18px] font-semibold ">
                            <div className="navlink">
                                <a href="/"><p className="py-2 lg:opacity-25  ">Home</p></a>
                            </div>
                            <div className="link hidden md:flex">
                                <p className="py-2">
                                    <a href="/#About">About</a>
                                </p>
                            </div>
                            <div className="link hidden md:flex">
                                <p className="py-2">
                                    <a href="/#contact">Contact</a>
                                </p>
                            </div>
                            <div className="link hidden md:flex">
                                <p className="py-2">
                                    <a href="/">Blog</a>
                                </p>
                            </div>
                    </nav>
            </div>
      </header>
      <section className=' max-w-7xl   mx-auto my-[25vh] '>
        <section className='overflow-hidden lg-h-[100vh] flex flex-col justify-center items-center '>
          <p className='font-bold text-2xl sm:text-4xl md:text-5xl lg:text-7xl'>
          It doesn't matter what <span className='text-yellow-500'> JS </span> 
          <br/> <span className='text-yellow-500'>Framework</span> you work with  
          </p>      
          <p className='text-xl md:text-3xl my-5'>Our boilerplates works with it <span className='text-blue-300'> out-of- the-box</span> </p>
          <div className="flex gap-4  text-[16px] md:text-xl">
                            <a className=" py-2 px-3 font-bold bg-yellow-300 text-black " href="/">Get started &rarr;</a>
                            <a href="/" className=" border border-yellow-300 font-bold text-yellow-300  py-[10px] px-6 flex justify-center items-center gap-2" >See repo <FaGithub /> </a>
                    </div>
          </section>
      </section>
      <section className='max-w-7xl px-6 lg:px-4 mx-auto'>
      <section className=" w-full mb-20 py-10 snap-y scroll-mt-[7.5rem] ">
                        <h2 className="px-2 mb-3 font-semibold text-xl md:text-2xl flex justify-center items-center">Supported and backed by:</h2>
                        <section className="grid grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4  gap-10 text-xl mt-10">
                            <div className="px-2 py-2 flex items-center w-[160px]  justify-center text-black bg-slate-300 font-semibold">
                                <p className="px-2">lorem</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center w-[170px] text-black justify-center bg-slate-300 font-semibold ">
                                <p className="px-2">lorem</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center w-[170px] text-black justify-center bg-slate-300 sm:font-semibold">
                                <p className="px-2">lorem</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center w-[170px] text-black justify-center bg-slate-300 sm:font-semibold">
                                <p className="px-2">lorem</p>
                                <i></i>
                            </div>
                         
                            <div className="px-2 py-2 flex items-center w-[170px] text-black justify-center bg-slate-300 sm:font-semibold">
                                <p className="px-2">lorem</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center w-[170px] text-black justify-center bg-slate-300 sm:font-semibold">
                                <p className="px-2">lorem</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center w-[170px] text-black justify-center bg-slate-300 sm:font-semibold">
                                <p className="px-2">lorem</p>
                                <i></i>
                            </div>
                            <div className="px-2 py-2 flex items-center sm:font-semibold w-[170px] text-black justify-center bg-slate-300">
                        <p className="px-2">lorem</p>
                    <i></i>
                 </div>        
            </section>
        </section>
        <section id="About" className=" w-full mb-20 py-10 snap-y scroll-mt-[6rem] ">
                        <h2 className="title relative w-max px-2 mb-3 font-semibold text-4xl ">About</h2>
                        <p className="align-justify text-[18px] leading-[1.8em]  md:leading-[2em] md:text-xl ">
                            I have a strong passion for technology and thrive on constantly learning new things. Every day, I make it a point to document my progress by creating and building new projects. My expertise lies in crafting visually appealing and user-friendly websites and web applications. I take pride in translating visions into web realities, paying attention to every pixel.
                            <br />
                            <br />
                            As a frontend developer, I am dedicated to creating seamless and intuitive user experiences. Design is not just a task for me; it's a form of problem-solving that I enjoy immensely. I believe in simplicity but strive for perfection in every project I undertake. My journey in the tech industry is driven by a love for building innovative solutions and solving problems.
                            <br />
                            <br />
                            Beyond coding, I find inspiration in music and in playing basketball. These are not just hobbies for me; they contribute to my creative thinking and problem-solving skills. The decision to join the tech industry was fueled by my passion for building new things and the joy I find in overcoming challenges. In essence, simplicity, perfection, and a love for problem-solving define my approach to both technology and life.
                        </p>
                    </section>
                    <section className='max-w-7xl px-6 lg:px-4 mx-auto'>
                    <h2 className="title relative w-max px-2 mb-3 font-semibold text-4xl ">Contact</h2>
                    <h2 className="px-2 pt-8 font-semibold text-xl md:text-2xl flex justify-center items-center">Fill out this form to reach us:</h2>
                    <div id='contact' className=' flex justify-center items-center flex-col p-1'>
                        <div className='flex justify-center items-center p-10 flex-col'>
                        <form className='text-xl min-w-[600] p-4 space-y-4 '>
                            <div className='flex justify-center items-center md:flex-row gap-3 flex-col'>
                                <div className=''> 
                                    <input placeholder='First Name' className='p-3 w-full px-4 rounded-sm focus:outline bg-slate-300 text-black '>
                                    </input>
                                </div>
                                <div className=''>
                                    
                                    <input placeholder='First Name' className='p-3 w-full px-4 rounded-sm focus:outline bg-slate-300 text-black '>
                                    </input>
                                </div>
                            </div>
                            <div className=''>
                                   
                                    <input type='text' name='email' placeholder='Email' className='p-3 w-full px-4 rounded-sm focus:outline bg-slate-300 text-black '>
                                    </input>
                                </div>
                                <div className=''>
                                    <input type='text' name='phone' placeholder='Phone(optional)' className='p-3 w-full px-4 rounded-sm focus:outline bg-slate-300 text-black '>
                                    </input>
                                </div>
                                <div className=''>
                                    <textarea placeholder='Message' cols="10" rows="6" className='p-3 text-black w-full px-4 rounded-sm focus:outline bg-slate-300 ' >
                                    </textarea>

                                </div>
                        </form>
                        </div>
                        
                    </div>
                    </section>

                    <footer className=' py-32 lg:px-10 text-[18px] md:text-xl '>
                        <section className=' mx-auto grid h-full min-h-[200px] justify-between gap-6 px-4 grid-cols-2 md:grid-cols-3 md:px-10 lg:grid-cols-4 '>
                           <section className='flex flex-col lg:items-center'>
                            <div className='lg
                            max-auto lg:w-[px] '>
                            <h3 className='text-2xl font-medium tracking-wider'>
                                lorem
                            </h3>
                            <div className='mt-4 flex flex-col gap-3 '>
                                <a href='/'className='opacity-40'>lorem</a>
                                <a href='/'className='opacity-40'>lorem</a>
                                <a href='/'className='opacity-40'>lorem</a>
                                <a href='/'className='opacity-40'>lorem</a>
                                <a href='/'className='opacity-40'>lorem</a>
                                <a href='/'className='opacity-40'>lorem</a>
                            </div>
                            </div>
                            </section> 
                            <section className='flex flex-col lg:items-center'>
                            <div className='lg
                            max-auto lg:w-[px] '>
                            <h3 className='text-2xl font-medium tracking-wider'>
                                lorem
                            </h3>
                            <div className='mt-4 flex flex-col gap-3 '>
                                <a href='/'className='opacity-40'>lorem</a>
                                <a href='/'className='opacity-40'>lorem</a>
                                <a href='/'className='opacity-40'>lorem</a>
                                <h3 className='text-2xl font-medium tracking-wider'>
                                lorem
                            </h3>
                                <a href='/'className='opacity-40'>lorem</a>
                                <a href='/'className='opacity-40'>lorem</a>
                                <a href='/'className='opacity-40'>lorem</a>
                            </div>
                            </div>
                            </section> 
                            <section className='flex flex-col lg:items-center'>
                            <div className='lg
                            max-auto lg:w-[px] '>
                            <h3 className='text-2xl font-medium tracking-wider'>
                                lorem
                            </h3>
                            <div className='mt-4 flex flex-col gap-3 '>
                                <a href='/'className='opacity-40'>lorem</a>
                                <a href='/'className='opacity-40'>lorem</a>
                                <a href='/'className='opacity-40'>lorem</a>
                                <a href='/'className='opacity-40'>lorem</a>
                                <a href='/'className='opacity-40'>lorem</a>
                                <a href='/' className='opacity-40'>lorem</a>
                            </div>
                            </div>
                            </section> 
                            <section className='flex flex-col lg:items-center'>
                            <div className='lg
                            max-auto lg:w-[px] '>
                            <h3 className='text-2xl font-medium tracking-wider'>
                                lorem
                            </h3>
                            <div className='mt-4 flex flex-col gap-3 '>
                                <a href='/' className='opacity-40'>lorem</a>
                                <a href='/' className='opacity-40'>lorem</a>
                                <a href='/' className='opacity-40'>lorem</a>
                                <h3 className='text-2xl font-medium tracking-wider'>
                                lorem
                            </h3>
                                <a href='/' className='opacity-40'>lorem</a>
                                <a href='/' className='opacity-40'>lorem</a>
                                <a href='/' className='opacity-40'>lorem</a>
                            </div>
                            </div>
                            </section> 
                        </section>
                </footer>
                <p className='text-center pb-10 text-xl'>&copy;2024</p>
        </section>
     </div>
    </div>
  );
}

export default App;
