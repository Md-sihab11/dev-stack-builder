
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
        <div className="container mx-auto px-4 pt-15 pb-10">

            {/* Main Layout */}
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start">

                {/* Available Technologies */}
                <div className="grid w-full grid-cols-1 gap-6 lg:flex-1 lg:grid-cols-3">

                    {techStacks.map((tech) => (
                        <TechCard
                            key={tech.id}
                            tech={tech}
                            selected={selected}
                            setSelectedCard={setSelectedCard}
                        />
                    ))}

                </div>

                {/* Your Stack */}
                <div className="w-full lg:w-96">

                    <div className="card w-full bg-base-100 p-5 shadow-sm">

                        <div>
                            <h2 className="text-center text-2xl font-bold">
                                Your Stack
                            </h2>
                        </div>

                        {/* Selected technologies */}
                        <div className="mt-1 space-y-3">

                            {selected.length === 0 ? (

                                <div>

                                    <p className="mb-3 text-center text-gray-500">
                                        No Technology Selected Yet
                                    </p>

                                    <div className="rounded-xl border border-dashed border-gray-300 p-6     text-center">

                                        <p className="text-gray-400">
                                            Your Stack is empty.
                                        </p>

                                    </div>

                                </div>

                            ) : (

                                <div className="mt-4 space-y-3">

                                    <p className="text-center text-gray-500">
                                        {selected.length} Technology Selected
                                    </p>

                                    {selected.map((tech) => (
                                        <SelectedTechnology
                                            key={tech.id}
                                            tech={tech}
                                            setSelectedCard={setSelectedCard}
                                        />
                                    ))}

                                </div>

                            )}

                        </div>

                        {/* Remove All */}
                        {selected.length > 0 && (
                            <button
                                className="btn btn-error btn-outline mt-4 w-full"
                                onClick={() => setSelectedCard([])}
                            >
                                Remove All
                            </button>
                        )}

                    </div>

                </div>


            </div>


        </div>

    )
}

export default AvailableStacks
