
const Total = ({ parts }) => {
  return (
    <strong>total of {parts.reduce((acc, curr) =>
    acc + curr.exercises, 0 )} exercises</strong>
    )
}

export default Total;