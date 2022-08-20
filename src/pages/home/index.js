import * as S from "./styles";

const Home = () => {
  const movies = [
    {
      id: 1,
      title: "Spider man",
      image_url: "https://i.pinimg.com/736x/4b/35/84/4b3584e56a1fb8e48093e5ddb1caed8e.jpg",
    },
    {
      id: 2,
      title: "Batman",
      image_url: "https://img.elo7.com.br/product/original/3FBBED5/big-poster-filme-batman-2022-90x60-cm-lo004-presente-geek.jpg",
    },
    {
      id: 3,
      title: "Avangers",
      image_url: "https://img.elo7.com.br/product/zoom/1DC8235/big-poster-avengers-infinity-war-tamanho-90x-0-cm-lo001-avengers.jpg",
    },
  ];
  return (
    <S.Container>
      <h1> Movies </h1>
      <S.MovieList>
        {movies.map((movie) => {
          return (
            <S.Movie key={movie.id}>
              <a href="https://google.com.br">
                <img src={movie.image_url} alt={movie.title} />
              </a>
              <span>{movie.title}</span>
            </S.Movie>
          );
        })}
      </S.MovieList>
    </S.Container>
  );
};

export default Home;
