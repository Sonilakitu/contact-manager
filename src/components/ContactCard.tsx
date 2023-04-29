import React from 'react';

interface ContactCardProps {
    firstName: string;
    lastName: string;
    active: boolean;
    id: number;
    onEdit: () => void;
    onDelete: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({
    firstName,
    lastName,
    active,
    id,
    onEdit,
    onDelete,
}) => {

    return (
        <div className="p-4 border ">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold mr-2">
                    {firstName} {lastName}
                </h2>
                <span className={`text-sm font-semibold px-4 py-2 pl-auto  ${active ? 'bg-green-600 text-white ml-2' : 'bg-orange-600 text-white'}`}>
                    {active ? 'Active' : 'Inactive'}
                </span>
            </div>
            <div className="flex justify-end mt-4">
                <button className="px-4 py-2 bg-red-600 text-white w-full h-full hover:bg-red-700" onClick={onDelete}>
                    Delete
                </button>
            </div>
        </div>

    );
};

export default ContactCard;
