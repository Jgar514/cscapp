import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        zIndex: 1000, // Set a lower z-index value than the menu icon
        marginTop: "",
        position: "relative",
      }}
    >
      <div className="bg-white bg-opacity-95 flex flex-col items-center justify-center h-screen w-screen z-50">
        {/* Move the loader and percentage higher */}
        <div className="h-fit flex flex-col items-center justify-center mt-[-40%] md:mt-[-20%] gap-2 ">
          <p className="text-4xl py-2 font-bold lg:text-6xl">Welcome</p>

          <div className="loader animate-spin mt-4 border-t-4 border-black border-solid rounded-full h-12 w-12 lg:h-16 lg:w-16 aspect-w-1 aspect-h-1 flex-shrink-0"></div>
          <p className="text-4xl mb-4">{progress.toFixed(2)}%</p>
        </div>
      </div>
    </Html>
  );
};

export default CanvasLoader;