import Part from './Part/Part';

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part name={part.name} number={part.exercises} key={part.id} />
      ))}
    </div>
  );
};

export default Content;
