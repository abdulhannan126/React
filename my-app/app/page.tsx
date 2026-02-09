import MyFirstComponent from "./MyFirstComponent"
import Gallery from "./Gallery"
import { Profile } from "./Gallery"
import { ImageTest } from "./Gallery"
import Clock from "./props"
import PackingList from "./PackingList"
import List from "./list"
import Reacipe from "./recipe"

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

export function Hannan(){
  return(
    <div style={person.theme}>
      <h1>{person.name}</h1>
    </div>
  )
}

export default function Home() {
  return <div>
    <MyFirstComponent/>
    <Gallery/>
    <Profile/>
    <ImageTest/>
    <h1>To Do List for {formatDate(today)}</h1>
    <Hannan/>
    <Clock color="red" time="10:00 PM"/>
    <PackingList/>
    <List/>
    <Reacipe/>
  </div>
}
