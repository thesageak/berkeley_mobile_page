import { VersionEntry } from "../../components";
import { notes } from "../../data/release-notes";

export default function ReleaseNotes() {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex flex-col flex-wrap items-start w-[60vw]">
        <h1 className="font-bold text-[4rem] text-gray-900 leading-[1] mb-4">Release Notes</h1>
        {notes.map((note) => (
          <VersionEntry
            key={note.version}
            version={note.version}
            summary={note.summary}
            changes={note.changes}
          />
        ))}
      </div>
    </div>
  );
}
