// import { IPost } from "../..";
// import { relativeDateFormatter } from "../../../../utils/formatter";
import { PostContainer } from "./styles";

// interface PostProps {
//   post: IPost;
// }

export function Post() {
  //   const formattedDate = relativeDateFormatter(post.created_at);

  return (
    <PostContainer to="/post/1">
      <div>
        <strong>Javascript data types and data structures</strong>
        <span>Há 1 dia</span>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, porro
        fugiat! Cum ipsum inventore voluptatum. Qui, obcaecati? Facilis
        molestias, minus perspiciatis numquam quos, a similique itaque pariatur
        ea aut quam!...
      </p>
    </PostContainer>
  );
}
