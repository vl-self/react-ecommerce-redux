import { useCallback, useEffect, useRef, useState } from "react";
import type { ProductItem } from "../../types/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faGripVertical } from "@fortawesome/free-solid-svg-icons";
import ListPageCard from "../productlist/ListPageCard";
import AltProductList from "../productlist/AltProductList";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";

const pgSizes = [4, 8, 16];

const InfiniteProductsList = () => {
  const curPgSize = pgSizes[2];
  const [curPage, setCurPage] = useState(0);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const productsLength = useRef(0);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = useCallback(async () => {
    if (!hasMore) return;
    setLoading(true);
    const curPageNo = curPage + 1;
    const end = curPageNo * curPgSize;
    const start = end - curPgSize;
    setCurPage(curPageNo);
    console.log("start end", start, end);
    const res = await fetch(
      `https://dummyjson.com/products?limit=${end}&skip=${start}`
    );
    try {
      if (res.status === 200) {
        const resObj = await res.json();
        setProducts((prev) => [...prev, ...resObj.products]);
        // productsLength.current = resObj.total;
        productsLength.current = 10;
        if (resObj.products.length == productsLength.current) setHasMore(false);
        setLoading(false);
      }
    } catch (e) {
      console.error("Error while fetch Products");
    }
  }, [curPage]);

  const scrollCallback = () => {
    console.log("inside callback");
    // setCurPage(curPage + 1);
    fetchProducts();
  };

  const bottomRef = useInfiniteScroll(scrollCallback);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-[3.5rem]">
      {!loading && products.length > 0 && (
        <>
          <div className="m-[20px_auto]">
            <div className="inline-block w-[49%] text-left">
              <span className="border-[var(--site-light-theme-text-color)] border p-[1rem]">
                <FontAwesomeIcon icon={faList} />
              </span>
              <span className="border-[var(--site-light-theme-text-color)] border p-[1rem]">
                <FontAwesomeIcon icon={faGripVertical} />
              </span>
            </div>
          </div>
          <div className="grid grid-flow-row grid-cols-[repeat(2,minmax(250px,_1fr))] md:grid-cols-[repeat(4,minmax(250px,_1fr))] gap-8">
            {products.map((prd) => {
              return (
                <div key={prd.id} className={`prd-id-${prd.id}`}>
                  <ListPageCard prd={prd}></ListPageCard>
                </div>
              );
            })}
            <div ref={bottomRef}></div>
          </div>
        </>
      )}
      {/* {loading && <Spinner />} */}
      {loading && <AltProductList></AltProductList>}
    </div>
  );
};

export default InfiniteProductsList;
