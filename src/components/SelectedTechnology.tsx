import React from 'react';
import type { TechTypes } from '../types/types';
import { ImCross } from "react-icons/im";

interface Props {
    tech: TechTypes
    setSelectedCard: React.Dispatch<React.SetStateAction<TechTypes[]>>
}

const SelectedTechnology = ({
    tech,
    setSelectedCard
}: Props) => {

    const removeHandler = () => {
        setSelectedCard(prev =>
            prev.filter(item => item.id !== tech.id)
        );
    };

    return (
        <div className="flex items-center justify-between rounded-xl border border-gray-200 p-3">

            <div className="flex items-center gap-3">
                <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-10 w-10 object-contain"
                />

                <div>
                    <h2 className="font-semibold">
                        {tech.name}
                    </h2>

                    <p className="text-sm text-gray-500">
                        {tech.category}
                    </p>
                </div>
            </div>

            <button
                onClick={removeHandler}
                className="btn btn-sm btn-circle btn-ghost "
            >
                {/* <RxCross1 /> */}

                <ImCross />
            </button>

        </div>
    );
};

export default SelectedTechnology;