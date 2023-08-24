import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import { ContributorsDiv } from "./Contributors.Styles";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function Contributors() {
  const [contributors, setContributors] = useState([]);
  const [commits, setCommits] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingContributors, setLoadingContributors] = useState(true);
  const [loadingCommits, setLoadingCommits] = useState(true);
  const commitsPerPage = 5;

  useEffect(() => {
    const contributorsUrl =
      "https://api.github.com/repos/naduncalcey/pokemon-tcg-app/contributors";
    const commitsUrl =
      "https://api.github.com/repos/naduncalcey/pokemon-tcg-app/commits";

    const headers = new Headers({
      Authorization:
        "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",
    });

    // Fetch contributors
    fetch(contributorsUrl, { headers })
      .then((response) => response.json())
      .then((data) => {
        setContributors(data);
        setLoadingContributors(false);
      })
      .catch((error) => {
        console.error("Error fetching contributors:", error);
        setLoadingContributors(false);
      });

    // Fetch commits
    fetch(commitsUrl, { headers })
      .then((response) => response.json())
      .then((data) => {
        setCommits(data);
        setLoadingCommits(false);
      })
      .catch((error) => {
        console.error("Error fetching commits:", error);
        setLoadingCommits(false);
      });
  }, []);

  const contributorsArray = Object.values(contributors);

  const indexOfLastCommit = currentPage * commitsPerPage;
  const indexOfFirstCommit = indexOfLastCommit - commitsPerPage;
  const currentCommits = commits.slice(indexOfFirstCommit, indexOfLastCommit);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <ContributorsDiv>
      <div className="github-header">
        <h1 className="github-header--text">Github Stats</h1>
        <a
          href="https://github.com/naduncalcey/pokemon-tcg-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </a>
      </div>
      <div className="github-contributors">
        <h3 className="github-title">Project Contributors</h3>
        {loadingContributors ? (
          <CircularProgress />
        ) : (
          <div className="layout">
            {contributorsArray.map((contributor) => (
              <div className='github-card' key={contributor.id}>
                <div className="inner">
                  <img
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    width="50"
                    height="50"
                  />
                </div>
                <div className="inner">
                  <p>{contributor.login}</p>
                </div>
                <div className="inner">
                  <a
                    href={contributor.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <OpenInNewIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <h2>Previous Commits</h2>
      {loadingCommits ? (
        <CircularProgress />
      ) : (
        <ul>
          {currentCommits.map((commit) => (
            <li key={commit.sha}>{commit.commit.message}</li>
          ))}
        </ul>
      )}

      <Pagination
        count={Math.ceil(commits.length / commitsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
      />
    </ContributorsDiv>
  );
}

export default Contributors;
