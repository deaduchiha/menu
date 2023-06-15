import useApiQuery from "../../hook/useApiQuery";
import Loader from "../../utils/loader";
import { Category } from "../../type/type";

const CategoryList = () => {
  const { isLoading, data } = useApiQuery("category");

  return (
    <nav className="container mx-auto max-w-[90%] md:max-w-md mt-[-2.5em]">
      <div
        className={`bg-white rounded drop-shadow h-[80px] flex items-center px-5 justify-center sm:justify-between flex-wrap font-bold gap-5 sm:gap-0 
        ${isLoading ? "justify-center" : "justify-between"}`}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <span className="hover:text-[#457b9d] cursor-pointer">All</span>
            {data.map((category: Category) => (
              <span
                className="hover:text-[#457b9d] cursor-pointer"
                key={category.id}
              >
                {category.title}
              </span>
            ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default CategoryList;
