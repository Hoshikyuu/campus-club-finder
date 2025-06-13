export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl text-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">About Campus Club Finder</h1>
      <p className="mb-6 text-lg text-gray-700">
        Campus Club Finder is a web app that helps students discover, learn about, and join student clubs at their university.
        Browse clubs, view details and events, and join your favorites—all in one place!
      </p>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
        <ul className="text-left inline-block text-gray-700">
          <li>• React (UI & state management)</li>
          <li>• Vite (build tool)</li>
          <li>• React Router (navigation)</li>
          <li>• Tailwind CSS (styling)</li>
          <li>• LocalStorage (club join persistence)</li>
        </ul>
      </div>
      <p className="text-gray-500 text-sm">Made for the Student Affairs department bootcamp project.</p>
    </div>
  );
}