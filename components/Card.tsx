import React, {useState} from 'react'

interface Props {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<Props> = (props) => {
  return (
    <>
      <div className="CARD gap-2 flex flex-col justify-center items-center bg-white h-[15rem] w-full rounded-lg border-b-4 border-pink-400">
          <div className="CSSLOGO flex justify-center items-center h-16 w-16 rounded-full bg-indigo-100">
              <img src = {`${props.image}` }alt="Css Logo" className = "w-3/4 h-3/4"/>
          </div>
          <h1 className = "text-gray-900 font-bold text-lg">{props.title}</h1>

          <div className="PARAGRAPH_WRAPPER w-5/6">
            <p className = "text-center text-sm text-gray-500"> {props.description} </p>
          </div>
      </div>
    </>
  )
}

export default Card