import React from 'react'

const Footer: React.FC = () => {
  return (
    <>
    <div className="FOOTER h-[30rem] w-full bg-slate-700 flex flex-col items-center justify-center">
        <div className="FOOTER_FLEX_WRAPPER h-full w-89% flex flex-col gap-4 items-center justify-center">
        <h1 className="FOOTER_TITLE text-gray-300 font-bold text-xl">Sign up to download the free PDF</h1>

        <div className="FORM_WRAPPER flex flex-col w-full items-center justify-center mt-6">
            <form className = "w-full h-full flex flex-col items-center justify-center gap-4">
                <input placeholder ="First Name" type="text" className = "pl-4 w-full h-10 bg-slate-600 rounded-md border border-gray-500"/>
                <input placeholder ="Last Name" type="text" className = "pl-4 w-full h-10 bg-slate-600 rounded-md border border-gray-500"/>
                <input placeholder ="john@email.com" type="text" className = "pl-4 w-full h-10 bg-slate-600 rounded-md border border-gray-500"/>
                <input placeholder ="Your title" type="text" className = "pl-4 w-full h-10 bg-slate-600 rounded-md border border-gray-500"/>
                <button type = "submit" className = "h-10 w-full bg-blue-500 rounded-lg text-white">Create Account</button>
                <p className = "text-gray-400 mt-6"> Copyright @ 2023 Edu</p>
            </form>
        </div>

        </div>
    </div>
    </>
  )
}

export default Footer