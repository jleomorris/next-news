import { useRouter } from "next/router";

const Pagination = ({ pageNumber, articles, feedStyles }) => {
  const router = useRouter();

  return (
    <div className={feedStyles.pagination}>
      <div
        className={pageNumber === 1 ? feedStyles.disabled : feedStyles.active}
        onClick={() => {
          if (pageNumber > 1) {
            router.push(`/feed/${pageNumber - 1}`);
          }
        }}
      >
        Previous
      </div>
      <div>
        Page {pageNumber} of {articles.length}
      </div>
      <div
        className={
          pageNumber === articles.length
            ? feedStyles.disabled
            : feedStyles.active
        }
        onClick={() => {
          if (pageNumber < 5) {
            router.push(`/feed/${pageNumber + 1}`);
          }
        }}
      >
        Next
      </div>
    </div>
  );
};

export default Pagination;
