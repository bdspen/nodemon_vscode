# Using nodemon in Visual Studio Code Debugger
<img src="https://camo.githubusercontent.com/fd1ea21338ceeef34920e44e97d099f3c47a78c3/687474703a2f2f6e6f64656d6f6e2e696f2f6e6f64656d6f6e2e737667" width="150" style="display: inline">
<img src="https://pbs.twimg.com/profile_images/676630166190166017/UYxw-HcD_400x400.png" width="150" style="display: inline">

#### In this tutorial I will explain how to attach the Visual Studio Code debugger to an app launched by [Nodemon.](https://github.com/remy/nodemon)

## Setting Up VS Code Debugger
To Set up the VS Code debugger, first bring up the debug view by clicking the debug icon in the sidebar.

<img src="https://code.visualstudio.com/images/debugging_debugicon.png">

Once you have the debug view open, click the settings gear. This will open a popup that allows you to select your enviornment, in this case, click Node.js.

<img src="2.png" height="400" style="display: inline">

VS Code will now  create a configuration file for you, titled launch.json. It should look something like this:

<img src="4.png" height="800">

There will be two `"configurations"`, Which configuration is available to us depends on which one we request VS Code to use. `"Launch"` will launch the current project 
in debug mode, while `"Attach"` will allow the VS Code debugger to attach itself to an app that is running elsewhere on your system, for instance, our app launched by nodemon.

_To see more about the launch.json file and how to configure it, consult the _ [Visual Studio Code documentation](https://code.visualstudio.com/Docs/editor/debugging)

In order for us to run nodemon with VS Code, we have to set the attribute `"restart"` to `true`. This allows the VS Code debugger to re-attach to our node.js application after it is 
terminated by nodemon. this is useful to us because nodemon will restart the app on every save we make.

 _From VS Code Docs:_
> The restart attribute controls whether the Node.js debugger automatically restarts after the debug session has ended. This feature is useful if you use nodemon to restart Node.js on file changes. Setting the launch configuration attribute restart to true makes node-debug automatically try to re-attach to Node.js after Node.js has terminated.

Once your launch.json file is setup we need to change the request we are making to the VS Code debugger. Since we will be running our app with nodemon on the command line and attaching the VS Code debugger,
we want to change the request to attach. To do this click on the menu item in the debugger view and change . <img src="launch.png" height="50%"style="display: inline"> to <img src="attach.png" height="50%"style="display: inline">.