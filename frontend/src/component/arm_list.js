import React, { Component } from 'react'; 
import styles from './main.css'
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from "react-bootstrap";
class Viewer extends Component {
  state = {
      posts: []
  };

  async componentDidMount()   {
      try {
          const res = await fetch(`http://localhost:8000/arm_list/`);
          const posts = await res.json();
          this.setState({
              posts
          });
      } catch (e) {
          console.log(e);
      }
  }

  render() {
    return (
        <div><h2 className="text_font form_title">팔 운동 추천</h2>
        <div className="main_view_form">
            
              {this.state.posts.map(item => (
                <div  className="main_view" key={item.no}><Link to={`/detail/${item.no} ` } className="link_viewer_detail">
                  <div >
                  <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={item.video_thumbnail} />
                      <Card.Body>
                      <Card.Title>{item.video_title}</Card.Title>
                      <Button variant="primary">영상 보기</Button>
                      </Card.Body>
                      </Card>
                  </div>
                  </Link> 
                </div>
            ))}
            
        </div>
        </div>
    );
}
}

export default Viewer;
