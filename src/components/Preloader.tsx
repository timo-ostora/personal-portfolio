// components/Preloader.tsx

export function Preloader () {
  return (
    <>
<div className="flex items-center justify-center min-h-screen">
  <div className="relative">
    <div className="relative w-32 h-32">
      <div
        className=" duration-3000 absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-primary border-b-primary animate-spin"
      ></div>

      <div
        className="duration-2000 direction-reverse absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-primary animate-spin"
      ></div>
    </div>

    <div
      className="absolute inset-0 bg-linear-to-tr from-primary/10 via-transparent to-primary/5 animate-pulse rounded-full blur-sm"
    ></div>
  </div>
</div>

    </>
  )
}

export default Preloader;
