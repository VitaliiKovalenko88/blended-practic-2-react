import { StyledList, StyledItemFilms } from './FilmList.styled';

export const FilmsList = ({ films }) => {
  return (
    <StyledList>
      {films.map(({ id, backdrop_path, title }) => {
        return (
          <StyledItemFilms key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w400/${backdrop_path}`}
              alt={title}
            />
          </StyledItemFilms>
        );
      })}
    </StyledList>
  );
};
