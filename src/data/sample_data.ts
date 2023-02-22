export interface DataItem {
  name: string
  children?: DataItem[]
}

const sampleData: DataItem[] = [
  {
    name: "Apple",
    children: [
      {
        name: "Cosmic Crisp"
      },{
        name: "Red Delicious"
      }
    ]
  },{
    name: "Banana",
    children: [
      {
        name: "Cavendish"
      },{
        name: "Gros Michel"
      }
    ]
  },{
    name: "Cherry",
    children: [
      {
        name: "Maraschino"
      },{
        name: "Rainier"
      }
    ]
  }
]

export default sampleData