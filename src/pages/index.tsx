import Link from 'next/link';
import Nav from '~/components/Nav';
import { NextPageWithLayout } from './_app';

const IndexPage: NextPageWithLayout = () => {


  return (
    <div className='h-screen'>
      <Nav />
      {/* A welcome page with a nextjs link to the create polls page */}
      <div className='flex flex-col items-center justify-evenly gap-6'>
        <h1 className='text-4xl font-bold text-center'>
          Welcome to Pollster
        </h1>
        <p className='text-center'>
          Create a new poll or view existing polls
        </p>
        <div className='flex flex-col items-center justify-center'>
          <Link href='/create'>
            <a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
              Create a new poll
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
