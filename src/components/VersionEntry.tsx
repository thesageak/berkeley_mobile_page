interface VersionEntryProps {
  version: string;
  summary: string;
  changes: string[];
}

function VersionEntry({ version, summary, changes }: VersionEntryProps) {
  return (
    <article className="mb-8">
      <h2 className="text-xl font-semibold">{version}</h2>
      <h3 className="text-lg text-gray-800 mb-2">{summary}</h3>
      <ul className="list-disc list-inside space-y-1">
        {changes.map((change, index) => (
          <li key={index}>{change}</li>
        ))}
      </ul>
    </article>
  );
}

export default VersionEntry;
