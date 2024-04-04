

import { Products } from '@/constants/const';
import ProductCard from '@/components/productCard';

// export const generateStaticParams = () => {
//   return Products.map((Item) => (
//     { Cate: Item.category }
//   ))
// }


const Catelog = () => {
  
//   const CategoryArr = Products.filter((product) => product.category === Category)
  // const arr=Products.filter((product)=>(product.category !== Category))
  // console.log(arr);

  return (
    <section className=' w-full sm:p-16 xs:p-8 p-6 py-12'>
      <div
        className=' m-auto  w-full 2xl:max-w-[1280px] flex items-center justify-center p-2 '>
        <div className='grid grid-cols-1 md:grid-cols-2 h-full m-auto lg:grid-cols-3  items-center gap-y-12 md:gap-x-12 justify-center'>
          
          {Products.map((item)=>(<ProductCard {...item} key={item.name}/>))}
 
        </div>
      </div>
    </section>
  )

}

export default Catelog;