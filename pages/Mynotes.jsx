import React from 'react';
import Image from 'next/image';
import { RiCloseCircleFill, RiEditCircleFill, RiEditBoxFill, RiImageEditFill, RiImageEditLine } from 'react-icons/ri';
import { FaEdit, FaRegEdit } from 'react-icons/fa';

const Mynotes = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <span className='text-xl flex flex-wrap'>
        <div className='m-4'>
          <textarea type='text' rows={6} placeholder='Write...' className='p-4 bg-yellow-200 outline-none hover:scale-105 hover:shadow-xl ease-in duration-200'></textarea>
        </div>
        <div className='m-4'>
          <textarea type='text' rows={6} placeholder='Write...' className='p-4 bg-pink-200 outline-none hover:scale-105 hover:shadow-xl ease-in duration-200'></textarea>
        </div>
        <div className='m-4'>
          <textarea type='text' rows={6} placeholder='Write...' className='p-4 bg-blue-200 outline-none hover:scale-105 hover:shadow-xl ease-in duration-200'></textarea>
        </div>
        <div className='m-4'>
          <textarea type='text' rows={6} placeholder='Write...' className='p-4 bg-green-200 outline-none hover:scale-105 hover:shadow-xl ease-in duration-200'></textarea>
        </div>
      </span>
    </div>
  );
};

export default Mynotes;