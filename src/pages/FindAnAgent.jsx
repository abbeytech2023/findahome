import { useCollection } from "../hooks/useCollection";

export default function FindAnAgent() {
  const { error, documents } = useCollection("Users");
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2>Find an agent</h2>
      {error && <div>{error}</div>}
      {documents &&
        documents.map((user) => {
          return (
            <div key={user.id} className="flex ">
              <span>
                {user.online && (
                  <span className="inline-block bg-green-700 w-4 h-4 mt-1 mr-3 rounded-lg"></span>
                )}
              </span>
              <span>{user.displayName}</span>
            </div>
          );
        })}
    </div>
  );
}
