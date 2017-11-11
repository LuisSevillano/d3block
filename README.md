# d3block
Basic files for a block for [bl.ocks.org](https://bl.ocks.org/).

This module lets you create the block structure from the command line.

### Usage

Install:   

    npm install -g d3block   
    
Go to the folder where you want to create your block and write on the terminal:

    d3block
    
This will create a basic `index.html` and a `.block` file, which is the one [bl.ocks.org](https://bl.ocks.org/) uses to customize your block as the type of license, frame border or its height.

### Options
d3block will give you a plane `html` file with `d3` as dependency by default.   
You can pass arguments to it like TopoJSON or jQuery to be included in the `index.html`.

    d3block topojson jquery
    
    
