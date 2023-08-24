import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';

function Contributors() {
  const [contributors, setContributors] = useState([]);
  const [commits, setCommits] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const commitsPerPage = 5;

  useEffect(() => {
    const contributorsUrl = 'https://api.github.com/repos/naduncalcey/pokemon-tcg-app/contributors';
    const commitsUrl = 'https://api.github.com/repos/naduncalcey/pokemon-tcg-app/commits';

    fetch(contributorsUrl)
      .then(response => response.json())
      .then(data => {
        setContributors(data);
      })
      .catch(error => {
        console.error('Error fetching contributors:', error);
      });

    fetch(commitsUrl)
      .then(response => response.json())
      .then(data => {
        setCommits(data);
      })
      .catch(error => {
        console.error('Error fetching commits:', error);
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
    <div>
      <h2>Contributors</h2>
      <ul>
        {contributorsArray.map(contributor => (
          <li key={contributor.id}>
            <img src={contributor.avatar_url} alt={contributor.login} width="50" height="50" />
            <a href={contributor.html_url} target="_blank" rel="noopener noreferrer">
              {contributor.login}
            </a>
          </li>
        ))}
      </ul>

      <h2>Previous Commits</h2>
      <ul>
        {currentCommits.map(commit => (
          <li key={commit.sha}>{commit.commit.message}</li>
        ))}
      </ul>

      <Pagination
        count={Math.ceil(commits.length / commitsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default Contributors;