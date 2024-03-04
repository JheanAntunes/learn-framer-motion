export function GridBackgroundDemo({ children }: React.PropsWithChildren) {
  return (
    <div className="h-full w-full bg-neutral-950 text-white bg-grid-white/[0.2] dark:bg-black dark:bg-grid-white/[0.2]">
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div> */}
      <div className="relative z-20 h-full w-full">{children}</div>
    </div>
  )
}
