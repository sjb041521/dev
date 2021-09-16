import React, { Component } from 'react'; 
import styles from './main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from "react-bootstrap";

class Detail_view extends Component  {
  state = {
    posts_detail: [],
  };
  


  async componentDidMount(match) {
      try {
          const keywords = this.props.match.params.list;
          const res = await fetch(`http://localhost:8000/data_you/${keywords}`);
          console.log(res);
          const posts_detail = await res.json();
          console.log(posts_detail)
          this.setState({
           posts_detail
        });
        
      } catch (e) {
          console.log(e);
      }
  }

  render() {
     
    return (
      <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={this.state.posts_detail.video_thumbnail} />
      <Card.Body>
        <Card.Title>{this.state.posts_detail.video_title}</Card.Title>
        <Card.Text>
        {this.state.posts_detail.video_description} 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
     );
    }

}

export default Detail_view;
