import React from "react";
import styles from './DeletePost.module.css';

class DeletePost extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         deleteId: '',
      };
   };

   handleDelete = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   };

   submitDelete = (event) => {
      event.preventDefault();
      let { deleteId } = this.state;
      if (this.props.posts.map(v => v.id).find(v => v === Number(deleteId))) {
         fetch(`https://jsonplaceholder.typicode.com/posts/${deleteId}`, {
            method: 'DELETE',
         })
            .then(console.log(`Post with Id: ${deleteId} is deleted`));;
      } else {
         alert("This post doesn't exist, try another id!");
      };
      this.setState({
         deleteId: '',
      });
   };

   render() {
      let { deleteId } = this.state;
      return (
         <form className={styles.form} onSubmit={this.submitDelete}>
            <div>Choose a post to delete</div>
            <label htmlFor="deleteId">Put post id</label>
            <input required
               id='deleteId'
               name='deleteId'
               type="text"
               value={deleteId}
               onChange={this.handleDelete}
            />
            <button type='submit'>Delete a post</button>
         </form>
      )
   };
}

export default DeletePost;