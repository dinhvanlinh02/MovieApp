
const CircularProgresBar = ({percent =90,size = 50,strokeWith=5,strokeColor ='green'}) => {
  const radius = size/2 -strokeWith;
  return (
    <div>
<svg  width={size}  height={size} >
    <circle r={size/2 -strokeWith} cx={size/2} cy={size/2} stroke="white" strokeWidth={strokeWith}  />
    <circle r={size/2 -strokeWith} cx={size/2} cy={size/2} stroke={strokeColor}  fill="none"  strokeWidth={strokeWith} 
    strokeDasharray={2 * Math.PI * radius}
    strokeDashoffset={125.65-(percent /100 * 125.65) }
    transform="rotate(-90)"
    style={{transformOrigin :'center'}}
    strokeLinecap="round"
    />
    <text x="25px" y = "25px"      fill="white" fontSize="20px" alignmentBaseline="middle" textAnchor="middle">{percent}</text>
</svg>
    </div>
  )
}

export default CircularProgresBar