// @flow strict
import { timeConverter } from '@/utils/time-converter';
//import Image from 'next/image';
// @flow strict
//import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';
import Image from 'next/image';
//import { Typography,Card } from '@mui/material';
import ayla from '../../../../public/image/ayla.jpg';
import sopha from '../../../../public/image/sopha.jpg'
import machine from '../../../../public/image/machine.jpg'
import man from '../../../../public/image/man.jpeg'
import vien from '../../../../public/image/vien.jpg'
import devops from '../../../../public/image/devops.jpeg'
//import { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, CircularProgress,Card } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function BlogCard() {
  //const [isLoading, setIsLoading] = useState(false);
 /*******  
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
    >
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={blog?.cover_image}
          height={1080}
          width={1920}
          alt=""
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{timeConverter(blog.published_at)}</p>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <BsHeartFill />
              <span>{blog.public_reactions_count}</span>
            </p>
            {blog.comments_count > 0 &&
              <p className="flex items-center gap-1">
                <FaCommentAlt />
                <span>{blog.comments_count}</span>
              </p>
            }
          </div>
        </div>
        <Link target='_blank' href={blog.url}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
            {blog.title}
          </p>
        </Link>
        <p className='mb-2 text-sm text-[#16f2b3]'>
          {`${blog.reading_time_minutes} Min Read`}
        </p>
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
          {blog.description}
        </p>
        }
      </div>
    </div>
  );
**********************************/

return(<div>
    <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
          
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
     <Card sx={{
      width:'300px',
      height:'300px',
      cursor:'pointer'
     }}
     >   
       <Typography variant='h6' sx={{
            backgroundColor:'#22083F',
            color:'#fff',
            textAlign:'center',
            height:'100px'
       }}><CircularProgress size={34} 
       sx={{
         color: '#fff',
         textAlign:'center',
         marginLeft:'20px',
         marginTop:'10px'                                 
        }} /></Typography>
       <Typography sx={{
             textAlign:'center',
             backgroundColor:'#E60873',
             width:'330px',
             height:'30px',
             color:'#fff',
       }}>
       <a href="https://youtu.be/1NI9aOF-HHc">watch the vidoes</a>
       </Typography>
       <CircularProgress size={44} 
       sx={{
         color: 'black',
         textAlign:'center',
         marginLeft:'120px',
         marginTop:'40px'                                 
        }} />
     
  
       <Typography variant='h6' sx={{
        marginTop:'-50px',
        color:'blue'
       }}></Typography>  
      </Card>










      </div>

      <div className="flex justify-center  mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          href="https://www.youtube.com/@hopetech7568"
        >
          <span>Watch More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
</div>)
};

export default BlogCard;