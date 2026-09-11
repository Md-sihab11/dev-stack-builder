
import { use } from 'react'
import type { TechTypes } from '../types/types'
import TechCard from './techCard'

interface TechProps {
    techPromise: Promise<TechTypes[]>
    selected: TechTypes[]
    setSelectedCard: React.Dispatch<React.SetStateAction<TechTypes[]>>
}

const AvailableStacks = ({ techPromise, selected, setSelectedCard }: TechProps) => {
    const techStacks = use(techPromise)

    return (
        <div className="container mx-auto grid grid-cols-3 space-y-5 pt-10">
            {techStacks.map((tech: TechTypes) => (

                <TechCard
                    key={tech.id}
                    tech={tech}
                    selected={selected}
                    setSelectedCard={setSelectedCard}

                />
            ))}
        </div>
    )
}

export default AvailableStacks
