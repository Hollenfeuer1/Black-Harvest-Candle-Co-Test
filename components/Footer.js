import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center">
          <div className='px-6 py-2'>
          <Image src='/BHCC_Logo_Small.png' width={200} height={71} />
          <Link href='/'>Facebook</Link>
          <Link href='/'>Instagram</Link>
          <Link href='/'>Twitter</Link>
          <Link href='/'>TikTok</Link>
          </div>
        </nav>
      </div>
    </footer>
  )
}
