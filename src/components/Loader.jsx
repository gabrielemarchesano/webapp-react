import { Cardio } from 'ldrs/react'
import 'ldrs/react/Cardio.css'

export default function Loader(){

  return(
    <div className="loader">
      <Cardio
        size="50"
        stroke="4"
        speed="2"
        color="black"
      />
    </div>
  )
}