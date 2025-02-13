import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchUsersFromGithub } from "../utils/api";

export const InfiniteScroll = () => {
  const { data, hasNextPage, fetchNextPage, status, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["users"],
      queryFn:fetchUsersFromGithub,
      initialPageParam:0,
      getNextPageParam: (lastPage, allPages) => {
        console.log("lastPage", lastPage, allPages);
        const ans = lastPage.length === 10 ? allPages.length + 1 : 0;
        return ans ;
      },
    });

  console.log(data);

    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 1;

      if (bottom && hasNextPage) {
        fetchNextPage();
      }
    };

  

  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
    return ()=>window.removeEventListener('scroll',handleScroll);
  }, [ fetchNextPage, hasNextPage]);

  
  if (status === "error") return <div>Error fetching data</div>;

  return (
    <div>
      <h1>Infinite Scroll</h1>

      {data?.pages?.map((page, index) => (
        <ul key={index}>
          {page.map((user:any) => (
            <li
              key={user.id}
              style={{ padding: "10px", border: "1px solid #ccc" }}
            >
              <p>{user.login}</p>
              <img
                src={user.avatar_url}
                alt={user.login}
                width={50}
                height={50}
              />
            </li>
          ))}
        </ul>
      ))}
      <div style={{ padding: "20px", textAlign: "center" }}>
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Scroll down to load more"
          : "No more users"}
      </div>
    </div>
  );
};