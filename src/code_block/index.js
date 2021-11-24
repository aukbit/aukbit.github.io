import React, {Component} from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js'
import './code_block.css'

class CodeBlock extends Component {

  rootRef = React.createRef();

  componentDidMount() {
    if (this.rootRef) {
      hljs.highlightBlock(this.rootRef.current);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.rootRef) {
      hljs.highlightBlock(this.rootRef.current);
    }
  }

 	render() {
		return (
      <pre className="code-block" ref={this.rootRef}>
        <code>{this.props.children}</code>
      </pre>
    )
	}
}

CodeBlock.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default CodeBlock;
  