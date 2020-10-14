import axios from 'axios';
//const base = process.env.REACT_APP_BASE;
const base = `http://localhost:8080/api/projects`;
const stactrace_service = `http://localhost:2000/5f84983a2ee26f493494cacf.html`;
const snapshot_service = `http://localhost:4000/5f84983a2ee26f493494cae3.png`;
const video_service = `http://localhost:7000/5f84983a2ee26f493494cadb.mp4`;
const getJobByPipelineIdUrl = `${base}/`;
export const getJobByPipelineId = pipelineID => {
  console.log(getJobByPipelineIdUrl + pipelineID);
  return axios
    .get(getJobByPipelineIdUrl + pipelineID)
    .then(data => data)
    .catch(err => err);
};
