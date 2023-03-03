import React from 'react'

interface Props {

}

const HowItWorks: React.FC<Props> = (props) => {
  return (
    <>
    <div className="HOW_IT_WORKS bg-indigo-50 w-full h-60 flex justify-center items-center">
            <div className="HOW_IT_WORKS_CONTAINER flex flex-col w-89%">
                <h1 className = "HOW_IT_WORKS_TITLE font-bold text-lg text-indigo-600">How It Works</h1>
                <hr className = "border-b-1 border-indigo-200"/>
                <p className = "text-sm text-gray-500 mt-3">Tailwind is designed for rapid development of modern applications. At its core, it is a robust mobile-first 
                    design system built with developer experience in mind. After using Tailwind CSS, you will find it difficult
                    to go back to use anything else. Learn all about it in this all-inclusive course.
                </p>
            </div>
        </div>
    </>
  )
}

export default HowItWorks