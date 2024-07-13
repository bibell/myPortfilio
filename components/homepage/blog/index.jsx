// @flow strict
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';
import Image from 'next/image';
import { Typography,Card } from '@mui/material';
import ayla from '../../../../public/image/ayla.jpg';
import sopha from '../../../../public/image/sopha.jpg'
import machine from '../../../../public/image/machine.jpg'
import man from '../../../../public/image/man.jpeg'
import vien from '../../../../public/image/vien.jpg'
import devops from '../../../../public/image/devops.jpeg'

function Blog({ blogs }) {

  return (
    <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Blogs
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
  

      <Card sx={{
   height:'300px'
}}>
   <Typography variant='h6' sx={{
     backgroundColor:'#22083F',
     color:'#fff',
     textAlign:'center'
   }}>Animated React Sign Up Form, In these tutorial we explore how react work</Typography>
      <Typography sx={{
         textAlign:'center',
         backgroundColor:'#E60873',
         width:'330px',
         height:'30px',
         color:'#fff',
         
      }}><a href='https://youtu.be/1NI9aOF-HHc'>watch the video</a></Typography> 
   <Image 
        src={ayla}
        height='50px'
        width='50px'
        alt=""
        className='h-full w-full group-hover:scale-110 transition-all duration-300'
   />
</Card>


<Card sx={{
   height:'300px'
}}>
   <Typography variant='h6' sx={{
     backgroundColor:'#22083F',
     color:'#fff',
     textAlign:'center'
   }}>The deep difference between AI, machine learning and deep learning</Typography>
      <Typography sx={{
         textAlign:'center',
         backgroundColor:'#E60873',
         width:'330px',
         height:'30px',
         color:'#fff',
         
      }}><a href='https://youtu.be/t_JMU9oGCmw'>watch the video</a></Typography> 
   <Image 
        src={sopha}
        height='50px'
        width='50px'
        alt=""
        className='h-full w-full group-hover:scale-110 transition-all duration-300'
   />
</Card>


<Card sx={{
   height:'300px'
}}>
   <Typography variant='h6' sx={{
     backgroundColor:'#22083F',
     color:'#fff',
     textAlign:'center'
   }}>Natural langauge processing, object detection, facial recognition, optical character recognition(OCR)......</Typography>
      <Typography sx={{
         textAlign:'center',
         backgroundColor:'#E60873',
         width:'330px',
         height:'30px',
         color:'#fff',
         
      }}><a href='https://youtu.be/lilSV5ypWpo'>watch the video</a></Typography> 
   <Image 
        src={man}
        height='50px'
        width='50px'
        alt=""
        className='h-full w-full group-hover:scale-110 transition-all duration-300'
   />
</Card>



<Card sx={{
   height:'300px'
}}>
   <Typography variant='h6' sx={{
     backgroundColor:'#22083F',
     color:'#fff',
     textAlign:'center'
   }}>In full stack Application Journey your frontend application must connect with backend application,
   </Typography>
      <Typography sx={{
         textAlign:'center',
         backgroundColor:'#E60873',
         width:'330px',
         height:'30px',
         color:'#fff',
         
      }}><a href='https://youtu.be/vVkoqQMayds'>watch the video</a></Typography> 
   <Image 
        src={vien}
        height='50px'
        width='50px'
        alt=""
        className='h-full w-full group-hover:scale-110 transition-all duration-300'
   />
</Card>



<Card sx={{
   height:'300px'
}}>
   <Typography variant='h6' sx={{
     backgroundColor:'#22083F',
     color:'#fff',
     textAlign:'center'
   }}>This one is complete full stack tutorial in MERN(Mongoose, Express, React, NodeJs)</Typography>
      <Typography sx={{
         textAlign:'center',
         backgroundColor:'#E60873',
         width:'330px',
         height:'30px',
         color:'#fff',
         
      }}><a href='https://youtu.be/w5YFrkI2hhA'>watch the video</a></Typography> 
   <Image 
        src={devops}
        height='50px'
        width='50px'
        alt=""
        className='h-full w-full group-hover:scale-110 transition-all duration-300'
   />
</Card>


<Card sx={{
   height:'300px'
}}>
   <Typography variant='h6' sx={{
     backgroundColor:'#22083F',
     color:'#fff',
     textAlign:'center'
   }}>The deep difference between AI, machine learning and deep learning</Typography>
      <Typography sx={{
         textAlign:'center',
         backgroundColor:'#E60873',
         width:'330px',
         height:'30px',
         color:'#fff',
         
      }}><a href='https://youtu.be/t_JMU9oGCmw'>watch the video</a></Typography> 
   <Image 
        src={machine}
        height='50px'
        width='50px'
        alt=""
        className='h-full w-full group-hover:scale-110 transition-all duration-300'
   />
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
    </div>
  );
};

export default Blog;