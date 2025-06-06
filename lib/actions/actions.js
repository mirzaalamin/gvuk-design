export const getNews = async () => {
    try {
        const response = await fetch('https://www.gvukdesign.co.uk/wp-json/wp/v2/posts?per_page=6&_embed', { next: { revalidate: 3600 } });
        const data = await response.json();

        const formattedData = data.map(post => ({
            id: post.id,
            title: post.title.rendered,
            slug: post.slug,
            thumbnail: post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : null,
            content: post.content.rendered,
            excerpt: post.excerpt.rendered,
            url: post.link,
            categories: post.categories,
            date: post.date,
        }));

        return formattedData;

    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
};

export const getSingleNews = async (slug) => {
    try {
        const res = await fetch(`https://www.gvukdesign.co.uk/wp-json/wp/v2/posts?slug=${slug}&_embed`, {
            next: { revalidate: 3600 }, // Optional: revalidate every hour
        });

        const data = await res.json();

        if (!data.length) return null;

        const post = data[0];

        return {
            id: post.id,
            title: post.title.rendered,
            slug: post.slug,
            thumbnail: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
            content: post.content.rendered,
            categories: post.categories,
            date: post.date,
        };

    } catch (error) {
        console.error('Error fetching single post:', error);
        return null;
    }
};