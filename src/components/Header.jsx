import { RiMoreFill, RiSearchLine } from 'react-icons/ri';

const Header = () => {
    return (
        <header className='h-20 bg-white shadow-md shadow-gray-100 flex w-full px-10 items-center justify-between'>
            <span className='text-gray-700  text-2xl  font-bold font-sans '>
                PhotosDeus
            </span>

            <nav className='list-none flex items-center gap-6 text-gray-400    '>
                <li>
                    <a href=''>Shots</a>
                </li>
                <li>
                    <a href=''>Photos</a>
                </li>
                <li>
                    <a href=''>Teams</a>
                </li>
                <li>
                    <a href=''>Community</a>
                </li>
                <li>
                    <a href=''>Jobs</a>
                </li>

                <RiMoreFill />
            </nav>

            <div className='flex justify-between items-center gap-5'>
                <div className='flex items-center '>
                    <RiSearchLine className='text-gray-400  translate-x-6' />
                    <input
                        type='text'
                        placeholder='Search'
                        className='pl-8 pr-4 placeholder:px-2 text-gray-500  border rounded-xl outline-none text-sm py-[6px]'
                    />
                </div>

                <img
                    src='https://i.ibb.co/ScGwWny/beard-g9c16ea0db-640.jpg'
                    alt=''
                    className='h-12 w-12 rounded-full p-[2px] shadow  object-cover cursor-pointer'
                />
            </div>
        </header>
    );
};

export default Header;
