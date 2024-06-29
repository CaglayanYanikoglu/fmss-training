'use client';

export default function ErrorHandling({
  error, reset
}) {
  console.log(error);
  console.log(reset);
  return (
    <div>
      <p>Error has been occurred.</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}