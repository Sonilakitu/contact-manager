import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/contacts');
    }

    return (
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome To Contact Manager Application!</h1>
            <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                Get started
            </button>
        </div>
    );
}

export default Home;
