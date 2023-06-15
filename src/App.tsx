import CategoryList from "./components/CategoryList/categoryList";
import Header from "./components/Header/header";

const App = () => {
  return (
    <div className="min-h-[100vh] bg-slate-200">
      <Header />
      <CategoryList />
    </div>
  );
};

export default App;
