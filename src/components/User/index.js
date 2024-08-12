import * as S from "./style";
import Link from "../Link";
import useGithub from "../../hooks/github-hook";

const User = () => {
  const { githubState } = useGithub();
  const userPersonalInfo = {
    name: `${githubState.user?.name ? githubState.user?.name : "N/A"}`,
    login: `${githubState.user?.login ? githubState.user?.login : "N/A"}`,
    company: `${githubState.user?.company ? githubState.user?.company : "N/A"}`,
    location: `${
      githubState.user?.location ? githubState.user?.location : "N/A"
    }`,
  };

  return (
    <S.Wrapper>
      <S.UserHeader>
        <h1>{userPersonalInfo.name}</h1>
        <S.Image src={githubState.user?.avatar} alt="User's Avatar" />
      </S.UserHeader>
      <S.UseDescription>
        <div>
          <h3>Username:</h3>
          <Link
            href={githubState.user?.html_url}
            target="_blank"
            rel="noreferrer"
            size={"1.25rem"}
          >
            {userPersonalInfo.login}
          </Link>
        </div>
        <div>
          <h3>Company: </h3>
          <span>{userPersonalInfo.company}</span>
        </div>
        <div>
          <h3>Location: </h3>
          <span>{userPersonalInfo.location}</span>
        </div>
        <div>
          <h3>Follower: </h3>
          <span>{githubState.user?.followers}</span>
        </div>
        <div>
          <h3>Repo Starreds: </h3>
          <span>{githubState?.starred?.length}</span>
        </div>
        <div>
          <h3>Followings: </h3>
          <span>{githubState.user?.following}</span>
        </div>
      </S.UseDescription>
    </S.Wrapper>
  );
};
export default User;
