import React from 'react'
import Button from './Button'
const list =["All","Javascript", "Kapil Sharma", "Music", "Live", "Computer Programming", "Mixes", "Thoughts", "Cricket", "Cooking", "Basketball", "Songs", "Thoughts", "Cricket", "Cooking", "Basketball", "Songs"]
const ButtonList = () => {
  return (
    <div className="flex">
    

    {list.map((ele)=>(
        <Button name={ele}></Button>

    ))}

    

    </div>
  )
}

export default ButtonList
