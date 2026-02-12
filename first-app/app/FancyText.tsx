export default function FancyText({title,text}){
    return title 
    ? <h1 className="fancy title text-4xl text-blue-800 underline">
        {text}
    </h1>
    : <h3 className="fancy cursive italic font-bold text-2xl">{text}</h3>
}


  
