import blogData from '@/data/blogdata.json';

export default function sitemap() {
    const baseUrl = 'https://www.webefytoday.com';
    const currentDate = new Date().toISOString();

    const staticPages = [
        { url: `${baseUrl}/`, lastModified: currentDate, priority: 1.0 },
        { url: `${baseUrl}/about`, lastModified: currentDate, priority: 0.8 },
        { url: `${baseUrl}/services`, lastModified: currentDate, priority: 0.9 },
        { url: `${baseUrl}/services/web-development`, lastModified: currentDate, priority: 0.8 },
        { url: `${baseUrl}/services/ai-automation`, lastModified: currentDate, priority: 0.8 },
        { url: `${baseUrl}/services/branding`, lastModified: currentDate, priority: 0.8 },
        { url: `${baseUrl}/case-studies`, lastModified: currentDate, priority: 0.7 },
        { url: `${baseUrl}/pricing`, lastModified: currentDate, priority: 0.7 },
        { url: `${baseUrl}/growth-plans`, lastModified: currentDate, priority: 0.7 },
        { url: `${baseUrl}/blog`, lastModified: currentDate, priority: 0.8 },
        { url: `${baseUrl}/start-a-project`, lastModified: currentDate, priority: 0.9 },
        { url: `${baseUrl}/solutions/ai-booking-agent`, lastModified: currentDate, priority: 0.8 },
    ];

    const blogPages = blogData.map(item => ({
        url: `${baseUrl}/blog/${item.slug}`,
        lastModified: currentDate,
        priority: 0.7,
    }));

    return [...staticPages, ...blogPages];
}