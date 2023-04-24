import './Quote.css';

function Quote( {quote} ) {

  return (
    <div className='box'>
        <p>
        "{quote.text}"
        </p>
        <p className='author'>
        - <i>{quote.author}</i>
        </p>
    </div>
  );
}

export default Quote;
