import React, { useEffect, useState } from "react";
import { fetchGetRequest } from "../../network";
import { getSingleGistUrl } from "../../config";
import Forks from "../../components/forks";
import { useLocation } from "react-router-dom";
import "./styles.css";

/**
 * @param {object} props - props passed to gistDetails
 * @description - show the gist details data. This will keep the user engaged and forks are loaded by another api call.
 */

function GistDetails(props) {
  const location = useLocation();
  const { description, files, id } = location.state;
  const gistId = id;
  const [gist, setGist] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSingleGist = async () => {
      setLoading(true);
      try {
        const res = await fetchGetRequest(getSingleGistUrl(gistId));
        if (res.forks.length) {
          //if there is data returned by Github API
          setGist(res);
        } else {
          setError(`No forks.`);
        }
      } catch (err) {
        console.log(`failed on fetching user gits`, err);
        setError(`Some problem while fetching call`, err?.status);
      } finally {
        setLoading(false);
      }
    };
    fetchSingleGist();
  }, [gistId]);

  const renderForks = () => {
    const { forks = [] } = gist || {};
    if (isLoading) {
      return <p className="text-secondary">Loading ...</p>;
    }
    if (forks.length && !error) {
      return <Forks forks={forks.slice(0, 3)} />;
    } else {
      return <span className="text-danger indent-left">{error}</span>;
    }
  };

  return (
    <div className="container">
      <div className="details-box">
        <p className="lead">{description || "No Description"}</p>
        <div className="files-box">
          <p className="text-primary">Files:</p>
          <ul className="indent-left">
            {Object.values(files).map((file, index) => {
              return (
                <li key={index} className="text-secondary">
                  <a
                    without={file.filename.toString()}
                    rel="noreferrer"
                    href={file.raw_url}
                    target="_blank"
                    className="text-secondary"
                  >
                    {file.filename}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="forks-box">
          <p className="text-primary">Forks:</p>
          {renderForks()}
        </div>
      </div>
    </div>
  );
}

export default GistDetails;
