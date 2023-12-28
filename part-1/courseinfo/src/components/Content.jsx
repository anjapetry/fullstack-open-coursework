import Part from './Part';
const Content = ({props}) => {
  console.log(props);
const {part1, part2, part3} = props;

return (
    <div>
    <Part props={part1} />
    <Part props={part2} />
    <Part props={part3} />
    </div>
)
}

export default Content;