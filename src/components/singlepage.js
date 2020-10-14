import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import JobSection from './jobsection';
import { getJobByPipelineId } from '../services/projects';
import temp from '../temp.json';

class SinglePage extends Component {
  //socket = socketIOClient(env.SOCKET_ENDPOINT);

  constructor(props) {
    super(props);
    this.state = { root: temp };
  }

  putDataFromSocket = data => {
    /*     console.log('UPDATE ',data )
        const newSockeData = { setResponse: data.message.inputstr, setTime: data.time , setCount: data.count};
        const copyOfJobs = this.paintCompletedTest(data.message)
        
        this.setState({ socketData: newSockeData , jobs: copyOfJobs}); */
  };

  async componentDidMount() {
    // this.socket.on(this.state.pipelineId, this.putDataFromSocket);
    // this.putDataForPage();
    const pipelineId = this.props.match.params.pipelineId;
    this.putDataForPage(pipelineId).then(receivedData => {
      this.setState({ root: receivedData });
    });
/*     try {
      setInterval(async () => {
        const receivedData = await this.putDataForPage(pipelineId);
        this.setState({ root: receivedData });
      }, 5000);
    } catch (e) {
      console.log(e);
    } */
  }

  componentWillUnmount() {
    // this.socket.off(this.state.pipelineId, this.putDataFromSocket);
  }

  putDataForPage = id => {
    //id = id? id:this.props.match.params.pipelineId
    
/*     return getJobByPipelineId(id).then(response => {
      // console.log(response.data);
      return response.data;
      // this.setState(response.data);
    }); */
    return temp
  };

  handlePageLoad = () => {};

  paintCompletedTest = message => {};

  render() {
    const jobs = this.state.root.map(jobData => JobView(jobData));
    return (
      <Container fluid>
        <Col className="p-2"></Col>
        {jobs}
      </Container>
    );
  }
}

const JobView = jobElem => {
  const listOfTests = jobElem.testList.map(testObj => {
    return { name: testObj.name, _id: testObj._id, status: testObj.status };
  });
  const testCount = listOfTests.length;
  const date = jobElem.date;
  const { jobName, result } = jobElem;
  const headerDetails = { jobName, result, testCount, date };
  return (
    <Row key={date}>
      <Col className="p-3">
        {<JobSection testList={listOfTests} header={headerDetails} />}
      </Col>
    </Row>
  );
};

export default SinglePage;
