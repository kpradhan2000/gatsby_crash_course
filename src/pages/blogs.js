import React from 'react';
import Layout from '../components/layout';

const Blogs = ({ data }) => {
	console.log(' data ', data && data);
	return (
		<Layout>
			<h1>Latest Posts</h1>
			{data &&
				data.allMarkdownRemark.edges.map(post => (
					<div key={post.node.id}>
						<h3>{post.node.frontmatter.title}</h3>
					</div>
				))}
		</Layout>
	);
};

export const pageQuery = graphql`
	query BlogIndexQuery {
		allMarkdownRemark {
			edges {
				node {
					id
					frontmatter {
						date
						title
					}
				}
			}
		}
	}
`;

export default Blogs;
