import { baseUrl } from "@/contant/constant";


export const getNews = async () => {
    try {
        const response = await fetch(`${baseUrl}/wp-json/wp/v2/posts?per_page=6&_embed`, { next: { revalidate: 3600 } });
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
        const res = await fetch(`${baseUrl}/wp-json/wp/v2/posts?slug=${slug}&_embed`, {
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


export const getProductsByCategory = async (category) => {
    try {
        const response = await fetch(`${baseUrl}/wp-json/wp/v2/product?categories=${category}`, { next: { revalidate: 3600 } });
        const data = await response.json();

        const formattedData = data.map(product => ({
            id: product.id,
            title: product.title.rendered,
            slug: product.slug,
            imageUrl: product.acf.image_url ? product.acf.image_url : null,
            logoUrl: product.acf.logo_url ? product.acf.logo_url : null,
            content: product.content.rendered,
            description: product.acf.short_description,
            sheetUrl: product.acf.sheet_url,
            sheetEditionUrl: product.acf.sheet_edition_url,
            url: product.slug,
            categories: product.categories,
            date: product.date,
        }));

        return formattedData;

    } catch (error) {
        console.error('Error fetching Products:', error);
        return [];
    }
};


export const getSingleProduct = async (slug) => {
    try {
        const res = await fetch(`${baseUrl}/wp-json/wp/v2/product?slug=${slug}&_embed`, {
            next: { revalidate: 3600 }, // Optional: revalidate every hour
        });

        const data = await res.json();

        if (!data.length) return null;

        const product = data[0];

        return {
            id: product.id,
            title: product.title.rendered,
            slug: product.slug,
            logoUrl: product.acf.logo_url ? product.acf.logo_url : null,
            thumbnail: product.acf.image_url ? product.acf.image_url : null,
            content: product.content.rendered,
            description: product.acf.short_description,
            sheetUrl: product.acf.sheet_url,
            sheetEditionUrl: product.acf.sheet_edition_url,
            categories: product.categories,
            date: product.date,
        };

    } catch (error) {
        console.error('Error fetching single post:', error);
        return null;
    }
};



export const getPanelsByCategory = async (category) => {
    try {
        const response = await fetch(`${baseUrl}/wp-json/wp/v2/panel?categories=${category}`, { next: { revalidate: 3600 } });
        const data = await response.json();

        const formattedData = data.map(panel => ({
            id: panel.id,
            title: panel.title.rendered,
            slug: panel.slug,
            imageUrl: panel.acf.image_url ? panel.acf.image_url : null,
            logoUrl: panel.acf.logo_url ? panel.acf.logo_url : null,
            content: panel.content.rendered,
            button_text: panel.acf.button_text,
            button_url: panel.acf.button_url,
            categories: panel.categories,
            date: panel.date,
        }));

        return formattedData;

    } catch (error) {
        console.error('Error fetching Products:', error);
        return [];
    }
};