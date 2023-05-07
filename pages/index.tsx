import Newscard from "@/components/Newscard";

export default function Home() {
  return (
    <div className="bg-indigo-800 h-screen p-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="white"
        className="w-6 h-6"
      >
        <path
          fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
          clip-rule="evenodd"
        />
      </svg>
      <div className="bg-indigo-800 h-screen pl-4 flex flex-wrap content-center gap-[40px]">
        <div className="font-bold text-white inline-flex flex-col mt-24">
          <span className="text-5xl">
            Latest <br></br> News
          </span>
          <br></br>
          <br></br>
          <span className="text-base font-normal text-indigo-500">
            Covering March <br></br>& April 2015
          </span>
        </div>
        <Newscard
          imageURL={"https://i.imgur.com/lVa48L6.jpeg"}
          header={"NEWS"}
          date={"March 20 2015"}
          title1={"What happened"}
          title2={"in Thailand?"}
          description={
            "Kayaks crowd Three Sisters Springs,where people and manatees maintain controversial coexistence."
          }
        />
        <Newscard
          imageURL={"https://i.imgur.com/w5sCfq1.jpeg"}
          header={"EVENT"}
          date={"April 31 2015"}
          title1={"The funkiest"}
          title2={"Medusas"}
          description={
            "Each day five million jellyfish glide across the surface of Palau's Jellyfish Lake to follow the sun-streaming."
          }
        />
      </div>
    </div>
  );
}
