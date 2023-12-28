import Part from './Part';
const Content = ({parts}) => {
  console.log(parts);
  const [part1, part2, part3] = parts;
  

return (
    <div>
    <Part props={part1} />
    <Part props={part2} />
    <Part props={part3} />
    </div>
)
}

export default Content;