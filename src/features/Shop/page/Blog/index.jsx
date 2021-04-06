import React from "react";
import PropTypes from "prop-types";

Blog.propTypes = {};

function Blog(props) {
	return (
		<main className="main">
			<nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
				<div className="container container_Product">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<a href="index.html">Home</a>
						</li>
						<li className="breadcrumb-item">
							<a href="#">Blog</a>
						</li>
						<li className="breadcrumb-item active" aria-current="page">
							Masonry 2 Columns
						</li>
					</ol>
				</div>
				{/* End .container */}
			</nav>
			{/* End .breadcrumb-nav */}
			<div className="page-content">
				<div className="container container_Product">
					<nav className="blog-nav">
						<ul className="menu-cat entry-filter justify-content-center">
							<li className="active">
								<a href="#" data-filter="*">
									All Blog Posts<span>6</span>
								</a>
							</li>
							<li>
								<a href="#" data-filter=".lifestyle">
									Lifestyle<span>3</span>
								</a>
							</li>
							<li>
								<a href="#" data-filter=".shopping">
									Shopping<span>1</span>
								</a>
							</li>
							<li>
								<a href="#" data-filter=".fashion">
									Fashion<span>1</span>
								</a>
							</li>
							<li>
								<a href="#" data-filter=".travel">
									Travel<span>2</span>
								</a>
							</li>
							<li>
								<a href="#" data-filter=".hobbies">
									Hobbies<span>2</span>
								</a>
							</li>
						</ul>
						{/* End .blog-menu */}
					</nav>
					{/* End .blog-nav */}
					<div className="entry-container  max-col-2">
						<div className="entry-item lifestyle shopping col-sm-6">
							<article className="entry entry-grid text-center">
								<figure className="entry-media">
									<a href="single.html">
										<img
											src="assets/images/blog/masonry/2cols/post-1.jpg"
											alt="image desc"
										/>
									</a>
								</figure>
								{/* End .entry-media */}
								<div className="entry-body">
									<div className="entry-meta">
										<span className="entry-author">
											by <a href="#">John Doe</a>
										</span>
										<span className="meta-separator">|</span>
										<a href="#">Nov 22, 2018</a>
										<span className="meta-separator">|</span>
										<a href="#">2 Comments</a>
									</div>
									{/* End .entry-meta */}
									<h2 className="entry-title">
										<a href="single.html">
											Cras ornare tristique elit.
										</a>
									</h2>
									{/* End .entry-title */}
									<div className="entry-cats">
										in <a href="#">Lifestyle</a>,
										<a href="#">Shopping</a>
									</div>
									{/* End .entry-cats */}
								</div>
								{/* End .entry-body */}
							</article>
							{/* End .entry */}
						</div>
						{/* End .entry-item */}
						<div className="entry-item lifestyle col-sm-6">
							<article className="entry entry-grid text-center">
								<figure className="entry-media">
									<a href="single.html">
										<img
											src="assets/images/blog/masonry/2cols/post-2.jpg"
											alt="image desc"
										/>
									</a>
								</figure>
								{/* End .entry-media */}
								<div className="entry-body">
									<div className="entry-meta">
										<span className="entry-author">
											by <a href="#">John Doe</a>
										</span>
										<span className="meta-separator">|</span>
										<a href="#">Nov 21, 2018</a>
										<span className="meta-separator">|</span>
										<a href="#">0 Comments</a>
									</div>
									{/* End .entry-meta */}
									<h2 className="entry-title">
										<a href="single.html">
											Aenean dignissim pellente squefelis.
										</a>
									</h2>
									{/* End .entry-title */}
									<div className="entry-cats">
										in <a href="#">Lifestyle</a>
									</div>
									{/* End .entry-cats */}
								</div>
								{/* End .entry-body */}
							</article>
							{/* End .entry */}
						</div>
						{/* End .entry-item */}
						<div className="entry-item lifestyle fashion col-sm-6">
							<article className="entry entry-grid text-center">
								<figure className="entry-media">
									<a href="single.html">
										<img
											src="assets/images/blog/masonry/2cols/post-3.jpg"
											alt="image desc"
										/>
									</a>
								</figure>
								{/* End .entry-media */}
								<div className="entry-body">
									<div className="entry-meta">
										<span className="entry-author">
											by <a href="#">John Doe</a>
										</span>
										<span className="meta-separator">|</span>
										<a href="#">Nov 18, 2018</a>
										<span className="meta-separator">|</span>
										<a href="#">3 Comments</a>
									</div>
									{/* End .entry-meta */}
									<h2 className="entry-title">
										<a href="single.html">
											Aenean dignissim pellente.
										</a>
									</h2>
									{/* End .entry-title */}
									<div className="entry-cats">
										in <a href="#">Fashion</a>,
										<a href="#">Lifestyle</a>
									</div>
									{/* End .entry-cats */}
								</div>
								{/* End .entry-body */}
							</article>
							{/* End .entry */}
						</div>
						{/* End .entry-item */}
						<div className="entry-item travel col-sm-6">
							<article className="entry entry-grid text-center">
								<figure className="entry-media">
									<div
										className="owl-carousel owl-simple owl-light owl-nav-inside"
										data-toggle="owl"
									>
										<a href="single.html">
											<img
												src="assets/images/blog/masonry/2cols/post-4.jpg"
												alt="image desc"
											/>
										</a>
										<a href="single.html">
											<img
												src="assets/images/blog/masonry/2cols/post-4-2.jpg"
												alt="image desc"
											/>
										</a>
									</div>
									{/* End .owl-carousel */}
								</figure>
								{/* End .entry-media */}
								<div className="entry-body">
									<div className="entry-meta">
										<span className="entry-author">
											by <a href="#">Jane Doe</a>
										</span>
										<span className="meta-separator">|</span>
										<a href="#">Nov 15, 2018</a>
										<span className="meta-separator">|</span>
										<a href="#">4 Comments</a>
									</div>
									{/* End .entry-meta */}
									<h2 className="entry-title">
										<a href="single.html">
											Utaliquam sollicitudin leo.
										</a>
									</h2>
									{/* End .entry-title */}
									<div className="entry-cats">
										in <a href="#">Travel</a>
									</div>
									{/* End .entry-cats */}
								</div>
								{/* End .entry-body */}
							</article>
							{/* End .entry */}
						</div>
						{/* End .entry-item */}
						<div className="entry-item travel hobbies col-sm-6">
							<article className="entry entry-grid text-center">
								<figure className="entry-media">
									<a href="single.html">
										<img
											src="assets/images/blog/masonry/2cols/post-5.jpg"
											alt="image desc"
										/>
									</a>
								</figure>
								{/* End .entry-media */}
								<div className="entry-body">
									<div className="entry-meta">
										<span className="entry-author">
											by <a href="#">John Doe</a>
										</span>
										<span className="meta-separator">|</span>
										<a href="#">Nov 11, 2018</a>
										<span className="meta-separator">|</span>
										<a href="#">2 Comments</a>
									</div>
									{/* End .entry-meta */}
									<h2 className="entry-title">
										<a href="single.html">
											Quisque volutpat mattiseros.
										</a>
									</h2>
									{/* End .entry-title */}
									<div className="entry-cats">
										in <a href="#">Travel</a>,<a href="#">Hobbies</a>
									</div>
									{/* End .entry-cats */}
								</div>
								{/* End .entry-body */}
							</article>
							{/* End .entry */}
						</div>
						{/* End .entry-item */}
						<div className="entry-item hobbies col-sm-6">
							<article className="entry entry-grid text-center">
								<figure className="entry-media entry-video">
									<a href="single.html">
										<img
											src="assets/images/blog/masonry/2cols/post-6.jpg"
											alt="image desc"
										/>
									</a>
								</figure>
								{/* End .entry-media */}
								<div className="entry-body">
									<div className="entry-meta">
										<span className="entry-author">
											by <a href="#">John Doe</a>
										</span>
										<span className="meta-separator">|</span>
										<a href="#">Nov 10, 2018</a>
										<span className="meta-separator">|</span>
										<a href="#">4 Comments</a>
									</div>
									{/* End .entry-meta */}
									<h2 className="entry-title">
										<a href="single.html">
											Vivamus vestibulum ntulla necante.
										</a>
									</h2>
									{/* End .entry-title */}
									<div className="entry-cats">
										in <a href="#">Hobbies</a>
									</div>
									{/* End .entry-cats */}
								</div>
								{/* End .entry-body */}
							</article>
							{/* End .entry */}
						</div>
						{/* End .entry-item */}
					</div>
					{/* End .entry-container */}
					<nav aria-label="Page navigation">
						<ul className="pagination justify-content-center">
							<li className="page-item disabled">
								<a
									className="page-link page-link-prev"
									href="#"
									aria-label="Previous"
									tabIndex={-1}
									aria-disabled="true"
								>
									<span aria-hidden="true">
										<i className="icon-long-arrow-left" />
									</span>
									Prev
								</a>
							</li>
							<li className="page-item active" aria-current="page">
								<a className="page-link" href="#">
									1
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									2
								</a>
							</li>
							<li className="page-item">
								<a
									className="page-link page-link-next"
									href="#"
									aria-label="Next"
								>
									Next{" "}
									<span aria-hidden="true">
										<i className="icon-long-arrow-right" />
									</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
				{/* End .container */}
			</div>
			{/* End .page-content */}
		</main>
	);
}

export default Blog;
