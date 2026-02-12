import MyFirstComponent from "./MyFirstComponent"
import Gallery from "./Gallery"
import { Profile } from "./Gallery"
import { ImageTest } from "./Gallery"
import Clock from "./props"
import PackingList from "./PackingList"
import List from "./list"
import Reacipe from "./recipe"
import { Cup } from "./recipe"
import { ClockNow } from "./props"

const today = new Date();

function formatDate(date: Date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

const person = {
  name: "Abdul Hannan",
  theme: {
    backgroundColor: "black",
    color: "blue"
  }
}

export function Hannan() {
  return (
    <div style={person.theme}>
      <h1>{person.name}</h1>
    </div>
  )
}

export default function Home() {
  return <div>
    <MyFirstComponent />
    <Gallery />
    <Profile />
    <ImageTest />
    <h1 className="text-2xl">To Do List for {formatDate(today)}</h1>
    <Hannan />
    <Clock color="red" time="10:00 PM" />
    <PackingList />
    <List />
    <Reacipe />
    <Reacipe />
    <Cup />
    <Cup />
    <Cup />
    
  </div>
}






