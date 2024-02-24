import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="Home">
      <div className="bg-secondary-light text-center h-screen mt-18 text-secondary-dark px-4 md:px-10 pt-52 space-y-5 md:space-y-7 xl:space-y-10 text-xl md:text-large xl:text-extra">
        <div className="font-medium">
          <h1>WELCOME</h1>
        </div>
        <div className="font-extrabold">
          <h1 className="text-primary-dark">
            CLOUD FOR <span className="text-primary-dark"> GPUs</span>
          </h1>
        </div>
        <div className="font-normal text-xs w-20 mx-auto">
          <div className="menu border py-2 font-extrabold px-3 rounded-md hover:border-primary-dark">
            <Link href="/login">Sign{'\u00A0'}In</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
