import CateCard from '@/components/cateCard';
import { Products } from '@/constants/const';
import ProductCard from '@/components/productCard';
import T1Card from '@/components/t1Card';

export const generateStaticParams = () => {
  return Products.map((Item) => (
    { Category: Item.category }
  ))
}


const Category = ({ params }: { params: { Category: string } }) => {
  const { Category } = params;
//   const CategoryArr = Products.filter((product) => product.category === Category)
  // const arr=Products.filter((product)=>(product.category !== Category))
  // console.log(arr);

  return (
    <section className=' w-full sm:p-16 xs:p-8 p-6 py-12'>
      <div
        className=' m-auto  w-full 2xl:max-w-[1280px] flex items-center justify-center p-2 '>
        <div className='grid grid-cols-1 md:grid-cols-2 h-full m-auto lg:grid-cols-3  items-center gap-y-12 md:gap-x-12 justify-center'>
         <T1Card Category={Category}/>
        </div>
      </div>
    </section>
  )

}

export default Category;