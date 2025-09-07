// utils/metadata.js
export function generateMetadata({
    title,
    description,
    canonical,
    type = "article",
    locale = "en_GB",
    siteName = "GVUK Design"
}) {
    return {
        title,
        description,
        alternates: {
            canonical,
        },
        openGraph: {
            title,
            url: canonical,
            siteName,
            locale,
            type,
        },
        twitter: {
            card: "summary_large_image",
            site: "@gvukdesign",
        },
        metadataBase: new URL("https://www.gvukdesign.co.uk"),
    };
}
