export const templateOrder = ({
  rotate,
  scaleX,
  scaleY
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rotate: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scaleX: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scaleY: any
}) => {
  return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`
}
