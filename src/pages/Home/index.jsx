import logo from '../../assets/icons/todoLogo.svg';
import Todo from '../../components/Todo';

const Home = () => {
  return (
    <>
      <section className="mt-32">
        <h1 className="text-6xl font-bold text-center text-white">Todo App</h1>
        <div className="max-w-md p-10 mx-auto my-20 bg-white border-2 rounded-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
          <div className="flex flex-col items-center justify-center p-8">
            <img src={logo} className="w-32" alt="logo" />
            <h1 className="text-3xl font-bold text-center">Welcome to React</h1>
          </div>
        </div>
      </section>
      <Todo />
    </>
  );
};

export default Home;
