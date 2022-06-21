import Nav from '~/components/Nav';
import { NextPageWithLayout } from './_app';

const IndexPage: NextPageWithLayout = () => {


  return (
    <div className='h-screen'>
      <Nav />
      <p>hey</p>
    </div>
  );
};

export default IndexPage;
