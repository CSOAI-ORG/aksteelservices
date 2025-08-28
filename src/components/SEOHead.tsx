import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import socialShareImage from "@/assets/social-share-image.jpg";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  schemaData?: object;
  ogImage?: string;
  ogImageAlt?: string;
}

const SEOHead = ({ title, description, keywords, canonicalUrl, schemaData, ogImage, ogImageAlt }: SEOHeadProps) => {
  const location = useLocation();
  const baseUrl = "https://aksteelservices.com";
  const fullUrl = canonicalUrl || `${baseUrl}${location.pathname}`;
  const imageUrl = ogImage || `${baseUrl}${socialShareImage}`;
  const imageAlt = ogImageAlt || "AK Steel Services - Professional Steel Fabrication in Kent & London";

  useEffect(() => {
    // Set title
    document.title = title;

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Set keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      } else {
        const meta = document.createElement("meta");
        meta.name = "keywords";
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }

    // Set canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", fullUrl);
    } else {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = fullUrl;
      document.head.appendChild(link);
    }

    // Set Open Graph tags
    const ogTags = [
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: fullUrl },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "AK Steel Services" },
      { property: "og:image", content: imageUrl },
      { property: "og:image:alt", content: imageAlt },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:locale", content: "en_GB" },
      { property: "business:contact_data:street_address", content: "Kent" },
      { property: "business:contact_data:locality", content: "Gravesend" },
      { property: "business:contact_data:region", content: "Kent" },
      { property: "business:contact_data:postal_code", content: "DA12" },
      { property: "business:contact_data:country_name", content: "United Kingdom" },
      { property: "place:location:latitude", content: "51.4394" },
      { property: "place:location:longitude", content: "0.3671" },
    ];

    ogTags.forEach(({ property, content }) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (ogTag) {
        ogTag.setAttribute("content", content);
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute("property", property);
        meta.content = content;
        document.head.appendChild(meta);
      }
    });

    // Set Twitter Card tags
    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
      { name: "twitter:image:alt", content: imageAlt },
      { name: "twitter:site", content: "@aksteelservices" },
      { name: "twitter:creator", content: "@aksteelservices" },
    ];

    twitterTags.forEach(({ name, content }) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (twitterTag) {
        twitterTag.setAttribute("content", content);
      } else {
        const meta = document.createElement("meta");
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    });

    // Add schema.org structured data
    if (schemaData) {
      let schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (schemaScript) {
        schemaScript.textContent = JSON.stringify(schemaData);
      } else {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(schemaData);
        document.head.appendChild(script);
      }
    }

  }, [title, description, keywords, fullUrl, schemaData, imageUrl, imageAlt]);

  return null;
};

export default SEOHead;