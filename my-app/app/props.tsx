type ClockProps = {
    color: string,
    time: string
}

export default function Clock({color, time}: ClockProps){
    return(
        <h1 style={{color: color}}>
            {time}
        </h1>
    )
}
export function Clocknow({time})
const hours = time.h=getHours();


