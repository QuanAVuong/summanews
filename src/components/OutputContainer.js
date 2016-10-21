import { connect } from 'react-redux';
import Output from './Output.jsx';

const mapStoreToProps = store => ({
	output: store.output
})

export default connect(mapStoreToProps)(Output);