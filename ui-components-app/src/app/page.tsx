import Link from "next/link";

export default function Home() {
  return (
      <main>
        <div className="flex items-center justify-center p-8 w-full gap-x-2 min-h-screen transition-all">
          <Link className="hover:text-6xl hover:font-extrabold" href='/dashboard'>Dashboard</Link>
          <Link className="hover:text-6xl hover:font-extrabold" href='/ecommerce'>Ecommerce</Link>
        </div>
      </main>
    );
}
