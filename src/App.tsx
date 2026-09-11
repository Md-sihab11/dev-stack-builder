import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Banner from './components/banner'
import ExploreSide from './components/ExploreSide'
import Footer from './components/Footer'
import AvailableStacks from './components/availableStacks'
import type { TechTypes } from './types/types'

const ItemFetch = async (): Promise<TechTypes[]> => {

  await new Promise(resolve => setTimeout(resolve, 1000));
  const response = await fetch('../data.json');
  const data = await response.json();
  return data;
}



function App() {
  const [techPromise] = useState(() => ItemFetch());
  const [selected, setSelectedCard] = useState<TechTypes[]>([])

  return (
    <>
      <div >
        <Navbar />
        <Banner />
        <ExploreSide />
        <Suspense fallback={<div className="flex justify-center items-center py-20">
          <span className="loading loading-spinner loading-xl"></span>
        </div>}>
          <AvailableStacks
            techPromise={techPromise}
            selected={selected}
            setSelectedCard={setSelectedCard}
          />


        </Suspense>
        <Footer />

      </div>
    </>
  )
}

export default App
