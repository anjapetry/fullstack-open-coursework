import Part from './Part';
const Content = ({props}) => {
  console.log(props);
const {part1, part2, part3, exercises1, exercises2, exercises3} = props;
  
return (
    <div>
      <Part part={part1} exercises={exercises1}/>
      <Part part={part2} exercises={exercises2}/>
      <Part part={part3} exercises={exercises3}/>
    </div>
)
}

export default Content;