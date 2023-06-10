import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full bg-gray-800 flex flex-col items-center justify-center text-white ">
        <h1 className="font-mono font-extrabold py-8 text-2xl">
          Welcome to Damin-GPT
        </h1>
        <div className="">
          <NavBar />
        </div>
      </main>
    </>
  );
}
