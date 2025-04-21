import React, { useState, useEffect, useRef } from 'react';
import Card from '../components/elements/Card';
import Text from '../components/elements/Text';
import Button from '../components/elements/Button';
import {NavLink} from 'react-router-dom';


const Home = () => {
  

  return (
<div>
       <section className="flex justify-center items-center text-center">
                           <div className="text-white pt-10 pb-20">
                                <Text className="font-bold text-2xl">
                                    Click your current Department

                                </Text>
                                <Text className="font-bold text-2xl">
                                  to Upload and download Files⬇️
                                  </Text>
</div>
                                </section>


    <section className="text-white pt-10 pb-20">        

        <section className="grid grid-cols-2 gap-4">
            <Card className="text-center pb-16">
                <Text className="font-semibold text-xl">
                   CSE 
                </Text>

                <Text className="text-sm pt-2">
                    Enter Computer science and Engineering department
                </Text>

                <div className="flex justify-center items-center mt-8">
                    <div className="py-2 px-4 rounded-md border-b border-x-0 border-x-white border-t-0 border-t-white border-white ">
                        <div className='px-4 flex space-x-4 rounded-md'>

      <div className='flex flex-col'>
                              <NavLink 
                    to="/notes"
                    className={({isActive}) => 
                        isActive? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
                        : 
                        "mr-2 text-sm py-3 "
                    }    
                >                    
                    <img src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
                               <p>Click here !</p>
                </NavLink>
                            </div>


                            <div className='flex flex-col justify-between'>
                                <span>
                                </span>
                                <span>
                                </span>
                            </div>
                        </div>                        
                    </div>                    
                </div>
                 
            </Card>
   <Card className="text-center pb-16">
                <Text className="font-semibold text-xl">
                    AI & ML
                </Text>

                <Text className="text-sm pt-2">
                    Enter Artificial Intelligence and Machine Learning Department
                </Text>

                <div className="flex justify-center items-center mt-8">
                    <div className="py-2 px-4 rounded-md border-b border-x-0 border-x-white border-t-0 border-t-white border-white ">
                        <div className='px-4 flex space-x-4 rounded-md'>
                            <div className='flex flex-col'>
                               <div className='flex flex-col'>
                              <NavLink 
                    to="/notes"
                    className={({isActive}) => 
                        isActive? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
                        : 
                        "mr-2 text-sm py-3 "
                    }    
                >                    
<img src='https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_960_720.jpg' />                               <p>Click here !</p>
                </NavLink>
                            </div>
                            </div>
                           
                        </div>                        
                    </div>                    
                </div>
                 
            </Card>


        </section>
        
    </section>


      <section className="text-white pt-10 pb-20">        

        <section className="grid grid-cols-2 gap-4">
            <Card className="text-center pb-16">
                <Text className="font-semibold text-xl">
                   ECE 
                </Text>

                <Text className="text-sm pt-2">
                    Enter Electronics and Communication Engineering department
                </Text>

                <div className="flex justify-center items-center mt-8">
                    <div className="py-2 px-4 rounded-md border-b border-x-0 border-x-white border-t-0 border-t-white border-white ">
                        <div className='px-4 flex space-x-4 rounded-md'>
                           <div className='flex flex-col'>
                              <NavLink 
                    to="/notes"
                    className={({isActive}) => 
                        isActive? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
                        : 
                        "mr-2 text-sm py-3 "
                    }    
                >                    
<img src='https://www.alpineddn.com/img/auto.png' />                           <p>Click here !</p>
                </NavLink>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <span>
                                </span>
                                <span>
                                </span>
                            </div>
                        </div>                        
                    </div>                    
                </div>
                 
            </Card>
   <Card className="text-center pb-16">
                <Text className="font-semibold text-xl">
                    AERONAUTICS
                </Text>

                <Text className="text-sm pt-2">
                    Enter Aeronautical Engineering Department
                </Text>

                <div className="flex justify-center items-center mt-8">
                    <div className="py-2 px-4 rounded-md border-b border-x-0 border-x-white border-t-0 border-t-white border-white ">
                        <div className='px-4 flex space-x-4 rounded-md'>
                          <div className='flex flex-col'>
                              <NavLink 
                    to="/notes"
                    className={({isActive}) => 
                        isActive? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
                        : 
                        "mr-2 text-sm py-3 "
                    }    
                >                    
<img  src='https://prod-discovery.edx-cdn.org/media/course/image/95a3e201-e0dc-4602-99f7-3e061b71d672-9be4eca9b29a.small.jpg' />                       <p>Click here !</p>
                </NavLink>
                            </div>
                            <div className='flex flex-col justify-between'>
                                <span>
                                </span>
                                <span>
                                </span>
                            </div>
                        </div>                        
                    </div>                    
                </div>
                 
            </Card>


        </section>
        
    </section>


      <section className="text-white pt-10 pb-20">        

        <section className="grid grid-cols-2 gap-4">
            <Card className="text-center pb-16">
                <Text className="font-semibold text-xl">
                   MECH 
                </Text>

                <Text className="text-sm pt-2">
                    Enter Mechanical Engineering department
                </Text>

                <div className="flex justify-center items-center mt-8">
                    <div className="py-2 px-4 rounded-md border-b border-x-0 border-x-white border-t-0 border-t-white border-white ">
                        <div className='px-4 flex space-x-4 rounded-md'>
                          <div className='flex flex-col'>
                              <NavLink 
                    to="/notes"
                    className={({isActive}) => 
                        isActive? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
                        : 
                        "mr-2 text-sm py-3 "
                    }    
                >                    
<img  src='https://gps.uml.edu/images/2015/programs/online-mechanical-engineering-technology-bachelor-image.jpg' />                       <p>Click here !</p>
                </NavLink>
                            </div>

                            <div className='flex flex-col justify-between'>
                                <span>
                                </span>
                                <span>
                                </span>
                            </div>
                        </div>                        
                    </div>                    
                </div>
                 
            </Card>
   <Card className="text-center pb-16">
                <Text className="font-semibold text-xl">
                    CIVIL
                </Text>

                <Text className="text-sm pt-2">
                    Enter Civil Engineering Department
                </Text>

                <div className="flex justify-center items-center mt-8">
                    <div className="py-2 px-4 rounded-md border-b border-x-0 border-x-white border-t-0 border-t-white border-white ">
                        <div className='px-4 flex space-x-4 rounded-md'>
                              <div className='flex flex-col'>
                              <NavLink 
                    to="/notes"
                    className={({isActive}) => 
                        isActive? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
                        : 
                        "mr-2 text-sm py-3 "
                    }    
                >                    
<img  src='https://www.iitg.ac.in/civil/pdf/6f2cacd56591821db45e46f723b7dd90.jpg' />               </NavLink>
                            </div>

                            <div className='flex flex-col justify-between'>
                                <span>
                                </span>
                                <span>
                                </span>
                            </div>
                        </div>                        
                    </div>                    
                </div>
                 
            </Card>


        </section>
        
    </section>
</div>

  )
}

export default Home


