import Link from "next/link";


export default function Home() {
  return (
    <main className="w-4xl rounded-md p-4 mx-auto mt-12">
      <Link href="/lifo123" className="btn-outline btn rounded-md">
        Go to my accounts
      </Link>
    </main>
  );
}
