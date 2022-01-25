import Navigation from '../Navigation';

const AppLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen px-2 bg-indigo-700 align-center">
      <Navigation />
      {children}
    </div>
  );
};

export default AppLayout;
