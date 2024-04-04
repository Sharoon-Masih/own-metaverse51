import React from 'react';
import { Footer, Navbar } from '@/components';
import Hero from '@/metaworldsec/singleworld/hero';
import History from '@/metaworldsec/singleworld/history';
import { ExploreWorlds } from '@/constants/const';
import WorldCard from '@/components/worldCard';


interface Iprops{
    params:{world:string}
}
export function generateStaticParams(){
    return ExploreWorlds.map((world)=>(
       {world:world.id}
    ))
  }
const singleWorld = ({params}:Iprops) => {
    const getCard:string=params.world
    const findCard=ExploreWorlds.find((card)=> card.id === getCard)
    return (
        <div className='overflow-hidden'>
            <Navbar />
            <section className='sm:p-16 w-full xs:p-8 p-6 py-12'>
              {typeof findCard !== "undefined" && <WorldCard {...findCard}/>
              }
            </section>
            {typeof findCard !== "undefined" &&  <Hero img={findCard.imgUrl}/>}
            <hr className='text-black opacity-20'/>
            {typeof findCard !== "undefined" &&  <History title={findCard.title}/>}
            <hr className='text-black opacity-20'/>
            <Footer />
        </div>

    )
}

export default singleWorld;