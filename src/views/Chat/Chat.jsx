import React, { useState } from 'react'
import ChatInterface from "./ChatInterface"
import Conversations from './Conversations'
import { fakeUser } from '../../fakeUser'

const Chat = () => {

    const [selectedFriend, setSelectedFriend] = useState('brandini101')

    return (
        <div className='flex h-full max-w-5xl w-full mx-auto gap-4'>
            <Conversations friendName={selectedFriend} onChange={setSelectedFriend}  />
            <ChatInterface friendName={selectedFriend} />
        </div>
    )
}

export default Chat