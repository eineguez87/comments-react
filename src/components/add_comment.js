import React from 'react'
import AddCommentButton from './add_comment_button';


class AddComment extends React.Component {
    
    render() {
        let parent_id = this.prop.parent_id;
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
                    <AddCommentButton updateCP={this.props.updateComments()} parent_id={parent_id}/>
                </div>
            </div>
        )
    };
}
export default AddComment
