import { connect } from 'react-redux';
import {incrementLikes, decrementLikes} from './redux/actions';

function Likes(props) {
    console.log(props);
    return (
        <div className='button-controls'>
            <button onClick={props.onInrementLikes}>&#9829; {props.likes}</button>
            <button onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    )
}

function mapStateToProps(state) {
    const {likesReducer} = state;
    return {
        likes: likesReducer.likes,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onInrementLikes: () => {
            return dispatch(incrementLikes());// запускаем action
        },
        onDecrementLikes: () => {
            return dispatch(decrementLikes());// запускаем action
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);