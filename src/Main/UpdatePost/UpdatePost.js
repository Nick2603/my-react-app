import React from "react";
import styles from './UpdatePost.module.css';

class UpdatePosts extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         updateId: '',
         updateTitle: '',
      };
   };

   handleUpdate = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   };

   submitUpdate = (event) => {
      event.preventDefault();
      let { updateId, updateTitle } = this.state;
      if (this.props.posts.map(v => v.id).find(v => v === Number(updateId))) {
         fetch(`https://jsonplaceholder.typicode.com/posts/${updateId}`, {
            method: 'PATCH',
            body: JSON.stringify({
               title: `${updateTitle}`,
            }),
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
            },
         })
            .then((response) => response.json())
            .then((json) => console.log(json));
      } else {
         alert("This post doesn't exist, try another id!");
      };
      this.setState({
         updateId: '',
         updateTitle: '',
      });
   };

   render() {
      let { updateId, updateTitle } = this.state;
      return (
         <form className={styles.form} onSubmit={this.submitUpdate}>
            <div>Choose a new title for any post</div>
            <label htmlFor="updateId">Put post id</label>
            <input required
               id='updateId'
               name='updateId'
               type="text"
               value={updateId}
               onChange={this.handleUpdate}
            />
            <label htmlFor="updateTitle">Put new title</label>
            <input required
               id='updateTitle'
               name='updateTitle'
               type="text"
               value={updateTitle}
               onChange={this.handleUpdate}
            />
            <button type='submit'>Update post title</button>
         </form>
      )
   };
};

export default UpdatePosts;