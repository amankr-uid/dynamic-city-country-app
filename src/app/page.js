
export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to City & Country Pages</h1>
      <p>Try accessing:</p>
      <ul className="list-disc list-inside mt-2">
        <li><a className="text-blue-500 underline" href="/delhi">City Page - Delhi</a></li>
        <li><a className="text-blue-500 underline" href="/delhi-india">Country Page - India</a></li>
      </ul>
    </div>
  );
}
