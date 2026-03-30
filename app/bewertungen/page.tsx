import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { COMPANY, REVIEWS } from "@/lib/data/content";
import { Star, MessageCircle } from "lucide-react";

// Schema.org JSON-LD for LocalBusiness with Reviews
function generateLocalBusinessSchema() {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY.name,
    "image": `${COMPANY.contact.website}/og-image.jpg`,
    "url": COMPANY.contact.website,
    "telephone": COMPANY.contact.phoneLink,
    "email": COMPANY.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY.address.street,
      "addressLocality": COMPANY.address.city,
      "postalCode": COMPANY.address.zip,
      "addressCountry": "CH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.0502,
      "longitude": 8.3093
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": "Luzern"
    }
  };

  // Add aggregate rating if available
  if (REVIEWS.aggregateRating) {
    return {
      ...baseSchema,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": REVIEWS.aggregateRating.ratingValue,
        "reviewCount": REVIEWS.aggregateRating.reviewCount
      },
      "review": REVIEWS.reviews.map(review => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.author
        },
        "datePublished": review.datePublished,
        "reviewBody": review.reviewBody,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.reviewRating,
          "bestRating": "5"
        }
      }))
    };
  }

  return baseSchema;
}

export const metadata: Metadata = {
  title: REVIEWS.meta.title,
  description: REVIEWS.meta.description,
};

export default function BewertungenPage() {
  const schema = generateLocalBusinessSchema();
  const hasReviews = REVIEWS.reviews.length > 0;

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Header />
      <main className="flex-1">
        {/* Hero Header */}
        <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-[rgb(var(--paper))]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-[rgb(var(--ink))] mb-4">
              {REVIEWS.headline}
            </h1>
            <p className="text-lg lg:text-xl text-[rgb(var(--ink-muted))] max-w-2xl">
              {REVIEWS.subheadline}
            </p>

            {/* Aggregate Rating Display (if available) */}
            {REVIEWS.aggregateRating && (
              <div className="mt-8 p-6 bg-[rgb(var(--paper-dark))] rounded-2xl inline-flex items-center gap-6">
                <div className="text-center">
                  <p className="font-heading text-5xl font-bold text-[rgb(var(--brand))]">
                    {REVIEWS.aggregateRating.ratingValue}
                  </p>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.round(REVIEWS.aggregateRating!.ratingValue)
                            ? "fill-[rgb(var(--brand))] text-[rgb(var(--brand))]"
                            : "text-[rgb(var(--line))]"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-sm text-[rgb(var(--ink-muted))]">Basierend auf</p>
                  <p className="font-medium text-[rgb(var(--ink))]">
                    {REVIEWS.aggregateRating.reviewCount} Google Bewertungen
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-12 lg:py-20 bg-[rgb(var(--paper-dark))]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            {hasReviews ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {REVIEWS.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-2xl shadow-apple"
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.reviewRating
                              ? "fill-[rgb(var(--brand))] text-[rgb(var(--brand))]"
                              : "text-[rgb(var(--line))]"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-[rgb(var(--ink-muted))] mb-4 leading-relaxed">
                      "{review.reviewBody}"
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-[rgb(var(--line))]">
                      <p className="font-medium text-[rgb(var(--ink))]">{review.author}</p>
                      <p className="text-sm text-[rgb(var(--ink-muted))]">
                        {new Date(review.datePublished).toLocaleDateString("de-CH")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-[rgb(var(--brand))]/10 rounded-full">
                  <MessageCircle className="w-8 h-8 text-[rgb(var(--brand))]" />
                </div>
                <h2 className="font-heading text-xl font-medium text-[rgb(var(--ink))] mb-2">
                  Noch keine Bewertungen
                </h2>
                <p className="text-[rgb(var(--ink-muted))] max-w-md mx-auto">
                  Wir freuen uns über Ihr Feedback! Helfen Sie anderen Kunden, 
                  indem Sie Ihre Erfahrung mit uns teilen.
                </p>
                <a
                  href={`https://search.google.com/local/writereview?placeid=PLACE_ID_HERE`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[rgb(var(--brand))] text-white rounded-full font-medium hover:bg-[rgb(var(--brand-dark))] transition-colors"
                >
                  Bewertung schreiben
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Google Review CTA */}
        <section className="py-16 lg:py-24 bg-[rgb(var(--paper))]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-[rgb(var(--ink))] mb-4">
              Haben Sie mit uns gearbeitet?
            </h2>
            <p className="text-[rgb(var(--ink-muted))] mb-8 max-w-xl mx-auto">
              Ihre Meinung ist uns wichtig. Teilen Sie Ihre Erfahrung auf Google 
              und helfen Sie anderen bei der Auswahl des richtigen Malers.
            </p>
            <a
              href={`https://search.google.com/local/writereview?placeid=PLACE_ID_HERE`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[rgb(var(--brand2))] text-white rounded-full font-medium hover:bg-[rgb(var(--brand2-light))] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google Bewertung schreiben
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
