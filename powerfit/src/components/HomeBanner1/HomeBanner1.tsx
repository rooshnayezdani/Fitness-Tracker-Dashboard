import React from 'react'
import CircularProgress from '@mui/joy/CircularProgress'
import { AiOutlineEye } from 'react-icons/ai'
import './HomeBanner1.css' 

const HomeBanner1 = () => {

  const [data, setData]= React.useState<any>(null)

  const getData = async ()=> {
    let temp=[
      {
        "name":"Calories Intake",
        "value": 2000,
        "unit": "kcal",
        "goal": 2500,
        "goalUnit":"kcal"
      },
      {
        "name":"Sleep",
        "value": 8,
        "unit": "hrs",
        "goal": 8,
        "goalUnit":"kcal"
      },
      {
        "name":"Steps",
        "value": 2000,
        "unit": "steps",
        "goal": 2500,
        "goalUnit":"kcal"
      },
      {
        "name":"Water",
        "value": 2000,
        "unit": "ml",
        "goal": 2500,
        "goalUnit":"kcal"
      },
      {
        "name":"Workout",
        "value": 2,
        "unit": "days",
        "goal": 6,
        "goalUnit":"days"
      }
    ]
    setData(temp)

  }

  React.useEffect(() =>{
    getData()
  }, [])

  function simplifyFraction(numerator:number,denomintor:number): [number , number]{
    function gcd(a: number,b:number):number {
      return b === 0 ? a: gcd(b, a % b);
    }
    const commonDivisor: number =gcd(numerator,denomintor);
  
    //Simplify fraction
    const simplifiedNumerator: number = numerator /commonDivisor;
    const simplifiedDenominator:number = denomintor/commonDivisor;

    return [simplifiedNumerator, simplifiedDenominator];
  }
  return (
    <div className='meters'>
      <h1 style={{
        color:'white',
      }}></h1>
      {
        data?.length >0 && data.map((item: any, index: number)=>{
          return(
            <div className="card" key={index}>
            <div className="card-header">
        <div className="card-header-box">
          <div className="card-header-box-name">{item.name}</div>
          <div className="card-header-box-value">{item.value} {item.unit}</div>
        </div>
        <div className="card-header-box">
          <div className="card-header-box-name">Target</div>
          <div className="card-header-box-value">{item.goal} {item.goalUnit}</div>
        </div>
          </div>
          <CircularProgress 
          determinate variant="soft" 
          size='lg'
          value={
            (item.value / item.goal) *100
          }
           >
            <span className='textincircle'>
           {
            simplifyFraction(item.value,item.goal)[0] + ' / ' + simplifyFraction(item.value, item.goal)[1]
           }
           </span>
           </CircularProgress>

           <button>Show Report <AiOutlineEye /></button>
          </div>
          )
        })
      }
    </div>
  )
}

export default HomeBanner1