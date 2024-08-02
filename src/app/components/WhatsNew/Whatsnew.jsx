import WhatsNewCards from "./WhatsNewCards"

const NewFeatures = [
    {
        title : "Service Design",
        desc: "1 -2 line about the topic in our interest field of business",
        link : "/servicedesign",
        image : "assets/service.svg",
    },
    {
        title : "Social Sector Research",
        desc: "c in our interest field of business",
        link : "/social",
        image : "assets/social.svg",
    },
    {
        title : "Influencer Marketing",
        desc: "our interest field of business",
        link : "/interest",
        image : "assets/influencer.svg",
    },
    {
        title : "AR VR Ads",
        desc: "1 -2 line about the topic in our interest field of business",
        link : "",
        image : "assets/ar.svg",
    },
]

export default function Whatsnew() {
  return (
    <div className="flex flex-col mt-[100px]">
        <div className="flex flex-col"> 
      <h1 className="w-[90%] m-auto text-center text-primary text-4xl font-semibold leading-normal">What&apos;s New at Marqflare?</h1>
      <p className='md:w-1/2  w-3/4 m-auto text-center text-[#464b37] text-sm font-normal leading-normal'>
      Everyday, we embrace transformation and generate value for all stakeholders across the globe.

      </p>
      <p className='md:w-1/2  w-3/4 m-auto text-center text-[#464b37] text-sm font-medium leading-normal'>
      Learn what Marqflare Solutions can do for you

      </p>
        </div>


        <div className="flex flex-col">
            <div className="flex md:flex-row flex-col">

            {
                NewFeatures.map((feature , index)=>{
                    if(index<2){

                      return ( <WhatsNewCards key={index} feature={feature}/>)
                    }
                }
                )
            }
            </div>
            <div className="flex md:flex-row flex-col">

            {
                NewFeatures.map((feature , index)=>{
                    if(index>=2){

                      return ( <WhatsNewCards key={index} feature={feature}/>)
                    }
                }
                )
            }
            </div>
           
        </div>
    </div>
  )
}
