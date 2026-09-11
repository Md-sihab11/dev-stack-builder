
import { use } from 'react'
import type { TechTypes } from '../types/types'
import TechCard from './techCard'

interface TechProps {
    techPromise: Promise<TechTypes[]>
}

const AvailableStacks = ({ techPromise }: TechProps) => {
    const techStacks = use(techPromise)

    return (
        <div className="container mx-auto grid grid-cols-3 space-y-5">
            {techStacks.map((tech: TechTypes) => (

                <TechCard
                key={tech.id}
                tech={tech}

                />
            ))}
        </div>
    )
}

export default AvailableStacks
