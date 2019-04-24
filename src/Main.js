// Main.js

import React from 'react';
import marked from 'marked';
// In order to use the marked capability
// I had to install marked from this
// project's directory using:
// "npm install marked"
import Editor from './Editor';
import Previewer from './Previewer';

const defaultInput1 = `# Hi h1 tag.

## Hi h2 tag.

Does anyone want to see some **bold** text?

Feel free to check out my [Personal Portfolio Page](https://terry-sydaus.github.io/FreeCodeCampStuff/Personal-Portfolio-Page).

In order to create this Markdown Previewer App, I had to use Marked.js which in turn required me to install this markdown compiler from the command line with the `;

const defaultInput2 = '`npm install marked`';

const defaultInput3 = ` command.
  
And of course this app has required a whole lot of javascript and JSX, some of which can be seen below:`;

const defaultInput4 = '\n```javascript\nconst Previewer = (props) => (\n  <div\n    style={style}\n    id={props.id}\n    dangerouslySetInnerHTML={props.htmlObject}\n  />\n);\n```';

const defaultInput5 = `
React is so cool and the above code shows some of the features of this framework, such as:

1. Functional components
1. The use of props
 1. Special interest in the `;

const defaultInput6 = '`dangerouslySetInnerHTML` ';

const defaultInput7 = `prop.

And just in case any of you didn't quite get how much I love react, let me take the opportunity to remind you all:

> I love React very much!

And how do you recognise React when you see it, what better way than to identify it through it *reactive* icon, shown below:
`;

const defaultInput = defaultInput1 + defaultInput2 + defaultInput3 + defaultInput4+ defaultInput5 + defaultInput6 + defaultInput7;

class Main extends React.Component {
  state = {
    input: defaultInput
    //input: temp2 
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  convertMarkdownToHTML() {
    let markup = marked(this.state.input,
      {sanitize: true});
    console.log(markup);
    return { __html: markup };
  }

  componentDidMount() {
    this.convertMarkdownToHTML();
  }

  render() {
    return (
      <div className='main'>
	<Editor
	  id='editor'
	  onTxtChange={this.handleChange}
	  value={this.state.input}
	/>
	<Previewer
	  id='preview'
	  htmlObject={this.convertMarkdownToHTML()}
	/>
    </div>
    )
  }
}

export default Main;
