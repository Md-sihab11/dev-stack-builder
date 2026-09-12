import { toast } from 'react-toastify'
import type { TechTypes } from '../types/types'
import { FaStar } from 'react-icons/fa'


interface PropsTech {
    tech: TechTypes
    selected: TechTypes[]
    setSelectedCard: React.Dispatch<React.SetStateAction<TechTypes[]>>
}


const TechCard = ({ tech, selected, setSelectedCard }: PropsTech) => {


    // checking from outside for availability in everywhere!
     const alreadySelected = selected.some(
            selected => selected.name === tech.name
        );



    const stackHandler = (tech: TechTypes) => {

       

        if (alreadySelected) {
            toast.error(`${tech.name} is already selected!`);
            return;
        }

        setSelectedCard((prev)=>[...prev, tech])

    
        toast.success(`You have added ${tech.name}`);

    }
    return (
        <div className="space-y-4 flex flex-cols-1 md:flex-cols-2 lg:flex-cols-3">
            {/* card designed */}
            <div className="card bg-base-100 w-96 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                {/* Badge / Icon */}
                <figure className="flex items-center justify-between px-6 pt-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100">
                        <img
                            src={tech.icon}
                            alt={tech.name}
                            className="h-10 w-10 object-contain"
                        />
                    </div>

                    <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-600">
                        {tech.badge}
                    </span>
                </figure>

                {/* Card Body */}
                <div className="card-body">

                    <h2 className="card-title font-bold">
                        {tech.name}
                    </h2>

                    <p className="text-gray-500">
                        {tech.description}
                    </p>

                    {/* Info */}
                    <div className="flex items-center justify-between gap-4 pt-4 pb-4">

                        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-500">
                            {tech.category}
                        </span>

                        <p className="text-sm text-gray-500">
                            {tech.difficulty}
                        </p>

                        <div className="flex items-center gap-2">
                            <FaStar className="text-yellow-400" />
                            <p className="font-semibold">
                                {tech.rating}
                            </p>
                        </div>

                    </div>

                    {/* Button */}
                    <button className="btn w-full rounded bg-black text-white hover:bg-gray-800
                    disabled:bg-gray-300 disabled:text-white disabled:cursor-not-allowed " disabled={alreadySelected} onClick={() => stackHandler(tech)}>
                       
                       {/* What a syle bro!! */}
                        {
                            alreadySelected? "✓ Added to Stack": "Add to Stack"
                        }

                    </button>

                </div>
            </div>


        </div>
    )
}

export default TechCard