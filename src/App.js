import Form from "./components/Form";

function App() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full  flex items-center justify-center lg:w-1/2 ">
        <Form />
      </div>
      <div className="bg-gray-200 relative h-full hidden w-1/2 lg:flex items-center justify-center">
        <div className=" w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 animate-bounce rounded-full"></div>
        <div className="w-full absolute h-1/2 bottom-0 bg-white/10 backdrop-blur-lg"></div>
      </div>
    </div>
  );
}

export default App;
