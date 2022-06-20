import Head from 'next/head';
import { ReactNode } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import Nav from './Nav';

type DefaultLayoutProps = { children: ReactNode };

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Head>
        <title>Pollster</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <header className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">Pollster</h1>
        <p className='text-2xl'>Create your own custom poll!</p>
      </header>

      <main>{children}</main>

      {process.env.NODE_ENV !== 'production' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </>
  );
};
