import { connect } from 'react-redux'
import Navs from './navs';
import * as actions from '../action';

const mapStateToProps = (state, ownProps) => {
    let {clickData} = state;
    return {
        clickData
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, actions)(Navs);
