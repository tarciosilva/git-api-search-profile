import * as S from "./style";
import RepositotyItem from "./RepositoryItems";
import useGithub from "../../hooks/github-hook";
import Slide from '@mui/material/Slide';
import { useRef } from "react";

const Repository = () => {
  const { githubState } = useGithub();
  const containerRef = useRef(null);

  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
      selected="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>

      <S.WrapperTabPanel ref={containerRef}>
        {githubState?.repositories.map((repository) => {
          return (
            <Slide in={repository ? true : false} container={containerRef.current}>
              <RepositotyItem
                key={repository?.id}
                name={repository?.name}
                fullName={repository?.full_name}
                linkToRepo={repository?.html_url}
              />
            </Slide>
          );
        })}
      </S.WrapperTabPanel>

      <S.WrapperTabPanel>
        {githubState?.starred.map((starred) => {
          return (
            <RepositotyItem
              key={starred?.id}
              name={starred?.name}
              fullName={starred?.full_name}
              linkToRepo={starred?.html_url}
            />
          );
        })}
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  );
};
export default Repository;
