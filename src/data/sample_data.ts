export interface DataItem {
  name: string
  children?: DataItem[]
}

const sampleData: DataItem[] = [
  {
    name: "A",
    children: [
      {
        name: "AA"
      },{
        name: "AB"
      }
    ]
  },{
    name: "B",
    children: [
      {
        name: "BA"
      },{
        name: "BB"
      }
    ]
  },{
    name: "D",
    children: [
      {
        name: "DA"
      },{
        name: "DB"
      }
    ]
  }
]

export default sampleData