function RecipesCardWithClass({
  nome,
  imagem,
  tempoPreparo,
  porcoes,
  ingredientes,
}) {
  //  JS

  return (
    <div className="card">
      <div className="card-wrapper">
        <div className="card-image">
          <img src={recipe.imagem} />
        </div>
        <div className="card-content">
          <h1>
            <strong>Nome:</strong> <span>{recipe.nome}</span>
          </h1>
          <p>
            <strong>Tempo de Preparo:</strong>{" "}
            <span>{recipe.tempoPreparo}</span>
          </p>
          <p>
            <strong>Porções:</strong> <span>{recipe.porcoes}</span>
          </p>
          <p>
            <strong>Ingredientes:</strong>
          </p>
          <ul>
            {recipe.ingredientes.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RecipesCardWithClass;
