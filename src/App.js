import logo from './assets/aukbit_logo.svg';
import CodeBlock from './code_block';
import './App.css';

const gist = `#!/bin/bash
#---------------------------------------------------------------------------------#
#                                                                                 #
# Hey, we are Aukbit.                                                             #
#                                                                                 #
# We are a digital company focused on software design.                            #
#                                                                                 #
# We combine our passion with creative thinking to deliver solutions on the web.  #
# We collaborate with Freelancers, Start-ups, Small business, Corporations,       #
# in short - we partner with people we trust, powering up ideas to create         #
# customer value. We love open source technologies and we write code for good.    #
#                                                                                 #
# If you have some ideas for your next project or just check what we are up to,   #
# you are more than welcome to send your greetings to hey@aukbit.com.             #
#                                                                                 #
# Until next time, Stay tuned.                                                    #
#                                                                                 #
#---------------------------------------------------------------------------------#
`

function App() {
  return (
    <div className="root">
      <img src={logo} className="logo" alt="logo" />
      <CodeBlock>
        {gist}
      </CodeBlock>
    </div>
  );
}

export default App;
