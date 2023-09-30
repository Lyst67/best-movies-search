import { ThreeCircles } from 'react-loader-spinner'
import css from './Loader.module.css'
export const Loader = () => {
  return (
      <div className={css.loader_box}>
       <div >
          <ThreeCircles/>     
      </div> 
      </div>
          
    ) 
}