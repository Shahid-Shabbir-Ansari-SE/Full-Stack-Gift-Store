const GiftsForAll = () => {
  const linkStyle = {
    color: 'blue',
    textDecoration: 'underline'
  }
  return (
    <div className='flex flex-col items-center space-y-4 py-8 font-NotoRegular'>
      <h3 className='text-lg font-medium'>
        Gifts for all the big and small moments
      </h3>
      <p className='w-[90%] leading-7 lg:w-[60%]'>
        Looking for the best place to buy epic{' '}
        <a href='#' style={linkStyle}>
          gifts
        </a>
        ? We’ve got thousands of small biz finds to celebrate every moment –
        from your mate’s{' '}
        <a href='#' style={linkStyle}>
          anniversary
        </a>{' '}
        to{' '}
        <a href='#' style={linkStyle}>
          weddings
        </a>{' '}
        to{' '}
        <a href='#' style={linkStyle}>
          birthdays
        </a>
        . And whether it’s{' '}
        <a href='#' style={linkStyle}>
          {' '}
          Valentine’s Day{' '}
        </a>{' '}
        ,{' '}
        <a href='#' style={linkStyle}>
          Father’s Day
        </a>
        ,{' '}
        <a href='#' style={linkStyle}>
          {' '}
          Mother’s Day
        </a>{' '}
        , or just a pick-me-up kind of day, there’s loads of inspo to be found
        in our gift shop. Our fast free delivery and flexible payment options
        make buying for{' '}
        <a href='#' style={linkStyle}>
          Christmas
        </a>{' '}
        to{' '}
        <a href='#' style={linkStyle}>
          christenings
        </a>{' '}
        easy breezy.
      </p>
    </div>
  )
}

export default GiftsForAll
