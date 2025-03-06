import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Content() {
  return (
    <div className='bg-[#781618] py-8 px-12 h-full w-full flex flex-col justify-between'>
        <BlackContainer />
        <Section1 />
        
        <Section2 />
    </div>
  );
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    );
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>
            <h1 className='text-[10vw] leading-[0.8] mt-10 text-white'>Sargam<br/>2025</h1>
            <p className="text-white">@CUSAT</p>
        </div>
    );
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-2'>
                {/* <h3 className='mb-2 uppercase text-white'>About</h3> */}
                <p className="text-white">kevin -1231231231</p>
                <p className="text-white">kevin -1231231231</p>
                <p className="text-white">kevin -1231231231</p>
                <p className="text-white">kevin -1231231231</p>
            </div>
            <div className='flex flex-col gap-2'>
                {/* <h3 className='mb-2 uppercase text-white'>Education</h3> */}
                <p className="text-white">kevin -1231231231</p>
                <p className="text-white">kevin -1231231231</p>
                <p className="text-white">kevin -1231231231</p>
                <p className="text-white">kevin -1231231231</p>
            </div>
            {/* <p className="text-white">mail:Cusat@gmail.com</p> */}
        </div>
    );
}

const BlackContainer = () => {
    return (
        <div className='w-full bg-black text-white p-6 rounded-2xl shadow-lg m-4 h-64 flex items-center justify-center'>
            <h2 className='text-4xl md:text-5xl font-bold'>This is a Black Container</h2>
        </div>
    );
}
