import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ViewBox  from './components/PercentView'

  // type Address = {
  //   city: string,
  //   street: string,
  //   zip: number
  // }

  // type MyType = {
  //   name: string,
  //   age: number,
  //   isActive: boolean,
  //   hobbies: Array<string>,
  //   address: Address,
  // }

  //   const myPerson: MyType = {
  //     name: 'Jan',
  //     age: 30,
  //     isActive: true,
  //     hobbies: ['sport', 'music'],
  //     address: {
  //       city: 'Prague',
  //       street: 'Main Street',
  //       zip: 12345
  //     }
  //   }

  //   const myPerson2: MyType = {}
  //   myPerson2.name = 'Jan'
  //   myPerson2.age = 30
  //   myPerson2.isActive = true

  type ArrowType = (x: number) => number //typ funkce

  const arrow1:ArrowType = (x) => x + 1

  const arrow2:ArrowType = (x) => ( //bez složených závorek je celý blok je return
    x + 1
  )

  const arrow3:ArrowType = (x) => { // s složenými závorkami je třeba napsat return
    x = 2
    return ( //return na víc řádků
      x + 1
    )
  }



  const App = () => {
    let cislo: number = 34;
    cislo -= 1

  return (  //<> </> aby bylo možný víc komponentů
    <> 
      <ViewBox value={cislo + 1} max={100} makeColor={(p) => "green"}/>
      <ViewBox value={cislo + 1} max={200} makeColor={(p) => "blue"}/>
      <ViewBox value={200} max={200} makeColor={(p) => `hls(10, 100%, ${p*50}%)`}/>
      <p>jnuhu</p>
    </>
  )
}

export default App
