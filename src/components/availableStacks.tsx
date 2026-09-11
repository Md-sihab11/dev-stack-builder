
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
        <div className=" flex gap-5 justify-between container mx-auto  space-y-5 pt-10">

            <div className="grid grid-cols-3">
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

            <div className="card bg-base-100 w-96 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-[200px] p-5">
                <div>
                    <h2 className="font-bold text-2xl text-center">
                        Your Stack
                    </h2>


                </div>

                {/* Selected technologies */}
                <div className="mt-5 space-y-3">
                    {selected.length === 0 ? (
                        <div className="border border-gray-200 rounded-xl p-6 text-center bg-gray-50">
                            <p className="text-gray-500 text-center">
                                No Technology Selected Yet
                            </p>
                            <p className="text-gray-400">
                                Your Stack is empty.
                            </p>
                        </div>
                    ) : (
                        selected.map((tech) => (
                            <SelectedTechnology
                                key={tech.id}
                                tech={tech}
                                selected={selected}
                                setSelectedCard={setSelectedCard}
                            />
                        ))
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
