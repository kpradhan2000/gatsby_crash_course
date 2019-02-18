import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Blogs = ({ data }) => {
	return (
		<Layout>
			<h1>Latest Posts</h1>
			{data &&
				data.allMarkdownRemark.edges.map(post => {
					console.log(' post ', post);
					return (
						<div key={post.node.id}>
							<h3>{post.node.frontmatter.title}</h3>
							<Link to={post.node.frontmatter.path}>Details</Link>
							<br />
							<br />
							<hr />
						</div>
					);
				})}
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
