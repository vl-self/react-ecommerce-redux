import { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";
import type { productInterFace } from "../../types/product";

const pgSizes = [4, 8, 16];

const ProductList = () => {
  const getCurrentPagePrds = () => {
    const end = curPage * curPgSize;
    const start = end - curPgSize;
    const totalPages = Math.ceil(products.length / (end - start));
    const visiblePrds = products.slice(start, end);

    console.log("start end", start, end, totalPages, curPage, curPgSize);

    return {
      visiblePrds,
      totalPages,
    };
  };

  const [curPgSize, setCurPgSize] = useState(pgSizes[1]);
  const [curPage, setCurPage] = useState(1);
  const [products, setProducts] = useState<productInterFace[]>([]);
  let totalProducts = 0;
  const { visiblePrds, totalPages } = getCurrentPagePrds();

  const onNext = () => {
    setCurPage(curPage + 1);
  };

  const onPrev = () => {
    setCurPage(curPage - 1);
  };

  const onPageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurPgSize(parseInt(e.target.value));
    setCurPage(1);
  };
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    try {
      if (res.status === 200) {
        const resObj = await res.json();
        setProducts(resObj.products);
        totalProducts = resObj.products.length;
      }
    } catch (e) {
      console.error("Error while fetch Products");
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="p-[3.5rem]">
      {visiblePrds.length > 0 && (
        <>
          <div className="m-[20px_auto] text-center">
            <div>
              <select onChange={onPageSizeChange} defaultValue={curPgSize}>
                {pgSizes.map((size) => (
                  <option value={size}>{size}</option>
                ))}
              </select>
              <button onClick={onPrev} disabled={curPage == 1}>
                Prev
              </button>
              <span className="m-[10px]">
                {`Pages ${curPage} of ${totalPages}`}{" "}
              </span>
              <button onClick={onNext} disabled={curPage == totalPages}>
                Next
              </button>
            </div>
            <div></div>
          </div>
          <div className="grid grid-flow-row grid-cols-[repeat(2,minmax(250px,_1fr))] md:grid-cols-[repeat(4,minmax(250px,_1fr))] gap-8">
            {visiblePrds.map((prd) => {
              return (
                <div className="bg-[#EFEEE8] p-[2rem] relative group overflow-hidden">
                  <figure className="min-w-[186px] min-h-[186px]">
                    <img
                      src={prd.thumbnail}
                      className="w-full"
                      alt="Loading.."
                    ></img>
                    <button className="uppercase absolute bottom-[-40px] left-[0px] p-[0.5rem] text-black w-full rounded-none group-hover:bottom-[0px]">
                      Add To Cart
                    </button>
                  </figure>
                  <figcaption>
                    <h5 className="text-[#74642F]">{prd.title}</h5>
                    <div className="p-[1rem_0]">
                      <span>{prd.availabilityStatus}</span>
                      <span className="float-right">${prd.price}</span>
                    </div>
                  </figcaption>
                </div>
              );
            })}
          </div>
        </>
      )}
      {!products.length && <Spinner />}
    </div>
  );
};

export default ProductList;
