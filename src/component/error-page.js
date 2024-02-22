
import { useRouteError} from "react-router-dom";


export default function ErrorPage() {
    const err = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-800">
        <h1 className='text-[80px] text-red-500'>{err.status +" - "+ err.statusText}!</h1>
      <div className="max-w-md p-6 mt-16 bg-zinc-500 shadow-lg sm:rounded-lg">
        <p className="text-[25px] text-red-600 font-semibold mb-4">Opps! Looks like an error to me 🙃</p>
        <p className="text-white text-[20px]">That's fine, skill diff!</p>
      </div>
    </div>
  );
}
