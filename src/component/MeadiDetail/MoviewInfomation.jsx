import React from 'react'

const MoviewInfomation = ({mediaInfo={}}) => {
  return (
    <div>
<p className="font-bold text-[1.4vw] mb-4">Information</p>
<div className='mb-4'>
    <p className='font-bold'>Original Name</p>
    <p>{mediaInfo.original_title } </p>
</div>
<div className='mb-4'>
    <p className='font-bold'>Original Country</p>
    <p>
  {(mediaInfo.production_countries || []).map((country) => (
    <img
      key={country.iso_3166_1}
      src={`https://flagcdn.com/w40/${country.iso_3166_1.toLowerCase()}.png`}
      alt={country.name}
      title={country.name}
      style={{ margin: "0 8px" }}
    />
  ))}
</p>

</div>
<div className='mb-4'>
    <p className='font-bold'>Status</p>
    <p>{mediaInfo.status} </p>
</div>
<div className="mb-4">
  <p className="font-bold">Budget</p>
  <p>{mediaInfo.budget ? `$${mediaInfo.budget.toLocaleString('en-US')}` : "N/A"}</p>
</div>
<div className="mb-4">
  <p className="font-bold">Revenue</p>
  <p>{mediaInfo.revenue ? `$${mediaInfo.revenue.toLocaleString('en-US')}` : "N/A"}</p>
</div>

    </div>
  )
}

export default MoviewInfomation