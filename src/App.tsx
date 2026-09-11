import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Banner from './components/banner'
import ExploreSide from './components/ExploreSide'
import Footer from './components/Footer'
import AvailableStacks from './components/availableStacks'
import type { TechTypes } from './types/types'

const ItemFetch = async (): Promise<TechTypes[]> => {
  const response = await fetch('../data.json');
  const data = await response.json();
  return data;
}



function App() {
  const [techPromise] = useState(() => ItemFetch());

  return (
    <>
      <div >
        <Navbar />
        <Banner />
        <ExploreSide />
        <Suspense fallback={<h2>Loading...</h2>}>
          <AvailableStacks
            techPromise={techPromise} />
        </Suspense>
        <Footer />

      </div>
    </>
  )
}

export default App
