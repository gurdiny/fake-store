export default function Reviews(props) {
  return (
    <article className="flex flex-col">
      <p className="text-sm ">{`Name: ${props.reviewerName}`}</p>
      <p className="text-sm ">{`Name: ${props.comment}`}</p>
      <p className="text-sm ">{`Raiting: ${props.rating}💫`}</p>
    </article>
  );
}
