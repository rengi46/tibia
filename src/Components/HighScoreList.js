import React from 'react'
import DetailsPerson from './DetailsPerson'
import { allHighScore,HighScorefilter } from '../redux/action/HighScoreAction'
import { useDispatch,useSelector } from 'react-redux'
import { Formik } from 'formik'

const HighScoreList = () => {
    const dispatch = useDispatch()
    const highscores = useSelector(state=>state.HighScoreReduce.HighScore)
    const cargando = useSelector(state=>state.HighScoreReduce.cargando)
    React.useEffect(() => {
        dispatch(allHighScore())
    }, [dispatch])
    React.useEffect(() => {
      // dispatch(HighScorefilter())
  }, [dispatch])
    console.log(highscores)
  return (
    <div className='flex flex-col w-4/5 m-auto'>
    <div className='w-full'>
      <Formik
      initialValues={{ 
        world: 'all',
        category: 'experience',
        vocation: 'all',
      }}
       onSubmit={(values, actions) => console.log(values)}
       >
      {props => (
         <form onSubmit={props.handleSubmit}>
         <label htmlFor="world">World</label>
           <input
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.name}
             name="world"
           />
           {props.errors.world && <div>{props.errors.world}</div>}
           <label htmlFor="category">Category</label>
           <select
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.name}
             name="category"
           >
              <option value="experience">experience</option>
              <option value="magiclevel">magiclevel</option>
              <option value="shielding">shielding</option>
              <option value="distancefighting">distancefighting</option>
              <option value="axefighting">axefighting</option>
              <option value="clubfighting">clubfighting</option>
              <option value="swordfighting">swordfighting</option>
           </select>
           {props.errors.category && <div>{props.errors.category}</div>}
            <label htmlFor="vocation">Vocation</label>
           <select
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.name}
             name="vocation"
           >
              <option value="">all</option>
              <option value="knights">knights</option>
              <option value="paladins">paladins</option>
              <option value="sorcerers">sorcerers</option>
              <option value="druids">druids</option>
           </select>
           {props.errors.vocation && <div>{props.errors.vocation}</div>}
           <button type="submit">Submit</button>
         </form>
       )}
      </Formik>
    </div>
      <div className='w-full grid grid-cols-5'>
        <h3 className='text-xl p-2 bg-red-900 border-black border-2'>outfit</h3>
        <h3 className='text-xl p-2 bg-red-900 border-black border-2'>name</h3>
        <h3 className='text-xl p-2 bg-red-900 border-black border-2'>vocation</h3>
        <h3 className='text-xl p-2 bg-red-900 border-black border-2'>world</h3>
        <h3 className='text-xl p-2 bg-red-900 border-black border-2'>lvl</h3>
      </div>
      {!cargando &&
      highscores.highscores.highscore_list.map((highscore,key)=>(
            <DetailsPerson
          name={highscore.name}
          vocation={highscore.vocation}
          world={highscore.world}
          lvl={highscore.level}
        />
      ))}
    </div>
  )
}

export default HighScoreList