import Head from "next/head";
import Link from 'next/link';

import { api } from '../services/api';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | SSI Auth</title>
      </Head>
      <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
        <main className="w-1/4 bg-white px-8 py-12 rounded shadow">
          <h1 className="mb-1 text-blue-600 text-2xl font-bold">
            SSI Passwordless Auth
          </h1>

          <hr className="mb-4" />

          <p className="text-gray-700 text-lg mb-8">
            Example of a sign up and sign in flow using self-sovereign identity and verifiable credentials.
            {' '}
            Powered by {' '}
            <a className="text-blue-600 hover:underline" href="https://trinsic.id" target="_blank" rel="noreferrer">
              Trinsic
            </a>
            .
          </p>

          <Link href="/signup">
            <a className="block w-full rounded p-2 text-center mb-4 bg-gray-400 font-bold text-white transition hover:brightness-90">
              Sign Up for a Credential
            </a>
          </Link>

          <Link href="/signin">
            <a className="block w-full rounded p-2 text-center bg-blue-600 font-bold text-white transition hover:brightness-90">
              Sign In with a Credential
            </a>
          </Link>
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { data } = await api.get('/api/hello');

  console.log(data);

  return { props: {} };
}
