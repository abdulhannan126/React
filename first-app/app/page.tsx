import FancyText from './FancyText';
import InspirationGenerator from './InspirationGenerator';
import Copyright from './Copyright';


       

export default function App(){
  return (
    <div className='flex items-center justify-center h-dvh ml-96 mr-96 flex-col'>
      <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>

      </div>
    
  )
}