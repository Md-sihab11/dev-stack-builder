
import { use } from 'react'
import type { TechTypes } from '../types/types'
import TechCard from './techCard'
import SelectedTechnology from './SelectedTechnology'

interface TechProps {
    techPromise: Promise<TechTypes[]>
    selected: TechTypes[]
    setSelectedCard: React.Dispatch<React.SetStateAction<TechTypes[]>>
}

const AvailableStacks = ({ techPromise, selected, setSelectedCard }: TechProps) => {
    const techStacks = use(techPromise)

    return (
        <div className=" container mx-auto flex justify-between gap-6 space-y-40 pt-15 -pb-2 items-start">

            <div className="grid grid-cols-3 gap-5 space-x-2 space-y-2">
                {techStacks.map((tech) => (
                    <TechCard
                        key={tech.id}
                        tech={tech}
                        selected={selected}
                        setSelectedCard={setSelectedCard}
                    />
                ))}
            </div>

            {/* ------------------------------------------------------------ */}

            <div className="card bg-base-100 w-96 shadow-sm p-5">
                <div>
                    <h2 className="font-bold text-2xl text-center">
                        Your Stack
                    </h2>


                </div>

                {/* Selected technologies */}
                <div className="mt-1 space-y-3">
                    {selected.length === 0 ? (
                        <div >

                            <p className="text-gray-500 text-center mb-3">
                                No Technology Selected Yet
                            </p>
                            <div className="border border-dashed border-gray-300 rounded-xl p-6 text-center">

                                <p className="text-gray-400">
                                    Your Stack is empty.
                                </p>
                            </div>
                        </div>

                    ) : (

                        <div className="space-y-3 mt-4">
                            
                            <p className="text-gray-500 text-center">{selected.length} Technology Selected</p>
                            {selected.map((tech) => (
                                <SelectedTechnology
                                    key={tech.id}
                                    tech={tech}
                                    selected={selected}
                                    setSelectedCard={setSelectedCard}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Remove All */}
                {selected.length > 0 && (
                    <button
                        className="btn btn-error btn-outline w-full mt-4"
                        onClick={() => setSelectedCard([])}
                    >
                        Remove All
                    </button>
                )}

            </div>



        </div>
    )
}

export default AvailableStacks
