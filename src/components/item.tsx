import { type DataItem } from "~/data/sample_data"

interface ItemProps {
  data: DataItem
}

export default function Item({data}: ItemProps) {
  return (<div className="rounded-xl border border-gray-300 px-4 py-2 w-fit space-y-1">
    <div>{data.name}</div>

    {/* Render Children Here */}
  </div>)
}