import React, {useState, useEffect, useRef} from "react"
import {motion} from "framer-motion"
import {ArrowCircleUpIcon} from "@heroicons/react/solid"
import "./chat.css"
import squidward from '../../assets/squidward.jpg'

localStorage.setItem("messages", JSON.stringify(
    [
        {text: 'hi how are you', person: 'brandini101'},
    ]
))

const Chat = () => {

    var currMessages = JSON.parse(localStorage.getItem('messages'))

    const [message, setMessage] = useState('')

    const sendMessage = (e) => {
        e.preventDefault()
        if(message !== "") {
            var currUserMessages = JSON.parse(localStorage.getItem("messages"));
            currUserMessages.push({text: message, person: currMessages.length % 2 !== 0 ? "farbs03" : "brandini101"})
            setMessage("")
            localStorage.setItem("messages", JSON.stringify(currUserMessages))
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
        <div className='max-w-md w-full mx-auto rounded-lg drop-shadow-xl bg-white'>
            <div className='p-2 border-b border-b-gray-200 flex-col justify-center'>
                <div className='flex'>
                    {/* don't feel like making this work :(
                    <span class="flex h-3 w-3 flex-grow-0">
                        <span class="animate-ping inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                    </span>
                    */}
                    
                    <img src={squidward} className='w-10 h-10 rounded-full mx-auto border-2 border-green-500 shadow-md' />
                </div>
                <p className='font-semibold text-center text-xs'>brandini101</p>
            </div>
            <div ref={messageEl} className='h-96 overflow-y-auto'>
                <div className='space-y-2 grid grid-cols-1 p-4'>
                    {currMessages && currMessages.map((message, idx) => (
                        <div
                            className={
                                classNames(
                                    message.person === "farbs03" ? 
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
                                        message.person === "farbs03" ? 
                                        "bg-emerald-500 text-white rounded-br-none" 
                                        : 
                                        "bg-gray-200 text-black rounded-tl-none",

                                        'rounded-2xl px-4 py-2'
                                    )
                                    
                                }
                            >
                                {message.text}
                            </motion.div>
                        </div>
                    ))}
                </div>
                
            </div>
            
            {/* area for textfield for message */}
            <div className="border-t border-t-gray-200 p-2">
                <form onSubmit={sendMessage} className='flex items-center'>
                    <input 
                        type='text' 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder='Send a message'
                        className='p-2 focus:ring-0 w-full border-transparent focus:border-transparent bg-white'
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
export default Chat