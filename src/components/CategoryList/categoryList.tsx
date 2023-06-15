import useApiQuery from "../../hook/useApiQuery";

const CategoryList = () => {
  const { isLoading, error, data } = useApiQuery("category");
  if (isLoading) console.log("loading...");

  console.log(data);

  return <h1>cate</h1>;
};

export default CategoryList;
