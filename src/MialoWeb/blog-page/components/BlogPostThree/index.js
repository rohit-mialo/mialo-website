// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

// Material Kit 2 PRO React examples
import DefaultBlogCard from "examples/Cards/BlogCards/DefaultBlogCard";

// Blog post data
import blogPosts from "MialoWeb/blog-page/blogData";

function BlogPostThree() {
  return (
    <MKBox bgColor="white" component="section" py={7}>
      <Container>
        <Grid container spacing={3}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} lg={4} mb={{ xs: 3, lg: 0 }} key={index}>
              <DefaultBlogCard
                image={post.image}
                category={post.category}
                title={post.title}
                description={post.description}
                author={post.author}
                action={{ type: "internal", route: `/blog/${post.slug}` }} 
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BlogPostThree;
