import { connect } from 'react-redux';
import Input from './Input.jsx';

const mapStoreToProps = store => ({
	output: store.output
})

export default connect(mapStoreToProps)(Input);