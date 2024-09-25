export default function LoadingScreen({ isLoaded, meshTotal }) {
  return (
    <>
      <div
        className={`${isLoaded == meshTotal && "swing-out-top-bck"} 
       flex items-center justify-center fixed top-0 left-0 w-screen h-screen z-50 bg-black"
`}
      >
        <div className="loader"></div>
      </div>
    </>
  );
}
