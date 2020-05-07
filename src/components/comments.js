import React from 'react'

class Comments extends React.Component {

    state = {
        comments: []
    };

    fetchComments = () => {
        fetch('http://localhost:8080/comments')
            .then(res => res.json())
            .then((data) => {
                
                this.setState({ comments: data })
            })
            .catch(console.log)
    }

    updateComments = (data) => {

        this.fetchComments();

    };

    componentDidMount() {
        this.fetchComments();
    }
    
    render() {
        let comments = this.props.comments; 
        let cb = this.updateComments();
        
        if (comments.length === 0) return (<div></div>)
        
        return (
            <div>
                {comments.map((comment) => (
                    <div key={comment.id} className="comment" data-id={comment.id}>
                        <div className="comment_name_wrapper">
                            <h6 className="comment_name">{comment.name}</h6>
                        </div>
                        <div className="comment_date">{comment.inserted}</div>
                        <div className="comment_text">{comment.comment}</div>
                        <AddComment parent_id={comment.id} updateCB={cb}/>
                        <div className="child">
                            <Comments comments={comment.children} updateCB={cb} />
                        </div>
                    </div>
                ))}
            </div>
        )
    };
}


class AddComment extends React.Component {

    handleClick = (event) => {
        let comment_name = event.target.parentElement.getElementsByClassName('add-comment-name')[0].value;
        let comment_text = event.target.parentElement.getElementsByClassName('add-comment-text')[0].value;
        let comment_parent = event.target.getAttribute('data-parent_id'); //for now


        event.target.parentElement.getElementsByClassName('add-comment-name')[0].value = "";
        event.target.parentElement.getElementsByClassName('add-comment-text')[0].value = "";
        
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
        }).then(res => res.json());



    }
    
    render() {
        return (
            <div>
                <div className="add_comment_form form-group">
                    <div className="new_name form-control">
                        <label> Name: </label><br/>
                        <input type="text" name="name" className="add-comment-name"/>
                    </div>
                    <div className="form-control">
                        <label>Comment: </label>
                        <textarea name="comment" className="add-comment-text form-control"></textarea>
                    </div>
                    <button className="submit_comment" data-parent_id={this.props.parent_id} onClick={this.handleClick}> Submit</button>
                </div>
            </div>
        )
    };
}

export {Comments, AddComment} 

