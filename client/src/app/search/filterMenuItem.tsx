interface FilterMenuItemProps {
  filterItemName: string
  hasCheckBox: boolean
}

const FilterMenuItem = ({
  filterItemName = 'ok',
  hasCheckBox
}: FilterMenuItemProps) => {
  return (
    <>
      {hasCheckBox ? (
        <div className='flex items-center space-x-2'>
          <input
            type='checkbox'
            value={filterItemName}
            name={filterItemName}
            id={filterItemName}
          />
          <label htmlFor={filterItemName}>{filterItemName}</label>
        </div>
      ) : (
        <p>{filterItemName}</p>
      )}
    </>
  )
}

export default FilterMenuItem
