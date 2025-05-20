import { FaBehanceSquare, FaFacebookF, FaTwitter } from "react-icons/fa";

export const Articles = () => {
  return (
    <section id="articles" className="py-[8rem]">
      <div className="flex gap-x-8">
        {[1, 2, 3].map((item) => {
          return <ArticleCard item={item}></ArticleCard>;
        })}
      </div>
    </section>
  );
};

type itemProps = {
  item: number;
};

export const ArticleCard: React.FC<itemProps> = ({ item }) => {
  return (
    <div>
      <figure className="mb-[2rem]">
        <img src={`../../src/assets/post-img${item}.jpg`}></img>
      </figure>
      <div className="text-[#74642F]">Mar 30, 2021</div>
      <h5 className="my-[2rem]">
        Reading articles always makes the moments happy
      </h5>
      <div className="text-right border-t border-[var(--site-border-color)]">
        <ul className="m-[0 auto] p-[1rem]">
          <li className="inline-block mr-1.5">
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li className="inline-block mr-1.5">
            <a href="#">
              <FaFacebookF />
            </a>
          </li>
          <li className="inline-block mr-1.5">
            <a href="#">
              <FaBehanceSquare />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
