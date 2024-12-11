import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-purple-400 py-4 px-8 text-white flex justify-between items-center fixed top-0 left-0 w-full z-10 h-16">
      <h1 className="text-3xl font-bold" style={{ fontFamily: "var(--logo-font)" }}>
        Real Time Ticketing
      </h1>
      <nav className="flex gap-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/admin" className="hover:underline">Admin</Link>  
        <Link href="/simulate" className="hover:underline">Simulate</Link>  
      </nav>
    </header>
  );
};

export default Navbar;
