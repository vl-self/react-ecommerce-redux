const AltProductList = () => {
  return (
    <>
      <div className="m-[20px_auto] relative h-[50px]">
        <div className="w-[100px] bg-[#e9e6d8] h-full absolute left-0"></div>
        <div className="w-[300px] bg-[#e9e6d8] h-full absolute right-0"></div>
      </div>
      <div className="grid grid-flow-row grid-cols-[repeat(2,minmax(250px,_1fr))] md:grid-cols-[repeat(4,minmax(250px,_1fr))] gap-8">
        <div className="bg-[#e9e6d8] p-[2rem]">
          <figure className="min-w-[186px] min-h-[186px]"></figure>
        </div>
        <div className="bg-[#e9e6d8] p-[2rem]">
          <figure className="min-w-[186px] min-h-[186px]"></figure>
        </div>
        <div className="bg-[#e9e6d8] p-[2rem]">
          <figure className="min-w-[186px] min-h-[186px]"></figure>
        </div>
        <div className="bg-[#e9e6d8] p-[2rem]">
          <figure className="min-w-[186px] min-h-[186px]"></figure>
        </div>
      </div>
    </>
  );
};

export default AltProductList;
