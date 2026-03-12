import { Link } from 'react-router-dom';
function Home () {
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800'>
            <h1 className='text-5xl font-bold text-blue-600 mb-6'>Kriti</h1>
            <p className='text-lg text-gray-700 mb-8'>Your Personal Study Planner.</p>
            <Link to="/planner">
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Get Started</button>
            </Link>
            <Link to="/dashboard">
                <button className='mt-4 text-sm text-gray-600 hover:text-gray-800'>Go to Dashboard</button>
            </Link>
            <Link to="/login">
                <button className='mt-4 text-sm text-gray-600 hover:text-gray-800'>Go to Login</button>
            </Link>
        </div>
    );
}
export default Home;