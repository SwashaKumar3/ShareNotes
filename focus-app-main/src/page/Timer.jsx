import React, { useState, useEffect, useRef } from 'react';
import Card from '../components/elements/Card';
import Text from '../components/elements/Text';
import Button from '../components/elements/Button';
import {NavLink} from 'react-router-dom';


const Timer = () => {
  

  return (
    <div>
       <section className="flex justify-center items-center text-center">
                           <div className="text-white pt-10 pb-20">
                                <Text className="font-bold text-2xl">
                                    Click your current Year ⬇️
                                </Text>
</div>
                                </section>

    <section className="text-white pt-10 pb-20">        

        <section className="grid grid-cols-2 gap-4">
            <Card className="text-center pb-16">
                <Text className="font-semibold text-xl">
                   I Year 
                </Text>

                <Text className="text-sm pt-2">
                    The very first year is where we get to know each other and take a leap from school to college being very curious about future.
                </Text>

                <div className="flex justify-center items-center mt-8">
                    <div className="py-2 px-4 rounded-md border-b border-x-0 border-x-white border-t-0 border-t-white border-white ">
                        <div className='px-4 flex space-x-4 rounded-md'>
                            <div className='flex flex-col'>
                              <NavLink 
                    to="/stopwatch"
                    className={({isActive}) => 
                        isActive? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
                        : 
                        "mr-2 text-sm py-3 "
                    }    
                >                    
                    
                              <img  src='https://humancapitalonline.com/uploads/1571910326.jpg'
                              width="500" height="600"  />
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
                   II YEAR
                </Text>

                <Text className="text-sm pt-2">
                   Now you understand the seriounsess of Engineering and takeup your Exams and Subjects sincerely.
                </Text>

                <div className="flex justify-center items-center mt-8">
                    <div className="py-2 px-4 rounded-md border-b border-x-0 border-x-white border-t-0 border-t-white border-white ">
                        <div className='px-4 flex space-x-4 rounded-md'>
                            <div className='flex flex-col'>
                               <NavLink 
                    to="/stopwatch"
                    className={({isActive}) => 
                        isActive? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
                        : 
                        "mr-2 text-sm py-3 "
                    }    
                >                    
                              <img src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZSUyMHN0dWRlbnRzfGVufDB8fDB8fA%3D%3D&w=1000&q=80' />
                              <p>Click here !</p>                </NavLink> 
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
                   III Year 
                </Text>

                <Text className="text-sm pt-2">
    
                    This is the phase where you start preparing for your interviews and kickstart your Placement prep jourmey.
                    </Text>

                <div className="flex justify-center items-center mt-8">
                    <div className="py-2 px-4 rounded-md border-b border-x-0 border-x-white border-t-0 border-t-white border-white ">
                        <div className='px-4 flex space-x-4 rounded-md'>
                            <div className='flex flex-col'>
                             <NavLink 
                    to="/stopwatch"
                    className={({isActive}) => 
                        isActive? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
                        : 
                        "mr-2 text-sm py-3 "
                    }    
                >         
                              <img src='https://media.gettyimages.com/id/182059956/photo/large-group-of-students-writing-in-notebooks.jpg?s=612x612&w=gi&k=20&c=q1GO5rc3UPifdpl_wjsNeesVvPDMOp68sH_7SUiN58I=' />
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
                    IV YEAR
                </Text>

                <Text className="text-sm pt-2">
                    Now, this is where you start missing your college and Get into the Actual  World solving Realtime Challenges.
                </Text>

                <div className="flex justify-center items-center mt-8">
                    <div className="py-2 px-4 rounded-md border-b border-x-0 border-x-white border-t-0 border-t-white border-white ">
                        <div className='px-4 flex space-x-4 rounded-md'>
                            <div className='flex flex-col'>
                             <NavLink 
                    to="/stopwatch"
                    className={({isActive}) => 
                        isActive? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
                        : 
                        "mr-2 text-sm py-3 "
                    }    
                >         
                              <img  src='https://qph.cf2.quoracdn.net/main-qimg-addf54b71ec958438b55d3790267d35a-lq' />

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


        </section>
        
    </section>

</div>
  )
}

export default Timer


