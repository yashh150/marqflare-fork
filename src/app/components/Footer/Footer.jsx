import Image from "next/image";
import Link from "next/link";
import navLogo from "@/../public/assets/marqBlue.svg"
const SolutionArray = [
    {
        title : "Brand Solution",
        link : "/solution/brand"
    },
    {
        title : "Media Solution",
        link : "/solution/media"
    },
    {
        title : "Data Solution",
        link : "/solution/data"
    },
    {
        title : "Tech Solution",
        link : "/solution/tech"
    },
];

const DomainArray = [
    {
      title : "Politics",
      link : "industry/politics"
    },
  {
    title:"Ed Tech",
    link : "/industry/edtech"
  },
  {
    title:"Healthcare",
    link : "/industry/healthcare"
  },
  {
    title:"Ecommerce",
    link : "/industry/ecommerce"
  },
  {
    title:"Fintech",
    link : "/industry/fintech"
  },
  {
    title:"Media",
    link : "/industry/media"
  },
  {
    title:"Gaming",
    link : "/industry/gaming"
  },
  {
    title:"Real Estate",
    link : "/industry/realestate"
  },
  ];

  const serviceArray = [
    {
        title : "Workshop",
        link : "/workshop"
    },
    {
        title : "Videos",
        link : "/workshop"
    },
    {
        title : "Blogs",
        link : "/blogs"
    },
    {
        title : "Case Studies",
        link : "/case"
    },
    {
        title : "Testimonials",
        link : "/workshop"
    },
  ];
  const aboutArray = [
    {
        title : "About Us",
        link : "/about"
    },
    {
        title : "Leadership",
        link : "/about"
    },
    {
        title : "Awards",
        link : "/about"
    },
    {
        title : "Media",
        link : "/about"
    },
    {
        title : "Career",
        link : "/career"
    }
    
  ];

  const socialArray = [
    {
        title : "Instagram",
        link : "/",
    },
    {
        title : "Facebook",
        link : "/",
    },
    {
        title : "Youtube",
        link : "/",
    },
    {
        title : "X . Twitter",
        link : "/",
    },
    {
        title : "Linkedin",
        link : "/",
    },
  ]





export default function FooterMoible() {
  return (
    <div className="bg-[#d2d8c5] pt-[320px] pb-[77px] md:px-20 " >
        <div className="hidden sm:flex flex-row justify-around max-w-[1400px] m-auto">
        <Image
                src={navLogo}
                width={150}
                height={200}
                alt="logo"
                className="mt-[-110px]"
                />
                <div className="flex flex-col justify-start">
                    {
                        SolutionArray.map((solution , index) =>
                            <Link key={index} className="text-[#2e3224] text-sm font-normal mt-[2px]" href={solution.link}>{solution.title}</Link>

                        )
                    }

                </div>

                <div className="flex flex-col justify-start">
                    {
                        DomainArray.map((solution , index) =>
                            <Link key={index} className="text-[#2e3224] text-sm font-normal mt-[2px]" href={solution.link}>{solution.title}</Link>

                        )
                    }

                </div>    
            <div className="flex flex-col justify-start">
                    {
                        serviceArray.map((solution , index) =>
                            <Link key={index} className="text-[#2e3224] text-sm font-normal mt-[2px]" href={solution.link}>{solution.title}</Link>

                        )
                    }

                </div>    


                <div className="flex flex-col jjustify-start">
                    {
                        aboutArray.map((solution , index) => 
                            <Link key={index} className="text-[#2e3224] text-sm font-normal mt-[2px]" href={solution.link}>{solution.title}</Link>

                        )
                    }

                </div>   
            <div className="flex flex-col justify-start">
                    {
                        socialArray.map((solution , index) =>
                            <Link key={index} className="text-[#2e3224] text-sm font-normal mt-[2px]" href={solution.link}>{solution.title}</Link>

                        )
                    }

                </div>  

        </div>

    
      <div className="flex flex-col sm:flex-row justify-around sm:hidden">
            <div  className="flex flex-row justify-around mb-3">
                <Image
                src="assets/marqBlue.svg"
                width={200}
                height={200}
                alt="logo"
                />
                <div className="flex flex-col justify-start ">
                    {
                        SolutionArray.map((solution , index) =>
                            <Link key={index} className="text-[#2e3224] text-sm font-normal " href={solution.link}>{solution.title}</Link>

                        )
                    }

                </div>
            </div>
            <div className="flex flex-row justify-around mt-5">
            <div className="flex flex-col justify-around">
                    {
                        DomainArray.map((solution , index) =>
                            <Link key={index} className="text-[#2e3224] text-sm font-normal" href={solution.link}>{solution.title}</Link>

                        )
                    }

                </div>    
            <div className="flex flex-col justify-around">
                    {
                        serviceArray.map((solution , index) =>
                            <Link key={index} className="text-[#2e3224] text-sm font-normal" href={solution.link}>{solution.title}</Link>

                        )
                    }

                </div>    
            </div>
            <div className="flex flex-row justify-around my-8">
            <div className="flex flex-col justify-around">
                    {
                        aboutArray.map((solution , index) =>
                            <Link key={index} className="text-[#2e3224] text-sm font-normal" href={solution.link}>{solution.title}</Link>

                        )
                    }

                </div>   
            <div className="flex flex-col justify-around">
                    {
                        socialArray.map((solution , index) =>
                            <Link key={index} className="text-[#2e3224] text-sm font-normal" href={solution.link}>{solution.title}</Link>

                        )
                    }

                </div>   
            </div>
      </div>
    </div>
    
  );
}
