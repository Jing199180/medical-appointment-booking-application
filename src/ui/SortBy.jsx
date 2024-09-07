import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value); //修改URLSearchParams物件
    // console.log(searchParams.toString());
    setSearchParams(searchParams); //設置到URL中
  }

  return (
    <Select
      options={options}
      type="white" //設置樣式
      value={sortBy}
      onChange={handleChange}
    />
  );
}

export default SortBy;
