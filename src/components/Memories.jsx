import React from 'react'
import './memories.css'
import { MdArrowOutward } from "react-icons/md";

const Memories = () => {
  return (
    <div className='memoeri-main1'>
        <div className='memoeri-main2'>
            <div className='memoeri-heading1'>
                <h1>To know more, let,s connect and create MELIORA MEMORIES together!</h1>
            </div>
            <div className='memoeri-heading2'>
                <h1>Want to BEE a part of the
                    <br/>Hive?</h1>
            </div>
            <div className='memoeri-heading3'>
            <button className='banner-btn2'>Explore Us <span><MdArrowOutward /></span></button>
            </div>
        </div>
    </div>
  )
}

export default Memories