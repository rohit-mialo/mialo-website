

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import routes from "routes";
import FooterThress from "./HomePageComponents/FooterThress";
// import FormContext from "./HomePageComponents/FormContext";
// import FooterThress from "./HomePageComponents/FooterThress";
import CustomNavbar from "./Navbar/Navbar";
import BlogPageBanner from "MialoWeb/blog-page/BlogPageBanner";
// import BlogPostThree from "MialoWeb/blog-page/components/BlogPostThree";
import { useParams } from "react-router-dom";
import blogPosts from "./blog-page/blogData";
import MKBox from "components/MKBox";
// import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// import Breadcrumbs from "examples/Breadcrumbs";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";


// MUI components
import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
import Breadcrumbs from "examples/Breadcrumbs";


function BlogPostPage() {

    const { slug } = useParams();
    console.log("Slug from URL:", slug);
    console.log("All slugs in data:", blogPosts.map(p => p.slug));
    const post = blogPosts.find((p) => p.slug === slug);
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollToSection = (id) => {
        console.log(`Navigating to: ${id}`);
        navigate(`/usecases#${id}`);
    };

    const testimonialsRef = useRef(null);
    const scrollToTestimonials = () => {
        if (testimonialsRef.current) {
            const targetPosition =
                testimonialsRef.current.getBoundingClientRect().top + window.scrollY + 250;
            window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }
    };


    if (!post) return <div>Post not found.</div>;

    return (
        <>
            <div style={{ width: "100%" }}>
                {isMobile ? (
                    <DefaultNavbar
                        routes={routes}
                        action={{
                            type: "external",
                            route: "#",
                            label: "TALK TO US",
                            color: "info",
                            onclick: scrollToTestimonials,
                        }}
                        sticky
                    />
                ) : (
                    <CustomNavbar onNavigate={scrollToSection} onButtonClick={scrollToTestimonials} />
                )}
                <BlogPageBanner image={post.image} title={post.title} />

                <MKBox py={6} bgColor="white">
                    <Container>
                        <Breadcrumbs
                            routes={[
                                { label: "Home", route: "/" },
                                { label: "Blog", route: "/blog" },
                                { label: post.title },
                            ]}
                        />
                        <Typography variant="h3" my={2}>{post.title}</Typography>
                        <div style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
                            {/* <img src={post.image2} alt={post.title} style={{ width: "50%", borderRadius: 12 }} /> */}
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "45%" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                                    <PersonIcon fontSize="small" color="action" />
                                    <Typography variant="subtitle1" color="text.secondary">
                                        {post.author.name}
                                    </Typography>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <CalendarTodayIcon fontSize="small" color="action" />
                                    <Typography variant="subtitle2" color="text.secondary">
                                        {post.author.date}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        {Array.isArray(post.keyTakeaway) && post.keyTakeaway.length > 0 && (
                            <div style={{ marginTop: "3rem", backgroundColor: "#f9f9f9", padding: "1.5rem", borderRadius: "12px" }}>
                                <Typography variant="h5" gutterBottom>
                                    🔑 Key Takeaways
                                </Typography>
                                <ul style={{ paddingLeft: "1.5rem", margin: 0 }}>
                                    {post.keyTakeaway.map((point, index) => (
                                        <li key={index} style={{ marginBottom: "0.75rem" }}>
                                            <Typography variant="body1" color="text.primary" style={{ lineHeight: "1.8rem" }}>
                                                {point}
                                            </Typography>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}


                        <div
                            dangerouslySetInnerHTML={{ __html: post.content }}
                            style={{ marginTop: "1.5rem", lineHeight: "1.7rem" }}
                        />
                    </Container>
                </MKBox>
            </div>
            <FooterThress />
        </>
    );

}

export default BlogPostPage;


