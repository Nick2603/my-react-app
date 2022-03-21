import React from "react";
import UpdatePost from "../UpdatePost/UpdatePost";
import DeletePost from "../DeletePost/DeletePost";
import styles from './GetPosts.module.css';

class GetPosts extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         result: [],
         show: false,
      };
   };

   getPosts = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
         .then((response) => response.json())
         .then((result) => {
            this.setState({
               result,
            });
         })
         .catch(error => console.log(error));
   };

   componentDidMount() {
      this.getPosts();
   };

   handleShowUsers = () => {
      this.setState(prevState => ({
         show: !prevState.show,
      }));
   };

   render() {
      let { result } = this.state;
      let numberOfPosts = 3;
      let posts = this.state.result.filter(post => post.id <= numberOfPosts);
      return (
         <div className={styles.wrapper}>
            <div className={styles.posts}>
               <button onClick={this.handleShowUsers}>{this.state.show ? 'Hide posts' : `Show ${numberOfPosts} first posts`}</button>
               {this.state.show ? posts.map(post => <div className={styles.post} key={post.id}>
                  <h4>{post.title}</h4>
                  <div>{post.body}</div>
               </div>) : null}
            </div>
            <div className={styles.controls}>
               <UpdatePost posts={result} />
               <DeletePost posts={result} />
            </div>
         </div>
      )
   };
};

export default GetPosts;