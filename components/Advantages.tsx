import React, {useState} from 'react'
import Card from '../components/Card'

const Advantages: React.FC = (props) => {
  return (
    <>
        <div className="ADVANTAGES_CONTAINER w-full bg-indigo-50 h-[54rem] flex flex-col items-center">
            <div className="FLEX_WRAPPER w-89% h-full flex flex-col"> 
                <h1 className="ADVANTAGES_TITLE text-lg font-bold text-indigo-600 mb-1">Advantages</h1>
                <hr className = "border-b-1 border-indigo-200 w-full mb-5"/>

                <div className="CARD_WRAPPER h-full w-full flex flex-col gap-5">
                    <Card
                        title="No Custom CSS"
                        description="Tailwind's advanced class extraction will leave your project free of custom CSS"
                        image="/css-icon.svg"
                    />
                    <Card
                        title="Developer Experience"
                        description="Tailwind's is designed with your happiness in mind. The ease of performing changes if refreshing"
                        image="/developer-icon.svg"
                    />
                    <Card
                        title="Mobile Friendly"
                        description="Modern applications demand mobile-friendly & Tailwind's responsive modifiers make it easy."
                        image="/mobile-icon.svg"
                    />
                </div>
            </div>

        </div>
    </>
  )
}

export default Advantages