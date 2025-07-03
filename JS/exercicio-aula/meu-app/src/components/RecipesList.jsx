import React from "react";
import RecipesCardWithClass from "./RecipesCardWithClass";
import "./Recipes.css";

function RecipesList() {
  const recipes = [
    {
      id: 2,
      nome: "Salada de Quinoa",
      imagem:
        "https://plus.unsplash.com/premium_photo-1705003210677-11bbd1392bbf?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1705003210677-11bbd1392bbf?q=80&w=400&h=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imagemAlt: "Foto de Salada de Quinoa",
      tempoPreparo: "20 minutos",
      porcoes: 2,
      ingredientes: [
        "1 chávena de quinoa",
        "2 chávenas de água",
        "1 pepino",
        "10 tomates cherry",
        "1/2 cebola roxa",
        "Salsa e hortelã a gosto",
        "Azeite, limão, sal e pimenta",
      ],
    },
    {
      id: 3,
      nome: "Panquecas de Aveia",
      imagem:
        "https://images.unsplash.com/photo-1630441508966-431c08536d1b?q=80&w=400&h=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tempoPreparo: "15 minutos",
      porcoes: 4,
      ingredientes: [
        "1 banana madura",
        "2 ovos",
        "1/2 chávena de flocos de aveia",
        "1 colher de chá de fermento",
        "Canela a gosto",
        "Mel ou xarope de ácer para servir",
      ],
    },
    {
      id: 4,
      nome: "Frango Grelhado com Legumes",
      imagem:
        "https://images.unsplash.com/photo-1543340713-1bf56d3d1b68?q=80&w=400&h=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tempoPreparo: "40 minutos",
      porcoes: 3,
      ingredientes: [
        "3 peitos de frango",
        "1 brócolis pequeno",
        "2 cenouras",
        "Azeite, sal e pimenta a gosto",
        "Ervas finas",
      ],
    },
    {
      id: 5,
      nome: "Sopa de Abóbora",
      imagem:
        "https://plus.unsplash.com/premium_photo-1663846768626-f2bccb5d9775?q=80&w=400&h=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tempoPreparo: "35 minutos",
      porcoes: 4,
      ingredientes: [
        "500g de abóbora",
        "1 batata média",
        "1 cebola",
        "2 dentes de alho",
        "1 litro de caldo de legumes",
        "Sal, pimenta e noz-moscada a gosto",
        "Natas para servir (opcional)",
      ],
    },
    {
      id: 6,
      nome: "Tosta Mista",
      imagem:
        "https://plus.unsplash.com/premium_photo-1739906794633-71adada97314?q=80&w=400&h=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imagemAlt: "Foto de Tosta Mista",
      tempoPreparo: "10 minutos",
      porcoes: 1,
      ingredientes: [
        "2 fatias de pão de forma",
        "2 fatias de fiambre",
        "2 fatias de queijo",
        "Manteiga para barrar",
      ],
    },
  ];

  return (
    <div>
      {recipes.map((recipe) => (
        <div className="card" key={recipe.id}>
          <div className="card-wrapper">
            <h2>{recipe.nome}</h2>
            <img src={recipe.imagem} />
            <p>
              <strong>Tempo de Preparo:</strong> {recipe.tempoPreparo}
            </p>
            <p>
              <strong>Porções:</strong> {recipe.porcoes}
            </p>
            <ul className="sem-bullets">
              <strong>Ingredientes:</strong>
              {recipe.ingredientes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipesList;
