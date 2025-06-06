import React, { useState, useEffect, useRef } from 'react';
import Card from '../components/elements/Card';
import Text from '../components/elements/Text';
import Button from '../components/elements/Button';
import Time from '../components/widgets/Time';
import Settings from '../components/widgets/Settings';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase'; 
import {NavLink} from 'react-router-dom';

const Home = () => {
    const [ openTaskInput, setOpenTaskInput ] = useState(false);
    const [open, setOpen] = useState(false);
    const [workMin, setWorkMin] = useState(45);
    const [breakMin, setBreakMin] = useState(15);
    const inputRef = useRef(null);
    const [remainingTime, setRemainingTime] = useState({
        seconds: '00',
        minutes: '00',
        hours: '00',
        days: '00'
    })

    const handleTaskButton = () => {
        setOpenTaskInput(true);
        inputRef.current.focus();
    }

    const handleSettings = () => {
        setOpen(true);
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });

        const intervalID = setInterval(()=>{
            // console.log("yes")
        }, 1000)  

        return () => clearInterval(intervalID);
    }, [])

  return (
    <section className="text-white pt-10 pb-20">        

        <section className="grid grid-cols-2 gap-4">
            <Card className="text-center pb-16">
                <Text className="font-semibold text-xl">
                    Ready, set, focus!
                </Text>

                <Text className="text-xl pt-2">
                    Sharing Docs == 
                    Sharing Knowledge 📚
                </Text>

                <div className="flex justify-center items-center mt-8">
                    <div className="py-2 px-4 rounded-md border-b border-x-0 border-x-white border-t-0 border-t-white border-white ">
                        <div className='px-4 flex space-x-4 rounded-md'>
                            <div className='flex flex-col'>
                                <span className="text-4xl font-semibold">
                                    Hey Guys 
                                </span>
                                <span className="text-l pt-5">
                                    Here in this SPA, you get to choose your current year and department. 
                                    Post that you can view the documents for free. 
                                    There are both free and paid versions. 
                                    Have fun sharing knowledge 
                                </span>
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

   <NavLink 
                    to="/timer"
                    className={({isActive}) => 
                        isActive? "bg-secondary w-full block border-l-2 border-l-tertiary mr-2 py-3  text-sm"
                        : 
                        "mr-2 text-sm py-3 pl-4"
                    }     
                >
                <Text className="text-sm mt-6">
                  Click here to proceed
                </Text>


             <img src="https://www.globsyn.edu.in/wp-content/uploads/2022/03/Knowledge-Sharing-as-the-Key-to-Success.png"/>
             </NavLink>


              <Text className="text-sm mt-6">
              <ul>
                 <li>Choose the File   </li>
                 <li>Click on Upload File Button </li>
                 <li>Download using Free download option </li>
                 </ul>
                </Text>
 
            </Card>

            <Card className="py-4">
                <div>
                    <p>
                        {remainingTime.days} days
                    </p>
                    <p>
                        {remainingTime.hours} hours
                    </p>
                    <p>
                        {remainingTime.minutes} minutes
                    </p>
                    <p>
                        {remainingTime.seconds} seconds
                    </p>
                </div>

                <div>
                    <div className="flex justify-between">
                        <Text className="text-sm font-semibold">
                            Daily progress
                        </Text>

                        <Button 
                            onClick={handleSettings} 
                            className="py-1 px-6"
                        >
                            Settings
                        </Button>
                    </div>

                    {open? <Settings 
                            setOpen={setOpen} 
                            workMin={workMin}
                            breakMin={breakMin}
                            setWorkMin={setWorkMin}
                            setBreakMin={setBreakMin}
                        /> 
                        : 
                        <Time
                            workMin={workMin}
                            breakMin={breakMin}
                            setWorkMin={setWorkMin}
                            setBreakMin={setBreakMin}
                        />
                    }

                </div>
            </Card>

            <Card className="py-4 col-span-2">
                <div className="flex justify-between">
                    <Text className="text-lg font-semibold mb-10">
                        Tasks
                    </Text>

                    <div 
                        className="text-2xl cursor-pointer"
                        onClick={handleTaskButton}    
                    >
                        +
                    </div>
                </div>
                {
                    !openTaskInput?
                    (
                        <section className="flex justify-center items-center text-center">
                            <div>
                                <Text className="font-bold text-2xl">
                                    Stay focused
                                </Text>

                                <Text className="pt-2 pb-6 text-sm">
                                    Add tasks and assign them to your focus sessions
                                </Text>

                                <button 
                                    className="rounded-lg py-2 px-8 text-white bg-secondary"
                                    onClick={handleTaskButton}
                                >
                                    + Add a task
                                </button>
                            </div>
                        </section>
                    )
                    :
                    (
                        <section className="">                            
                            <Text className="text-sm pt-1 mb-6">
                                Select a task for your session
                            </Text>

                            <form>
                                <input 
                                    type="text"
                                    placeholder="Add a task"
                                    className="w-full py-2 pl-4 rounded 
                                    focus:outline-none bg-sidebar focus:border-b-2 
                                    focus:border-b-tertiary "
                                    ref={inputRef}
                                />
                            </form>
                        </section>
                    )
                }
             
            </Card>
        </section>
        
    </section>
  )
}

export default Home


