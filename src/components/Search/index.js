import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import * as S from "./style";
import useGithub from "../../hooks/github-hook";
import { useState } from "react";

const Search = () => {
  const { getUser, getUserRepos, getUserStarred } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = (e) => {
    e.preventDefault();
    const nameForSearch = usernameForSearch?.replace(' ', '')?.toLowerCase();
    return nameForSearch
      ? (getUser(nameForSearch), getUserRepos(nameForSearch), getUserStarred(nameForSearch))
      : false;
  };
  return (
    <S.Wrapper>
      <S.SearchWrapper onSubmit={(e) => submitGetUser(e)}>
        <S.CssTextField
          fullWidth
          label="search"
          id="fullWidth"
          margin="none"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={(e) => setUsernameForSearch(e.target.value)}
          InputProps={{
            color: "primary",
            endAdornment: (
              <InputAdornment position="start">
                <S.Icon onClick={(e) => submitGetUser(e)}>
                  <SearchIcon color="warning" />
                </S.Icon>
              </InputAdornment>
            ),
          }}
        />
      </S.SearchWrapper>
    </S.Wrapper>
  );
};

export default Search;
