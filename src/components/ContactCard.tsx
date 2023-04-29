import React from 'react';

interface ContactCardProps {
  firstName: string;
  lastName: string;
  active: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({
  firstName,
  lastName,
  active,
  onEdit,
  onDelete,
}) => {


  return (
    <div className="p-4 border rounded-md">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">
          {firstName} {lastName}
        </h2>
        <span className={`text-sm font-semibold px-2 py-1 rounded-md ${active ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
          {active ? 'Active' : 'Inactive'}
        </span>
      </div>
      <div className="flex justify-end mt-4">
        <button className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={onEdit}>
          Edit
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
