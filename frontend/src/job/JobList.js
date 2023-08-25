import React, { useState, useEffect } from "react";
import JobCardList from "./JobCardList";
import JoblyApi from "../api/api";
import LoadingSpinner from "../support/LoadingSpinner";
import SearchForm from "../form/SearchForm";

function JobList() {
  console.debug("JobList");
  const [jobs, setJobs] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  async function getJobs(searchTerm) {
    return searchTerm ? JoblyApi.getJobs(searchTerm) : JoblyApi.getAllJobs();
  }

  useEffect(() => {
    async function fetchData() {
      const jobs = await getJobs(searchTerm);
      setJobs(jobs);
      console.debug(jobs);
    }

    fetchData();
  }, [searchTerm]);

  function search(term) {
    console.log("Set Search Term: ", term);
    setSearchTerm(term);
  }

  if (!jobs) return <LoadingSpinner />;

  return (
    <div>
      <SearchForm search={search} />
      {jobs.length ? (
        <JobCardList jobs={jobs} />
      ) : (
        <p>Sorry! There are no jobs available</p>
      )}
    </div>
  );
}

export default JobList;
  //for movielist, to filter all movies info whIch are in movielists
  // data is an array of arrays
  // each array contains 2 element is id and name of movie.