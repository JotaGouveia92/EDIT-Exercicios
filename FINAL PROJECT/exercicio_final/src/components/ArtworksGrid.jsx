import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ArtworksGrid() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArtworks() {
      try {
        const res = await fetch(
          "https://api.artic.edu/api/v1/artworks/search?q=cats&query[term][is_public_domain]=true"
        );
        const data = await res.json();

        const firstResults = data.data.slice(0, 3);

        const detailed = await Promise.all(
          firstResults.map(async (art) => {
            const resArt = await fetch(
              `https://api.artic.edu/api/v1/artworks/${art.id}`
            );
            const artData = await resArt.json();
            return {
              ...art,
              image_id: artData.data.image_id,
            };
          })
        );

        setArtworks(detailed);
      } catch (err) {
        console.error("Erro", err);
      } finally {
        setLoading(false);
      }
    }
    fetchArtworks();
  }, []);

  useEffect(() => {
    // console.log("Estado artworks atualizado:", artworks);
  }, [artworks]);

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="artworksGrid">
      <div className="wrapper">
        <div className="artworksGrid__container">
          {artworks.map((art) => (
            <div className="artworksGridt__column" key={art.id}>
              <div className="artworksGrid__card">
                <figure>
                  <img
                    src={
                      art.image_id
                        ? `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`
                        : art.thumbnail?.lqip || "/images/placeholder.jpg"
                    }
                    alt={art.thumbnail?.alt_text || art.title}
                  />
                </figure>

                <div className="artworksGrid__content">
                  <div className="artworksGrid__text">
                    <h2 className="artworksGrid__text-title">{art.title}</h2>
                    <p className="artworksGridt__text-description">
                      {art.artist_display || "Artista desconhecido"}
                    </p>
                  </div>
                  <div className="artworksGrid__text-icon">
                    <Link to="/work" className="artworksGrid__text-icon">
                      <img
                        src="/images/icons/arrow-up-right.svg"
                        alt="Arrow Up Right Icon"
                      />
                    </Link>
                  </div>
                </div>
                <div className="artworksGrid__tags">
                  <span className="tag-03">Arte</span>
                  <span className="tag-03">Cats</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
