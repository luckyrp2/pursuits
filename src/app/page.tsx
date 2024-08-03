import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="font-lobster text-3xl mb-4">Lobster Font Heading</h1>
      <p className="font-playfair text-xl mb-4">This paragraph uses Playfair Display.</p>
      <div className="font-indie-flower">
        <p>This text is in Roboto.</p>
        <p className="font-bold">This is bold Roboto text.</p>
      </div>
    </main>
  );
}
