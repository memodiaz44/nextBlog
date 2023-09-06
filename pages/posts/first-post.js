import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1 className="text-red-500d font-bold underline" >First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}