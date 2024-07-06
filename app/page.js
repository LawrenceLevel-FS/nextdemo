import Todos from "./components/Todos";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl mb-6">Level's Todo App</h1>
      <Todos />
    </main>
  );
}
