import React, {useState, useEffect, useRef} from "react"
import {motion} from 'framer-motion'
import {ArrowCircleUpIcon} from "@heroicons/react/solid"
import "./chat.css"
import {fakeUser} from "../../fakeUser"
import squidward from "../../assets/squidward.jpg"

const OnlineStatus = () => {
    return (
        <div class="flex h-4 w-4 absolute -bottom-3 -right-2">
            <span class="animate-ping absolute h-2 w-2 -top-1 -left-1 rounded-full bg-green-500 opacity-75" />
            <span class="relative rounded-full h-2 w-2 -top-1 -left-1 bg-green-500" />
        </div>
    )
}

const ChatInterface = ({friendName}) => {

    let currMessages = fakeUser.chats[friendName]
    console.log(currMessages)

    const [message, setMessage] = useState('')

    const sendMessage = (e) => {
        e.preventDefault()
        if(message !== "") {
            setMessage("")
        }
    }

    const messageEl = useRef(null);

    useEffect(() => {
        if (messageEl) {
        messageEl.current.addEventListener('DOMNodeInserted', event => {
            const { currentTarget: target } = event;
            target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
        });
        }
    }, [])

    const handleKeypress = (e) => {
        //it triggers by pressing the enter key
      if (e.keyCode === 13) {
        sendMessage();
        console.log('sent')
      }
    };

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className='flex-grow bg-white dark:bg-gray-800 rounded-2xl'>
            <div className='p-4 border-b border-b-gray-200 dark:border-b-gray-700'>
                
                <div className="flex items-center gap-4 w-fit mr-auto">

                    <div className='w-10 h-10 mx-auto relative'>
                        <OnlineStatus />
                        <img src={squidward} className='w-10 h-10 rounded-full shadow-md' />
                    </div>

                    <p className='font-semibold'>{friendName}</p>
                </div>
                
            </div>
            <div ref={messageEl} className='h-96 overflow-y-auto'>
                <div className='space-y-4 grid grid-cols-1 p-4'>
                    {currMessages.map((message, idx) => (
                        <div
                            className={
                                classNames(
                                    message.from === "you" ? 
                                    "place-self-end text-right" 
                                    : 
                                    "place-self-start text-left",
                                )
                                
                            }
                        >
                            <motion.div 
                                initial={{opacity: 0, y: 5}} 
                                animate={{opacity: 1, y: 0}} 
                                transition={{duration: 0.2}} 
                                className={
                                    classNames(
                                        message.from === "you" ? 
                                        "bg-emerald-500 text-white rounded-br-none" 
                                        : 
                                        "bg-gray-200 dark:bg-gray-600 text-black dark:text-gray-100 rounded-tl-none",

                                        'rounded-2xl px-4 py-2'
                                    )
                                    
                                }
                            >
                                {message.message}
                            </motion.div>
                        </div>
                    ))}
                </div>
                
            </div>
            
            {/* area for textfield for message */}
            <div className="border-t border-t-gray-200 dark:border-t-gray-700 p-2">
                <form onSubmit={sendMessage} className='flex items-center'>
                    <input 
                        type='text' 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder='Send a message'
                        className='p-2 focus:ring-0 w-full border-transparent focus:border-transparent bg-white dark:bg-gray-800'
                        onKeyPress={handleKeypress}
                    />
                    <button className='w-6 h-6' onClick={sendMessage}>
                        <ArrowCircleUpIcon className='w-6 h-6 text-emerald-500 hover:text-emerald-600 transition duration-200 ease-in' />
                    </button>
                </form>
            </div>
            
            
        </div>
    )
}
export default ChatInterface