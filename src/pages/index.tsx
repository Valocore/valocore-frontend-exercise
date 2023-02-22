import Item from "~/components/Item";
import sampleData from "~/data/sample_data";

export default function Home() {
  return (<div className="p-8 space-y-4">
    <pre className="rounded text-xs bg-gray-200 border border-gray-400 p-4">{JSON.stringify(sampleData, null, 2)}</pre>
    <div className="space-y-1">
      {/* Render Sample Data Here */}
      
    </div>
  </div>)
}