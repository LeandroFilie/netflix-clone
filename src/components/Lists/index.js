import { categories } from "../../services/api";
import ListRow from "../ListRow"

export default function Lists(){
  return (
    <>
      {
        categories.map((category, key) => (
          <ListRow 
            key={key} 
            title={category.title}
            endpoint={category.endpoint} 
          />
        ))
      }
    </>
  )
}