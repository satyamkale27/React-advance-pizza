// in react router the loader is the function that fetches the data, but this is loader component that has //
// work to show loading till the page gets rendered //

function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
