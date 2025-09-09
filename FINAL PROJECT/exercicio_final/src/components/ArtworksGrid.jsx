import { useEffect, useState } from "react";

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
        console.error("Erro ao buscar artworks:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchArtworks();
  }, []);

  useEffect(() => {
    console.log("Estado artworks atualizado:", artworks);
  }, [artworks]);

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="gridContent">
      <div className="wrapper">
        <div className="gridContent__container">
          {artworks.map((art) => (
            <div className="gridContent__column" key={art.id}>
              <div className="gridContent__card">
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

                <div className="gridContent__content">
                  <div className="gridContent__text">
                    <h2 className="gridContent__text-title">{art.title}</h2>
                    <p className="gridContent__text-description">
                      {art.artist_display || "Artista desconhecido"}
                    </p>
                  </div>
                  <div className="gridContent__text-icon">
                    <img
                      src="/images/arrow-up-right.svg"
                      alt="Arrow Up Right Icon"
                    />
                  </div>
                </div>
                <div className="gridContent__tags">
                  <span className="tag-02">Arte</span>
                  <span className="tag-02">Cats</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
