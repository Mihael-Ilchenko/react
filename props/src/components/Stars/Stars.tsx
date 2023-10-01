import Star from "../Star/Star";
import './style.css';

interface IIProps {
  count: number;
}

function Stars(props: IIProps): JSX.Element {
  const { count } = props;
  const arrStars = convertingNumberToArrayElements(count);

  return (
    <ul className="card-body-stars">
      {arrStars.map((t, index) => {
        return <Star key={index} As='li' />;
      })}
    </ul>
  );
}

function convertingNumberToArrayElements(number: number): number[] {
  let arr = [];

  for (let i = 0; i < number; i++) {
    arr.push(i);
  }
  return arr;
}

export default Stars;
