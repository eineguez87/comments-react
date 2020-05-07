import React from "react";
import Comments from "./comments";


class AddCommentButton extends React.Component {
 
    handleClick = (event) => {
        let comment_name = event.target.parentElement.getElementsByClassName('add-comment-name')[0].value;
        let comment_text = event.target.parentElement.getElementsByClassName('add-comment-text')[0].value;
        let comment_parent = 0; //for now
        
        
        fetch('http://localhost:8000/comments', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: comment_name,
                comment: comment_text,
                parent_id: comment_parent
            })
        }).then(res => res.json())
          .then((data) => {
              this.props.updateCB(data);
                return (
                    <Comments comments={[data]}/>
                )
              
          });
        
        
        
    }

    render() {
        return (
            <button className="submit_comment" data-parent_id={this.props.parent_id} onClick={this.handleClick}> Submit</button>
        );
    }
}

export default AddCommentButton
