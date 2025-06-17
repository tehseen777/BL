"use client"

import { useState } from "react"
import Image from "next/image"
import Button from "@/app/components/ui/button"
export default function RecentBlog() {
    const [visiblePosts, setVisiblePosts] = useState(6)

    const blogPosts = [
        {
            id: 1,
            title: "There Are Many Variations Of Passages Of Lorem Ipsum Available.",
            image: "/resources/latest_blog_1.png",
            category: "Business",
            date: "August 24, 2023",
            comments: 5,
            readTime: "5 min read",
        },
        {
            id: 2,
            title: "There Are Many Variations Of Passages Of Lorem Ipsum Available.",
            image: "/resources/latest_blog_2.png",
            category: "Marketing",
            date: "August 22, 2023",
            comments: 3,
            readTime: "4 min read",
        },
        {
            id: 3,
            title: "There Are Many Variations Of Passages Of Lorem Ipsum Available.",
            image: "/resources/latest_blog_3.png",
            category: "Technology",
            date: "August 20, 2023",
            comments: 8,
            readTime: "6 min read",
        },
        {
            id: 4,
            title: "There Are Many Variations Of Passages Of Lorem Ipsum Available.",
            image: "/resources/latest_blog_4.png",
            category: "Business",
            date: "August 18, 2023",
            comments: 2,
            readTime: "3 min read",
        },
        {
            id: 5,
            title: "There Are Many Variations Of Passages Of Lorem Ipsum Available.",
            image: "/resources/latest_blog_5.png",
            category: "Marketing",
            date: "August 16, 2023",
            comments: 4,
            readTime: "7 min read",
        },
        {
            id: 6,
            title: "There Are Many Variations Of Passages Of Lorem Ipsum Available.",
            image: "/resources/latest_blog_6.png",
            category: "Technology",
            date: "August 14, 2023",
            comments: 6,
            readTime: "5 min read",
        },
        {
            id: 7,
            title: "There Are Many Variations Of Passages Of Lorem Ipsum Available.",
            image: "/resources/latest_blog_1.png",
            category: "Business",
            date: "August 12, 2023",
            comments: 3,
            readTime: "4 min read",
        },
        {
            id: 8,
            title: "There Are Many Variations Of Passages Of Lorem Ipsum Available.",
            image: "/resources/latest_blog_2.png",
            category: "Marketing",
            date: "August 10, 2023",
            comments: 7,
            readTime: "6 min read",
        },
        {
            id: 9,
            title: "There Are Many Variations Of Passages Of Lorem Ipsum Available.",
            image: "/resources/latest_blog_3.png",
            category: "Technology",
            date: "August 8, 2023",
            comments: 4,
            readTime: "5 min read",
        },
    ]

    const loadMore = () => {
        setVisiblePosts((prev) => Math.min(prev + 3, blogPosts.length))
    }

    return (
        <section className=" py-16 px-4 md:px-28 bg-black">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-white text-5xl font-bold mb-8">Latest Blogs</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-6">
                    {blogPosts.slice(0, visiblePosts).map((post) => (
                        <div key={post.id} className="rounded-t-xl border border-[#292200]">
                      

                                <div className="relative h-50 rounded-t-xl  overflow-hidden">
                                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                                </div>

                            
                            <div className="p-4 space-y-1 bg-[#100F0D]">
                                <div className="flex items-center gap-x-6  text-[#F1DD80] text-sm">


                                    <span>{post.date}</span>


                                    <span>{post.comments} Comments</span>

                                </div>
                                <h3 className="text-white text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
                                <p className="text-gray-400 text-sm ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                                </p>

                            </div>
                        </div>

                    ))}
                </div>

                {visiblePosts < blogPosts.length && (
                    <div className="flex justify-center mt-10">
                 <Button
                 onClick={loadMore}
              text={"Explore More"}
            />
                    </div>
                )}
            </div>
        </section>
    )
}