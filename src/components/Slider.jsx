import { Carousel } from 'react-responsive-carousel'




const  Slider = ({sliderData}) => {
  return( 
    <div>
   <Carousel infiniteLoop autoPlay={true} showThumbs={false} showArrows={false}>
    
{
  sliderData?.map((img)=>{
    return(
      <>
      <div className='Carousel-img'>
      
    <img src={img} alt=''/>

    </div> 
      </>
    )
  })
}
    
 
   

   

   </Carousel>
   </div>
   
  )
}

export default Slider