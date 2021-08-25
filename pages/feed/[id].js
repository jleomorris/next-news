import { addSyntheticLeadingComment } from "typescript";
import feedStyles from "../../styles/Feed.module.css";
import Pagination from "../../components/Pagination";

const Feed = ({ pageNumber, articles }) => {
  console.log(pageNumber, articles);

  return (
    <div className="page-container">
      <div className={feedStyles.main}>
        {articles.map((article) => (
          <div key={article.publishedAt} className={feedStyles.post}>
            <h1 onClick={() => (window.location.href = article.url)}>
              {" "}
              {article.title}
            </h1>
            <p>{article.description}</p>
            {!!article.urlToImage && (
              <img src={article.urlToImage} alt="article" />
            )}
          </div>
        ))}
      </div>

      <Pagination
        pageNumber={pageNumber}
        articles={articles}
        feedStyles={feedStyles}
      />
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.id;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=gb&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );

  const apiJson = await apiResponse.json();

  // console.log("feed.apiJson", apiJson);

  const { articles } = apiJson;

  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;
