
const { exec } = require("child_process");
fs = require('fs');

fs.writeFile('test.tex', 
`
\\documentclass[a4paper, 11pt]{article}
\\title{Latex generation }
\\author{Ken Wanjohi}
\\date{21/02/2022}

\\begin{document}
    \\maketitle
        \\section{Latex generation in node.js}
        This latex document was generated in node.js using  childprocess's exec() function.
\\end{document}
`, 

function (err) {
    if (err) 
        return console.log(err);

    exec("pdflatex test.tex", (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        } else if(stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
});
