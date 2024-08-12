import { createContext, useState, useCallback } from "react";
import api from "../services/api";

export const GithubContext = createContext({
  loading: false,
  user: {},
  repository: [],
  starred: [],
});

const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({
    user: {
      login: undefined,
      name: undefined,
      avatar:
        "https://media.istockphoto.com/id/1147544807/pt/vetorial/thumbnail-image-vector-graphic.jpg?s=1024x1024&w=is&k=20&c=UdpQxmFWK0gkGWWYztnDThtFsBZik9eDGrxyQ4rYCEs=",
      publicUrl: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
      company: undefined,
      blog: undefined,
      location: undefined,
      bio: undefined,
    },
    repositories: [],
    starred: [],
  });

  const getUser = (username) => {
    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    api
      .get(`users/${username}`)
      .then(({ data }) => {
        setGithubState((prevState) => ({
          ...prevState,
          hasUser: true,
          user: {
            id: data.id,
            avatar: data.avatar_url,
            login: data.login,
            name: data.name,
            html_url: data.html_url,
            blog: data.blog,
            company: data.company,
            location: data.location,
            followers: data.followers,
            following: data.following,
            public_gists: data.public_gists,
            public_repos: data.public_repos,
            bio: data.bio,
          },
        }));
      })
      .catch(function (error) {
        if (error.response) {
          alert("Usuário não encontrado...!");

          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      })
      .finally(() => {
        setGithubState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
  };

  const getUserRepos = (username) => {
    api
      .get(`users/${username}/repos`)
      .then(({ data }) => {
        setGithubState((prevState) => ({
          ...prevState,
          repositories: data,
        }));
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.status);
        }
      });
  };

  const getUserStarred = (username) => {
    api
      .get(`users/${username}/starred`)
      .then(({ data }) => {
        setGithubState((prevState) => ({
          ...prevState,
          starred: data,
        }));
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.status);
        }
      });
  };

  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []),
    getUserRepos: useCallback((username) => getUserRepos(username), []),
    getUserStarred: useCallback((username) => getUserStarred(username), []),
  };

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};
export default GithubProvider;
