import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Spinner from "../spinner/Spinner";
import type { productInterFace } from "../../types/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faGripVertical } from "@fortawesome/free-solid-svg-icons";
import ListPageCard from "./ListPageCard";
import AltProductList from "./AltProductList";

const pgSizes = [4, 8, 16];

const ProductList = () => {
  const [curPgSize, setCurPgSize] = useState(pgSizes[1]);
  const [curPage, setCurPage] = useState(1);
  const [products, setProducts] = useState<productInterFace[]>([]);
  const productsLength = useRef(0);
  const [loading, setLoading] = useState(true);

  const getCurrentPagePrds = useCallback(() => {
    const end = curPage * curPgSize;
    const start = end - curPgSize;
    const totalPages = Math.ceil(productsLength.current / (end - start));
    const visiblePrds = products.slice(start, end);

    console.log(
      "getCurrentPagePrds",
      start,
      end,
      totalPages,
      curPage,
      curPgSize
    );

    return {
      visiblePrds,
      totalPages,
    };
  }, [curPage, curPgSize, products]);

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
    setLoading(true);
    const end = curPage * curPgSize;
    const start = end - curPgSize;
    console.log("start end", start, end);
    const res = await fetch(
      `https://dummyjson.com/products?limit=${end}&skip=${start}`
    );
    try {
      if (res.status === 200) {
        const resObj = await res.json();
        setProducts(resObj.products);
        productsLength.current = resObj.total;
        setLoading(false);
      }
    } catch (e) {
      console.error("Error while fetch Products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [curPage, curPgSize]);

  return (
    <div className="p-[3.5rem]">
      {!loading && visiblePrds.length > 0 && (
        <>
          <div className="m-[20px_auto]">
            <div className="inline-block w-[49%] text-left">
              <span className="border-[#daa556] border p-[1rem]">
                <FontAwesomeIcon icon={faList} />
              </span>
              <span className="border-[#daa556] border p-[1rem]">
                <FontAwesomeIcon icon={faGripVertical} />
              </span>
            </div>
            <div className="inline-block w-[50%] text-right">
              <select
                onChange={onPageSizeChange}
                defaultValue={curPgSize}
                className="border-[#daa556] border p-[10px] m-[0_1rem]"
              >
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
          </div>
          <div className="grid grid-flow-row grid-cols-[repeat(2,minmax(250px,_1fr))] md:grid-cols-[repeat(4,minmax(250px,_1fr))] gap-8">
            {visiblePrds.map((prd) => {
              return <ListPageCard prd={prd}></ListPageCard>;
            })}
          </div>
        </>
      )}
      {/* {loading && <Spinner />} */}
      {loading && <AltProductList></AltProductList>}
    </div>
  );
};

export default ProductList;
