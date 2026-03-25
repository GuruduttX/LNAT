import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  name?: string;
  type?: string;
  canonicalUrl?: string;
}

export default function SEO({ 
  title = "Best LNAT Coaching in Delhi NCR | Law Prep Tutorial", 
  description = "Prepare for LNAT with India's best coaching institute. Expert faculty, mock tests, essay training & 1-on-1 mentorship. Get into Oxford, Cambridge, UCL & more. Book a free demo today!", 
  name = "Law Prep Tutorial", 
  type = "website",
  canonicalUrl
}: SEOProps) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      
      {/* End standard metadata tags */}
      
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      {/* End Facebook tags */}
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* End Twitter tags */}

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
}
