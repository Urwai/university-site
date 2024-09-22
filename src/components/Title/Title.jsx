import React from "react";

const Title = ({subtitle , title})=>{
    return <div>
        <h2 className="text-indigo-900 text-center font-bold mt-14 text-lg">{subtitle}</h2>
        <h1 className="text-center font-bold text-3xl mb-14">{title}</h1>
    </div>
}

export default Title;